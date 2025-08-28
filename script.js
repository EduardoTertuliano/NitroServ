// Toast de boas-vindas
function showToast() {
  const toast = document.getElementById('welcomeToast');
  setTimeout(() => toast.classList.add('show'), 2000);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => (toast.style.display = 'none'), 500);
  }, 8000);
}

function closeToast() {
  document.getElementById('welcomeToast').classList.remove('show');
  setTimeout(() => {
    document.getElementById('welcomeToast').style.display = 'none';
  }, 500);
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// Animações no scroll
function animateOnScroll() {
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 150) {
      element.classList.add('animated');
    }
  });
}

// Navbar dinâmica
function updateNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.style.background = window.scrollY > 50
    ? 'rgba(26, 26, 26, 0.98)'
    : 'rgba(26, 26, 26, 0.95)';
}

window.addEventListener('load', showToast);
window.addEventListener('scroll', () => {
  animateOnScroll();
  updateNavbar();
});
animateOnScroll();

// Toast notification
function showToast() {
  const toast = document.getElementById('welcomeToast');

  // Aparece após 2 segundos
  setTimeout(() => {
    toast.classList.add('show');
  }, 2000);

  // Some após 8 segundos (com animação), e depois remove da tela
  setTimeout(() => {
    toast.classList.remove('show');
    
    // Aguarda a animação terminar antes de esconder completamente
    setTimeout(() => {
      toast.style.display = 'none';
    }, 500);
    
  }, 8000);
}

function closeToast() {
  document.getElementById('welcomeToast').classList.remove('show');
  setTimeout(() => {
    document.getElementById('welcomeToast').style.display = 'none';
  }, 500);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animated');
    }
  });
}

// Navbar background on scroll
function updateNavbar() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(26, 26, 26, 0.98)';
  } else {
    navbar.style.background = 'rgba(26, 26, 26, 0.95)';
  }
}

// Event listeners
window.addEventListener('load', showToast);
window.addEventListener('scroll', () => {
  animateOnScroll();
  updateNavbar();
});

// Initial animation check
animateOnScroll();
