(() => {
  const GH_ENDPOINT = "https://api.github.com/users/BernardoApl/repos?sort=updated&per_page=100";
  const PROJECTS_PER_PAGE = 3;
  const MAX_REPOS = 6;
  const THEME_KEY = "bernardoPortfolioTheme";

  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => Array.from(document.querySelectorAll(selector));

  let repos = [];
  let visiblePages = 1;

  function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.body.classList.toggle("theme-dark", nextTheme === "dark");
    localStorage.setItem(THEME_KEY, nextTheme);

    const icon = qs(".theme-toggle i");
    const toggle = qs(".theme-toggle");
    if (icon) {
      icon.classList.toggle("fa-sun", nextTheme === "light");
      icon.classList.toggle("fa-moon", nextTheme === "dark");
    }
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        nextTheme === "dark" ? "Alternar para modo claro" : "Alternar para modo escuro"
      );
    }
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));

    const toggle = qs(".theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("theme-dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  function initMenu() {
    const toggle = qs(".menu-toggle");
    const nav = qs("#nav-items");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(opened));
    });

    qsa("#nav-items a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initActiveNav() {
    const sections = qsa("main section[id]");
    const links = qsa(".nav-items a");

    const update = () => {
      const y = window.scrollY + 100;
      sections.forEach((section) => {
        const href = `#${section.id}`;
        const link = links.find((item) => item.getAttribute("href") === href);
        if (!link) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (y >= top && y < bottom) {
          links.forEach((item) => item.classList.remove("active"));
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function initCvSwitcher() {
    const buttons = qsa(".cv-lang-btn");
    const frame = qs("#cv-pdf-frame");
    const fileName = qs("#cv-file-name");
    const status = qs("#pdf-status");
    const download = qs("#download-cv-pdf");
    const open = qs("#open-cv-pdf");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const file = button.dataset.cvFile;
        if (!file) return;

        buttons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        if (frame) frame.src = file;
        if (fileName) fileName.textContent = file;
        if (status) status.textContent = "Pronto";
        if (download) {
          download.href = file;
          download.setAttribute("download", file);
        }
        if (open) open.href = file;
      });
    });
  }

  function repoDescription(repo) {
    if (repo.description) return repo.description;
    const fallback = {
      CarExpress: "Sistema de gerenciamento de veiculos com cadastro, consulta, atualizacao e remocao.",
      CV: "Curriculo profissional em LaTeX, com versoes em portugues e ingles.",
      BernardoApl: "README de perfil profissional no GitHub."
    };
    return fallback[repo.name] || "Repositorio publico para estudos, praticas e evolucao tecnica.";
  }

  function renderRepos() {
    const container = qs("#projects-container");
    const loadMore = qs("#load-more-projects");
    if (!container) return;

    container.innerHTML = "";

    if (!repos.length) {
      container.innerHTML = '<p class="empty-state" id="projects-placeholder">Nao foi possivel carregar os repositorios agora.</p>';
      if (loadMore) loadMore.classList.add("is-hidden");
      return;
    }

    const visible = repos.slice(0, visiblePages * PROJECTS_PER_PAGE);

    visible.forEach((repo) => {
      const updated = new Intl.DateTimeFormat("pt-BR", { month: "short", year: "numeric" }).format(new Date(repo.pushed_at || repo.updated_at));
      const card = document.createElement("article");
      card.className = "repo-card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repoDescription(repo)}</p>
        <div class="repo-meta">
          <span>${repo.language || "GitHub"}</span>
          <span>Atualizado: ${updated}</span>
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener">Abrir repositorio</a>
      `;
      container.appendChild(card);
    });

    if (loadMore) {
      loadMore.classList.toggle("is-hidden", visible.length >= repos.length);
    }
  }

  async function loadRepos() {
    try {
      const response = await fetch(GH_ENDPOINT);
      if (!response.ok) throw new Error("GitHub request failed");
      const data = await response.json();
      repos = Array.isArray(data)
        ? data
            .filter((repo) => !repo.fork)
            .sort((a, b) => new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at))
            .slice(0, MAX_REPOS)
        : [];
      renderRepos();
    } catch (error) {
      console.warn("Erro ao carregar repositorios:", error);
      repos = [];
      renderRepos();
    }
  }

  function initLoadMore() {
    const loadMore = qs("#load-more-projects");
    if (!loadMore) return;

    loadMore.addEventListener("click", () => {
      visiblePages += 1;
      renderRepos();
    });
  }

  function initContactForm() {
    const form = qs("#contact-form");
    const feedback = qs("#contact-feedback");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = qs("#name")?.value.trim();
      const email = qs("#email")?.value.trim();
      const message = qs("#message")?.value.trim();

      if (!name || !email || !message) {
        if (feedback) feedback.textContent = "Preencha todos os campos antes de enviar.";
        return;
      }

      const subject = encodeURIComponent("Contato pelo portfolio");
      const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:b.lopes.software@gmail.com?subject=${subject}&body=${body}`;

      if (feedback) feedback.textContent = "Abrindo seu aplicativo de email...";
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenu();
    initActiveNav();
    initCvSwitcher();
    initLoadMore();
    initContactForm();
    loadRepos();
  });
})();
