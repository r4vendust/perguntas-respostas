//Program

var screen = 0;
var xMenu = 440;
var yMenu = 140;
var largura = 400;
var altura = 100;
var playS = 0;

var rato; bg; borda_1; borda_gold; botaostartl1; botaostartl2; instrucao_l; instrucao_lg; creditos_l; creditos_lg; instrucao_bg; //Menu Image
var orientador; programador; artista; //Credits
var win_screen;

var popup; popout, correct_sound; //Sounds

/* a1 = mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 220
a2 = mouseX > XMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 300
a3 = mouseX > XMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 380
a4 = mouseX > XMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 460 */

//Questions & Answers variables
var question = [];
var answer = [];
var fanswer = [];

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
  ingame_bg = loadImage('assets/letter.png');
  win_screen = loadImage('assets/won.png');
 
  //Créditos [Tela = 3]
  orientador = loadImage('assets/Orientador.jpg');
  programador = loadImage('assets/Programador.jpg');
  artista = loadImage('assets/Artista.jpg');
  //Sound Effect
  popup = loadSound('assets/sounds/mouse_over.wav');
  popout = loadSound('assets/sounds/unlock.wav');
  correct_sound = loadSound('assets/sounds/correct.wav');

}

function setup() {
  createCanvas(1280, 720);
  cursor('assets/minirato2.png');  
}

function backButton() {
  //Back buttom
  textAlign(LEFT);
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

function draw() {
  //Questions & Answers
  question = ["1- Quem descobriu o Brasil?", "2- Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
  "3- Que nome recebeu a lei que foi assinada pela princesa Isabel e que proibiu a escravidão no Brasil?",
  "4- No período pré-colonial a atividade econômica que teve maior destaque foi", "5- Em 1534, a Coroa portuguesa dividiu o território em 15 partes que ficaram conhecidos como"];
  answer = ["Pedro A. Cabral", "João Goulart", "Lei Áurea", "Pau-Brasil", "Capitanias Hereditárias"];
  fanswer = ["Bolsonaro", "Silvio Santos", "Pero Vaz de Caminha",
  "Getúlio Vargas", "João Figueiredo", "Jacinto Anjos",
  "Lei do Ventre Livre", "Lei Bill Aberdeen", "Lei dos Sexagenários",
  "Mineração", "Cana de Açúcar", "Café",
  "Tratado de Tordesilhas", "Tratado de Donatários", "Governos Gerais"];

  //Menu
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
  //Game
 if (screen == 1) {
    //mouseX > xMenu  && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura

    
    background(instrucao_bg);
    background(ingame_bg);

    //Questions

    textSize(40);
    textStyle(ITALIC);
    fill(0); //230
    text(question[0], 380, 100, 550, 200); //coordinates x = 420, y = 200

    //Awnsers box
    fill(230, 230, 230, 20);
    stroke(0);
    rect(xMenu, yMenu + 220, largura, altura - 30, 20);
    rect(xMenu, yMenu + 300, largura, altura - 30, 20);
    rect(xMenu, yMenu + 380, largura, altura - 30, 20);
    rect(xMenu, yMenu + 460, largura, altura - 30, 20);

    fill(255, 255, 255, 255);
    //stroke(230, 222, 205);
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("hovered over b1"); 
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("hovered over b2");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("hovered over b3");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("hovered over b4");
    }
    fill(0);
    textSize(38);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text(fanswer[1], xMenu - 20, 380, xMenu);
    text(answer[0], xMenu - 20, 460, xMenu); //200, 490
    text(fanswer[0], xMenu - 20, 540, xMenu);
    text(fanswer[2], xMenu - 20, 620, xMenu);

  }
  //Instructions
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
    text("Para jogar, use o mouse para\nselecionar a resposta correta.\nse errar, o jogo acaba", 350,200);

    backButton()
  }
  //Credits
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

    backButton()
  }
  //In_Game Screen
  if (screen == 4) {

    background(instrucao_bg);
    background(ingame_bg);

    //Questions

    textSize(40);
    textStyle(ITALIC);
    fill(0); //230
    text(question[1], 380, 100, 550, 200); //coordinates x = 420, y = 200

    //Awnsers box
    fill(230, 230, 230, 20);
    rect(xMenu, yMenu + 220, largura, altura - 30, 20);
    rect(xMenu, yMenu + 300, largura, altura - 30, 20);
    rect(xMenu, yMenu + 380, largura, altura - 30, 20);
    rect(xMenu, yMenu + 460, largura, altura - 30, 20);

    fill(255, 255, 255, 255);
    //stroke(230, 222, 205);
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("hovered over b1"); 
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("hovered over b2");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("hovered over b3");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("hovered over b4");
    }
    fill(0);
    textSize(38);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text(fanswer[3], xMenu - 20, 380, xMenu);
    text(fanswer[5], xMenu - 20, 460, xMenu); //200, 490
    text(answer[1], xMenu - 20, 540, xMenu);
    text(fanswer[4], xMenu - 20, 620, xMenu);
  }
  if (screen == 5) {

    background(instrucao_bg);
    background(ingame_bg);

    //Questions

    textSize(40);
    textStyle(ITALIC);
    fill(0); //230
    text(question[2], 380, 100, 550, 200); //coordinates x = 420, y = 200

    //Awnsers box
    fill(230, 230, 230, 20);
    rect(xMenu, yMenu + 220, largura, altura - 30, 20);
    rect(xMenu, yMenu + 300, largura, altura - 30, 20);
    rect(xMenu, yMenu + 380, largura, altura - 30, 20);
    rect(xMenu, yMenu + 460, largura, altura - 30, 20);

    fill(255, 255, 255, 255);
    //stroke(230, 222, 205);
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("hovered over b1"); 
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("hovered over b2");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("hovered over b3");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("hovered over b4");
    }
    fill(0);
    textSize(38);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text(answer[2], xMenu - 20, 380, xMenu);
    text(fanswer[7], xMenu - 20, 460, xMenu); //200, 490
    text(fanswer[8], xMenu - 20, 540, xMenu);
    text(fanswer[6], xMenu - 20, 620, xMenu);

  }
  if (screen == 6) {
    
    background(instrucao_bg);
    background(ingame_bg);

    //Questions

    textSize(40);
    textStyle(ITALIC);
    fill(0); //230
    text(question[3], 380, 100, 550, 200); //coordinates x = 420, y = 200

    //Awnsers box
    fill(230, 230, 230, 20);
    rect(xMenu, yMenu + 220, largura, altura - 30, 20);
    rect(xMenu, yMenu + 300, largura, altura - 30, 20);
    rect(xMenu, yMenu + 380, largura, altura - 30, 20);
    rect(xMenu, yMenu + 460, largura, altura - 30, 20);

    fill(255, 255, 255, 255);
    //stroke(230, 222, 205);
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("hovered over b1"); 
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("hovered over b2");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("hovered over b3");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("hovered over b4");
    }
    fill(0);
    textSize(38);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text(fanswer[10], xMenu - 20, 380, xMenu);
    text(fanswer[11], xMenu - 20, 460, xMenu); //200, 490
    text(fanswer[9], xMenu - 20, 540, xMenu);
    text(answer[3], xMenu - 20, 620, xMenu);
  }
  if (screen == 7) {
    background(instrucao_bg);
    background(ingame_bg);

    //Questions

    textSize(40);
    textStyle(ITALIC);
    fill(0); //230
    text(question[4], 380, 100, 550, 200); //coordinates x = 420, y = 200

    //Awnsers box
    fill(230, 230, 230, 20);
    rect(xMenu, yMenu + 220, largura, altura - 30, 20);
    rect(xMenu, yMenu + 300, largura, altura - 30, 20);
    rect(xMenu, yMenu + 380, largura, altura - 30, 20);
    rect(xMenu, yMenu + 460, largura, altura - 30, 20);

    fill(255, 255, 255, 255);
    //stroke(230, 222, 205);
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("hovered over b1"); 
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("hovered over b2");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("hovered over b3");
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("hovered over b4");
    }
    fill(0);
    textSize(35);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text(fanswer[14], xMenu - 20, 380, xMenu);
    text(answer[4], xMenu - 20, 460, xMenu); //200, 490
    text(fanswer[12], xMenu - 20, 540, xMenu);
    text(fanswer[13], xMenu - 20, 620, xMenu);
  }
  //Won Game Screen
  if (screen == 9) {
    image(win_screen, 0, 0, 1280, 720);
    
  }
  //Game Over
  if (screen == 10) {
    background(0)
    textSize(60);
    textAlign(CENTER);
    fill(255);
    text("Fim de jogo!", 640, 200);
    text("Mais sorte (ou estudo) da próxima vez", 640, 350);
  }
}
function mouseClicked() {
  //Menu
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
  //In-Game
  else if (screen == 1) {
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("pressed b1");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("pressed b2");
      correct_sound.play();
      screen = 4
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("pressed b3");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("pressed b4");
      screen = 10
    }

  }
  //Instructions
  else if (screen == 2) {
    if (mouseX > 950  && mouseX < 1100 + 150 && mouseY > 650 && mouseY < 650 + 50) {
      popout.play();
      console.log("Pressionou");
      screen = 0
    }
  }
  //Credits
  else if (screen == 3) {
    if (mouseX > 950  && mouseX < 1100 + 150 && mouseY > 650 && mouseY < 650 + 50) {
      popout.play();
      console.log("Pressionou");
      screen = 0
    }
  }
  //In-Game2
  else if (screen == 4) {
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("pressed b1");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("pressed b2");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("pressed b3");
      correct_sound.play();
      screen = 5
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("pressed b4");
      screen = 10
    }
  }
  else if (screen == 5) {
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("pressed b1");
      correct_sound.play();
      screen = 6
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("pressed b2");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("pressed b3");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("pressed b4");
      screen = 10
    }
  }
  else if (screen == 6) {
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("pressed b1");
      correct_sound.play();
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("pressed b2");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("pressed b3");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("pressed b4");
      correct_sound.play();
      screen = 7
    }
  }
  else if (screen == 7) {
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 220 && mouseY < yMenu + altura + 190) {
      rect(xMenu, yMenu + 220, largura, altura - 30, 20);
      console.log("pressed b1");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 300 && mouseY < yMenu + altura + 270) {
      rect(xMenu, yMenu + 300, largura, altura - 30, 20);
      console.log("pressed b2");
      correct_sound.play();
      screen = 9
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 380 && mouseY < yMenu + altura + 350) {
      rect(xMenu, yMenu + 380, largura, altura - 30, 20);
      console.log("pressed b3");
      screen = 10
    }
    else if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu + 460 && mouseY < yMenu + altura + 430) {
      rect(xMenu, yMenu + 460, largura, altura - 30, 20);
      console.log("pressed b4");
      screen = 10
    }
  }
}