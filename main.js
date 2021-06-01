const prompt = require('prompt-sync')();

//Message to user asking if they intend to combine or deconstruct colors.

const colorMethod = prompt("Type \"one\"to combine colors or \"two\" to deconstruct colors.");

//List of constant variables.


const combineColors = ("one");
const deconstructColors = ("two");
const colorcombinePurple = ("purple");
const colorcombineOrange = ("orange");
const colorcombineGreen = ("green");
const firstcolorCombine = ("Enter one color red blue or yellow.");
const secondcolorCombine = ("Now enter a different second color red blue or yellow.");
const onedeconstructColors = ("Enter one color to deconstructe orange purple green.")
const redColor = ("red")
const blueColor = ("blue")
const yellowColor =("yellow")
const orangeColor =("orange")
const purpleColor =("purple")
const greenColor =("green")

//Calculates the combination of two colors.

if (colorMethod == combineColors){
    const firstcolorResponse = prompt(firstcolorCombine)
    const secondcolorResponse = prompt(firstcolorCombine)
   
    if (firstcolorResponse == redColor && secondcolorResponse == blueColor) {console.log("Colors combine to make purple.")
    }else if (firstcolorResponse == redColor && secondcolorResponse ==   yellowColor)         
    {   console.log("Colors combine to make orange.")
    }else if (firstcolorResponse == blueColor && secondcolorResponse == yellowColor) {
    console.log("Colors combine to make green.")
}
     else {console.log ("\"error\"")}
}

//Deconstructs one color into two origin colors.

 if (colorMethod == deconstructColors) {
     const onecolorDeconstruct = prompt(onedeconstructColors)
    if (onecolorDeconstruct == purpleColor) {
        console.log("The color purple deconstructs to red and blue. ")
    }else if (onecolorDeconstruct == orangeColor) {
        console.log("The color orange deconstructs to red and yellow.")
    }else if (onecolorDeconstruct == greenColor) {
        console.log("The color green deconstructs to blue and yellow.")
    }else  {console.log ("\"error\"")}

 }

 