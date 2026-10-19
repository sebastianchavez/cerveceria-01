/* ===========================================
   Componentes compartidos: Navbar y Footer
   Se incluyen en cada HTML
   =========================================== */

function renderNavbar(activePage = '') {
  const isHome = activePage === 'home';
  const links = [
    { href: 'index.html', label: 'Inicio', key: 'home' },
    { href: 'sobre-nosotros.html', label: 'Sobre Nosotros', key: 'sobre' },
    { href: 'servicios.html', label: 'Servicios', key: 'servicios' },
    { href: 'precios.html', label: 'Precios', key: 'precios' },
    { href: 'galeria.html', label: 'Galería', key: 'galeria' },
    { href: 'contacto.html', label: 'Contacto', key: 'contacto' }
  ];

  return `
    <nav class="navbar fixed top-0 left-0 right-0 z-[60] ${isHome ? 'navbar-transparent' : 'scrolled'}" id="main-navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a href="index.html" class="flex items-center space-x-3 group">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span class="text-2xl">🍺</span>
            </div>
            <div class="hidden md:block">
              <span class="text-white font-serif font-bold text-lg block leading-none">Cervecería</span>
              <span class="text-amber-500 text-xs uppercase tracking-wider">Artesanal</span>
            </div>
          </a>

          <!-- Desktop Nav -->
          <div class="desktop-nav hidden lg:flex items-center space-x-4 xl:space-x-8">
            ${links.map(link => `
              <a href="${link.href}" class="nav-link text-stone-100 font-medium text-sm uppercase tracking-wider ${activePage === link.key ? 'active' : ''}">
                ${link.label}
              </a>
            `).join('')}
            <a href="contacto.html" class="btn-primary text-sm">Reservar</a>
          </div>

          <!-- Mobile Hamburger -->
          <div class="hamburger lg:hidden" id="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      ${links.map(link => `
        <a href="${link.href}" class="nav-link text-stone-100 font-serif text-2xl">${link.label}</a>
      `).join('')}
      <a href="contacto.html" class="btn-primary mt-4">Reservar</a>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="bg-stone-900 border-t border-amber-700/20 pt-16 pb-8 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Logo y descripción -->
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <span class="text-2xl">🍺</span>
              </div>
              <div>
                <span class="text-white font-serif font-bold text-lg block leading-none">Cervecería</span>
                <span class="text-amber-500 text-xs uppercase tracking-wider">Artesanal</span>
              </div>
            </div>
            <p class="text-stone-200 text-sm leading-relaxed mb-4">
              Tradición, pasión y el sabor auténtico de la cerveza hecha a mano desde 1892.
            </p>
            <div class="redes-sociales flex space-x-3"></div>
          </div>

          <!-- Links rápidos -->
          <div>
            <h3 class="text-amber-500 font-serif font-bold text-lg mb-4">Links Rápidos</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="footer-link text-sm">Inicio</a></li>
              <li><a href="sobre-nosotros.html" class="footer-link text-sm">Sobre Nosotros</a></li>
              <li><a href="servicios.html" class="footer-link text-sm">Servicios</a></li>
              <li><a href="precios.html" class="footer-link text-sm">Precios</a></li>
              <li><a href="galeria.html" class="footer-link text-sm">Galería</a></li>
              <li><a href="contacto.html" class="footer-link text-sm">Contacto</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="text-amber-500 font-serif font-bold text-lg mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="politicas.html" class="footer-link text-sm">Políticas de Privacidad</a></li>
              <li><a href="terminos.html" class="footer-link text-sm">Términos y Condiciones</a></li>
              <li><a href="#" class="footer-link text-sm">Política de Cookies</a></li>
              <li><a href="#" class="footer-link text-sm">Defensa del Consumidor</a></li>
            </ul>
          </div>

          <!-- Newsletter y contacto -->
          <div>
            <h3 class="text-amber-500 font-serif font-bold text-lg mb-4">Suscribite</h3>
            <p class="text-stone-200 text-sm mb-4">Recibí nuestras novedades y promociones exclusivas.</p>
            <form id="newsletter-form" class="space-y-2">
              <input type="email" placeholder="Tu email" required
                class="w-full px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors">
              <button type="submit" class="btn-primary text-sm w-full">Suscribirme</button>
              <div class="newsletter-msg text-xs mt-1"></div>
            </form>
          </div>
        </div>

        <!-- Línea divisoria -->
        <div class="border-t border-stone-700/50 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center text-stone-300 text-sm space-y-2 md:space-y-0">
            <p>&copy; <span class="current-year"></span> Cervecería Artesanal. Todos los derechos reservados.</p>
            <p>Av. de los Lúpulos 1234, Santiago, Chile | +56 2 2555 1234</p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Botón scroll to top -->
    <button class="scroll-top" id="scroll-top-btn" aria-label="Volver arriba">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
      </svg>
    </button>

    <!-- Loader -->
    <div class="loader" id="page-loader">
      <div class="loader-beer"></div>
    </div>
  `;
}

// Inyectar componentes en el DOM
function mountComponents(activePage = '') {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = renderNavbar(activePage);
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = renderFooter();
  }

  document.body.classList.add(`page-${activePage}`);
}

// Auto-mount cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Buscar el atributo data-page en body
    const page = document.body.dataset.page || '';
    mountComponents(page);
    window.dispatchEvent(new Event('componentsMounted'));
  });
} else {
  const page = document.body.dataset.page || '';
  mountComponents(page);
  window.dispatchEvent(new Event('componentsMounted'));
}
