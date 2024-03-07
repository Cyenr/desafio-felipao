// Declaração de lista de heróis
let heroi = ['Superman', 'Batman', 'Mulher-Maravilha', 'Homem de Ferro', 'Capitão América', 'Hulk', 'Thor', 'Flash', 'Wolverine', 'Spider-Man'];
// Escolha de um herói aleatório
let heroiAleatorio = Math.floor(Math.random() * heroi.length);
// Nome do herói aleatório
let heroiEscolhido = heroi[heroiAleatorio];

// Declaração de XP total
let nivel = ' '
// Declaração de XP (aleatório) do personagem
let xp = Math.floor(Math.random() * 10002) + 1;

// Estrutura do código
switch(true){
    case (xp <= 1000):
        nivel = 'Ferro';
        break;
    case (xp <= 1001 && xp <= 2000):
        nivel = 'Bronze';
        break;
    case (xp >= 2001 && xp <= 5000):
        nivel = 'Prata';
        break;
    case (xp >= 5001 && xp <= 7000):
        nivel = 'Ouro';
        break;
    case (xp >= 7001 && xp <= 8000):
        nivel = 'Platina';
        break;
    case (xp >= 8001 && xp <= 9000):
        nivel = 'Ascendente';
        break;
    case (xp >= 9001 && xp <= 10000):
        nivel = 'Imortal';
        break;
    case (xp >= 10001):
        nivel = 'Radiante';
        break;
}

//Output
console.log('O herói, ou heroína, da vez é: ' + heroiEscolhido + '. Seu XP total é de ' + xp + ' e seu nível é ' + nivel);