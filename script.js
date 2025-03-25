function verificar() {
    let ano = Number (window.document.getElementById('ano').value)
    let getSexo = window.document.getElementsByName ('sexo')
    let getYear = new Date;
    let thisYear = getYear.getFullYear();
    let idade = thisYear - ano;
    let textoResposta = window.document.getElementById('texto');
    let imagemIdade = window.document.getElementById ('imagem');
    let genero = '';

    if (getSexo[0].checked){
        genero = 'M'
    } else {
        genero = 'F'
    }
console.log(genero)


 switch (genero){
     case 'M':
     if (idade > 125 || idade < 1){
    textoResposta.innerText = "Erro de idade. Você não existe (ou não deveria kkkkkkk)"


 }else if (idade < 125 && idade >= 65){
    textoResposta.innerText = `O Senhor é um idoso de ${idade} anos`;
    imagemIdade.style.display = 'block'
    imagemIdade.style.margin = 'auto'
    imagemIdade.src="idoso.jpg";
} else if (idade < 65 && idade >= 18){
    textoResposta.innerText = `O Senhor é um homem adulto de ${idade} anos`;
    imagemIdade.style.display = 'block'
    imagemIdade.style.margin = 'auto'
    imagemIdade.src="homem.jpg";
}else if (idade < 18 && idade >= 14){
    textoResposta.innerText = `Você é um adolescente de ${idade} anos!`;
    imagemIdade.style.display = 'block'
    imagemIdade.style.margin = 'auto'
    imagemIdade.src="adolescentemasc.jpg";
}else if( idade < 14 && idade > 2){
    textoResposta.innerText = `Você é uma criança de ${idade} anos!`;
    imagemIdade.style.display = 'block'
    imagemIdade.style.margin = 'auto'
    imagemIdade.src="criancamenino.jpg";
} else if (idade <= 2 ){
    textoResposta.innerText = `Você é um bebe de ${idade} anos!`;
    imagemIdade.style.display = 'block'
    imagemIdade.style.margin = 'auto'
    imagemIdade.src="bebemenino.png";
}
break
    case 'F':
    if (idade > 125 || idade < 1){
   textoResposta.innerText = "Erro de idade. Você não existe (ou não deveria kkkkkkk)"


}else if (idade < 125 && idade >= 65){
   textoResposta.innerText = `A senhora é uma idosa de ${idade} anos`;
   imagemIdade.style.display = 'block'
   imagemIdade.style.margin = 'auto'
   imagemIdade.src="idosa.jpeg";
} else if (idade < 65 && idade >= 18){
   textoResposta.innerText = `A Senhora é uma mulher adulta de ${idade} anos`;
   imagemIdade.style.display = 'block'
   imagemIdade.style.margin = 'auto'
   imagemIdade.src="mulher.jpg";
}else if (idade < 18 && idade >= 14){
   textoResposta.innerText = `Você é um adolescente de ${idade} anos!`;
   imagemIdade.style.display = 'block'
   imagemIdade.style.margin = 'auto'
   imagemIdade.src="adolescentefem.jpg";
}else if( idade < 14 && idade > 2){
   textoResposta.innerText = `Você é uma criança de ${idade} anos!`;
   imagemIdade.style.display = 'block'
   imagemIdade.style.margin = 'auto'
   imagemIdade.src="criancamenina.jpg";
} else if (idade <= 2 ){
   textoResposta.innerText = `Você é um bebe de ${idade} anos!`;
   imagemIdade.style.display = 'block'
   imagemIdade.style.margin = 'auto'
   imagemIdade.src="bebemenina.jpg";
}
break
}
}