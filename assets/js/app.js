/* ===========================================
   Cervecería Artesanal - Lógica de la App
   =========================================== */

let appInitialized = false;

function initApp() {
  if (appInitialized) return;
  appInitialized = true;

  initLoader();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initScrollToTop();
  initFooter();
  initFormulario();
  initFiltrosGaleria();
  initFiltrosPrecios();
  initNewsletter();
  initCounterAnimations();
}

// Esperar a que los componentes estén montados
window.addEventListener('componentsMounted', initApp);

// Fallback: si por alguna razón no se dispara el evento, inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Si después de un breve delay no se inicializó, hacerlo
  setTimeout(() => {
    if (!appInitialized) initApp();
  }, 100);
});

/* ===========================================
   LOADER
   =========================================== */
function initLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 800);
  });
}

/* ===========================================
   NAVBAR
   =========================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const isHome = document.body.dataset.page === 'home';

  const updateNavbar = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('navbar-transparent');
    } else if (isHome) {
      navbar.classList.remove('scrolled');
      navbar.classList.add('navbar-transparent');
    } else {
      navbar.classList.add('scrolled');
      navbar.classList.remove('navbar-transparent');
    }
  };

  updateNavbar();
  window.addEventListener('scroll', updateNavbar);
}

/* ===========================================
   MOBILE MENU
   =========================================== */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ===========================================
   ANIMACIONES AL SCROLL
   =========================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* ===========================================
   SCROLL TO TOP
   =========================================== */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===========================================
   FOOTER
   =========================================== */
function initFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const data = window.cerveceriaData;
  const anio = new Date().getFullYear();

  // Renderizar redes sociales
  const redesContainer = footer.querySelector('.redes-sociales');
  if (redesContainer && data) {
    redesContainer.innerHTML = data.redes.map(red => `
      <a href="${red.url}" class="social-icon" aria-label="${red.nombre}">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="${red.icono}"/>
        </svg>
      </a>
    `).join('');
  }

  // Año dinámico
  const anioEl = footer.querySelector('.current-year');
  if (anioEl) anioEl.textContent = anio;
}

/* ===========================================
   FORMULARIO DE CONTACTO
   =========================================== */
function initFormulario() {
  const form = document.querySelector('#form-contacto');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Limpiar errores
    form.querySelectorAll('.form-input').forEach(input => {
      input.classList.remove('error');
    });

    // Validar campos requeridos
    form.querySelectorAll('[required]').forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      }
    });

    // Validar email
    const email = form.querySelector('[name="email"]');
    if (email && email.value && !isValidEmail(email.value)) {
      email.classList.add('error');
      isValid = false;
    }

    // Validar teléfono (mínimo 8 dígitos)
    const tel = form.querySelector('[name="telefono"]');
    if (tel && tel.value && !/^[\d\s\-\+\(\)]{8,}$/.test(tel.value)) {
      tel.classList.add('error');
      isValid = false;
    }

    if (isValid) {
      const successMsg = form.querySelector('.form-success');
      if (successMsg) {
        successMsg.classList.remove('hidden');
        successMsg.classList.add('flex');
        setTimeout(() => {
          successMsg.classList.add('hidden');
          successMsg.classList.remove('flex');
        }, 5000);
      }
      form.reset();
    } else {
      window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ===========================================
   FILTROS GALERÍA
   =========================================== */
function initFiltrosGaleria() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ===========================================
   FILTROS PRECIOS
   =========================================== */
function initFiltrosPrecios() {
  const filterBtns = document.querySelectorAll('.precio-filter-btn');
  const precioItems = document.querySelectorAll('.precio-item');

  if (!filterBtns.length || !precioItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      precioItems.forEach(item => {
        if (filter === 'todos' || item.dataset.tipo === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ===========================================
   NEWSLETTER
   =========================================== */
function initNewsletter() {
  const newsletterForm = document.querySelector('#newsletter-form');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const msg = document.querySelector('.newsletter-msg');

    if (input && isValidEmail(input.value)) {
      if (msg) {
        msg.textContent = '¡Gracias por suscribirte!';
        msg.classList.remove('text-red-400');
        msg.classList.add('text-amber-300');
      }
      input.value = '';
      setTimeout(() => {
        if (msg) msg.textContent = '';
      }, 4000);
    } else if (msg) {
      msg.textContent = 'Por favor ingresá un email válido';
      msg.classList.add('text-red-400');
      msg.classList.remove('text-amber-300');
    }
  });
}

/* ===========================================
   CONTADORES ANIMADOS (Stats)
   =========================================== */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const target = parseInt(entry.target.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        entry.target.dataset.animated = 'true';

        const update = () => {
          current += step;
          if (current < target) {
            entry.target.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(update);
          } else {
            entry.target.textContent = target.toLocaleString();
          }
        };
        update();
    }});
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}