var titulo = document.querySelector("#titulo");
var texto =  document.querySelector("#texto");
var botao1 = document.querySelector("#botao1");
var botao2 = document.querySelector("#botao2");

function iniciarJogo () {
    
    botao1.onclick = tela1;
    botao2.onclick = tela1;
}

function tela1() {
    /* O texto mostrado na mensagem. */
    titulo.textContent = "Bem vindo ao submundo";

    texto.textContent = "Você não lembra muito bem da noite anterior, porém você acordou nesse lugar estranho, não sabe ao certo onde está e só tem duas opções a seguir, são duas portas, uma azul e outra vermelha, você não sabe nada sobre o que tem atrás delas, você terá de escolher pela afinidade que possui por cada uma delas.";

   
    /* O texto no corpo dos botões. */
    botao1.innerText = "Porta Azul";
    botao2.innerText = "Porta vermelha";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = azul;
    botao2.onclick = azul;
}

function azul() {
    /* O texto mostrado na mensagem. */
    titulo.textContent = "Você escolheu a porta vermelha.... Ou azul";

    texto.textContent = "Bom, não importa, as duas levam ao mesmo lugar, foi apenas um teste, porém agora vamos começar o real desafio, a sua direita possui um machado e a sua esquerda uma pena. Com esse machado você pode realizar o que quiser, porém cada pedido seu, você matará uma pessoa, essa pessoa pode ser da sua família, mas também pode ser um total desconhecido, as estatísticas estão a seu favor. Já, com a escolha da pena, você não ganhará nada, apenas uma pena que PODERÁ te ajudar mais afrente.";

   
    /* O texto no corpo dos botões. */
    botao1.innerText = "Machado";
    botao2.innerText = "Pena";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = machado;
    botao2.onclick = pena;
}

function machado() {
    /* O texto mostrado na mensagem. */
    titulo.textContent = "Você pertence a esse lugar";

    texto.textContent = "Você é ruim liga apenas para a própria vida, portanto você está no lugar certo, você nunca sairá daqui!";

   
    /* O texto no corpo dos botões. */
    botao1.innerText = "VOLTAR";
    botao2.innerText = "VOLTAR";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = iniciarJogo;
    botao2.onclick = iniciarJogo;
}

function pena() {
    /* O texto mostrado na mensagem. */
    titulo.textContent = "Boa escolha, você está no caminha para sair daqui, pode passar pela porta";

    texto.textContent = "Ao passar pela porta você relembr um ponto da sua história 'Você estava em um carro antes de estar aqui'. Ao passar por uma porta você avista uma criança, porém não era uma criança normal, ela havia deformações ao longo de todo corpo, seu olhar era vazio e quanto mais você olhava mais fundo você mergulhava nele, de sua boca saia uma som, porém era indescritível, o som fazia você se sentir desesperado, sua cabeça doia. A cor do garoto era uma que você jamais tinha visto. Era evidente o sofrimento da criança, mas você tem a opção de salvá-la, porém isso pode custar sua vida e seu tempo ou basicamente seguir em frente e sair desse lugar o mais rápido possível. ";

   
    /* O texto no corpo dos botões. */
    botao1.innerText = "Ir até a criança";
    botao2.innerText = "Passar pela Porta";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = fim;
    botao2.onclick = machado;
}

function fim() {
    titulo.textContent = " Estamos no fim?";

    texto.textContent = "Ao passar pela porta você relembra um ponto da sua história 'Você estava em um carro antes de estar aqui'. Ao paAo aproximar da criança, os gritos agonizantes vão aumentando, do corpo dela um cheiro pútrido é lançado contra o ar, você sente a repugnância do local. Ao chegar até a infeliz alma, você não acredita no que está vendo, você conhecia essa criança, porém você não se lembra da onde. No momento que você percebe isso, ela a toca e um flashback começa a rodar na sua cabeça. Você estava dirigindo um carro, com três amigos, um na frente, junto com você, dois atrás. Você estavam numa velocidade surpreendentemente acima do permitido, evidentemente estavam bêbados. Você perde o controle do seu carro e acaba batendo em outro carro da frente, devido a velocidade, ambos os carros são massacrados. Após isso você não lembra de mais nada, porém na sua cabeça imagens do acidente são projetadas, todos seus amigos morreram, no carro que estava em sua frente havia uma familia, mãe, pai e três filhos. Desses, apenas um sobreviveu, porém estava coberto de sangue, que além do seu era de seu irmão. Uma das crianças estava destroçada, então você lembra onde você conhecia o garoto agonizando. Você havia o matado. Ao voltar do flashback, a criança muda seu olhar, o que antes passada um desespero e agonia, agora há um misto de prazer e raiva, assim ela diz para o seu assassino: Não importa o que você faça, você pertence a esse lugar.";

   
    /* O texto no corpo dos botões. */
    botao1.innerText = "Fim";
    botao2.innerText = "Fim";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = iniciarJogo;
    botao2.onclick = iniciarJogo;
}
iniciarJogo()