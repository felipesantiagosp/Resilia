let butaum = document.querySelector(".myButton");
let input = document.querySelector("#input-text")

let pedido = new XMLHttpRequest();

butaum.addEventListener("click", function(){
    let inputValor= input.value

    pedido.onreadystatechange = function(dados){
        if ( this.status == 200 && this.readyState == 4 )
        {
            let text = this.responseText;
            let textJson = JSON.parse(text);
            let login = textJson.login
            let nome = textJson.name

            let div = document.querySelector("#quadrado");
            div.innerHTML = `<p>${nome}, ${login}</p>`
            console.log(login, nome)
            
        
        }

    }
 pedido.open("GET", `https://api.github.com/users/${inputValor}`);
    pedido.send();
})
