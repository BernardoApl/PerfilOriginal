document.addEventListener("DOMContentLoaded", () => {
  const body = document.body
  const themeToggle = document.getElementById("theme-toggle")
  let isDark = !body.classList.contains("theme-light")

  document.addEventListener("click", (event) => {
    const disabledLink = event.target.closest('a[aria-disabled="true"]')
    if (disabledLink) {
      event.preventDefault()
      event.stopPropagation()
    }
  })

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      isDark = !isDark
      body.classList.toggle("theme-light")

      const icon = themeToggle.querySelector("i")
      if (icon) {
        icon.className = isDark ? "fas fa-moon" : "fas fa-sun"
      }
    })
  }

  const dots = document.querySelectorAll(".hero-dots .dot")
  if (dots.length > 0) {
    let currentDot = 0

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        dots.forEach((d) => d.classList.remove("active"))
        dot.classList.add("active")
        currentDot = index
      })
    })

    setInterval(() => {
      dots.forEach((d) => d.classList.remove("active"))
      currentDot = (currentDot + 1) % dots.length
      dots[currentDot].classList.add("active")
    }, 3000)
  }

  document.addEventListener("mousemove", (event) => {
    // Desabilitar parallax em mobile
    if (window.innerWidth < 768) return

    const moveX = (event.clientX - window.innerWidth / 2) * 0.005
    const moveY = (event.clientY - window.innerHeight / 2) * 0.005

    const heroPhoto = document.querySelector(".hero-photo")
    const welcomeBadge = document.querySelector(".ed-welcome-badge")
    const heroInner = document.querySelector(".hero-inner")

    if (heroPhoto) {
      heroPhoto.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    if (welcomeBadge) {
      welcomeBadge.style.transform = `translate(${-moveX * 0.5}px, ${-moveY * 0.5}px)`
    }

    if (heroInner) {
      heroInner.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href") || "")
      if (target) {
        event.preventDefault()
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add("hidden")
      }, 300)
    }
  })

  const menuToggle = document.querySelector(".menu-toggle")
  const navItems = document.getElementById("nav-items")

  if (menuToggle && navItems) {
    menuToggle.addEventListener("click", () => {
      navItems.classList.toggle("active")
      menuToggle.classList.toggle("active")
      const isExpanded = navItems.classList.contains("active")
      menuToggle.setAttribute("aria-expanded", String(isExpanded))
    })

    // Fechar menu ao clicar em um link ou fora do menu
    navItems.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navItems.classList.remove("active")
        menuToggle.classList.remove("active")
        menuToggle.setAttribute("aria-expanded", "false")
      })
    })

    // Fechar ao clicar fora
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".navbar") && navItems.classList.contains("active")) {
        navItems.classList.remove("active")
        menuToggle.classList.remove("active")
        menuToggle.setAttribute("aria-expanded", "false")
      }
    })
  }

  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-items a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 200) {
        current = section.id
      }
    })

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`)
    })
  })

  const backToTop = document.getElementById("back-to-top")
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("visible")
      } else {
        backToTop.classList.remove("visible")
      }
    })

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  document.querySelectorAll(".btn.primary-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      const ripple = document.createElement("span")
      ripple.classList.add("ripple")

      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-effect 0.6s ease-out;
        pointer-events: none;
      `

      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)
    })
  })

  if (!document.querySelector("#ripple-keyframes")) {
    const style = document.createElement("style")
    style.id = "ripple-keyframes"
    style.textContent = `
      @keyframes ripple-effect {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll("section").forEach((section) => {
    if (section.id !== "home") {
      section.style.opacity = "0"
      section.style.transform = "translateY(20px)"
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(section)
    }
  })

const projectsContainer = document.getElementById("projects-container")
const loadMoreBtn = document.getElementById("load-more-projects")
const PROJECTS_API = "https://api.github.com/users/BernardoApl/repos?sort=updated&per_page=100"
let githubProjects = []
let visibleCount = 5
const ensurePlaceholder = () => {
  if (!projectsContainer) return null
  let placeholder = document.getElementById("projects-placeholder")
  if (!placeholder) {
    placeholder = document.createElement("p")
    placeholder.id = "projects-placeholder"
    placeholder.className = "empty-state"
    projectsContainer.prepend(placeholder)
  }
  return placeholder
}

const updatePlaceholder = (message, hidden = false) => {
  const placeholder = ensurePlaceholder()
  if (!placeholder) return
  if (hidden) {
    placeholder.classList.add("is-hidden")
  } else {
    placeholder.textContent = message
    placeholder.classList.remove("is-hidden")
  }
}

const formatStack = (project) => {
  const mainLang = project.language ? [project.language] : []
  const topicTags = (project.topics || []).slice(0, 3)
  const stack = [...mainLang, ...topicTags].filter(Boolean)
  return stack.length > 0 ? stack : ["Projeto GitHub"]
}

const formatDate = (dateString) => {
  try {
    return new Intl.DateTimeFormat("pt-BR", { month: "short", year: "numeric" }).format(new Date(dateString))
  } catch {
    return "Atualizado recentemente"
  }
}

const createProjectCard = (project) => {
  const card = document.createElement("article")
  card.className = "project-card"
  const stackItems = formatStack(project)
    .map((item) => `<li>${item}</li>`)
    .join("")
  const subtitle = project.language || "Projeto"
  const updatedAt = formatDate(project.pushedAt)

  card.innerHTML = `
    <div class="project-header">
      <span>${subtitle}</span>
      <span>${updatedAt}</span>
    </div>
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <ul class="project-stack">${stackItems}</ul>
    <div class="project-links"></div>
  `

  const linksWrapper = card.querySelector(".project-links")
  const repoLink = document.createElement("a")
  repoLink.href = project.url
  repoLink.target = "_blank"
  repoLink.rel = "noopener"
  repoLink.classList.add("primary")
  repoLink.textContent = "Ver repositorio"
  linksWrapper.appendChild(repoLink)

  return card
}

const toggleLoadMore = (total) => {
  if (!loadMoreBtn) return
  if (visibleCount >= total) {
    loadMoreBtn.classList.add("is-hidden")
  } else {
    loadMoreBtn.classList.remove("is-hidden")
  }
}

const renderProjects = () => {
  if (!projectsContainer) return
  const projectsToShow = githubProjects.slice(0, visibleCount)
  projectsContainer.querySelectorAll(".project-card").forEach((card) => card.remove())

  if (projectsToShow.length === 0) {
    updatePlaceholder("Nenhum projeto encontrado no GitHub.", false)
    toggleLoadMore(0)
    return
  }

  updatePlaceholder("", true)

  projectsToShow.forEach((project) => {
    projectsContainer.appendChild(createProjectCard(project))
  })

  toggleLoadMore(githubProjects.length)
}



const fetchGithubProjects = () => {
  if (!projectsContainer) return
  updatePlaceholder("Carregando projetos do GitHub...")
  fetch(PROJECTS_API, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar repositórios")
      }
      return response.json()
    })
    .then((data) => {
      githubProjects = data
        .filter((repo) => !repo.fork)
        .map((repo) => ({
          name: repo.name.replace(/-/g, " "),
          description: repo.description || "Repositório sem descrição adicionada ainda.",
          language: repo.language,
          topics: repo.topics || [],
          url: repo.html_url,
          homepage: repo.homepage,
          pushedAt: repo.pushed_at,
        }))
      if (githubProjects.length === 0) {
        updatePlaceholder("Ainda não há projetos públicos para mostrar.", false)
        toggleLoadMore(0)
        return
      }
      renderProjects()
      // accumulateLanguages(githubProjects) // gráfico de stacks desativado
    })
    .catch(() => {
      updatePlaceholder("Não foi possível carregar os projetos do GitHub agora. Tente novamente mais tarde.", false)
      toggleLoadMore(0)
    })
}

fetchGithubProjects()

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    visibleCount += 5
    renderProjects()
  })
}

const EMAIL_CONFIG = {
  serviceId: "service_mq054m8",
  templateId: "template_lf5n7os",
  publicKey: "RQ1dSXDL1URKXCGsG",
  toEmail: "b.lopes.software@gmail.com",
}

  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const formData = new FormData(contactForm)
      const data = {
        name: formData.get("name")?.trim() || "",
        email: formData.get("email")?.trim() || "",
        subject: formData.get("subject")?.trim() || "",
        message: formData.get("message")?.trim() || "",
      }

      // Validação robusta de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification("Preencha todos os campos antes de enviar.", "error")
        return
      }

      if (!emailRegex.test(data.email)) {
        showNotification("Por favor, insira um email válido.", "error")
        return
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalContent = submitBtn.innerHTML
      submitBtn.disabled = true
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'

      sendEmail(data)
        .then(() => {
          showNotification("Mensagem enviada com sucesso! Entrarei em contato em breve.", "success")
          contactForm.reset()
        })
        .catch((error) => {
          console.error(error)
          showNotification("Não foi possível enviar sua mensagem agora. Tente novamente mais tarde.", "error")
        })
        .finally(() => {
          submitBtn.disabled = false
          submitBtn.innerHTML = originalContent
        })
    })
  }

  function sendEmail(data) {
    if (!EMAIL_CONFIG.serviceId || !EMAIL_CONFIG.templateId || !EMAIL_CONFIG.publicKey) {
      return Promise.reject(new Error("EmailJS configuration missing"))
    }

    const payload = {
      service_id: EMAIL_CONFIG.serviceId,
      template_id: EMAIL_CONFIG.templateId,
      user_id: EMAIL_CONFIG.publicKey,
      template_params: {
        to_email: EMAIL_CONFIG.toEmail,
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
      },
    }

    return fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("EmailJS request failed")
      }
    })
  }

  function showNotification(message, type = "success") {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.textContent = message
    document.body.appendChild(notification)

    setTimeout(() => notification.classList.add("show"), 10)
    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => notification.remove(), 300)
    }, 3000)
  }

  const CV_FILES = {
    "pt-br": { label: "PT-BR", path: "CV_main_PT-BR.pdf" },
    "en-us": { label: "EN-US", path: "CV_main_EN-US.pdf" },
  }
  let currentCvLang = "pt-br"
  const downloadPdfBtn = document.getElementById("download-cv-pdf")
  const pdfStatus = document.getElementById("pdf-status")
  const pdfFrame = document.getElementById("cv-pdf-frame")
  const pdfFeedback = document.getElementById("pdf-feedback")
  const openPdfBtn = document.getElementById("open-cv-pdf")
  const cvLangButtons = document.querySelectorAll("[data-cv-lang]")
  const fileName = document.querySelector(".file-name")

  const setButtonDisabled = (button, disabled) => {
    if (!button) return
    if (disabled) {
      button.classList.add("is-disabled")
      button.setAttribute("aria-disabled", "true")
      if (button.tagName === "A") {
        button.setAttribute("tabindex", "-1")
      }
    } else {
      button.classList.remove("is-disabled")
      button.removeAttribute("aria-disabled")
      if (button.tagName === "A") {
        button.removeAttribute("tabindex")
      }
    }
  }

  const setActiveLang = (lang) => {
    cvLangButtons.forEach((btn) => {
      const isActive = btn.dataset.cvLang === lang
      btn.classList.toggle("active", isActive)
      btn.setAttribute("aria-pressed", String(isActive))
    })
  }

  const loadCv = (lang) => {
    const entry = CV_FILES[lang] || CV_FILES["pt-br"]
    const resolvedLang = CV_FILES[lang] ? lang : "pt-br"
    currentCvLang = resolvedLang
    setActiveLang(resolvedLang)

    const path = entry.path
    if (fileName) {
      fileName.innerHTML = '<i class="fas fa-file-pdf" aria-hidden="true"></i> ' + path
    }

    setButtonDisabled(downloadPdfBtn, true)
    setButtonDisabled(openPdfBtn, true)
    if (pdfStatus) pdfStatus.textContent = "Carregando visualizacao..."
    if (pdfFeedback) pdfFeedback.textContent = "Preparando curriculo..."

    fetch(path, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("PDF nao encontrado")
        }
        body.classList.add("cv-available")
        setButtonDisabled(downloadPdfBtn, false)
        setButtonDisabled(openPdfBtn, false)
        if (pdfFrame) {
          pdfFrame.src = `${path}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`
        }
        if (downloadPdfBtn) {
          downloadPdfBtn.href = path
        }
        if (openPdfBtn) {
          openPdfBtn.href = path
        }
        if (pdfStatus) {
          pdfStatus.textContent = `Visualizacao disponivel (${entry.label})`
        }
        if (pdfFeedback) {
          pdfFeedback.textContent = "Use os botoes acima para baixar ou abrir em nova guia."
        }
      })
      .catch(() => {
        setButtonDisabled(downloadPdfBtn, true)
        setButtonDisabled(openPdfBtn, true)
        if (pdfFrame) {
          pdfFrame.removeAttribute("src")
        }
        if (pdfStatus) {
          pdfStatus.textContent = `PDF nao encontrado (${entry.label})`
        }
        if (pdfFeedback) {
          pdfFeedback.textContent = "Envie o arquivo para liberar a visualizacao."
        }
      })
  }

  cvLangButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.cvLang || "pt-br"
      loadCv(lang)
    })
  })

  loadCv(currentCvLang)

  if (window.Typed) {
    new window.Typed("#hero-roles", {
      strings: [
        "Software Developer // Software Manager",
        "Java & Spring Boot",
        "Arquiteto de APIs",
        "Entusiasta de DevOps",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1800,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "_",
    })
  }

  console.log("[v2] Portfolio recarregado com layout responsivo.")
})









