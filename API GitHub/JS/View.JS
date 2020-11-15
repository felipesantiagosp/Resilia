class UserView{
    constructor(){
        console.log("Fui criado");
    }
        mostraNaTela(model){
            let quadrado = document.querySelector("#quadrado");
            

            quadrado.innerHTML = `<img src="${model.getImg()}" width="200px"><p>${model.getNome()}, ${model.getLogin()}</p> <button class="voltar">voltar</button>`

            document.querySelector(".voltar").addEventListener("click", function(){
                let quadrado = document.querySelector("#quadrado");
                        
                console.log("fui clicado")
            
                        quadrado.innerHTML = ` <img src="imagens/logo.png" alt="logo" width="200px">
                        <input type="text" class="input" id="input-text" autofocus placeholder="Digite o User">
                        <input type="button" value="Enviar" class="myButton" class="input">`
            
            
            })
        }

        
    
}