AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 70
});

const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  backTop.classList.toggle('show', window.scrollY > 600);
});

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Gallery filter
const filters = document.querySelectorAll('.filter');
const galleryItems = document.querySelectorAll('.gallery-item');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    filter.classList.add('active');

    const selected = filter.dataset.filter;
    galleryItems.forEach(item => {
      const visible = selected === 'all' || item.classList.contains(selected);
      item.classList.toggle('is-hidden', !visible);
    });
  });
});

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxVisual = document.getElementById('lightboxVisual');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxClose = document.getElementById('lightboxClose');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const visual = item.querySelector('.gallery-visual').cloneNode(true);
    lightboxVisual.innerHTML = '';
    lightboxVisual.appendChild(visual);
    lightboxTitle.textContent = item.dataset.title;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeLightbox();
});

// Tiny breed interaction
document.querySelectorAll('.tiny-btn[data-breed]').forEach(btn => {
  btn.addEventListener('click', () => {
    const breed = btn.dataset.breed;
    alert(`🐰 ${breed}\n\nNanti bagian ini bisa dihubungkan ke halaman detail, stok, pedigree, atau WhatsApp.`);
  });
});

// Soft mouse parallax on desktop
const heroArt = document.querySelector('.hero-art');
if (window.matchMedia('(pointer:fine)').matches) {
  heroArt.addEventListener('mousemove', e => {
    const r = heroArt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    heroArt.querySelector('.hero-card').style.transform =
      `rotate(2deg) translate(${x*10}px, ${y*10}px)`;
  });
  heroArt.addEventListener('mouseleave', () => {
    heroArt.querySelector('.hero-card').style.transform = 'rotate(2deg)';
  });
}
