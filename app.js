
(function () {
  'use strict';

  // Navigation fluide entre les sections
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      var target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Année automatique dans le pied de page
  var footer = document.querySelector('footer');

  if (footer) {
    var year = document.createElement('span');
    year.className = 'mono';
    year.textContent = new Date().getFullYear();

    footer.appendChild(year);
  }

})();
