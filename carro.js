let xCarro = [600, 600, 600, 600, 600, 600];
let yCarro = [40, 95, 150, 210, 270, 318];
let velocidadeCarro = [2, 2.5, 3.2, 5, 4.2, 2.8];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagensCarros.length; i++){
    image(imagensCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagensCarros.length; i++)
    xCarro[i] -= velocidadeCarro[i];
}

function loopCarro(){
  for(i = 0; i < imagensCarros.length; i++)
    if (passouTodaATela(xCarro[i])){
      xCarro[i] = 600;
    }
}

function passouTodaATela(xCarros){
  return xCarros < - 50;  
}
