document.querySelectorAll('.email').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    var address = atob(element.dataset.user) + '@' + atob(element.dataset.domain);
    if (element.dataset.show === 'address') {
      var link = document.createElement('a');
      link.href = 'mailto:' + address;
      link.textContent = address;
      element.replaceWith(link);
    } else {
      window.location.href = 'mailto:' + address;
    }
  });
});