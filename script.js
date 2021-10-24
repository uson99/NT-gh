const navItems = document.querySelectorAll('.trip__nav ul li')

navItems.forEach(li => li.addEventListener('click', () => {
    navItems.forEach(sultan => sultan.classList.remove('is-active'))
    li.classList.add('is-active')
}))



var element = document.getElementById('slider');
window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: 3000,
  draggable: true,
  autoRestart: false,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {},
});









const buttonsNext = document.querySelectorAll('.next')
const buttonsPrev = document.querySelectorAll('.prev')

buttonsNext.forEach(next => {
  next.addEventListener('click', () => {
    mySwipe.next()
  })
})

buttonsPrev.forEach(prev => {
  prev.addEventListener('click', () => {
    mySwipe.prev()
  })
})