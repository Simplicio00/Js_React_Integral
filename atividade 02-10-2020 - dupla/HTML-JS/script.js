async function requestApi(){
    try{
        const url = "http://localhost:5000/api/filmes"
        const request = await fetch(url)
        const response = await request.json()
        
        return response
    } catch(error){
        throw new Error(error)
    }
}

async function mostrarFilmes(){
    try{
        var novotitulo = document.getElementById("filme")


        const filmes = await requestApi()

        filmes.forEach(filme => {
            novotitulo.append("- " + filme.titulo + " - ")
        });
    } catch(error){
        throw new Error(error)
    }
}