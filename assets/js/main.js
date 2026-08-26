document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileNav');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var tableWraps = document.querySelectorAll('.table-wrap');
  tableWraps.forEach(function (wrap) {
    var shell = wrap.closest('.table-shell') || wrap;
    function updateFade() {
      var hasMore = wrap.scrollLeft + wrap.clientWidth < wrap.scrollWidth - 1;
      shell.classList.toggle('has-more-right', hasMore);
    }
    updateFade();
    wrap.addEventListener('scroll', updateFade, { passive: true });
    window.addEventListener('resize', updateFade);
  });
});
