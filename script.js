if (window.matchMedia("(min-width: 768px)").matches) {
  // Encaminha o código CSS para telas maiores que 768px
  document.write('<link rel="stylesheet" href="queri2.css">');
} else {
  // Encaminha o código CSS para telas menores que 768px
  document.write('<link rel="stylesheet" href="queri.css">');
}
