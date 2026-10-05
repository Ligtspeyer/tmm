const menuToggle = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');
const customCursor = document.querySelector('#custom-cursor');
const topStrip = document.querySelector('.top-strip');

const initContactForms = () => {
  document.querySelectorAll('.contact-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const messageInput = form.querySelector('textarea');

      if (!nameInput || !emailInput || !messageInput) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      let status = form.querySelector('.form-status');
      if (!status) {
        status = document.createElement('p');
        status.className = 'form-status';
        form.appendChild(status);
      }

      if (!name || !email || !message) {
        status.textContent = 'Bitte fülle Name, E-Mail und Nachricht aus.';
        status.style.color = '#b91c1c';
        return;
      }

      const subject = encodeURIComponent(`Anfrage von ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);

      window.location.href = `mailto:info@tanzmitmir.org?subject=${subject}&body=${body}`;
      form.reset();
      status.textContent = 'Dein E-Mail-Client wurde geöffnet. Vielen Dank für deine Nachricht!';
      status.style.color = '#123d2b';
    });
  });
};

initContactForms();

if (menuToggle && siteHeader) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    siteHeader.classList.toggle('open');
  });
}

const initHeroTitleNavOverlay = () => {
  const heroTitle = document.querySelector('.hero h1');
  if (!heroTitle || !siteHeader) return;

  let overlayTitle = null;
  let frameRequested = false;

  const removeOverlayTitle = () => {
    if (overlayTitle) {
      overlayTitle.remove();
      overlayTitle = null;
    }
    heroTitle.classList.remove('is-over-nav');
  };

  const updateOverlay = () => {
    frameRequested = false;

    const titleRect = heroTitle.getBoundingClientRect();
    const headerRect = siteHeader.getBoundingClientRect();
    const titleDocumentCenter = titleRect.top + window.scrollY + titleRect.height / 2;
    const headerCenter = headerRect.top + headerRect.height / 2;
    const hasReachedHeaderCenter = window.scrollY >= titleDocumentCenter - headerCenter;
    const overlapsHeader = titleRect.bottom > headerRect.top && titleRect.top < headerRect.bottom;

    if (!hasReachedHeaderCenter && !overlapsHeader) {
      removeOverlayTitle();
      return;
    }

    if (!overlayTitle) {
      overlayTitle = heroTitle.cloneNode(true);
      overlayTitle.removeAttribute('id');
      overlayTitle.setAttribute('aria-hidden', 'true');
      overlayTitle.classList.add('hero-title-overlay');
      document.body.appendChild(overlayTitle);
    }

    overlayTitle.style.left = hasReachedHeaderCenter
      ? `${headerRect.left + headerRect.width / 2}px`
      : `${titleRect.left + titleRect.width / 2}px`;
    overlayTitle.style.top = hasReachedHeaderCenter
      ? `${headerCenter}px`
      : `${titleRect.top + titleRect.height / 2}px`;
    heroTitle.classList.add('is-over-nav');
  };

  const requestUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateOverlay);
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  requestUpdate();
};

initHeroTitleNavOverlay();

if (customCursor) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  const ease = 0.22;

  const updateCursor = () => {
    cursorX += (mouseX - cursorX) * ease;
    cursorY += (mouseY - cursorY) * ease;
    customCursor.style.setProperty('--cursor-x', `${cursorX}px`);
    customCursor.style.setProperty('--cursor-y', `${cursorY}px`);
    requestAnimationFrame(updateCursor);
  };

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  updateCursor();

  document.querySelectorAll('a, button, .btn').forEach((element) => {
    element.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'));
    element.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'));
  });
}

// Wait for particlesJS to load from CDN
const initParticles = () => {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 88, density: { enable: true, value_area: 900 } },
        color: { value: ['#9dd0ae', '#7cbf95', '#60895f', '#dff5e8'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 0.22, opacity_min: 0.15, sync: false } },
        size: { value: 3.4, random: true, anim: { enable: true, speed: 1.1, size_min: 0.6, sync: false } },
        line_linked: {
          enable: true,
          distance: 160,
          color: '#7cbf95',
          opacity: 0.33,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: ['grab', 'bubble'] },
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          grab: { distance: 160, line_linked: { opacity: 0.55 } },
          bubble: { distance: 180, size: 5.4, duration: 1.5, opacity: 0.9, speed: 2.5 },
          push: { particles_nb: 6 }
        }
      },
      retina_detect: true
    });
  } else {
    setTimeout(initParticles, 100);
  }
};

document.addEventListener('DOMContentLoaded', initParticles);
