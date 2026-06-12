// Nav turns solid black on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// Sidebar open / close
var menuBtn  = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');
var sidebar  = document.getElementById('sidebar');
var dim      = document.getElementById('dim');

function openSidebar() {
  sidebar.classList.add('open');
  dim.classList.add('on');
  sidebar.setAttribute('aria-hidden', 'false');
  menuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  dim.classList.remove('on');
  sidebar.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
dim.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeSidebar();
});

// Close sidebar when a nav link is clicked
sidebar.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeSidebar);
});