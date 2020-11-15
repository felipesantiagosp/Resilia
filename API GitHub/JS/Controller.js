//ponto de entrada
class Controller{

    //Não precisa de atributos 
    constructor(){
        console.log("controller foi criada!");
    }

    //Função para adicionar o usuário >>> nesse método tem toda parte de controle do controller
    adicionaUsuario(){
        console.log("Eu vou adicionar um usuário")

        //Criar model para buscar os dados;

        let user = new UserModel();
        user.buscarUsuario();

        //passando os dados para a view
        //passando a model pra view
        let view = new UserView();
        view.mostraNaTela(user);
    }

    adicionaRepo(){
        console.log("Eu vou adicionar um usuário")

        //Criar model para buscar os dados;

        let user = new UserModel();
        user.buscarRepositorio();

        //passando os dados para a view
        //passando a model pra view
        let view = new UserView();
        view.mostraNaTela(user);
    }

}

let controller = new Controller(); 

document.querySelector(".myButton").addEventListener("click", controller.adicionaUsuario);

