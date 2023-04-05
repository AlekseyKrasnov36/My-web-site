
item1.addEventListener('click', function () {
  item1.classList.add('active-item')
  item2.classList.remove('active-item')
  item3.classList.remove('active-item')
  item4.classList.remove('active-item')

  slide1.classList.remove('active-slide')
  slide2.classList.add('active-slide')
  slide3.classList.add('active-slide')
  slide4.classList.add('active-slide')
})
item2.addEventListener('click', function () {
  item1.classList.remove('active-item')
  item2.classList.add('active-item')
  item3.classList.remove('active-item')
  item4.classList.remove('active-item')

  slide1.classList.add('active-slide')
  slide2.classList.remove('active-slide')
  slide3.classList.add('active-slide')
  slide4.classList.add('active-slide')
})
item3.addEventListener('click', function () {
  item1.classList.remove('active-item')
  item2.classList.remove('active-item')
  item3.classList.add('active-item')
  item4.classList.remove('active-item')
  
  slide1.classList.add('active-slide')
  slide2.classList.add('active-slide')
  slide3.classList.remove('active-slide')
  slide4.classList.add('active-slide')
})
item4.addEventListener('click', function () {
  item1.classList.remove('active-item')
  item2.classList.remove('active-item')
  item3.classList.remove('active-item')
  item4.classList.add('active-item')

  slide2.classList.add('active-slide')
  slide1.classList.add('active-slide')
  slide3.classList.add('active-slide')
  slide4.classList.remove('active-slide')
})

item4.classList.add('active-item')
slide2.classList.add('active-slide')
slide3.classList.add('active-slide')
slide1.classList.add('active-slide')
