const projeto = document.querySelectorAll('.projeto')
const seta_voltar = document.querySelector('.seta-voltar')
const seta_avancar = document.querySelector('.seta-avancar')
let projetoAtual = 0

esconder = () => {

  projeto.forEach(item => {
    item.classList.remove('mostrar')
  })

}

mostrar = () => {

  projeto[projetoAtual].classList.add('mostrar')

}

seta_voltar.addEventListener('click', () => {

  if(projetoAtual === 0){
    return
  }
  -- projetoAtual
  
  esconder()
  mostrar()

})

seta_avancar.addEventListener('click', () => {

  if(projetoAtual === projeto.length -1){
    return
  }
  projetoAtual ++
  
  esconder()
  mostrar()
console.log(projeto)
})