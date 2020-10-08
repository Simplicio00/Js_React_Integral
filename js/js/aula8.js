function buscar(event) {
    event.preventDefault();
    const URL = "https://jsonplaceholder.typicode.com/todos/2";
    fetch(URL)
    .then(resposta => resposta.json())
    .then(data => mostrarResposta(data))    
    .catch(erro => console.error(erro));
}

function mostrarResposta(data) {
    const mensagem = 
        `USERID: ${data.userId},
        ID: ${data.id},
        Title: ${data.title},
        completed: ${data.completed}`;
        alert(mensagem);
}