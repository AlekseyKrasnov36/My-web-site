slide1.classList.add('active')
darkStyle.classList.add('opacityOn')
slide1.addEventListener('click', function () {
  document.getElementById('title').scrollIntoView({block: "end", inline: "nearest",behavior: "smooth"})
  slide1.classList.add('active');
  slide2.classList.remove('active');
  slide3.classList.remove('active');
  slide4.classList.remove('active');
})
slide2.addEventListener('click', function () {
  document.getElementById('sectionSkill').scrollIntoView({block: "start", inline: "nearest",behavior: "smooth"})
  slide1.classList.remove('active');
  slide2.classList.add('active');
  slide3.classList.remove('active');
  slide4.classList.remove('active');
})
modalWindowActive.addEventListener('click', function () {
  darkStyle.classList.remove('opacityOn')
  body.classList.add('overflowOn')
  nav.classList.add('opacityOn')
})
exitBtn.addEventListener('click', function(){
  darkStyle.classList.add('opacityOn')
  body.classList.remove('overflowOn')
  nav.classList.remove('opacityOn')
})

slide3.addEventListener('click', function () {
  document.getElementById('library').scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"})
  slide1.classList.remove('active');
  slide2.classList.remove('active');
  slide3.classList.add('active');
  slide4.classList.remove('active');
})