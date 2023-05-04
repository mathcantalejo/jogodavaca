function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  loopCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  pontosMaiorQueZero();
  podeSeMover();
}

