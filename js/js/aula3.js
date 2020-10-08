
sowen = 0;

while(sowen != 11){
    console.log('Contagem em: '+sowen+' como previsto.')
    sowen++

    if(sowen == 11) console.log(typeof(sowen))
    
}

var pessoa = {
    nome: 'fulano',
    sobrenome: 'da silva',
}

var pessoas = [ pessoa = {nome:'joão', sobrenome:'silva'}, 
                pessoa2 = {nome:'zé', doadordesangue:true} 
              ];

pessoas.forEach(pessoa => {
    console.log(pessoa.nome, pessoa.sobrenome, pessoa.doadordesangue)
});


var undef = undefined;
var nulo = null;

1 < 2 ? console.log("1 é menor que 2") : console.log("1 não é menor que 2")