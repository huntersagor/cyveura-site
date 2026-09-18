(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  function closeMenu() {
    links.classList.remove('open');
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  // Products dropdown: click/keyboard support in addition to hover.
  var dd = document.querySelector('.dd');
  var ddBtn = dd.querySelector('.dd__btn');
  ddBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = dd.classList.toggle('open');
    ddBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function () {
    dd.classList.remove('open');
    ddBtn.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { dd.classList.remove('open'); closeMenu(); }
  });

  // Fade sections in as they scroll into view.
  if ('IntersectionObserver' in window) {
    var els = document.querySelectorAll('.prod, .mini, .why, .panel, .pipeline > div, .ai, .lane, .split__visual');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
