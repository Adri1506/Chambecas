/* ============================================================
   main.js — Las Chambecas
   Lógica compartida para TODAS las páginas del sitio
   Versión: EP-01
   ============================================================ */

/* ----------------------------------------------------------
   1. CONSTANTES GLOBALES
   ---------------------------------------------------------- */
const CONTACTS = {
  whatsapp: '+56971930350',
  email: 'adriaticosama@gmail.com',
  instagram: 'https://www.instagram.com/las_chambecas/',
  formspree: 'https://formspree.io/f/mojovbnn'
};

const WHATSAPP_MESSAGE = '¡Hola! Estoy interesado/a en los productos de Las Chambecas. ¿Podrían darme más información?';

/* ----------------------------------------------------------
   2. DOM READY — Inicialización
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  initMenu();
  initWhatsAppFloat();
  initLightbox();
  initForms();
  initHeaderScroll();
  initCopyright();
  initSmoothScroll();
  initProductPage();
});

/* ----------------------------------------------------------
   3. MENÚ HAMBURGUESA
   ---------------------------------------------------------- */
function initMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav--mobile');
  const overlay = document.querySelector('.nav-overlay');
  const navLinks = navMobile ? navMobile.querySelectorAll('.nav__link') : [];
  let isOpen = false;

  if (!toggleBtn || !navMobile || !overlay) return;

  function openMenu() {
    isOpen = true;
    toggleBtn.classList.add('menu-toggle--active');
    navMobile.classList.add('nav--open');
    overlay.classList.add('nav-overlay--visible');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    isOpen = false;
    toggleBtn.classList.remove('menu-toggle--active');
    navMobile.classList.remove('nav--open');
    overlay.classList.remove('nav-overlay--visible');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  // Toggle al hacer click en el botón
  toggleBtn.addEventListener('click', function () {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar al hacer click en el overlay
  overlay.addEventListener('click', closeMenu);

  // Cerrar al hacer click en cualquier enlace del menú
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  });

  // ARIA
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
  navMobile.setAttribute('role', 'navigation');
  navMobile.setAttribute('aria-label', 'Menú de navegación principal');
}

/* ----------------------------------------------------------
   4. WHATSAPP FLOAT
   ---------------------------------------------------------- */
function initWhatsAppFloat() {
  const waFloat = document.querySelector('.whatsapp-float');

  if (!waFloat) return;

  const waNumber = CONTACTS.whatsapp.replace(/[^0-9]/g, '');
  const waLink = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);

  // Crear link
  const waAnchor = document.createElement('a');
  waAnchor.href = waLink;
  waAnchor.target = '_blank';
  waAnchor.rel = 'noopener noreferrer';
  waAnchor.setAttribute('aria-label', 'Contactar por WhatsApp');
  waAnchor.style.display = 'flex';
  waAnchor.style.alignItems = 'center';
  waAnchor.style.justifyContent = 'center';
  waAnchor.style.width = '100%';
  waAnchor.style.height = '100%';

  // Mover el contenido del float dentro del anchor
  while (waFloat.firstChild) {
    waAnchor.appendChild(waFloat.firstChild);
  }

  waFloat.appendChild(waAnchor);

  // Tooltip
  const tooltip = document.createElement('span');
  tooltip.className = 'whatsapp-float__tooltip';
  tooltip.textContent = '¡Escríbenos!';
  waFloat.appendChild(tooltip);
}

/* ----------------------------------------------------------
   5. LIGHTBOX
   ---------------------------------------------------------- */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery__item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox__img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  const lightboxPrev = lightbox ? lightbox.querySelector('.lightbox__btn--prev') : null;
  const lightboxNext = lightbox ? lightbox.querySelector('.lightbox__btn--next') : null;
  const lightboxCounter = lightbox ? lightbox.querySelector('.lightbox__counter') : null;

  if (!lightbox || !lightboxImg) return;

  let currentIndex = 0;
  let images = [];
  let isOpen = false;
  let previousFocus = null;

  // Recoger todas las imágenes de la galería
  function refreshImages() {
    images = [];
    document.querySelectorAll('.gallery__item').forEach(function (item) {
      const img = item.querySelector('img');
      if (img && img.src) {
        images.push({
          src: img.src,
          alt: img.alt || 'Imagen de galería'
        });
      }
    });
  }

  function openLightbox(index) {
    refreshImages();
    if (images.length === 0) return;

    currentIndex = index;
    isOpen = true;
    previousFocus = document.activeElement;

    updateLightboxImage();
    lightbox.classList.add('lightbox--open');
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Focus trap
    setTimeout(function () {
      lightboxClose.focus();
    }, 100);
  }

  function closeLightbox() {
    isOpen = false;
    lightbox.classList.remove('lightbox--open');
    lightbox.style.display = 'none';
    document.body.style.overflow = '';

    // Restaurar foco
    if (previousFocus) {
      previousFocus.focus();
    }
  }

  function navigateLightbox(direction) {
    if (images.length === 0) return;

    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateLightboxImage();
  }

  function updateLightboxImage() {
    if (images.length === 0) return;

    const image = images[currentIndex];
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;

    if (lightboxCounter) {
      lightboxCounter.textContent = (currentIndex + 1) + ' / ' + images.length;
    }
  }

  // Click en items de galería
  galleryItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      openLightbox(index);
    });

    // ARIA
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', 'Ver imagen ampliada');
  });

  // Cerrar
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxClose.setAttribute('aria-label', 'Cerrar lightbox');
  }

  // Navegación
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function () {
      navigateLightbox(-1);
    });
    lightboxPrev.setAttribute('aria-label', 'Imagen anterior');
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', function () {
      navigateLightbox(1);
    });
    lightboxNext.setAttribute('aria-label', 'Siguiente imagen');
  }

  // Click fuera de la imagen para cerrar
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      closeLightbox();
      e.preventDefault();
    }

    if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
      e.preventDefault();
    }

    if (e.key === 'ArrowRight') {
      navigateLightbox(1);
      e.preventDefault();
    }
  });

  // Inicializar imágenes
  refreshImages();
}

/* ----------------------------------------------------------
   6. FORMULARIOS (Formspree)
   ---------------------------------------------------------- */
function initForms() {
  const forms = document.querySelectorAll('[data-formspree]');

  forms.forEach(function (form) {
    form.addEventListener('submit', handleFormSubmit);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.form__submit, .btn[type="submit"]');
  const formSuccess = form.querySelector('.form__success');
  const formError = form.querySelector('.form__error');
  const inputs = form.querySelectorAll('.form__input, .form__textarea, .form__select');

  // Limpiar estados previos
  clearFormErrors(form);
  if (formSuccess) {
    formSuccess.classList.remove('form__success--visible');
    formSuccess.textContent = '';
  }

  // Validar campos requeridos
  let hasErrors = false;
  inputs.forEach(function (input) {
    if (input.hasAttribute('required') && !input.value.trim()) {
      showFieldError(input, 'Este campo es obligatorio');
      hasErrors = true;
    }
  });

  if (hasErrors) return;

  // Prevenir doble submit
  if (form.dataset.submitting === 'true') return;
  form.dataset.submitting = 'true';

  // Deshabilitar inputs
  inputs.forEach(function (input) {
    input.disabled = true;
  });

  // Botón loading
  if (submitBtn) {
    submitBtn.classList.add('btn--loading');
    submitBtn.disabled = true;
  }

  // Recoger datos
  const formData = new FormData(form);

  // Enviar a Formspree
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error al enviar el formulario');
    })
    .then(function () {
      // Éxito
      if (formSuccess) {
        formSuccess.textContent = '¡Mensaje enviado con éxito! Te responderemos a la brevedad.';
        formSuccess.classList.add('form__success--visible');
      }

      form.reset();
    })
    .catch(function () {
      // Error
      if (formError) {
        formError.textContent = 'Hubo un error al enviar el mensaje. Intenta nuevamente o contáctanos por WhatsApp.';
        formError.classList.add('form__error--visible');
      } else if (formSuccess) {
        // Si no hay elemento de error, usar success como fallback
        formSuccess.textContent = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
        formSuccess.style.color = 'var(--color-error)';
        formSuccess.classList.add('form__success--visible');
      }
    })
    .finally(function () {
      // Re-habilitar formulario
      form.dataset.submitting = 'false';

      inputs.forEach(function (input) {
        input.disabled = false;
      });

      if (submitBtn) {
        submitBtn.classList.remove('btn--loading');
        submitBtn.disabled = false;
      }
    });
}

function showFieldError(input, message) {
  input.classList.add('form__input--error');
  input.classList.remove('form__input--success');

  // Buscar el elemento de error asociado
  const parent = input.closest('.form__group');
  if (parent) {
    const errorEl = parent.querySelector('.form__error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('form__error--visible');
    }
  }
}

function clearFormErrors(form) {
  const errorInputs = form.querySelectorAll('.form__input--error, .form__textarea--error, .form__select--error');
  errorInputs.forEach(function (input) {
    input.classList.remove('form__input--error');
  });

  const errorMessages = form.querySelectorAll('.form__error--visible');
  errorMessages.forEach(function (msg) {
    msg.classList.remove('form__error--visible');
    msg.textContent = '';
  });

  const successMsgs = form.querySelectorAll('.form__success');
  successMsgs.forEach(function (msg) {
    msg.style.color = '';
  });
}

/* ----------------------------------------------------------
   7. SCROLL BEHAVIOR — Header
   ---------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScrollY = 0;

  if (!header) return;

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY > 10) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScrollY = scrollY;
  }, { passive: true });
}

/* ----------------------------------------------------------
   8. COPYRIGHT — Año dinámico
   ---------------------------------------------------------- */
function initCopyright() {
  const yearElements = document.querySelectorAll('[data-year]');

  yearElements.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
}

/* ----------------------------------------------------------
   9. SMOOTH SCROLL — Anclas internas
   ---------------------------------------------------------- */
function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const headerHeight = document.querySelector('.header') ? parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 70 : 70;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Actualizar URL sin recargar
    if (history.pushState) {
      history.pushState(null, null, targetId);
    }
  });
}

/* ----------------------------------------------------------
   10. PRODUCTOS — Lógica de página de producto
   ---------------------------------------------------------- */

/**
 * Obtiene el valor de un parámetro de la URL
 * @param {string} name - Nombre del parámetro
 * @returns {string|null} Valor del parámetro o null
 */
function getQueryParam(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

/**
 * Formatea un número a formato precio chileno: $X.XXX
 * @param {number|null} precio - Precio numérico o null para "A cotizar"
 * @returns {string} Precio formateado
 */
function formatPrecio(precio) {
  if (precio === null) return 'A cotizar';
  return '$' + precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Renderiza el detalle de un producto específico
 * @param {string} productId - ID del producto a mostrar
 */
function renderProductDetail(productId) {
  var producto = PRODUCTOS.find(function(p) { return p.id === productId; });
  if (!producto) {
    window.location.href = 'producto.html';
    return;
  }

  // Leer índice de imagen desde query param (si viene de la galería)
  var imgIndex = parseInt(getQueryParam('img')) || 0;
  if (imgIndex < 0) imgIndex = 0;

  // Mostrar detalle, ocultar listado
  document.getElementById('producto-detalle').style.display = 'block';
  document.getElementById('producto-listado').style.display = 'none';

  // Título de la página
  document.title = producto.nombre + ' — Las Chambecas';
  document.getElementById('producto-titulo').textContent = producto.nombre;
  document.getElementById('producto-subtitulo').textContent = 'Precios y detalles';
  document.getElementById('producto-nombre').textContent = producto.nombre;
  document.getElementById('producto-descripcion').textContent = producto.descripcion;

  // Galería
  var galeria = document.getElementById('producto-galeria');
  var imgPrincipal = document.getElementById('producto-imagen-principal');
  var thumbs = document.getElementById('producto-thumbs');

  // Saber si venimos de una imagen específica de la galería
  var imagenEspecifica = getQueryParam('img') !== null;

  if (producto.imagenes && producto.imagenes.length > 0) {
    // Limitar imgIndex al rango disponible
    if (imgIndex >= producto.imagenes.length) imgIndex = 0;

    // Mostrar galería de imágenes
    galeria.style.display = 'block';

    if (imagenEspecifica) {
      // === MODO: Viene desde la galería → muestra SOLO esa imagen ===
      imgPrincipal.style.display = 'block';
      imgPrincipal.src = producto.imagenes[imgIndex];
      imgPrincipal.alt = producto.nombre;
      thumbs.innerHTML = '';
      thumbs.style.display = 'none';
    } else {
      // === MODO: Vista general → muestra todas las miniaturas ===
      imgPrincipal.style.display = 'block';
      imgPrincipal.src = producto.imagenes[imgIndex];
      imgPrincipal.alt = producto.nombre;
      thumbs.style.display = 'flex';

      thumbs.innerHTML = '';
      producto.imagenes.forEach(function(imgSrc, index) {
        var thumb = document.createElement('div');
        thumb.className = 'product-gallery__thumb' + (index === imgIndex ? ' product-gallery__thumb--active' : '');
        thumb.innerHTML = '<img src="' + imgSrc + '" alt="' + producto.nombre + ' - imagen ' + (index + 1) + '" loading="lazy">';
        thumb.addEventListener('click', function() {
          imgPrincipal.src = imgSrc;
          document.querySelectorAll('.product-gallery__thumb').forEach(function(t) {
            t.classList.remove('product-gallery__thumb--active');
          });
          thumb.classList.add('product-gallery__thumb--active');
        });
        thumbs.appendChild(thumb);
      });
    }
  } else {
    // Mostrar icono SVG
    galeria.style.display = 'block';
    // Ocultar thumbs si no hay imágenes reales
    thumbs.innerHTML = '';
    imgPrincipal.style.display = 'none';
    // Crear contenedor para el SVG grande
    var iconContainer = document.createElement('div');
    iconContainer.className = 'product-gallery__icon';
    iconContainer.innerHTML = producto.icono;
    iconContainer.querySelector('svg').setAttribute('width', '120');
    iconContainer.querySelector('svg').setAttribute('height', '120');
    // Insertar antes de thumbs
    galeria.insertBefore(iconContainer, thumbs);
  }

  // Tabla de precios
  var tbody = document.getElementById('producto-precios-body');
  tbody.innerHTML = '';
  producto.precios.forEach(function(p) {
    var row = document.createElement('tr');
    row.className = 'price-table__row';
    row.innerHTML = '<td class="price-table__item">' + p.item + '</td>' +
                    '<td class="price-table__price">' + formatPrecio(p.precio) + '</td>';
    tbody.appendChild(row);
  });

  // Botón WhatsApp
  var waBtn = document.getElementById('producto-whatsapp-btn');
  if (producto.incluyeWhatsApp) {
    waBtn.style.display = 'inline-flex';
    var mensaje = producto.whatsappMensaje || 'Hola%2C%20quiero%20cotizar%20' + encodeURIComponent(producto.nombre);
    waBtn.href = 'https://wa.me/56971930350?text=' + mensaje;
  } else {
    waBtn.style.display = 'none';
  }

  // Botón formulario
  var formBtn = document.getElementById('producto-form-btn');
  formBtn.href = 'pedido.html?producto=' + producto.id;
}

/**
 * Renderiza el grid de todos los productos
 */
function renderProductList() {
  document.getElementById('producto-detalle').style.display = 'none';
  document.getElementById('producto-listado').style.display = 'block';
  document.title = 'Productos — Las Chambecas';
  document.getElementById('producto-titulo').textContent = 'Nuestros Productos';
  document.getElementById('producto-subtitulo').textContent = 'Conoce nuestra variedad de productos y servicios';

  var grid = document.getElementById('producto-grid');
  grid.innerHTML = '';

  PRODUCTOS.forEach(function(producto) {
    var card = document.createElement('a');
    card.className = 'card product-list__card';
    card.href = 'producto.html?producto=' + producto.id;

    var imageHtml = '';
    if (producto.imagenes && producto.imagenes.length > 0) {
      imageHtml = '<img class="product-list__image" src="' + producto.imagenes[0] + '" alt="' + producto.nombre + '" loading="lazy">';
    } else {
      imageHtml = '<div class="product-list__icon">' + producto.icono + '</div>';
    }

    // Precio principal (el primero)
    var precioText = '';
    if (producto.precios.length === 1) {
      precioText = formatPrecio(producto.precios[0].precio);
    } else if (producto.precios.length > 1) {
      precioText = 'Desde ' + formatPrecio(producto.precios[0].precio);
    }

    card.innerHTML = imageHtml +
      '<div class="product-list__body">' +
      '<h3 class="product-list__name">' + producto.nombre + '</h3>' +
      '<p class="product-list__price">' + precioText + '</p>' +
      '</div>';

    grid.appendChild(card);
  });
}

/**
 * Inicialización de la página de producto
 * Se ejecuta solo si existe el elemento #producto-detalle (producto.html)
 */
function initProductPage() {
  var detalle = document.getElementById('producto-detalle');
  if (!detalle) return; // No estamos en producto.html

  var productId = getQueryParam('producto');
  if (productId) {
    renderProductDetail(productId);
  } else {
    renderProductList();
  }
}

/* ============================================================
   FIN — main.js
   ============================================================ */
