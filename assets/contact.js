document.querySelectorAll('.email').forEach(function (link) {
  var address = atob(link.dataset.user) + '@' + atob(link.dataset.domain);
  link.href = 'mailto:' + address;
  if (link.dataset.show === 'address') {
    link.textContent = address;
  }
});
