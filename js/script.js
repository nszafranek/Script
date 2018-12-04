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
var consonant = "consonant";
var vowel = "vowel";
var semivowel = "semivowel";
var modtype = "modtype";
var currentInput = {
  input : [],
  type : [],
  modtype : []
};
var lastInput = {
  input,
  type,
  modtype
};
var nextInput = {
  input,
  type,
  modtype
};
var inputChar = {
  input,
  type,
  modtype
};

var updatedChar = [];

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
  coda.T = loadImage('img/_T_.png');
  coda.T1 = loadImage('img/_T_.png');
  coda.T2 = loadImage('img/__T.png');
  coda.D = loadImage('img/__D.png');
  coda.D1 = loadImage('img/_D_.png');
  coda.D2 = loadImage('img/__D.png');
  coda.S = loadImage('img/__S.png');
  coda.S1 = loadImage('img/_S_.png');
  coda.S2 = loadImage('img/__S.png');
  coda.Z = loadImage('img/__Z.png');
  coda.Z1 = loadImage('img/_Z_.png');
  coda.Z2 = loadImage('img/_Z_.png');
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
var textInput;
var charactersInput = 0;

var finalOutput = "function draw () {";
var finalOutput2 = "<br>";


function setup() {
  createCanvas(displayHeight, displayWidth);
  background("black");
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(evaluateText);

  inputText = createElement('h2', 'Input text and see what happens!');
  inputText.position(20, 5);

  function inputText() {
  }
  textAlign(CENTER);
  textSize(50);
}

function evaluateText() {
    updatedChar = [];
    textInput = input.value();
    textInput = textInput.toUpperCase();
    charactersInput = textInput.length;
      var previousOutput;
      for (i = 0; i < charactersInput; i++) {
        inputChar.input = (textInput.charAt(i));
   			/*if (inputChar.input == "A" || inputChar.input == "E" || inputChar.input == "O" ||inputChar.input ==  "U" || inputChar.input == "I" || inputChar.input == "Y") {
            updatedChar[i] = inputChar;
            updatedChar[i].input = inputChar.input;
            console.log("updatev")
            updatedChar[i].type = "vowel";
            console.log("updatelablev")
            updatedChar[i].modtype = "nullV";
            console.log("vowel alert");
            break
   			}
        if (inputChar.input == "H") {
              updatedChar[i] = inputChar;
              updatedChar[i].input = inputChar.input;
              updatedChar[i].type = "semivowel";
              console.log("updatelablesh")
              updatedChar[i].modtype = "aspirate"
              break
        }
        if (inputChar == "J") {
              updatedChar[i] = inputChar;
              updatedChar[i].input = inputChar.input;
              console.log("updatej")
              updatedChar[i].type = "semivowel";
              console.log("updatelablesj");
              updatedChar[i].modtype = "palatal"
              break
        }
        if (inputChar == "W") {
              updatedChar[i] = inputChar;
              updatedChar[i].input = inputChar.input;
              console.log("updatew")
              updatedChar[i].type = "semivowel";
              console.log("updatelablesw")
              updatedChar[i].modtype = "labial";
        }
        if (inputChar == "B" || inputChar == "C" || inputChar == "D" || inputChar == "F" || inputChar == "G" || inputChar == "K" || inputChar == "L" || inputChar == "M" || inputChar == "N" || inputChar == "P" || inputChar == "Q" || inputChar == "R" || inputChar == "S" || inputChar == "T" || inputChar == "V" || inputChar == "X" || inputChar == "Z") {
              updatedChar[i] = inputChar;
              updatedChar[i].input = inputChar.input;
              console.log("updatec")
              updatedChar[i].type = "consonant";
              console.log("updatelablec")
              updatedChar[i].modtype = "nullC";
              console.log("consonant found")
        }
        */
        switch (inputChar.input) {
case "A":
	          updatedChar[i] = inputChar;
            updatedChar[i].input = inputChar.input;
            console.log("updatev")
            updatedChar[i].type = "vowel";
            console.log("updatelablev")
            updatedChar[i].modtype = "nullV";
            console.log("vowel alert");
            break;
case "E":
	          updatedChar[i] = inputChar;
            updatedChar[i].input = inputChar.input;
            console.log("updatev")
            updatedChar[i].type = "vowel";
            console.log("updatelablev")
            updatedChar[i].modtype = "nullV";
            console.log("vowel alert");
            break;
case "I":
	  updatedChar[i] = inputChar;
            updatedChar[i].input = inputChar.input;
            console.log("updatev")
            updatedChar[i].type = "vowel";
            console.log("updatelablev")
            updatedChar[i].modtype = "nullV";
            console.log("vowel alert");
            break;
case "Y":
  updatedChar[i] = inputChar;
            updatedChar[i].input = inputChar.input;
            console.log("updatev")
            updatedChar[i].type = "vowel";
            console.log("updatelablev")
            updatedChar[i].modtype = "nullV";
            console.log("vowel alert");
            break;
case "O":
  updatedChar[i] = inputChar;
            updatedChar[i].input = inputChar.input;
            console.log("updatev")
            updatedChar[i].type = "vowel";
            console.log("updatelablev")
            updatedChar[i].modtype = "nullV";
            console.log("vowel alert");
            break;
case "U":
  updatedChar[i] = inputChar;
            updatedChar[i].input = inputChar.input;
            console.log("updatev")
            updatedChar[i].type = "vowel";
            console.log("updatelablev")
            updatedChar[i].modtype = "nullV";
            console.log("vowel alert");
            break;
case "J":
	updatedChar[i] = inputChar;
              updatedChar[i].input = inputChar.input;
              console.log("updatej")
              updatedChar[i].type = "semivowel";
              console.log("updatelablesj");
              updatedChar[i].modtype = "palatal"
              break;
case "W":
	      updatedChar[i].input = inputChar.input;
              console.log("updatew")
              updatedChar[i].type = "semivowel";
              console.log("updatelablesw")
              updatedChar[i].modtype = "labial";
break;
case "H":
              updatedChar[i] = inputChar;
              updatedChar[i].input = inputChar.input;
              updatedChar[i].type = "semivowel";
              console.log("updatelablesh")
              updatedChar[i].modtype = "aspirate"
              break
default: updatedChar[i] = inputChar;
              updatedChar[i].input = inputChar.input;
              console.log("updatec")
              updatedChar[i].type = "consonant";
              console.log("updatelablec")
              updatedChar[i].modtype = "nullC";
              console.log("consonant found")
break;
}
        console.log(inputChar.input);
if (textInput[charactersInput-1].type != undefined && textInput[charactersInput-1].type != undefined) {
        concatentate();
        console.log("concatruns")
      }
  }
}
  function concatentate() {
    for (k = 0; k < charactersInput; k++) {
      currentInput = updatedChar[k];
      currentInput.input = updatedChar[k];
      lastInput.input = updatedChar[k-1];
      nextInput.input = updatedChar[k+1];
    if (lastInput.input == null && currentInput.type == "consonant") {
          finalOutput = previousOutput;
          finalOutput += "image(onset."+ currentInput.input + ")";
          finalOutput2 += " image(mod.nullC)";
          console.log("concat1");
    }
    if (lastInput.input == null && currentInput.type == "vowel") {
          finalOutput = previousOutput;
          finalOutput += "image(nucleus." + currentInput.input + ")";
          finalOutput2 += " image(mod.nullV)";
          console.log("concat2");
    }
    if (lastInput.type == "consonant" && currentInput[type] == "vowel") {
          previousOutput = finalOutput;
          finalOutput += " image(nucleus[" + currentInput.input + "])";
          finalOutput2 += " image(mod.nullV)";
          console.log("concat3");
        }
    if ((lastInput.type == "consonant") && (currentInput.type == "consonant")) {
          finalOutput = previousOutput;
          finalOutput += "image(nucleus[" + lastInput.input + "1])" + " image(nucleus." + [currentInput[k].input] + "2])"
          finalOutput2 += " image(mod.nullC)";
          console.log("concat4");
        }
    if (lastInput.type == "consonant" && currentInput.type == "semivowel") {
          finalOutput2 = previousOutput;
          finalOutput2 += " image(mod." + [currentInput.input] + ")";
          console.log("concat5");
        }
    if (lastInput.type == "vowel" && curentInput.type == "consonant")  {
            finalOutput += " image(nucleus." + lastInput.input +"; image(onset." + currentInput.input +"])";
            finalOutput2 += " image(mod.nullC)";
            console.log("concat6");
        }
    if (lastInput.type == "vowel" && curentInput.type == "consonant" && nextInput.type == "consonant"){
          finalOutput += " image(onset." + currentInput.input + "1) + image(coda[" + nextInput + "2])"
          finalOutput2 += "image(mod.nullC)";
          console.log("concat7");
        }
    if (currentInput.type == "consonant" && lastInput.input == "currentInput.input") {
            finalInput += " image(onset." + currentInput.input + ")";
            finalInput2 += " image(mod.consonantGem);"
            console.log("concat8");
        }
    if (currentInput.type == "vowel" && lastInput.input == "currentInput[input]") {
            finalInput += " image(onset." + currentInput.input + ")";
            finalOutput2 += " image(mod." + vowelGem + ")";
            console.log("concat9")
      }
    if (currentInput !== null && nextInput == null ) {
         finalOutput += ";";
         finalOutput2 += ";";
         var finalOutput3 = finalOutput + finalOutput2 + "}";
         var final = new finalOutputf(finalOutput3);
         return(final());
         console.log("Scriptend");
    }
    console.log("concatends");
  }
}
