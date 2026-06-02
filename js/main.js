/* ═══════════════════════════════════════
   ASPIRIA — main.js
   Vanilla JS · Sin dependencias externas
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. NAVBAR SCROLL BLUR ─── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });


  /* ─── 2. HAMBURGER / MOBILE MENU ─── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.textContent = isOpen ? '✕' : '☰';
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  window.closeMobile = () => {
    mobileMenu.classList.remove('open');
    hamburger.textContent = '☰';
    hamburger.setAttribute('aria-expanded', false);
  };

  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closeMobile();
  });


  /* ─── 3. SMOOTH SCROLL ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 60; // altura navbar
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ─── 4. SCROLL REVEAL (IntersectionObserver) ─── */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;

      // Stagger para elementos en grids (por posición en su grupo)
      const siblings = entry.target.parentElement
        ? [...entry.target.parentElement.querySelectorAll('.reveal')]
        : [];
      const idx = siblings.indexOf(entry.target);
      const delay = idx >= 0 ? idx * 100 : 0;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));


  /* ─── 5. ACORDEÓN FAQ ─── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-item__trigger');
    const body    = item.querySelector('.faq-item__body');
    const icon    = item.querySelector('.faq-item__icon');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Cerrar todos
      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-item__body').style.maxHeight = '0';
        other.querySelector('.faq-item__trigger').setAttribute('aria-expanded', false);
      });

      // Abrir el clickeado si estaba cerrado
      if (!isOpen) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', true);
      }
    });
  });


  /* ─── 6. FORMULARIO DE CONTACTO ─── */
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Validación básica
    const nombre = form.nombre.value.trim();
    const email  = form.email.value.trim();
    const tema   = form.tema.value.trim();

    if (!nombre || !email || !tema) {
      submitBtn.textContent = 'Por favor completa los campos requeridos';
      submitBtn.style.background = 'rgba(217,79,79,.7)';
      setTimeout(() => {
        submitBtn.textContent = 'Enviar Mensaje →';
        submitBtn.style.background = '';
      }, 2500);
      return;
    }

    // Éxito
    submitBtn.textContent = '✓ Mensaje enviado';
    submitBtn.style.background = 'linear-gradient(135deg, #00C4AA, #2B80D4)';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Enviar Mensaje →';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      form.reset();
    }, 3000);
  });


  /* ─── 7. NAVBAR ACTIVE LINK (scroll spy) ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__links a');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(
          `.navbar__links a[href="#${entry.target.id}"]`
        );
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => spyObserver.observe(s));

});
