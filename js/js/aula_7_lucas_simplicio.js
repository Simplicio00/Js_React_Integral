
//método for 
var pessoas = [ 
                pessoa = {nome:'José Pereira', idade:17}, 
                pessoa2 = {nome:'Lucas Simplício', idade: 22} ];

// for (var index = 0; index < pessoas.length; index++) {
//     console.log("Contagem:"+index.toString());
// }


//método foreach
pessoas.forEach(function(pessoa){
    console.log(pessoa);
})


//função
function imprimeNome(nome) { console.log("Nome impresso: "+nome)};


//for each
pessoas.forEach(imprimeNome);


pessoas.forEach(function(pessoa){
    pessoas.push('Jorge');
    console.log(pessoa);
})



//função da idade
var alunosDeMaior = [];

for(var i = 0; i < pessoas.length; i++){
    if (pessoas[i].idade >= 18) {
        alunosDeMaior.push(pessoas[i])
    }
}

console.log("Maior de idade: "+alunosDeMaior);

