//Model lida com a busca de dados do usuário

class UserModel{
    constructor(){
        console.log("Model foi criada!")

        this._nome = "";
        this._usuario = "";
        this._repositorio = "";
        this._carinha = "";
        
    }

    //A request é feita no model 
    buscarUsuario(){
        console.log("Buscando o usuário")

        //Request
        let pedido = new XMLHttpRequest();

        //O QUE fazer quando a requisição chegar com a resposta
        
        pedido.addEventListener("load", () =>{

            //Conferindo a resposta 

            try {
                if (pedido.status == 200){
                    let dados = this._processaResponse(pedido.responseText);
                    this._atualiza(dados);
                    let repositorio = this._processaResponse(pedido.responseText).repos_url

                    console.log(repositorio);
                }
            } catch (error) {

                Error(error)
                
            }
        })


        //Configurando a request 

        pedido.open("GET", `https://api.github.com/users/${document.querySelector("#input-text").value}`, false)

        //mandando a request 

        pedido.send();
    }   


    buscarRepositorio(){
        console.log("Buscando o Repositorio")

        //Request
        let pedido = new XMLHttpRequest();

        //O QUE fazer quando a requisição chegar com a resposta
        
        pedido.addEventListener("load", () =>{

            //Conferindo a resposta 

        try {
            if (pedido.status == 200){

                let dadosRepositorio = JSON.parse(request.responseText)
               
                this._repositorios = dadosRepositorio
                console.log(this._repositorios)
            }
        } catch (error) {

            Error(error)
            
        }
    })


    //Configurando a request 

    pedido.open("GET", `https://api.github.com/users/${document.querySelector("#input-text").value}/repos`, false)

    //mandando a request 

    pedido.send();
}

    _processaResponse(responseString){
        console.log("Model: Processando response...");

        let response = JSON.parse(responseString);

        return response
    }

    _atualiza(dados){
        console.log("Model: Atualizando os dados");

        this._usuario = dados.login;
        this._nome = dados.name;
        this._repositorio = dados.rep;
        this._carinha = dados.avatar_url;
    }

    //Metodos para devolver o usuário;

    getNome(){
        return this._nome
    }

    getLogin(){
        return this._usuario
    }

    getImg(){
        return this._carinha
    }
}