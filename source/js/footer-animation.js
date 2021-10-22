(function () {
  const pageFooter = document.querySelector('.page-footer');
  const contactItems = document.querySelectorAll('.page-footer__social-item');

  contactItems.forEach(item => {
    item.addEventListener('mouseenter',
    function(evt) {
      let color = evt.target.getAttribute('data-color');
      pageFooter.style.backgroundColor = color;
    })
  })

  contactItems.forEach(item => {
    item.addEventListener('mouseleave',
    function(evt) {
      pageFooter.style.backgroundColor = '#ffffff';
    })
  })
})()
