function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("dark") 

  //if (html.classList.contains("dark")) {
  //html.classList.remove('dark')
  // } else {
  //  html.classList.add("dark")
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('dark')) {
    // se tiver light mode, adicionar a imagem dark
    img.setAttribute('src', './Foto Carol.jpeg')
   
  } else {
    // se tiver sem dark mode, manter a imagem normal
    img.setAttribute('src', './WhatsApp Image 2024-02-22 at 11.06.54.jpeg')
  }


  
  
}
