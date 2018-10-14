$('.remove-hash').hide()

$('[title][id]').click(function(e) {
  $('.remove-hash').show()
  window.location.hash = '#' + e.target.id;
});
$('.remove-hash').click(function(e) {
  $('.remove-hash').hide()
  window.location.hash = '';
});

function setLink(link) {
  var url = new URL(link)
  var keys = ['protocol', 'hostname', 'pathname', 'search', 'hash']
  keys.forEach(function (key) {
    document.getElementById(key).textContent = url[key]
  })
  var $host = document.getElementById('host')
  if (url.port) {
    document.getElementById('port').textContent = url.port
    $host.classList.add('has-port')
  } else {
    $host.classList.remove('has-port')
  }
  console.log(url);
}
