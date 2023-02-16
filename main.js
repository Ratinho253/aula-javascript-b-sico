'use strict'


const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class = "aluno_nome"> ${nome}</h2> 
                         <span class = "nota_aluno">${nota}</span>`

    //String :
    //  ""
    //  ''
    //  ``

    if (nome == '' || nota == ''){
        alert('Vazio')
        
    }else if (nota >10 || nota <0){
        alert('Digite um valor válido')
    }else if (isNaN(nota)){
        alert('Digite somente notas')
    }else if (Number(nome)){
        alert('digite apenas letras')
    }else {
        if (nota < 5) {
            novaDiv.classList.add('vermelha')
        } else if (nota >= 5) {
            novaDiv.classList.add('verde')
        }

        container.appendChild(novaDiv)
    }

    
}

const handleClik = () => {
    const nome = prompt('Digite o nome do aluno')
    const nota = prompt('Digite a nota ?')
    adicionarCard(nome, nota)
}
adicionar.addEventListener('click', handleClik)