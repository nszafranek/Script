var T, T1, T2, D, D1, D2, S, S1, S2, Z, Z1, Z2, M, M1, M2, N, N1, N2, L, L1, L2, R, R1, R2, P, P1, P2, B, B1, B2, K, K1, K2, G, G1, G2, F, F1, F2, V, V1, V2;
var A, A1, A2, A3, A4, E, E1, E2, E3, E4, O, O1, O2, O3, O4, U, U1, U2, U3, U4, I, I1, I2, I3, I4, schwah;
var consonantGem, vowelGem, palatal, aspirate, labial, nullC, nullV;
var input, type;
var onset = [
  T, T1, T2,
  D, D1, D2,
  S, S1, S2,
  Z, Z1, Z2,
  M, M1, M2,
  N, N1, N2,
  L, L1, L2,
  R, R1, R2,
  P, P1, P2,
  B, B1, B2,
  K, K1, K2,
  G, G1, G2,
  F, F1, F2,
  V, V1, V2
];
var nucleus = [
  A, A1, A2, A3, A4,
  E, E1, E2, E3, E4,
  O, O1, O2, O3, O4,
  U, U1, U2, U3, U4,
  I, I1, I2, I3, I4,
  schwah
];
var coda = [
  T, T1, T2,
  D, D1, D2,
  S, S1, S2,
  Z, Z1, Z2,
  M, M1, M2,
  N, N1, N2,
  L, L1, L2,
  R, R1, R2,
  P, P1, P2,
  B, B1, B2,
  K, K1, K2,
  G, G1, G2,
  F, F1, F2,
  V, V1, V2,
  schwah
];

var mod = [
  consonantGem,
  vowelGem,
  palatal,
  aspirate,
  labial,
  nullC,
  nullV,
];
var consonant;
var vowel;
var semivowel;
var currentInput = [
  input,
  type
];
var lastInput = [
  input,
  type
];
var nextInput = [
  input,
  type
];
var modtype

function preload() {
  onset.T = loadImage('img/T-.png');
  onset.T1 = loadImage('img/T--.png');
  onset.T2 = loadImage('img/-T-.png');
  onset.D = loadImage('img/D-.png');
  onset.D1 = loadImage('img/D--.png');
  onset.D2 = loadImage('img/-D-.png');
  onset.S = loadImage('img/S-.png');
  onset.S1 = loadImage('img/S--.png');
  onset.S2 = loadImage('img/-S-.png');
  onset.Z = loadImage('img/Z-.png');
  onset.Z1 = loadImage('img/Z--.png');
  onset.Z2 = loadImage('img/-Z-.png');
  onset.M = loadImage('img/T-.png');
  onset.M1 = loadImage('img/M--.png');
  onset.M2 = loadImage('img/-M-.png');
  onset.N = loadImage('img/N-.png');
  onset.N1 = loadImage('img/N--.png');
  onset.N2 = loadImage('img/-N-.png');
  onset.L = loadImage('img/L-.png');
  onset.L1 = loadImage('img/L--.png');
  onset.L2 = loadImage('img/-L-.png');
  onset.R = loadImage('img/R-.png');
  onset.R1 = loadImage('img/R--.png');
  onset.R2 = loadImage('img/-T-.png');
  onset.P = loadImage('img/P-.png');
  onset.P1 = loadImage('img/P--.png');
  onset.P2 = loadImage('img/-P-.png');
  onset.B = loadImage('img/B-.png');
  onset.B1 = loadImage('img/B--.png');
  onset.B2 = loadImage('img/-B-.png');
  onset.K = loadImage('img/K-.png');
  onset.K1 = loadImage('img/K--.png');
  onset.K2 = loadImage('img/-K-.png');
  onset.G = loadImage('img/G-.png');
  onset.G1 = loadImage('img/G--.png');
  onset.G2 = loadImage('img/-G-.png');
  onset.F = loadImage('img/F-.png');
  onset.F1 = loadImage('img/F--.png');
  onset.F2 = loadImage('img/-F-.png');
  onset.V = loadImage('img/V-.png');
  onset.V1 = loadImage('img/V--.png');
  onset.V2 = loadImage('img/-V-.png');
  coda.T = loadImage('img/_T.png');
  coda.T1 = loadImage('img/_T_.png');
  coda.T2 = loadImage('img/__T.png');
  coda.D = loadImage('img/__D.png');
  coda.D1 = loadImage('img/_D.png');
  coda.D2 = loadImage('img/__D.png');
  coda.S = loadImage('img/__S.png');
  coda.S1 = loadImage('img/_S_.png');
  coda.S2 = loadImage('img/__S.png');
  coda.Z = loadImage('img/__Z.png');
  coda.Z1 = loadImage('img/_Z_.png');
  coda.Z2 = loadImage('img/__Z_.png');
  coda.M = loadImage('img/__M.png');
  coda.M1 = loadImage('img/_M_.png');
  coda.M2 = loadImage('img/__M.png');
  coda.N = loadImage('img/__N.png');
  coda.N1 = loadImage('img/_N_.png');
  coda.N2 = loadImage('img/__N.png');
  coda.L = loadImage('img/__L.png');
  coda.L1 = loadImage('img/_L_.png');
  coda.L2 = loadImage('img/__L.png');
  coda.R = loadImage('img/__R.png');
  coda.R1 = loadImage('img/_R_.png');
  coda.R2 = loadImage('img/__R.png');
  coda.P = loadImage('img/__P.png');
  coda.P1 = loadImage('img/_P_.png');
  coda.P2 = loadImage('img/__P.png');
  coda.B = loadImage('img/__B.png');
  coda.B1 = loadImage('img/_B_.png');
  coda.B2 = loadImage('img/__B.png');
  coda.K = loadImage('img/__K.png');
  coda.K1 = loadImage('img/_K_.png');
  coda.K2 = loadImage('img/__K.png');
  coda.G = loadImage('img/__G.png');
  coda.G1 = loadImage('img/_G_.png');
  coda.G2 = loadImage('img/__G.png');
  coda.F = loadImage('img/__F.png');
  coda.F1 = loadImage('img/_F_.png');
  coda.F2 = loadImage('img/__F.png');
  coda.V = loadImage('img/__V.png');
  coda.V1 = loadImage('img/_V_.png');
  coda.V2 = loadImage('img/__V.png');
  nucleus.A = loadImage('img/-A-.png');
  nucleus.A1 = loadImage('img/-a2-.png');
  nucleus.A2 = loadImage('img/-a3-.png');
  nucleus.A3 = loadImage('img/-a4-.png');
  nucleus.A4 = loadImage('img/-a5-.png');
  nucleus.E = loadImage('img/-E-.png');
  nucleus.E1 = loadImage('img/-e2-.png');
  nucleus.E2 = loadImage('img/-e3-.png');
  nucleus.E3 = loadImage('img/-e4-.png');
  nucleus.E4 = loadImage('img/-e5-.png');
  nucleus.O = loadImage('img/-O-.png');
  nucleus.O1 = loadImage('img/-o2-.png');
  nucleus.O2 = loadImage('img/-o3-.png');
  nucleus.O3 = loadImage('img/-o4-.png');
  nucleus.O4 = loadImage('img/-o5-.png');
  nucleus.U = loadImage('img/-U-.png');
  nucleus.U1 = loadImage('img/-u2-.png');
  nucleus.U2 = loadImage('img/-u3-.png');
  nucleus.U3 = loadImage('img/-u4-.png');
  nucleus.U4 = loadImage('img/-u5-.png');
  nucleus.Y = loadImage('img/-y-.png');
  nucleus.Y1 = loadImage('img/-y2-.png');
  nucleus.Y2 = loadImage('img/-y3-.png');
  nucleus.Y3 = loadImage('img/-y4-.png');
  nucleus.Y4 = loadImage('img/-y5-.png');
  nucleus.I =  loadImage('img/-i5-.png');
  nucleus.I1 = loadImage('img/-i2-.png');
  nucleus.I2 = loadImage('img/-i3-.png');
  nucleus.I3 = loadImage('img/-i4-.png');
  nucleus.I4 = loadImage('img/-i5-.png');
  nucleus.schwah = loadImage('img/-3-.png');
  mod.palatal = loadImage('img/-J-.png');
  mod.labial = loadImage('img/-w-.png');
  mod.vowelGem = loadImage('img/GemDot2.png');
  mod.consonantGem = loadImage('img/GemDot.png');
  mod.nullC = loadImage('img/null1.png');
  mod.nullC = loadImage('img/null2.png');
}

function setup() {
  createCanvas(displayHeight, displayWidth);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(inputText);

  inputText = createElement('h2', 'Input text and see what happens!');
  inputText.position(20, 5);

  function inputText() {
  var textInput = input.value();
  }
  textAlign(CENTER);
  textSize(50);
}

function draw() {
  background("black");
    var charactersInput = textInput.length;
    var inputChar = textInput.split();
    var previousOutput;
    for (i = 0; i < charactersInput; i++)
    currentInput.input = inputChar[i];
    lastInput.input = inputChar[i-1];
    nextInput.input = inputChar[i+1];
    function finalOutput() {};
    function finalOutput2() {};
      if (currentInput.input == A || E || O || U || I || Y) {
        curentInput.type = vowel;
      }
      else if (curentInput.input == H || W || J) {
        curentInput.type = semivowel;
      }
      else {
        currentInput.type = consonant;
      }
      if (currentInput.input == semivowel) {
        if (currentInput.input == h) {
          modtype = aspirate
        }
        else if (currentInput == j) {
          modtype = palatal
        }
          else if (currentInput == w) {
            modtype = labial
        }

      }
      if (lastInput == null && currentInput['type'] == consonant) {
        finalOutput += "image(onset[currentInput.input])";
        finalOutput2 += " image(mod.nullC)";
        if (nextInput == null) {
          finalOutput += ";"
          finalOutput2 += ";"
          finalOutput();
          finalOutput2();
        }
      }
      else if (lastInput == null && currentInput['type'] == vowel) {
        finalOutput += "image(nucleus[currentInput.input])";
        finalOutput2 += " image(mod.nullV)";
        if (nextInput == null) {
          finalOutput += ";"
          finalOutput2 += ";"
          finalOutput();
          finalOutput2();
        }
      }
      if (lastInput['type'] == consonant && currentInput[type] == vowel) {
        previousOutput = finalOutput
        finalOutput += " image(nucleus" + [currentInput.input] + ")";
        finalOutput2 += " image(mod.nullV)";
        if (nextInput == null) {
          finalOutput += ";"
          finalOutput2 += ";"
          finalOutput();
          finalOutput2();
        }
      }
      else if (lastInput['type'] == consonant && curentInput['type'] == consonant)  {
        finalOutput = previousOutput
        finalOutput += "image(nucleus[" + lastInput.input + "1])" + " image(nucleus[" + [currentInput.input] + "2])"
        finalOutput2 += "image()"
        finalOutput2 += " image(mod.nullC)";
        if (nextInput == null) {
          finalOutput += ";"
          finalOutput2 += ";"
          finalOutput()
          finalOutput2()
        }
      }
      else if (lastInput['type'] == consonant && currentInput['type'] == semivowel) {
        finalOutput2 = previousOutput2
        finalOutput2 += "image(mod" + [currentInput.input] + ")";
        if (nextInput == null) {
          finalOutput += ";"
          finalOutput2 += ";"
          finalOutput();
          finalOutput2();
        }
      }
      else if (lastInput['type'] == vowel && curentInput['type'] == consonant)  {
          finalOutput += " image(nucleus[" +[lastInput.input] +"; image(onset[" + [currentInput.input] +"2])";
          finalOutput2 += " image(mod.nullC)";
          if (nextInput == null) {
            finalOutput += ";"
            finalOutput2 += ";"
            finalOutput();
            finalOutput2();
          }
      }
      else if (lastInput['type'] == vowel && curentInput['type'] == consonant && nextInput.type == consonant){
        finalOutput +=
        finalOutput2 += "image(mod.nullC)";
        if (nextInput==null) {
          finalOutput += ";"
          finalOutput2 += ";"
          finalOutput();
          finalOutput2();
        }

      }
      if (curentInput['type'] == consonant && lastInput['input'] == curentInput.input) {
          image(onset[currentInput.input]);
          image(mod[consonantGem]);
          if (nextInput==null) {
            finalOutput += ";"
            finalOutput2 += ";"
            finalOutput();
            finalOutput2();
          }
      }
      else if (curentInput['type'] == vowel && lastInput['input'] == curentInput[input]) {
          image(onset[currentInput.input]);
          image(mod[vowelGem]);
          if (nextInput==null) {
            finalOutput += ";"
            finalOutput2 += ";"
            finalOutput();
            finalOutput2();
          }
      }
  }
