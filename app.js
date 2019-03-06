let usuarioPlacar = 0;
let computadorPlacar = 0;
const usuarioPlacar_span = document.getElementById("usuarioPlacar");
const computadorPlacar_span = document.getElementById("computadorPlacar");
const resultado_div = document.querySelector(".resultado");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div = document.getElementById("tesoura");


function usuarioGanha(escolhaUsuario, escolhaComputador){
    usuarioPlacar++;
    usuarioPlacar_span.innerHTML = usuarioPlacar;
    resultado_div.innerHTML = escolhaUsuario+" derrota "+escolhaComputador+", venceste!";
    console.log("você: "+escolhaUsuario +" computador: "+escolhaComputador+" resultado: veceste");
}
function usuarioPerde(escolhaUsuario, escolhaComputador){
    computadorPlacar++;
    computadorPlacar_span.innerHTML = computadorPlacar;
    resultado_div.innerHTML = escolhaComputador+" derrota "+escolhaUsuario+", perdeste!";
    console.log("você: "+escolhaUsuario +" computador: "+escolhaComputador+" resultado: perdeste");
}
function usuarioEmpata(escolhaUsuario, escolhaComputador){
    resultado_div.innerHTML = escolhaComputador+" empata com "+escolhaUsuario+"!";
    console.log("você: "+escolhaUsuario +" computador: "+escolhaComputador+" resultado: empataste");
}

function getEscolhaComputador(){
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const numeroAleatorio = Math.floor(Math.random()*3);
    return escolhas[numeroAleatorio];
}

function game(escolhaUsuario){
    const escolhaComputador = getEscolhaComputador();
    switch(escolhaUsuario+escolhaComputador){
        case "pedratesoura":
        case "papelpedra":
        case "tesourapapel":
            usuarioGanha(escolhaUsuario, escolhaComputador);
            break;
        case "tesourapedra":
        case "pedrapapel":
        case "papeltesoura": 
            usuarioPerde(escolhaUsuario, escolhaComputador);
            break; 
        case "pedrapedra":
        case "papelpapel":
        case "tesouratesoura":
            usuarioEmpata(escolhaUsuario, escolhaComputador);
            break;       
    }
}

function main(){
    pedra_div.addEventListener('click', function(){
        game("pedra");
    })

    papel_div.addEventListener('click', function(){
        game("papel");
    })

    tesoura_div.addEventListener('click', function(){
        game("tesoura");
    })

}

main();