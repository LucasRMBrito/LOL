const campeaoImg = document.querySelector(".personagem");
const fundo = document.querySelector('.body');
const nome = document.querySelector('#nome');
const titulo = document.querySelector('#titulo');
const ataque = document.querySelector('#ataque')
const defesa = document.querySelector('#defesa')
const magia = document.querySelector('#magia')
const dificuldade = document.querySelector('#dificuldade')
const historia = document.querySelector('#historia')
const poderes = document.querySelector('#poderes')
const dicas = document.querySelector('#dicas')
const form = document.querySelector('.form')
const form2 = document.querySelector('.form2')
const input = document.querySelector('.pesquisa')




const mostrarCampeao = async (personagem) => {
    const APIlol = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion/${personagem}.json`);
    const linkImgLoading = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${personagem}_0.jpg`
    const dados = await APIlol.json();
    const lista = dados.data[personagem]

    console.log('esse >',lista);
    console.log(lista.spells);

    let listaPoderes = []
    let listaPoderesD = []

    for (i in lista.spells) {
        listaPoderes.push(lista.spells[i].name);
    }

    for (i in lista.spells) {
        listaPoderesD.push(lista.spells[i].description)
    }

    campeaoImg.src = linkImgLoading
    fundo.style.background = `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${personagem}_1.jpg)`;
    fundo.style.backgroundRepeat = 'no-repeat';
    fundo.style.backgroundSize = 'cover';
    fundo.style.overflow = 'hidden';
    nome.innerHTML = lista.name
    titulo.innerHTML = lista.title
    ataque.innerHTML = `Ataque : ${lista.info.attack}`
    defesa.innerHTML = `Defesa : ${lista.info.defense}`
    magia.innerHTML = `Magia : ${lista.info.magic}`
    dificuldade.innerHTML = `Dificul. : ${lista.info.difficulty}`
    historia.innerHTML = `<center>${lista.lore}</center>`
    poderes.innerHTML = `<center>Poderes :<br/></center> ${listaPoderes}`

    input.value = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    mostrarCampeao(input.value);
});

function atualizarSelect () {
    let select = document.querySelector('#escolha');
    let optionValue = select.options[select.selectedIndex];

    let texto = optionValue.text;
    mostrarCampeao(texto)

}
atualizarSelect();
