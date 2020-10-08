//aula 3 - exercícios

var pessoa = {
    nome:'Maristela',
    sobrenome:'De Souza Lima',
    genero:'Feminino',
    idade:17,
    altura:1.75,
    peso:60,
    andando:true,
    caminhouqtosmetros:50
}


function FazerAniversario(pessoa){
    pessoa.idade+1;
}
console.log(FazerAniversario(pessoa))


function Andar(param = Number, pessoa){
    pessoa.caminhouqtosmetros = param
    pessoa.andando=true
    console.log("Andou " + pessoa.caminhouqtosmetros + "metros")
}
console.log(Andar(5,pessoa));


function Parar(pessoa){
    if(pessoa.andando === true) return pessoa.andando = false
    console.log(pessoa.nome+ " parou de andar")
}
console.log(Parar(pessoa));


function NomeCompleto(pessoa){
    console.log("Olá, meu nome completo é: "+pessoa.nome+" "+pessoa.sobrenome)
}
console.log(NomeCompleto(pessoa));


function MostrarIdade(pessoa){
    console.log("Olá, a minha idade é: "+pessoa.idade)
}
console.log(MostrarIdade(pessoa));


function MostrarPeso(pessoa){
    console.log("Olá, meu peso em KG é: "+pessoa.peso)
}

console.log(MostrarPeso(pessoa))



function MostrarAltura(pessoa){
    console.log("Olá, a minha estatura é: "+pessoa.altura)
}

console.log(MostrarAltura(pessoa))



function Apresentacao(pessoa){
    var artigo,anosing, metrosing;
    pessoa.genero === "Masculino" ? artigo = "o" : artigo = "a"
    pessoa.idade === 1 ? anosing = "ano" : anosing = "anos"
    pessoa.caminhouqtosmetros === 1 ? metrosing = "metro" : metrosing = "metros"

    if (pessoa != null) 
        return console.log("Olá, eu sou "+artigo+" "+pessoa.nome+ " "+ pessoa.sobrenome+
        ", Tenho "+pessoa.idade+" anos, de altura: "+pessoa.altura+", Meu peso:"+pessoa.peso+
        ", e só hoje, eu já caminhei "+pessoa.caminhouqtosmetros +" "+metrosing)
}

console.log(Apresentacao(pessoa))