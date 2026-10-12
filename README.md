# 🍺 Cervecería Artesanal - Landing Page

Landing page completa para una cervecería artesanal, con 8 pantallas, navegación tradicional multi-HTML, animaciones, formulario validado y datos mockeados listos para personalizar.

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Técnico](#-stack-técnico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Pantallas](#-pantallas)
- [Instalación y Uso](#-instalación-y-uso)
- [Personalización](#-personalización)
- [Datos Mockeados](#-datos-mockeados)
- [Despliegue](#-despliegue)

---

## ✨ Características

- 🎨 **Diseño personalizado** con paleta de colores tipo cervecería clásica (ámbar / stone)
- 📱 **100% responsive** (mobile, tablet, desktop)
- 🌐 **8 páginas HTML** independientes con navegación tradicional
- ⚡ **Animaciones suaves** al scroll con IntersectionObserver
- 🎯 **Navbar fija** con cambio de estilo al hacer scroll (transparente → sólida)
- 📱 **Menú hamburguesa** animado en dispositivos móviles
- 🔝 **Botón flotante** de scroll-to-top
- ⏳ **Loader inicial** con jarra de cerveza animada
- 🖼️ **Galería con filtros** por categoría
- 💰 **Catálogo con filtros** por tipo de cerveza
- 📝 **Formulario validado** (nombre, email, teléfono, asunto, mensaje)
- 🍪 **Newsletter** en el footer
- 📍 **Mapa de Google Maps** embebido
- 🔢 **Contadores animados** de estadísticas
- 💬 **Sección de testimonios** dinámica
- 📦 **Packs promocionales** con descuentos
- 🔍 **SEO friendly** con meta tags descriptivas
- 🇨🇱 **Localizado para Chile** (precios en CLP, teléfonos, leyes, etc.)

---

## 🛠️ Stack Técnico

- **HTML5** semántico
- **Tailwind CSS** 3.x (vía CDN con configuración personalizada)
- **JavaScript** nativo (ES6+, sin frameworks)
- **Google Fonts** (Inter + Playfair Display)
- **Unsplash** de fotografías

---

## 📁 Estructura del Proyecto

```
cerveceria-01/
├── index.html                  # Pantalla de Inicio
├── sobre-nosotros.html         # Sobre Nosotros
├── servicios.html              # Nuestros Servicios
├── precios.html                # Lista de Precios
├── galeria.html                # Galería
├── contacto.html               # Contacto + Formulario
├── politicas.html              # Políticas de Privacidad
├── terminos.html               # Términos y Condiciones
├── README.md                   # Este archivo
└── assets/
    ├── css/
    │   └── styles.css          # Estilos personalizados y animaciones
    └── js/
        ├── data.js             # Datos mockeados
        ├── components.js       # Navbar y Footer (compartidos)
        └── app.js               # Lógica general de la app
```

---

## 🖥️ Pantallas

### 1. **Inicio** (`index.html`)
- Hero full-screen con imagen de fondo parallax
- 4 cervezas destacadas (cards con hover animado)
- Estadísticas animadas (años, variedades, clientes, premios)
- Sección "¿Por qué elegirnos?" con 3 beneficios
- Testimonios de clientes
- CTA final

### 2. **Sobre Nosotros** (`sobre-nosotros.html`)
- Nuestra historia con texto + imagen
- Misión y Visión
- Valores de la marca (4 cards)
- Equipo de trabajo (4 perfiles)

### 3. **Servicios** (`servicios.html`)
- 6 servicios con iconos emoji
- Proceso de trabajo en 4 pasos
- Garantía y estadísticas
- CTA de cotización

### 4. **Precios** (`precios.html`)
- Catálogo de 8 cervezas con filtros por tipo
- 3 packs promocionales
- Información de medios de pago y envíos (Chile)

### 5. **Galería** (`galeria.html`)
- 12 imágenes con filtros por categoría
- Imagen destacada de instalaciones
- Estadísticas rápidas
- CTA de visita

### 6. **Contacto** (`contacto.html`)
- Formulario completo con validación
- Información de contacto (dirección, teléfonos, emails)
- Horarios de atención
- Mapa de Google Maps embebido
- Redes sociales

### 7. **Políticas de Privacidad** (`politicas.html`)
- Texto legal completo basado en Ley 19.628 de Chile
- 12 secciones estructuradas
- Estilo (clases con format `.prose`)

### 8. **Términos y Condiciones** (`terminos.html`)
- Texto legal completo basado en Ley 19.496 de Chile
- 13 secciones estructuradas
- Estilo (clases con format `.prose`)

---

## 🚀 Instalación y Uso

### Opción 1: Abrir directamente

Simplemente abrí `index.html` en tu navegador. Funciona sin servidor, sin build, sin dependencias.

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opción 2: Servidor local (recomendado)

Para una experiencia completa (especialmente para el iframe del mapa), usá un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tenés npx)
npx serve .

# Con PHP
php -S localhost:8000
```

Luego ingresá a `http://localhost:8000` en tu navegador.

---

## 🎨 Personalización

### 🎨 Cambiar colores

Editá el bloque `<script>tailwind.config = {...}</script>` en cualquier HTML o las variables CSS en `assets/css/styles.css`.

**Paleta actual (Cervecería clásica):**
- `amber-500` (#f59e0b) — dorado cerveza
- `amber-700` (#b45309) — ámbar oscuro
- `stone-800` (#292524) — fondo oscuro
- `stone-900` (#1c1917) — fondo más oscuro

### 📝 Cambiar contenido dinámico

Todos los datos están en **`assets/js/data.js`**. Editá directamente el objeto `data`:

```js
const data = {
  info: { ... },           // Información general de la empresa
  redes: [ ... ],          // Redes sociales
  cervezas: [ ... ],       // Catálogo de cervezas
  servicios: [ ... ],      // Servicios ofrecidos
  galeria: [ ... ],        // Imágenes de la galería
  equipo: [ ... ],         // Equipo de trabajo
  horarios: [ ... ],        // Horarios de atención
  testimonios: [ ... ],    // Testimonios de clientes
  packs: [ ... ]           // Packs promocionales
};
```

### 🖼️ Cambiar imágenes

Las URLs de Unsplash están tanto en `data.js` como en algunos lugares puntuales de los HTML (hero, sobre nosotros). Reemplazá las URLs por las tuyas.

### 🔤 Cambiar tipografías

Las fuentes se cargan en `assets/css/styles.css` (línea final) y se usan con las utility classes `font-serif` y `font-sans` de Tailwind. Editá la importación de Google Fonts y el bloque CSS para cambiarlas.

### 📞 Cambiar información de contacto

Editá:
- `data.js` → objeto `data.info`
- `contacto.html` → tarjetas de contacto y mapa
- `assets/js/components.js` → footer (teléfono y dirección)
- Textos legales en `terminos.html` y `politicas.html`

---

## 📦 Datos Mockeados

### Información incluida:
- ✅ 8 cervezas con descripción, precio, volumen e imagen
- ✅ 6 servicios con precios
- ✅ 12 imágenes de galería (4 categorías: instalaciones, productos, eventos, equipo)
- ✅ 4 miembros del equipo
- ✅ 3 testimonios de clientes
- ✅ 3 packs promocionales
- ✅ 4 horarios semanales
- ✅ 4 redes sociales

---

## 🌍 Despliegue

### Netlify

1. Creá una cuenta en [netlify.com](https://www.netlify.com)
2. Arrastrá la carpeta del proyecto al dashboard
3. Listo, tu sitio estará online

### Vercel

```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Subí el proyecto a un repo de GitHub
2. Settings → Pages → Source: main / root
3. Tu sitio estará en `https://usuario.github.io/repo-nombre`

### Hosting tradicional (FTP)

1. Conectá vía FTP a tu hosting
2. Subí todos los archivos al directorio público (`public_html/`, `www/`, etc.)
3. Asegurate de mantener la estructura de carpetas

---

## 🔧 Componentes Compartidos

El navbar y el footer están en **`assets/js/components.js`**. Se inyectan automáticamente en cada página al cargar el DOM.

Para activarlo, cada HTML debe tener:

```html
<body data-page="home">  <!-- data-page indica la página actual -->

  <div id="navbar-placeholder"></div>
  <!-- ... contenido de la página ... -->
  <div id="footer-placeholder"></div>

  <script src="assets/js/data.js"></script>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/app.js"></script>
</body>
```

El sistema dispara un evento `componentsMounted` después de montar los componentes, que se usa para renderizar contenido dinámico (cervezas, galería, etc.).

---

## 📝 Licencia

Este proyecto es de uso libre. Las imágenes son de [Unsplash](https://unsplash.com) (licencia libre).

---

## 👨‍💻 Autor

Cervecería Artesanal Template - Landing Page completa y lista para personalizar.

**Última actualización:** Octubre 2026