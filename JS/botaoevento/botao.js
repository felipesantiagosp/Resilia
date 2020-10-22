var body = document.querySelector("body");
var botao = document.createElement("button");
var div = document.createElement("div")
body.appendChild(div);
div.appendChild(botao)

botao.textContent = "Eae man";

botao.addEventListener("mouseup", function(){
    botao.textContent = "clicou pq?"
    document.botao.style.backgroundColor("black")
})

botao.addEventListener("mousemove", function(){
    botao.textContent = "Sai fora irmão"
})

botao.addEventListener("mouseout", function(){
    botao.textContent = "Eae man"
})



div.classList.add("estilo");
botao.classList.add("botao")