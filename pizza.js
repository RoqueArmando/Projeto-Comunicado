// salvar como avatar2.js
function mudaImagem(titulo , nomeArqImagemGrande){
// Criar um objeto que referencia a imagem grande
var objImgGrande=document.getElementById("imgGrande")
// Atualizar sua imagem conforme o nome do arquivo informado
// Necessário informar o caminho correto do arquivo (pasta imgs)
objImgGrande.src= "imgs/"+nomeArqImagemGrande
// Colocar o título na imagem grande
objImgGrande.title=titulo
}
