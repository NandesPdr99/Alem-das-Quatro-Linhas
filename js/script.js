
const camisas = [
    {
        ano: "1958",
        titulo: "A primeira estrela",
        descricao: "A camisa da primeira conquista mundial do Brasil, na Copa da Suécia.",
        imagem: "img/camisa 1958.webp"
    },
    {
        ano: "1992",
        titulo: "O Bicampeonato",
        descricao: "Com Pelé lesionado, Garrincha assumiu o protagonismo e liderou o Brasil rumo ao bicampeonato mundial em 1962, com atuações históricas.",
        imagem: "img/camisa 1962.webp"
    },
    {
        ano: "1970",
        titulo: "O tricampeonato",
        descricao: "A camisa usada pela geração de Pelé e Jairzinho na histórica conquista do México.",
        imagem: "img/camisa 1970.jpg"
    },
    {
        ano: "1994",
        titulo: "O tetra chegou!",
        descricao: "Com Romário e Bebeto, o Brasil conquistou sua quarta Copa do Mundo nos Estados Unidos.",
        imagem: "img/camisa 1994.jpg"
    },
    {
        ano: "2002",
        titulo: "O pentacampeonato",
        descricao: "A camisa da conquista no Japão e na Coreia do Sul, com Ronaldo Fenômeno como protagonista.",
        imagem: "img/camisa 2002.jpg"
    },
];

let camisaAtual = 0;

const imagem = document.getElementById("imagemCamisa");
const ano = document.getElementById("anoCamisa");
const titulo = document.getElementById("tituloCamisa");
const descricao = document.getElementById("descricaoCamisa");
const contador = document.getElementById("contadorCamisa");

function mostrarCamisa() {
    const camisa = camisas[camisaAtual];

    imagem.src = camisa.imagem;
    imagem.alt = "Camisa da Seleção Brasileira de " + camisa.ano;
    ano.textContent = camisa.ano;
    titulo.textContent = camisa.titulo;
    descricao.textContent = camisa.descricao;
    contador.textContent = (camisaAtual + 1) + " de " + camisas.length;
}

document.getElementById("btnProxima").addEventListener("click", function () {
    camisaAtual++;

    if (camisaAtual >= camisas.length) {
        camisaAtual = 0;
    }

    mostrarCamisa();
});

document.getElementById("btnAnterior").addEventListener("click", function () {
    camisaAtual--;

    if (camisaAtual < 0) {
        camisaAtual = camisas.length - 1;
    }

    mostrarCamisa();
});

mostrarCamisa();
