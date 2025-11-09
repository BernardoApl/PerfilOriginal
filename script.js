// Configuration
const CONFIG = {
  GITHUB_USERNAME: "BernardoApl",
  EMAILJS_PUBLIC_KEY: "RQ1dSXDL1URKXCGsG",
  EMAILJS_SERVICE_ID: "service_mq054m8",
  EMAILJS_TEMPLATE_ID: "template_lf5n7os",
  TYPED_STRINGS: [
    "Desenvolvimento Java",
    "Engenharia de Software",
    "Banco de Dados MySQL",
    "AutomaÃ§Ã£o com n8n",
    "SoluÃ§Ãµes Full-Stack",
  ],
}

// Curated projects to feature first
const CURATED_PROJECTS = [
  {
    title: 'Folha de Pagamento',
    pitch: 'API com autenticaÃ§Ã£o e perfis dev/prod.',
    techs: ['Java', 'Spring Boot', 'PostgreSQL', 'H2', 'JWT'],
    codeUrl: 'https://github.com/BernardoApl',
    demoUrl: ''
  },
  {
    title: 'CarExpress (C++)',
    pitch: 'CRUD + backup/restauraÃ§Ã£o .dat.',
    techs: ['C++'],
    codeUrl: 'https://github.com/BernardoApl',
    demoUrl: ''
  },
  {
    title: 'Certificados IA (POC)',
    pitch: 'Landing com 30 perguntas e regra â‰¥70%.',
    techs: ['HTML', 'JavaScript'],
    codeUrl: 'https://github.com/BernardoApl',
    demoUrl: ''
  }
]

// State management
const state = {
  projectsLoaded: false,
  skillsAnimated: false,
  statsAnimated: false,
  currentFilter: "all",
}

// Declare Typed and emailjs variables
let Typed
let emailjs

class PortfolioApp {
  constructor() {
    this.init()
  }

  async init() {
    // Show loading screen
    this.showLoadingScreen()

    // Initialize components
    await this.initializeComponents()

    // Hide loading screen
    this.hideLoadingScreen()

    // Setup event listeners
    this.setupEventListeners()

    // Initialize animations
    this.initializeAnimations()
  }

  showLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.style.display = "flex"
    }
  }

  hideLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add("hidden")
        setTimeout(() => {
          loadingScreen.style.display = "none"
        }, 500)
      }, 1000)
    }
  }

  async initializeComponents() {
    // Initialize Typed.js
    this.initTypedJS()

    // Initialize EmailJS
    this.initEmailJS()

    // Create particles
    this.createParticles()

    // Load GitHub projects
    await this.loadGitHubProjects()

    // Inject modern hero layout
    this.injectHeroLayout()
  }

  initTypedJS() {
    if (typeof Typed !== "undefined") {
      new Typed("#typed", {
        strings: CONFIG.TYPED_STRINGS,
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      })
    }
  }

  initEmailJS() {
    if (typeof emailjs !== "undefined") {
      emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY)
    }
  }

  setupEventListeners() {
    // Mobile menu toggle
    this.setupMobileMenu()

    // Smooth scrolling
    this.setupSmoothScrolling()

    // Scroll events
    this.setupScrollEvents()

    // Contact form
    this.setupContactForm()

    // Project filters
    this.setupProjectFilters()

    // Load more projects
    this.setupLoadMore()

    // Back to top button
    this.setupBackToTop()

    // Theme toggle
    this.setupThemeToggle()

    // Window resize
    window.addEventListener("resize", () => {
      this.createParticles()
    })
  }

  setupThemeToggle() {
    const btn = document.getElementById('theme-toggle')
    const root = document.documentElement
    const applyTheme = (t) => {
      if (t === 'light') {
        root.classList.add('theme-light')
      } else {
        root.classList.remove('theme-light')
      }
    }
    const saved = localStorage.getItem('theme') || 'dark'
    applyTheme(saved)
    if (btn) {
      btn.innerHTML = saved === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
      btn.addEventListener('click', () => {
        const current = root.classList.contains('theme-light') ? 'light' : 'dark'
        const next = current === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', next)
        applyTheme(next)
        btn.innerHTML = next === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
      })
    }
  }

  injectHeroLayout() {
    const hero = document.querySelector('.hero-content')
    if (!hero) return
    const block = `
      <aside class="hero-rail">
        <div class="rail-inner">
          <div class="rail-icons">
            <a href="https://github.com/BernardoApl" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/bernardo-lopes-3500b92b6/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          </div>
          <div class="rail-text">engenharia • backend</div>
        </div>
      </aside>
      <div class="hero-grid">
        <div class="hero-left">
          <div class="super-title">Engenharia de Software</div>
          <h1 class="hero-title">Bernardo Augusto</h1>
          <p class="hero-sub">Backend (Java/Spring), APIs e automaÃ§Ã£o. Transformo requisitos em software robusto.</p>
          <div class="cta-buttons">
            <a href="#projects" class="btn primary-btn"><i class="fas fa-eye"></i> Ver Projetos</a>
            <a href="assets/cv.pdf" class="btn secondary-btn cv-only" download><i class="fas fa-file-arrow-down"></i> Baixar CV</a>
          </div>
          <div class="hero-badges">
            <span class="chip"><i class="fab fa-java"></i> Java</span>
            <span class="chip"><i class="fas fa-leaf"></i> Spring</span>
            <span class="chip"><i class="fas fa-database"></i> PostgreSQL</span>
            <span class="chip"><i class="fab fa-docker"></i> Docker</span>
            <span class="chip"><i class="fab fa-git-alt"></i> Git</span>
          </div>
          <p class="hero-tagline">Construo produtos úteis com foco em clareza, velocidade e experiência.</p>
        </div>
        <div class="hero-right">
          <div class="hero-photo-wrap">
            <img class="hero-photo" src="Perfil.jpeg" alt="Foto de Bernardo" loading="lazy" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </div>`
    hero.insertAdjacentHTML('afterbegin', block)
    ;['.hero-badge', '.typed-text', '.hero-description'].forEach((sel) => {
      const el = hero.querySelector(sel)
      if (el) el.remove()
    })
    const oldH1 = hero.querySelector(':scope > h1')
    if (oldH1) oldH1.remove()
    const heroSection = hero.closest('.hero')
    if (heroSection) {
      if (!heroSection.querySelector('.hero-mini-nav')) {
        const mini = document.createElement('nav')
        mini.className = 'hero-mini-nav'
        mini.innerHTML = '<a href="#about">about</a><a href="#contact">contact</a>'
        heroSection.appendChild(mini)
      }
      if (!heroSection.querySelector('.hero-dots')) {
        const dots = document.createElement('div')
        dots.className = 'hero-dots'
        dots.innerHTML = '<span class="dot-label">Welcome</span><span class="dot active"></span>'
        heroSection.appendChild(dots)
      }
      if (!heroSection.querySelector('.hero-bg-photo')) {
        const bg = document.createElement('div')
        bg.className = 'hero-bg-photo'
        bg.style.backgroundImage = 'url(\'Perfil.jpeg\')'
        heroSection.appendChild(bg)
      }
    }  }

  setupMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle")
    const navItems = document.querySelector(".nav-items")

    if (menuToggle && navItems) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navItems.classList.toggle("active")
        const expanded = menuToggle.getAttribute("aria-expanded") === "true"
        menuToggle.setAttribute("aria-expanded", String(!expanded))
      })

      // Close menu when clicking on links
      navItems.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menuToggle.classList.remove("active")
          navItems.classList.remove("active")
        })
      })

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !navItems.contains(e.target)) {
          menuToggle.classList.remove("active")
          navItems.classList.remove("active")
        }
      })
    }
  }

  setupLoadMore() {
    const btn = document.getElementById('load-more-projects')
    const container = document.getElementById('projects-container')
    if (!btn || !container) return

    if (!state._reposPage) state._reposPage = 1

    btn.addEventListener('click', async () => {
      btn.disabled = true
      const original = btn.innerHTML
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...'
      try {
        const next = state._reposPage + 1
        const res = await fetch(`https://api.github.com/users/${CONFIG.GITHUB_USERNAME}/repos?sort=updated&per_page=12&page=${next}`)
        if (!res.ok) throw new Error('GitHub API error')
        const more = await res.json()
        if (!Array.isArray(more) || more.length === 0) {
          btn.innerHTML = 'Todos os projetos foram listados'
          btn.disabled = true
          return
        }
        const sorted = more.sort((a,b)=>(b.stargazers_count||0)-(a.stargazers_count||0))
        this.displayGitHubRepos(container, sorted, true)
        state._reposPage = next
      } catch (e) {
        console.error(e)
        this.showNotification('NÃ£o foi possÃ­vel carregar mais projetos agora.', 'error')
        btn.innerHTML = original
      } finally {
        if (!btn.disabled) btn.innerHTML = original
      }
    })
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()

        const targetId = anchor.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.offsetTop - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })

          // Update active nav link
          this.updateActiveNavLink(targetId)
        }
      })
    })

    // Handle scroll indicator
    const scrollIndicator = document.querySelector(".scroll-indicator")
    if (scrollIndicator) {
      scrollIndicator.addEventListener("click", () => {
        const aboutSection = document.querySelector("#about")
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" })
        }
      })
    }
  }

  setupScrollEvents() {
    let ticking = false

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll()
          ticking = false
        })
        ticking = true
      }
    })
  }

  handleScroll() {
    const scrollY = window.pageYOffset

    // Header background on scroll
    const header = document.querySelector("header")
    if (header) {
      if (scrollY > 100) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }

    // Animate skills when in viewport
    if (!state.skillsAnimated) {
      const skillsSection = document.querySelector("#skills")
      if (skillsSection && this.isInViewport(skillsSection)) {
        this.animateSkills()
        state.skillsAnimated = true
      }
    }

    // Animate stats when in viewport
    if (!state.statsAnimated) {
      const statsGrid = document.querySelector(".stats-grid")
      if (statsGrid && this.isInViewport(statsGrid)) {
        this.animateStats()
        state.statsAnimated = true
      }
    }

    // Update active nav link
    this.updateActiveNavOnScroll()

    // Show/hide back to top button
    this.toggleBackToTop()

    // Subtle parallax on hero photo (respect reduced motion)
    try {
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!reduceMotion) {
        const photo = document.querySelector('.hero-photo')
        if (photo) {
          const offset = Math.min(30, scrollY * 0.03)
          photo.style.transform = `translateY(${offset}px) scale(1.0)`
        }
      }
    } catch (_) {}
  }

  updateActiveNavLink(targetId) {
    document.querySelectorAll(".nav-items a").forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === targetId) {
        link.classList.add("active")
      }
    })
  }

  updateActiveNavOnScroll() {
    const sections = document.querySelectorAll("section[id]")
    const scrollPos = window.pageYOffset + 150

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        this.updateActiveNavLink(`#${sectionId}`)
      }
    })
  }

  animateSkills() {
    const skillBars = document.querySelectorAll(".skill-progress")

    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const progress = bar.dataset.progress
        bar.style.width = `${progress}%`
        bar.classList.add("fade-in")
      }, index * 200)
    })
  }

  animateStats() {
    const stats = document.querySelectorAll(".stat-number")

    stats.forEach((stat, index) => {
      setTimeout(() => {
        const target = Number.parseInt(stat.dataset.count)
        this.animateCounter(stat, 0, target, 2000)
      }, index * 300)
    })
  }

  animateCounter(element, start, end, duration) {
    const startTime = performance.now()

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const current = Math.floor(start + (end - start) * this.easeOutQuart(progress))
      element.textContent = current

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = end
      }
    }

    requestAnimationFrame(updateCounter)
  }

  easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4)
  }

  async loadGitHubProjects() {
    const projectsContainer = document.getElementById("projects-container")
    const userInfoContainer = document.getElementById("github-user-info")

    if (!projectsContainer || !userInfoContainer) return

    try {
      // First render curated projects
      this.displayCuratedProjects(projectsContainer)

      // Load user info and repositories in parallel
      const [userResponse, reposResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${CONFIG.GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${CONFIG.GITHUB_USERNAME}/repos?sort=updated&per_page=12&page=1`),
      ])

      if (!userResponse.ok || !reposResponse.ok) {
        throw new Error("Failed to fetch GitHub data")
      }

      const [userData, reposRaw] = await Promise.all([userResponse.json(), reposResponse.json()])
      const repos = reposRaw.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))

      // Display user info
      this.displayGitHubUserInfo(userInfoContainer, userData)

      // Display repositories (append after curated)
      this.displayGitHubRepos(projectsContainer, repos, true)

      state.projectsLoaded = true
    } catch (error) {
      console.error("Error loading GitHub projects:", error)
      if (!projectsContainer.querySelector('.project-card')) {
        this.displayError(projectsContainer, "Erro ao carregar projetos do GitHub. Tente novamente mais tarde.")
      }
    }
  }

  displayCuratedProjects(container) {
    const frag = document.createDocumentFragment()
    CURATED_PROJECTS.forEach((p) => {
      const card = document.createElement('div')
      card.className = 'project-card'
      card.innerHTML = `
        <div class="project-info">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.pitch}</p>
          <div class="project-tech">${p.techs.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
          <div class="project-links">
            <a class="project-link" href="${p.codeUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> CÃ³digo</a>
            ${p.demoUrl ? `<a class="project-link" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Demo</a>`: ''}
          </div>
        </div>`
      frag.appendChild(card)
    })
    container.innerHTML = ''
    container.appendChild(frag)
  }

  displayGitHubUserInfo(container, userData) {
    container.innerHTML = `
      <img src="${userData.avatar_url}" alt="${userData.name || userData.login}" loading="lazy">
      <div class="github-user-details">
        <h3>${userData.name || userData.login}</h3>
        <p>${userData.bio || "Desenvolvedor apaixonado por tecnologia"}</p>
        <div class="github-stats">
          <div class="github-stat">
            <i class="fas fa-code-branch"></i>
            <span>${userData.public_repos} repositÃ³rios</span>
          </div>
          <div class="github-stat">
            <i class="fas fa-users"></i>
            <span>${userData.followers} seguidores</span>
          </div>
          <div class="github-stat">
            <i class="fas fa-map-marker-alt"></i>
            <span>${userData.location || "Brasil"}</span>
          </div>
        </div>
      </div>
    `
  }

  displayGitHubRepos(container, repos, append = false) {
    if (!append) container.innerHTML = ""
    repos.forEach((repo, index) => {
      const projectCard = this.createProjectCard(repo)
      projectCard.style.animationDelay = `${index * 0.05}s`
      projectCard.classList.add("fade-in")
      container.appendChild(projectCard)
    })
  }

  createProjectCard(repo) {
    const card = document.createElement("div")
    card.className = "project-card"
    card.dataset.language = (repo.language || "other").toLowerCase()

    const language = repo.language || "N/A"
    const topics = repo.topics || []

    card.innerHTML = `
      <div class="project-info">
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descriÃ§Ã£o disponÃ­vel."}</p>
        <div class="project-tags">
          <span>${language}</span>
          ${repo.stargazers_count > 0 ? `<span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>` : ""}
          ${repo.forks_count > 0 ? `<span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>` : ""}
          ${topics
            .slice(0, 2)
            .map((topic) => `<span>${topic}</span>`)
            .join("")}
        </div>
        <div class="project-links">
          ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" title="Ver projeto"><i class="fas fa-external-link-alt"></i></a>` : ""}
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" title="Ver cÃ³digo"><i class="fab fa-github"></i></a>
        </div>
      </div>
    `

    return card
  }

  setupProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        // Filter projects
        this.filterProjects(filter)
        state.currentFilter = filter
      })
    })
  }

  filterProjects(filter) {
    const projectCards = document.querySelectorAll(".project-card")

    projectCards.forEach((card) => {
      const language = card.dataset.language
      const shouldShow =
        filter === "all" ||
        language === filter ||
        (filter === "web" && ["html", "css", "javascript"].includes(language))

      if (shouldShow) {
        card.style.display = "block"
        card.classList.add("fade-in")
      } else {
        card.style.display = "none"
        card.classList.remove("fade-in")
      }
    })
  }

  setupContactForm() {
    const contactForm = document.getElementById("contact-form")

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        this.handleFormSubmission(contactForm)
      })

      // Real-time validation
      const inputs = contactForm.querySelectorAll("input, textarea")
      inputs.forEach((input) => {
        input.addEventListener("blur", () => this.validateField(input))
        input.addEventListener("input", () => this.clearFieldError(input))
      })
    }
  }

  validateField(field) {
    const value = field.value.trim()
    let isValid = true
    let errorMessage = ""

    if (field.hasAttribute("required") && !value) {
      isValid = false
      errorMessage = "Este campo Ã© obrigatÃ³rio"
    } else if (field.type === "email" && value && !this.isValidEmail(value)) {
      isValid = false
      errorMessage = "Por favor, insira um email vÃ¡lido"
    }

    this.showFieldError(field, isValid, errorMessage)
    return isValid
  }

  showFieldError(field, isValid, message) {
    const existingError = field.parentNode.querySelector(".field-error")

    if (existingError) {
      existingError.remove()
    }

    if (!isValid) {
      field.style.borderColor = "var(--error-color)"
      const errorElement = document.createElement("div")
      errorElement.className = "field-error"
      errorElement.textContent = message
      errorElement.style.color = "var(--error-color)"
      errorElement.style.fontSize = "0.8rem"
      errorElement.style.marginTop = "0.25rem"
      field.parentNode.appendChild(errorElement)
    } else {
      field.style.borderColor = "var(--success-color)"
    }
  }

  clearFieldError(field) {
    const existingError = field.parentNode.querySelector(".field-error")
    if (existingError) {
      existingError.remove()
    }
    field.style.borderColor = "rgba(99, 102, 241, 0.2)"
  }

  async handleFormSubmission(form) {
    const data = {
      name: form.querySelector('#name')?.value.trim() || '',
      email: form.querySelector('#email')?.value.trim() || '',
      subject: form.querySelector('#subject')?.value.trim() || '',
      message: form.querySelector('#message')?.value.trim() || ''
    }

    // Validate all fields
    const inputs = form.querySelectorAll("input, textarea")
    let isFormValid = true

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isFormValid = false
      }
    })

    if (!isFormValid) {
      this.showNotification("Por favor, corrija os erros no formulÃ¡rio", "error")
      return
    }

    const submitBtn = form.querySelector('button[type="submit"]')
    const originalContent = submitBtn.innerHTML

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
    submitBtn.disabled = true

    try {
      await this.sendEmail(data)
      this.showNotification("Mensagem enviada com sucesso! Entrarei em contato em breve.", "success")
      form.reset()

      // Clear field styles
      inputs.forEach((input) => this.clearFieldError(input))
    } catch (error) {
      console.error("Error sending email:", error)
      this.showNotification("Erro ao enviar mensagem. Tente novamente mais tarde.", "error")
    } finally {
      submitBtn.innerHTML = originalContent
      submitBtn.disabled = false
    }
  }

  async sendEmail(data) {
    if (typeof emailjs === "undefined") {
      throw new Error("EmailJS not loaded")
    }

    const templateParams = {
      to_name: "Bernardo",
      to_email: "b.lopes.software@gmail.com",
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    }

    return emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, templateParams)
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
        <span>${message}</span>
      </div>
    `

    notification.setAttribute('role', 'status')
    notification.setAttribute('aria-live', 'polite')

    // Add styles
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      background:
        type === "success" ? "var(--success-color)" : type === "error" ? "var(--error-color)" : "var(--primary-color)",
      color: "white",
      padding: "var(--spacing-md)",
      borderRadius: "var(--border-radius)",
      boxShadow: "var(--shadow-lg)",
      zIndex: "10000",
      transform: "translateX(100%)",
      transition: "transform 0.3s ease",
      maxWidth: "400px",
    })

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Remove after delay
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 300)
    }, 5000)
  }

  setupBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top")

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  }

  toggleBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top")

    if (backToTopBtn) {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("visible")
      } else {
        backToTopBtn.classList.remove("visible")
      }
    }
  }

  createParticles() {
    const containers = document.querySelectorAll(".particles-container")

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    containers.forEach((container) => {
      if (!container) return

      if (reduceMotion) {
        container.innerHTML = ""
        return
      }

      container.innerHTML = ""

      const numParticles = Math.max(5, Math.floor(window.innerWidth / 100))

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("span")
        particle.className = "particle"

        const size = Math.random() * 15 + 5
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        const posX = Math.random() * 100
        particle.style.left = `${posX}%`
        particle.style.top = "100%"

        const opacity = Math.random() * 0.5 + 0.1
        particle.style.opacity = opacity

        const duration = Math.random() * 10 + 15
        particle.style.animationDuration = `${duration}s`

        const delay = Math.random() * 5
        particle.style.animationDelay = `${delay}s`

        container.appendChild(particle)
      }
    })
  }

  initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      })
    }, observerOptions)

    // Observe elements for animation
    document.querySelectorAll(".skill-category, .project-card, .contact-item").forEach((el) => {
      observer.observe(el)
    })
  }

  // Utility functions
  isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  displayError(container, message) {
    container.innerHTML = `
      <div class="error">
        <i class="fas fa-exclamation-triangle"></i>
        <p>${message}</p>
      </div>
    `
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp()
})

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Pause animations when page is not visible
    document.querySelectorAll(".particle").forEach((particle) => {
      particle.style.animationPlayState = "paused"
    })
  } else {
    // Resume animations when page becomes visible
    document.querySelectorAll(".particle").forEach((particle) => {
      particle.style.animationPlayState = "running"
    })
  }
})



