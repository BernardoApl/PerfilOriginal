(() => {
  const translations = {
    "pt-BR": {
      metaTitle: "Bernardo Lopes - Software que Escala",
      metaDescription: "Design robusto. Desenvolvimento de alto desempenho. Sistemas que crescem com você. Backend em Java/Spring.",
      metaOgDescription: "Design robusto. Desenvolvimento de alto desempenho. Sistemas que crescem com você.",
      skipLink: "Pular para o conteúdo",
      loading: "Carregando portfólio...",
      navHome: "Início",
      navAbout: "Sobre",
      navSkills: "Currículo",
      navProjects: "Projetos",
      navContact: "Contato",
      heroMiniAbout: "Sobre",
      heroMiniContact: "Contato",
      heroSuper: "Desenvolvimento. Projeto. Entrega.",
      heroSubtitle: "Eu sou",
      heroTagline: "Software que funciona. Design de APIs que vendem. Arquitetura que escala. Seu código, vitorioso.",
      heroCTAProjects: "Ver Resultados",
      heroCTAContact: "Iniciar Projeto",
      heroHighlight: "Destaque {n}",
      railText: "Desenvolvimento Robusto // Projeto Escalável",
      aboutTitle: "Sobre",
      aboutP1: "Desenvolvimento de software que funciona de verdade. Projeto de APIs precisas. Design que cresce. Eu construo sistemas que vencem.",
      aboutP2: "Java, Spring, React, TypeScript. Aqui não tem tecnologia por moda. Tem resultado.",
      techTitle: "Stack de Projeto",
      techIntro: "Ferramentas que entregam resultado:",
      curriculumTitle: "Experiência Comprovada",
      curriculumIntro: "Meu histórico de projetos, em LaTeX. Download em PDF ou código-fonte.",
      cvButtonPDF: "Baixar PDF",
      cvButtonCode: "Ver código LaTeX",
      cvOpenNewTab: "Abrir CV em nova guia",
      cvPreviewHint: "A visualização completa permite conferir o layout final antes de baixar.",
      cvFileStatusLoading: "Carregando visualização...",
      cvFileStatusReady: "Pronto para visualizar.",
      cvFileStatusError: "Não foi possível carregar o arquivo.",
      projectsTitle: "Projetos em Produção",
      projectsIntro: "Desenvolvimento real. Projeto sólido. Código que rende.",
      projectsLoading: "Carregando projetos do GitHub...",
      projectsError: "Não foi possível carregar os projetos agora. Tente novamente mais tarde.",
      projectsEmpty: "Nenhum projeto público encontrado no momento.",
      loadMore: "Mostrar mais projetos",
      projectLink: "Abrir no GitHub",
      projectHomepage: "Ver página",
      projectUpdated: "Atualizado",
      projectNoDescription: "Este repositório ainda não possui descrição.",
      contactTitle: "Vamos Trabalhar",
      availability: "Aberto para novos desafios agora",
      nameLabel: "Nome *",
      emailLabel: "Email *",
      subjectLabel: "Assunto *",
      messageLabel: "Mensagem *",
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "seu@email.com",
      subjectPlaceholder: "Sobre o que você gostaria de falar?",
      messagePlaceholder: "Conte-me mais sobre seu projeto...",
      sendButton: "Enviar",
      sending: "Enviando...",
      feedbackSuccess: "Recebido! Retorno em 24h.",
      feedbackError: "Não foi possível enviar agora. Tente novamente.",
      validationName: "Informe seu nome.",
      validationEmail: "Informe um email válido.",
      validationSubject: "Informe o assunto.",
      validationMessage: "Escreva uma mensagem.",
      backToTop: "Voltar ao topo",
      footerText: "© 2025 Bernardo Lopes. Todos os direitos reservados."
    },
    "en-US": {
      metaTitle: "Bernardo Lopes - Software That Scales",
      metaDescription: "Robust design. High-performance development. Systems that grow. Backend in Java/Spring.",
      metaOgDescription: "Robust design. High-performance development. Systems that grow with you.",
      skipLink: "Skip to content",
      loading: "Loading portfolio...",
      navHome: "Home",
      navAbout: "About",
      navSkills: "Résumé",
      navProjects: "Projects",
      navContact: "Contact",
      heroMiniAbout: "About",
      heroMiniContact: "Contact",
      heroSuper: "Development. Design. Delivery.",
      heroSubtitle: "I'm",
      heroTagline: "Software that wins. API design that scales. Backend that performs. Results-driven code.",
      heroCTAProjects: "See Results",
      heroCTAContact: "Start Project",
      heroHighlight: "Highlight {n}",
      railText: "Robust Development // Scalable Design",
      aboutP1: "Software development that actually works. Precise API design. Scalable architecture. I build systems that win.",
      aboutP2: "Java, Spring, React, TypeScript. No tech for ego. Only results.",
      techTitle: "Project Stack",
      techIntro: "Tools that deliver results:",
      curriculumTitle: "Track Record",
      curriculumIntro: "My project history in LaTeX. Download PDF or source code.",
      cvButtonPDF: "Download PDF",
      cvButtonCode: "View LaTeX code",
      cvOpenNewTab: "Open résumé in new tab",
      cvPreviewHint: "Preview lets you validate the final layout before downloading.",
      cvFileStatusLoading: "Loading preview...",
      cvFileStatusReady: "Ready to view.",
      cvFileStatusError: "Could not load the file.",
      projectsTitle: "Live Projects",
      projectsIntro: "Real development. Solid design. Code that performs.",
      projectsLoading: "Loading GitHub projects...",
      projectsError: "Could not load projects now. Try again later.",
      projectsEmpty: "No public projects found at the moment.",
      loadMore: "Show more projects",
      projectLink: "Open on GitHub",
      projectHomepage: "View page",
      projectUpdated: "Updated",
      projectNoDescription: "This repository has no description yet.",
      contactTitle: "Let's Build",
      availability: "Open for challenges now",
      nameLabel: "Name *",
      emailLabel: "Email *",
      subjectLabel: "Subject *",
      messageLabel: "Message *",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "What would you like to talk about?",
      messagePlaceholder: "Tell me more about your project...",
      sendButton: "Send",
      sending: "Sending...",
      feedbackSuccess: "Received! I'll reply in 24h.",
      feedbackError: "Couldn't send now. Please try again.",
      validationName: "Please enter your name.",
      validationEmail: "Please enter a valid email.",
      validationSubject: "Please add a subject.",
      validationMessage: "Please write a message.",
      backToTop: "Back to top",
      footerText: "© 2025 Bernardo Lopes. All rights reserved."
    }
  };

  const typedStrings = {
    "pt-BR": [
      "Desenvolvimento que Vende",
      "Projeto de APIs",
      "Arquitetura Escalável",
      "Backend em Java/Spring",
      "Código que Rende"
    ],
    "en-US": [
      "Development That Wins",
      "API Design",
      "Scalable Architecture",
      "Java/Spring Backend",
      "Code That Performs"
    ]
  };

  const CV_FILES = {
    "pt-BR": "CV_main_PT-BR.pdf",
    "en-US": "CV_main_EN-US.pdf"
  };

  const LANG_KEY = "portfolioLang";
  const GH_ENDPOINT = "https://api.github.com/users/BernardoApl/repos?sort=updated&per_page=100";
  const GH_CACHE_KEY = "gh_projects_cache";
  const GH_CACHE_TTL = 3600000; // 1 hora em ms
  const FORM_SUBMIT_TIMEOUT = 2000; // 2 segundos entre submissions

  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => Array.from(document.querySelectorAll(selector));

  let currentLanguage = normalizeLanguage(localStorage.getItem(LANG_KEY) || document.documentElement.lang || "pt-BR");
  let typedInstance = null;
  let projects = [];
  let projectsState = "loading";
  let currentPage = 1;
  const perPage = 6;
  let lastFormSubmitTime = 0;

  function normalizeLanguage(lang) {
    if (!lang) return "pt-BR";
    const lower = lang.toLowerCase();
    if (lower.startsWith("en")) return "en-US";
    return "pt-BR";
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  function t(key, vars = {}) {
    const dict = translations[currentLanguage] || translations["pt-BR"];
    let str = dict[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, v);
    });
    return str;
  }

  function setMeta(name, content) {
    const el = qs(`meta[name="${name}"]`);
    if (el) el.setAttribute("content", content);
  }

  function setMetaProperty(property, content) {
    const el = qs(`meta[property="${property}"]`);
    if (el) el.setAttribute("content", content);
  }

  function setText(selector, key) {
    const el = typeof selector === "string" ? qs(selector) : selector;
    if (el) el.textContent = t(key);
  }

  function setPlaceholder(selector, key) {
    const el = qs(selector);
    if (el) el.setAttribute("placeholder", t(key));
  }

  function updateHeroDots() {
    qsa(".hero-dots .dot").forEach((dot, index) => {
      dot.setAttribute("aria-label", t("heroHighlight", { n: index + 1 }));
    });
  }

  function applyTranslations() {
    document.documentElement.lang = currentLanguage.toLowerCase();
    localStorage.setItem(LANG_KEY, currentLanguage);

    document.title = t("metaTitle");
    setMeta("description", t("metaDescription"));
    setMetaProperty("og:description", t("metaOgDescription"));
    setMetaProperty("og:title", t("metaTitle"));
    setMeta("twitter:title", t("metaTitle"));
    setMeta("twitter:description", t("metaDescription"));

    setText(".skip-link", "skipLink");
    setText("#loading-screen p", "loading");

    const navKeys = ["navHome", "navAbout", "navSkills", "navProjects", "navContact"];
    qsa(".nav-items a").forEach((link, index) => {
      if (navKeys[index]) link.textContent = t(navKeys[index]);
    });

    setText('.hero-mini-nav a[href="#about"]', "heroMiniAbout");
    setText('.hero-mini-nav a[href="#contact"]', "heroMiniContact");
    setText(".rail-text", "railText");
    setText(".super-title", "heroSuper");
    setText(".hero-subtitle", "heroSubtitle");
    setText(".hero-tagline", "heroTagline");
    setText(".hero-ctas .primary-btn", "heroCTAProjects");
    setText(".hero-ctas .outline-btn", "heroCTAContact");
    const heroRole = qs("#hero-roles");
    if (heroRole) heroRole.textContent = typedStrings[currentLanguage]?.[0] || "";
    updateHeroDots();

    setText("#about .section-title", "aboutTitle");
    const aboutParas = qsa("#about .about-text p");
    if (aboutParas[0]) aboutParas[0].textContent = t("aboutP1");
    if (aboutParas[1]) aboutParas[1].textContent = t("aboutP2");
    setText("#about .tech-title", "techTitle");
    setText("#about .tech-intro", "techIntro");

    setText("#skills .section-title", "curriculumTitle");
    setText("#skills .section-intro", "curriculumIntro");
    setText("#download-cv-pdf span", "cvButtonPDF");
    setText("#cv-github span", "cvButtonCode");
    setText("#open-cv-pdf span", "cvOpenNewTab");
    setText("#pdf-feedback", "cvPreviewHint");
    setText("#pdf-status", "cvFileStatusLoading");
    const frame = qs("#cv-pdf-frame");
    if (frame) frame.setAttribute("title", t("cvOpenNewTab"));

    setText("#projects .section-title", "projectsTitle");
    setText("#projects .section-intro", "projectsIntro");
    const placeholder = qs("#projects-placeholder");
    if (placeholder && !projects.length) {
      const text =
        projectsState === "error"
          ? t("projectsError")
          : projectsState === "loading"
          ? t("projectsLoading")
          : t("projectsEmpty");
      placeholder.textContent = text;
    }
    setText("#load-more-projects span", "loadMore");

    setText("#contact .section-title", "contactTitle");
    setText(".availability-status span", "availability");
    setText('label[for="name"]', "nameLabel");
    setPlaceholder("#name", "namePlaceholder");
    setText('label[for="email"]', "emailLabel");
    setPlaceholder("#email", "emailPlaceholder");
    setText('label[for="subject"]', "subjectLabel");
    setPlaceholder("#subject", "subjectPlaceholder");
    setText('label[for="message"]', "messageLabel");
    setPlaceholder("#message", "messagePlaceholder");
    setText('#contact-form button span', "sendButton");

    const backToTop = qs("#back-to-top");
    if (backToTop) {
      backToTop.title = t("backToTop");
      backToTop.setAttribute("aria-label", t("backToTop"));
    }

    setText("footer p", "footerText");
  }

  function updateTyped() {
    if (typeof Typed === "undefined") return;
    if (typedInstance) typedInstance.destroy();
    typedInstance = new Typed("#hero-roles", {
      strings: typedStrings[currentLanguage] || typedStrings["pt-BR"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1100,
      loop: true,
      smartBackspace: true,
      cursorChar: "_"
    });
  }

  function formatDate(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat(currentLanguage, {
      month: "short",
      year: "numeric"
    }).format(new Date(date));
  }

  function createProjectCard(repo) {
    const topics = Array.isArray(repo.topics) && repo.topics.length ? repo.topics : [];
    if (!topics.length && repo.language) topics.push(repo.language);
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-header">
        <span>${repo.language || "GitHub"}</span>
        <span>${t("projectUpdated")}: ${formatDate(repo.pushed_at || repo.updated_at || repo.created_at)}</span>
      </div>
      <h3>${repo.name}</h3>
      <p>${repo.description || t("projectNoDescription")}</p>
      <ul class="project-stack">
        ${topics.map((topic) => `<li>${topic}</li>`).join("")}
      </ul>
      <div class="project-links">
        <a class="primary" href="${repo.html_url}" target="_blank" rel="noopener">${t("projectLink")}</a>
        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener">${t("projectHomepage")}</a>` : ""}
      </div>
    `;
    return card;
  }

  function renderProjects() {
    const container = qs("#projects-container");
    const placeholder = qs("#projects-placeholder");
    const loadMoreBtn = qs("#load-more-projects");
    if (!container) return;

    container.innerHTML = "";

    if (projectsState === "error") {
      if (placeholder) {
        placeholder.textContent = t("projectsError");
        placeholder.classList.remove("is-hidden");
        container.appendChild(placeholder);
      }
      if (loadMoreBtn) loadMoreBtn.classList.add("is-hidden");
      return;
    }

    if (!projects.length) {
      if (placeholder) {
        const text =
          projectsState === "loading"
            ? t("projectsLoading")
            : t("projectsEmpty");
        placeholder.textContent = text;
        placeholder.classList.remove("is-hidden");
        container.appendChild(placeholder);
      }
      if (loadMoreBtn) loadMoreBtn.classList.add("is-hidden");
      return;
    }

    if (placeholder) placeholder.classList.add("is-hidden");

    const visible = projects.slice(0, currentPage * perPage);
    visible.forEach((repo) => container.appendChild(createProjectCard(repo)));

    if (loadMoreBtn) {
      loadMoreBtn.classList.toggle("is-hidden", visible.length >= projects.length);
      setText("#load-more-projects span", "loadMore");
    }
  }

  async function fetchProjects() {
    const placeholder = qs("#projects-placeholder");
    if (placeholder) placeholder.textContent = t("projectsLoading");
    try {
      projectsState = "loading";
      
      // Tentar usar cache primeiro
      const cached = getCachedProjects();
      if (cached) {
        projects = cached;
        projectsState = "ready";
        renderProjects();
        return;
      }

      const response = await fetch(GH_ENDPOINT);
      if (!response.ok) throw new Error("GitHub request failed");
      const data = await response.json();
      projects = Array.isArray(data) ? data : [];
      projectsState = "ready";
      
      // Cachear resultados
      setCachedProjects(projects);
      renderProjects();
    } catch (error) {
      projectsState = "error";
      if (placeholder) {
        placeholder.textContent = t("projectsError");
        placeholder.classList.remove("is-hidden");
      }
      const loadMoreBtn = qs("#load-more-projects");
      if (loadMoreBtn) loadMoreBtn.classList.add("is-hidden");
      console.error("Erro ao carregar projetos:", error);
      renderProjects();
    }
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function getCachedProjects() {
    try {
      const cached = localStorage.getItem(GH_CACHE_KEY);
      if (!cached) return null;
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp > GH_CACHE_TTL) {
        localStorage.removeItem(GH_CACHE_KEY);
        return null;
      }
      return data;
    } catch (e) {
      return null;
    }
  }

  function setCachedProjects(data) {
    try {
      localStorage.setItem(GH_CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.warn("Could not cache projects");
    }
  }

  function initContactForm() {
    const form = qs("#contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const now = Date.now();
      
      // Rate limiting - evitar spam
      if (now - lastFormSubmitTime < FORM_SUBMIT_TIMEOUT) {
        return;
      }
      lastFormSubmitTime = now;

      const name = qs("#name")?.value.trim() || "";
      const email = qs("#email")?.value.trim() || "";
      const subject = qs("#subject")?.value.trim() || "";
      const message = qs("#message")?.value.trim() || "";
      const feedback = qs("#contact-feedback");
      const submitBtn = form.querySelector("button[type='submit']");
      const submitText = submitBtn?.querySelector("span");

      if (!name) {
        if (feedback) feedback.textContent = t("validationName");
        return;
      }
      if (!validateEmail(email)) {
        if (feedback) feedback.textContent = t("validationEmail");
        return;
      }
      if (!subject) {
        if (feedback) feedback.textContent = t("validationSubject");
        return;
      }
      if (!message) {
        if (feedback) feedback.textContent = t("validationMessage");
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (submitText) submitText.textContent = t("sending");
      if (feedback) feedback.textContent = "";

      setTimeout(() => {
        if (submitText) submitText.textContent = t("sendButton");
        if (submitBtn) submitBtn.disabled = false;
        if (feedback) feedback.textContent = t("feedbackSuccess");
        form.reset();
      }, 1000);
    });
  }

  function loadCv(lang) {
    const pdfStatus = qs("#pdf-status");
    const pdfFeedback = qs("#pdf-feedback");
    const frame = qs("#cv-pdf-frame");
    const downloadBtn = qs("#download-cv-pdf");
    const openBtn = qs("#open-cv-pdf");
    const fileName = CV_FILES[lang] || CV_FILES["pt-BR"];

    if (pdfStatus) pdfStatus.textContent = t("cvFileStatusLoading");
    if (pdfFeedback) pdfFeedback.textContent = t("cvFileStatusLoading");
    if (downloadBtn) {
      downloadBtn.href = fileName;
      downloadBtn.setAttribute("download", fileName);
    }
    if (openBtn) openBtn.href = fileName;
    const nameSpan = qs(".file-name");
    if (nameSpan) {
      nameSpan.innerHTML = `<i class="fas fa-file-pdf" aria-hidden="true"></i> ${fileName}`;
    }
    if (frame) frame.removeAttribute("src");

    fetch(fileName, { method: "HEAD" })
      .then((resp) => {
        if (!resp.ok) throw new Error("CV not available");
        if (frame) frame.src = fileName;
        if (pdfStatus) pdfStatus.textContent = t("cvFileStatusReady");
        if (pdfFeedback) pdfFeedback.textContent = t("cvPreviewHint");
        document.body.classList.add("cv-available");
      })
      .catch(() => {
        if (pdfStatus) pdfStatus.textContent = t("cvFileStatusError");
        if (pdfFeedback) pdfFeedback.textContent = t("cvFileStatusError");
        document.body.classList.remove("cv-available");
      });
  }

  function syncCvButtons() {
    qsa(".cv-lang-btn").forEach((btn) => {
      const btnLang = normalizeLanguage(btn.dataset.cvLang);
      btn.classList.toggle("active", btnLang === currentLanguage);
    });
  }

  function handleLanguageChange(lang) {
    currentLanguage = normalizeLanguage(lang);
    syncCvButtons();
    applyTranslations();
    updateTyped();
    renderProjects();
    loadCv(currentLanguage);
  }

  function initCvLanguageButtons() {
    qsa(".cv-lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        handleLanguageChange(btn.dataset.cvLang || "pt-BR");
      });
    });
  }

  function initThemeToggle() {
    const toggle = qs("#theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("theme-light");
      const icon = toggle.querySelector("i");
      if (icon) icon.classList.toggle("fa-sun");
      if (icon) icon.classList.toggle("fa-moon");
    });
  }

  function initMenuToggle() {
    const menuToggle = qs(".menu-toggle");
    const navItems = qs(".nav-items");
    if (!menuToggle || !navItems) return;
    menuToggle.addEventListener("click", () => {
      const isOpen = navItems.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", isOpen.toString());
    });
    qsa(".nav-items a").forEach((link) =>
      link.addEventListener("click", () => {
        navItems.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  function initHeroDots() {
    const dots = qsa(".hero-dots .dot");
    if (!dots.length) return;
    let index = 0;

    const setActive = (nextIndex) => {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[nextIndex].classList.add("active");
      dots[nextIndex].setAttribute("aria-selected", "true");
      dots.forEach((dot, i) => {
        if (i !== nextIndex) dot.setAttribute("aria-selected", "false");
      });
      index = nextIndex;
    };

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => setActive(dotIndex));
      // Acessibilidade por teclado
      dot.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          setActive((dotIndex + 1) % dots.length);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          setActive((dotIndex - 1 + dots.length) % dots.length);
        } else if (e.key === "Home") {
          e.preventDefault();
          setActive(0);
        } else if (e.key === "End") {
          e.preventDefault();
          setActive(dots.length - 1);
        }
      });
    });

    setInterval(() => {
      const next = (index + 1) % dots.length;
      setActive(next);
    }, 3500);
  }

  function initParallax() {
    const hero = qs(".hero-inner");
    if (!hero) return;
    const handleMove = throttle((event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 6;
      const y = (event.clientY / window.innerHeight - 0.5) * 6;
      hero.style.transform = `translate(${x}px, ${y}px)`;
    }, 16); // ~60fps
    window.addEventListener("pointermove", handleMove);
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = qs(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function initNavHighlight() {
    const sections = qsa("main section[id]");
    const navLinks = qsa(".nav-items a");
    const setActive = () => {
      const scrollPos = window.scrollY + 120;
      sections.forEach((section, idx) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach((link) => link.classList.remove("active"));
          if (navLinks[idx]) navLinks[idx].classList.add("active");
        }
      });
    };
    // Use throttle para performance em scroll
    const throttledSetActive = throttle(setActive, 100);
    window.addEventListener("scroll", throttledSetActive);
    setActive();
  }

  function initBackToTop() {
    const btn = qs("#back-to-top");
    if (!btn) return;
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });
  }

  function initLoadingScreen() {
    const loading = qs("#loading-screen");
    if (!loading) return;
    setTimeout(() => loading.classList.add("hidden"), 600);
  }

  function initRipple() {
    const targets = qsa(".btn, .nav-items a, .menu-toggle");
    targets.forEach((target) => {
      target.addEventListener("click", (event) => {
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        ripple.style.left = `${event.offsetX}px`;
        ripple.style.top = `${event.offsetY}px`;
        target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 400);
      });
    });
  }

  function initProjects() {
    const loadMoreBtn = qs("#load-more-projects");
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        currentPage += 1;
        renderProjects();
      });
    }
    fetchProjects();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initMenuToggle();
    initHeroDots();
    initParallax();
    initSmoothScroll();
    initNavHighlight();
    initBackToTop();
    initLoadingScreen();
    initRipple();
    initContactForm();
    initCvLanguageButtons();
    handleLanguageChange(currentLanguage);
    initProjects();
  });
})();
