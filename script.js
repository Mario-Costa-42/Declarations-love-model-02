document.addEventListener("DOMContentLoaded", function() {
  const song = document.getElementById('song01');
  song.volume = 0.9;
  song.play().catch(() => {}); // evita erro se autoplay for bloqueado
});

const envelope = document.getElementById('envelope01');

const etapas = [
  '<img src="/assets/CimaFechado.png" alt="Cima Fechado">',
  `<div>
  <br><br><br><br>
    <h1>Título da sua carta virtual aqui</h1>
    <p style="color: magenta;">Escreva uma mensagem para o seu bem com todo carinho aqui, você pode pedir 
    por outras mudanças no site também😉</p>
  </div>`,
  '<img src="/assets/CimaAberto.png" alt="Cima Aberto">',
  '<img src="/assets/DebaixoFechado.png" alt="Envelope Fechado">',
  '<img src="/assets/photo02.jpg" alt="Foto">',
  '<img src="/assets/DebaixoAberto.png" alt="Envelope Aberto">',
  '<img src="/assets/LoveYou.png" alt="Eu te Amo!💖">'
];

let index = 0;
let trocando = false;

// partes que terão transição suave (fade)
const transicoesEspeciais = [0, 3];

function trocarImagem() {
  if (trocando) return;
  trocando = true;
  document.getElementById('novideo').play();

  const precisaDeTransicao = transicoesEspeciais.includes(index);

  if (precisaDeTransicao) {
    envelope.style.opacity = 0;

    envelope.addEventListener('transitionend', function mudarEtapa() {
      index = (index + 1) % etapas.length;
      envelope.innerHTML = etapas[index];

      envelope.style.opacity = 1;
      envelope.removeEventListener('transitionend', mudarEtapa);

      envelope.addEventListener('transitionend', function liberarClique() {
        trocando = false;
        envelope.removeEventListener('transitionend', liberarClique);
      });
    });
  } else {
    index = (index + 1) % etapas.length;
    envelope.innerHTML = etapas[index];
    trocando = false;
  }
}

// exibe a primeira etapa logo no início
envelope.innerHTML = etapas[0];

function mostrarCarta(){
  console.log("Carta mostrada");
}