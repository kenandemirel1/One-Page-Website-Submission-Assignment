const backdrop = document.getElementById('backdrop')
const big = document.getElementById('big')
const zooms = document.querySelectorAll('.zoom')

zooms.forEach(img => {
  img.onclick = () => {
    big.src = img.src
    backdrop.style.display = 'flex'
  }
})

backdrop.onclick = () => {
  backdrop.style.display = 'none'
}