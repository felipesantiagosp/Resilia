let semaforo = {
    cor: "verde"
}

let carro = {
    cor: "Azul",
    marca: "Volkswagen",
    ano: 2018,
    modelo: "Novo Gol",

    andar:  ()=> {
        if(semaforo.cor == "verde"){
            console.log ("Pode correr");
        } else if (semaforo.cor == "vermelho"){
            console.log ("PARE!");
        } else if (semaforo.cor == "amarelo"){
            console.log ("Reduza a velocidade, por favor");
        }
    }
}


semaforo.cor = "vermelho"
carro.andar()