// const envelope = document.getElementById('envelope01');

// // lista das imagens (use os caminhos corretos)
// const images = [
//   '/assets/CimaFechado.png',
//   '/assets/MsgAqui.png',
//   '/assets/CimaAberto.png',
//   '/assets/DebaixoFechado.png',
//   '/assets/photo05.jpeg',
//   '/assets/DebaixoAberto.png'
// ];

// let index = 0;
// let trocando = false;

// function trocarImagem() {
//   if (trocando) return; // evita múltiplos cliques
//   document.getElementById('novideo').play();
//   trocando = true;

//   // começa o fade-out
//   envelope.style.opacity = 0;

//   // quando o fade-out termina...
//   envelope.addEventListener('transitionend', function mudarImagem() {
//     // troca a imagem
//     index = (index + 1) % images.length;
//     envelope.src = images[index];

//     // volta o fade-in
//     envelope.style.opacity = 1;

//     // remove o listener (pra não acumular)
//     envelope.removeEventListener('transitionend', mudarImagem);

//     // libera o clique quando o fade-in terminar
//     envelope.addEventListener('transitionend', function liberarClique() {
//       trocando = false;
//       envelope.removeEventListener('transitionend', liberarClique);
//     });
//   });
// }

// // troca a cada 3 segundos (pode ajustar)
// // setInterval(trocarImagem, 3000);





const envelope = document.getElementById('envelope01');

const images = [
  '/assets/CimaFechado.png',
  '/assets/MsgAqui.png',
  '/assets/CimaAberto.png',
  '/assets/DebaixoFechado.png',
  '/assets/photo05.jpeg',
  '/assets/DebaixoAberto.png',
  '/assets/heartTransparent.png'
];

let index = 0;
let trocando = false;

// partes específicas que terão transição
const transicoesEspeciais = [0, 3]; 
// (exemplo: 0 -> 1 e 3 -> 4 terão fade)

function trocarImagem() {
  if (trocando) return;
  trocando = true;
  document.getElementById('novideo').play();

  const precisaDeTransicao = transicoesEspeciais.includes(index);

  if (precisaDeTransicao) {
    // começa fade-out
    envelope.style.opacity = 0;

    envelope.addEventListener('transitionend', function mudarImagem() {
      index = (index + 1) % images.length;
      envelope.src = images[index];

      // volta fade-in
      envelope.style.opacity = 1;
      envelope.removeEventListener('transitionend', mudarImagem);

      envelope.addEventListener('transitionend', function liberarClique() {
        trocando = false;
        envelope.removeEventListener('transitionend', liberarClique);
      });
    });
  } else {
    // troca sem animação
    index = (index + 1) % images.length;
    envelope.src = images[index];
    trocando = false;
  }
}
