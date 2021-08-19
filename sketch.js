//Program

var screen = 0;
var xMenu = 440;
var yMenu = 140;
var largura = 400;
var altura = 100;
var playS = 0; 

var rato; bg; borda_1; borda_gold; botaostartl1; botaostartl2; instrucao_l; instrucao_lg; creditos_l; creditos_lg; instrucao_bg; //Menu Image
var  orientador; programador; artista; //Credits

var popup; popout; //Sound
//Cursor Image

function preload() {
  rato = loadImage('assets/minirato2.png'); //Mouse cursor
  //Menu [Tela = 0]
  bg = loadImage('assets/bg.jpg');
  borda_1 = loadImage('assets/borda_1.png');
  borda_gold = loadImage('assets/borda_gold.png');
  botaostartl1 = loadImage('assets/start_l.png');
  botaostartl2 = loadImage('assets/start_lg.png');
  instrucao_l = loadImage('assets/instrucao_l.png');
  instrucao_lg = loadImage('assets/instrucao_lg.png');
  creditos_l = loadImage('assets/creditos_l.png');
  creditos_lg = loadImage('assets/creditos_lg.png');
  instrucao_bg = loadImage('assets/instrucoes_bg.webp');
 
  //Créditos [Tela = 3]
  orientador = loadImage('assets/Orientador.jpg');
  programador = loadImage('assets/Programador.jpg');
  artista = loadImage('assets/Artista.jpg');
  //Sound Effect
  popup = loadSound('assets/sounds/mouse_over.wav');
  popout = loadSound('assets/sounds/unlock.wav');

}

function setup() {
  createCanvas(1280, 720);
  cursor('assets/minirato2.png');  
}

function draw() {

  // Menu
  if (screen == 0) {
    background(bg);

    //To make sure the audio play only once
    if (playS != 0 && !(mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura)
    && !(mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu + 130 && mouseY < yMenu + altura + 130)
    && !(mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu + 260 && mouseY < yMenu + altura + 260)) {
   
     playS = 0

 }
    //Menu Button
    image(borda_1, xMenu, yMenu, largura, altura);
    image(botaostartl1, xMenu, yMenu, largura, altura);

    image(borda_1, xMenu, yMenu + 130, largura, altura);
    image(instrucao_l, xMenu, yMenu + 130, largura, altura);

    image(borda_1, xMenu, yMenu + 260, largura, altura);
    image(creditos_l, xMenu, yMenu + 260, largura, altura);

    if (mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura) {
      image(borda_gold, xMenu, yMenu, largura, altura); // -20 - 10 + 20 + 20
      image(botaostartl2, xMenu, yMenu, largura, altura);

      while (playS == 0) {
        popup.play();
        playS++
      }
      if (mouseIsPressed && mouseButton === LEFT) {
        image(borda_gold, xMenu, yMenu, largura, altura); // -20 - 10 + 20 + 20
        image(botaostartl2, xMenu + 25, yMenu + 25, largura -50, altura -50);
      }
    }
    
    else if (mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu + 130 && mouseY < yMenu + altura + 130) {
      image(borda_gold, xMenu, yMenu + 130, largura, altura);
      image(instrucao_lg, xMenu, yMenu + 130, largura, altura);
      
      while (playS == 0) {
        popup.play();
        playS++
      }
      if (mouseIsPressed && mouseButton === LEFT) {
        image(borda_gold, xMenu, yMenu + 130, largura, altura);
        image(instrucao_lg, xMenu + 25, yMenu + 155, largura -50, altura -50);
      }
    }

    else if (mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu + 260 && mouseY < yMenu + altura + 260) {
      image(borda_gold, xMenu, yMenu + 260, largura, altura);
      image(creditos_lg, xMenu, yMenu + 260, largura, altura);

      while (playS == 0) {
        popup.play();
        playS++
      }
      if (mouseIsPressed && mouseButton === LEFT) {
        image(borda_gold, xMenu, yMenu + 260, largura, altura);
        image(creditos_lg, xMenu + 25, yMenu + 285, largura -50, altura -50);
      }
    }
  }
  
  if (screen == 1) {
    background(0);
    textSize(60);
    textStyle(BOLDITALIC);
    fill(255,215,0);
    text("Em construção!", 420,100);

    textSize(40);
    textStyle(NORMAL);
    fill(230);
    text("Quem descobriu o Brasil?", 420, 200);

    //Awnsers
    fill(255);
    //stroke(230, 222, 205);
    rect(180, 450, 240, 50, 20);
    fill(0);
    textSize(40);
    textStyle(BOLDITALIC);
    text("Bolsonaro", 200, 490); //200, 490

    fill(255);
    rect(750, 450, 240, 50, 20);
    fill(0);
    textSize(30);
    textStyle(BOLDITALIC);
    text("Pedro A. Cabral", 760, 490); //200, 490

    fill(255);
    rect(180, 550, 240, 50, 20);
    fill(0);
    textSize(40);
    textStyle(BOLDITALIC);
    text("Jon Snow", 200, 590); //200, 490

    fill(255);
    rect(750, 550, 240, 50, 20);
    fill(0);
    textSize(30);
    textStyle(BOLDITALIC);
    text("Silvio Santos", 780, 590); //200, 490
  }

  if (screen == 2) {
    background(50, 150);
    image(instrucao_bg, 0, 0, 1280, 720)
    textSize(60);
    textStyle(BOLDITALIC);
    fill(0);
    text("Instruções", 520,100);

    textSize(40);
    textStyle(ITALIC);
    fill(0);
    text("Para jogar, use o mouse para\nSelecionar a resposta correta.\nSe errar, o jogo acaba :)", 350,200);

    //Back buttom
    fill(224, 211, 189);
    stroke(230, 222, 205);
    rect(1100, 650, 150, 50, 20);
    fill(0);
    textSize(40);
    textStyle(BOLDITALIC);
    text("Voltar", 1120, 690);

    if (mouseX > 1100  && mouseX < 1100 + 150 && mouseY > 650 && mouseY < 650 + 50) {
      console.log("Passou em cima");
      textStyle(BOLDITALIC);
      text("Voltar", 1125, 690);

    }
  }

  if (screen == 3) {
    background(220);
    fill(0);
    textSize(60);
    text("Créditos", 520, 100);
    
    //Photos (*Only a test)
    textSize(30);
    text("Orientador", 450, 150);
    text("Programador", 650, 150);

    if (mouseX > 450  && mouseX < 450 + 150 && mouseY > 130 && mouseY < 100 + 50) {
    image(orientador, 50, 130, 960/3, 1280/3); // x = 320, y = 240

    textSize(25);
    fill(255, 0, 0)
    text("Mateus Calaça", 550, 200);
    textSize(20);
    fill(0);
    text("Estudante de licenciatura em História pela\nUniversidade Federal do Rio Grande do Norte", 450, 250)

    }

    else if (mouseX > 650  && mouseX < 650 + 190 && mouseY > 130 && mouseY < 100 + 50) {
    image(programador, 50, 130, 1440/6, 2560/6);

    textSize(25);
    fill(255, 0, 0)
    text("Victor Lopes", 550, 200);
    textSize(20);
    fill(0);
    text("Estudante de bacharelado em Ciencias e Tecnologia pela\nUniversidade Federal do Rio Grande do Norte", 450, 250)
    }
    //image(artista, 50, 360, 720/4, 1280/4)

    //Back buttom
    fill(224, 211, 189);
    stroke(230, 222, 205);
    rect(1100, 650, 150, 50, 20);
    fill(0);
    textSize(40);
    textStyle(BOLDITALIC);
    text("Voltar", 1120, 690);
    
    if (mouseX > 1100  && mouseX < 1100 + 150 && mouseY > 650 && mouseY < 650 + 50) {
      console.log("Passou em cima");
      textStyle(BOLDITALIC);
      text("Voltar", 1125, 690);
    }
  }
}
function mouseClicked() {
  if (screen == 0) {
    if (mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura) {
      popout.play();
      console.log("Pressionou o botão Start");
      
      screen = 1;
    }
    else if (mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu + 130 && mouseY < yMenu + altura + 130) {
      popout.play();
      console.log("Pressionou o botão Instrução");
      screen = 2;
    }
    else if (mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu + 260 && mouseY < yMenu + altura + 260) {
      popout.play();
      console.log("Pressinou o botão Créditos");
      screen = 3;
    }
  }
  if (screen == 1) {

  }
  if (screen == 2) {
    if (mouseX > 950  && mouseX < 1100 + 150 && mouseY > 650 && mouseY < 650 + 50) {
      popout.play();
      console.log("Pressionou");
      screen = 0
    }
  }
  if (screen == 3) {
    if (mouseX > 950  && mouseX < 1100 + 150 && mouseY > 650 && mouseY < 650 + 50) {
      popout.play();
      console.log("Pressionou");
      screen = 0
    }
  }
}