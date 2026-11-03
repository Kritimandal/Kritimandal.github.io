(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');

  function current() {
    return root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function label() {
    if (button) button.setAttribute('aria-label', current() === 'dark' ? 'Use light theme' : 'Use dark theme');
  }

  if (button) {
    button.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
    label();
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
