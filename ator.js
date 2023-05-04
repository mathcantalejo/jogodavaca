let xAtor = 85;
let yAtor = 366;
let colisao = false;
let comprimentoAtor = 30;
let alturaAtor = 30;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;     
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagensCarros.length; i += 1){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      somDaColisao.play();
      voltaAtorPosicaoInicial();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}