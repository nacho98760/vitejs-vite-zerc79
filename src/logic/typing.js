let i = 0;
let txt = 'Front-End Developer';
let speed = 65;
let texto = document.querySelector('.titulo');

function typing() {
  if (i < txt.length) {
    texto.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}

typing()
