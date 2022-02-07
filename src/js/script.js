const projeto = document.querySelectorAll('.projeto')
const seta_voltar = document.querySelector('.seta-voltar')
const seta_avancar = document.querySelector('.seta-avancar')
const toggleBar = document.querySelector('.toggle')
const toggleList = document.querySelector('ul')

const lastSlide = projeto.length -1
let valorIndex = 0

toggleBar.addEventListener('click', () => {
  toggleBar.classList.toggle('active')
  toggleList.classList.toggle('active')
})

manipulateSlides = (currentIndex) => {

  projeto.forEach(item => item.classList.remove('mostrar'))
  projeto[currentIndex].classList.add('mostrar')

}

seta_voltar.addEventListener('click', () => {

  const currentIndex = valorIndex === 0 ? valorIndex = lastSlide : --valorIndex
  
  manipulateSlides(currentIndex)

})

seta_avancar.addEventListener('click', () => {

  const currentIndex = valorIndex === lastSlide ? valorIndex = 0 : ++valorIndex
  
  manipulateSlides(currentIndex)

})