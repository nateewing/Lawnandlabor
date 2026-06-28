// Mobile menu toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      });
    });
  }

  // Current year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Light form validation hint
  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      var required = [
        ['#firstName', 'first name'],
        ['#lastName', 'last name'],
        ['#email', 'email'],
        ['#phone', 'phone number'],
        ['#address', 'project address'],
        ['#service', 'service'],
        ['#timing', 'timeframe']
      ];
      var missing = null;
      for (var i = 0; i < required.length; i++) {
        var el = form.querySelector(required[i][0]);
        if (el && !el.value.trim()) { missing = { el: el, label: required[i][1] }; break; }
      }
      if (missing) {
        e.preventDefault();
        var note = document.getElementById('formNote');
        if (note) {
          note.textContent = 'Please add your ' + missing.label + ' so we can reach you.';
          note.style.color = '#b1402f';
        }
        missing.el.focus();
      }
    });
  }
})();
