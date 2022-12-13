function introDeclaration() {
    console.log ("DOMINION ALGORITHM\nCoded by Jordy Veenstra - A Pixelated Point of View\n\nVersion 1.0 - January 2023\n\n");  
}

function dateAndTimeDeclaration() {
    const date = new Date();
    console.log("Report generated at: \t " + date.toDateString() + " - " + date.toLocaleTimeString() + "\n\n")
}

function partOneDivider() {
    console.log ("#001\tRUNTIME\n[DETERMINES THE TOTAL RUNTIME OF THE FILM DEPTHMAP DOMINION]\n\n");
}

function runtimeFunction(min, max) {  
    return Math.floor(Math.random() * (max-min + 1)) + min + 15;
}

let totalRunTime = 0;

function runtimeDeclaration() {
    totalRunTime = runtimeFunction(45, 165)
    console.log("RUNTIME:\t" + totalRunTime + " SECONDS\n\n");
}

introDeclaration();
dateAndTimeDeclaration();
partOneDivider();
runtimeDeclaration();

function partTwoDivider() {
    console.log ("#002\tMAPS\n[DETERMINES THE AMOUNT OF CUSTOM MAPS REQUIRED PLUS FOUR KEYWORDS PER MAP]\n\n");
}

function mapDefiner(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const amountOfMaps = mapDefiner(10, 50);

function mapDeclaration() {
    console.log ("TOTAL MAPS: " + amountOfMaps + "\n\n");
}


function makeSyllable() {
    let syllable = "";
    const possibleLetters = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    const possibleVowels = ['a','e','i','o','u']
    syllable += possibleLetters[Math.floor(Math.random()*possibleLetters.length)];
    syllable += possibleVowels[Math.floor(Math.random()*possibleVowels.length)];
    return syllable;
}

function makeWord(syllables = (Math.floor(Math.random()*8)+1)){
    let word = "";
    for (let x=0; x < syllables; x++) {
        word += makeSyllable();
    }
    return word;
}

function keyWordDeclaration(){
    let x = 1;
    console.log("MAP KEYWORDS:\n");
    for ( x = 1; x <= amountOfMaps; x++ ) {
     console.log ("MAP "+ x + ":\t\t" + makeWord()+",", makeWord()+",", makeWord()+",", makeWord());
    }
}

partTwoDivider();
mapDeclaration();
keyWordDeclaration();


function partThreeDivider(){
    console.log ("\n#003\tSHOTS\n[DETERMINES THE AMOUNT OF SHOTS PER MAP INCLUDING THEIR DURATION]\n\n");
}

function shotDefiner(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

const shotArray = []; 

function shotsPerMap(){
    
    for (let x = 1; x <= amountOfMaps; x++) { 
      shotArray.push(shotDefiner(1,15));
    }
}

shotsPerMap();

function shotDeclaration() {
    console.log("SHOTS PER MAP:\n");

    for (let x = 1; x <= shotArray.length; x++) { 
    console.log ("MAP " + x + ":\t\t" + shotArray[x-1] + " SHOTS");
        }
}

let totalShotSum = shotArray.reduce(mapCombiner, 0);

function mapCombiner(accumulator, a) {
    return accumulator + a;
}


function totalMapDeclaration() {
    console.log ("\n\nTOTAL SHOTS:\t\t" + totalShotSum +"\n");
}

function shotLengthDefiner(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shotLengthDeclaration() {
    console.log("LENGTH OF EACH SHOT\n\n");

    for (let x = 1; x <= totalShotSum; x++) {
     console.log("SHOT " + x + ":\t\t\t\t" + shotLengthDefiner(3,15) + " SECONDS");
    }
};

partThreeDivider();
shotDeclaration();
totalMapDeclaration();
shotLengthDeclaration();

function partFourDivider(){
    console.log("\n\n#004\tSHOT PARAMETERS\n[DETERMINES THE X-Y-Z POSITION VALUES FOR EVERY SHOT INCLUDING RANDOMIZED ANIMATION DATA]\n\n");
}

function shotParameterCalculation(min, max) {
   return (Math.floor(Math.random() * (max - min + 1)) + min);
}


function staticShotCalculation() {
    let result = shotParameterCalculation(0,1);

    if (result === 0) {
       return ("STATICITY:\nYES\n\n")
    } else {
        return ("STATICITY:\nNO\n\nEND POSITION X:\n" + shotParameterCalculation(-2000,2000) + " BIG\n" + shotParameterCalculation(-1000, 1000) + " SMALL\n\n"
        + "END POSITION Y:\n" + shotParameterCalculation(-2000, 2000) + " BIG\n" + shotParameterCalculation(-1000, 1000) + " SMALL\n\n"
        + "END POSITION Z:\n" + shotParameterCalculation(0,600) + " BIG\n" + shotParameterCalculation(0,350) + " SMALL\n\n");
    }
       
}

function rollShotCalculation() {
    let rollRNG = shotParameterCalculation(0, 2);

    switch(rollRNG) {
        case 0:
            return ("ROLL:\nNO\n\n")
            break;
        case 1:
            return ("ROLL:\nYES - STATIC ROLL OF " + shotParameterCalculation(-180, 180) + "\n\n");
            break;
        case 2:
            return ("ROLL:\nYES - START ROLL AT " + shotParameterCalculation(-180, 180) + " AND END AT " + shotParameterCalculation(-180,180) +"\n\n")
    }   
}


function yawShotCalculation() {
    let yawRNG = shotParameterCalculation(0, 2);

    switch(yawRNG) {
        case 0:
            return ("YAW:\n0\n\n")
            break;
        case 1:
            return ("YAW:\nYES - STATIC YAW OF " + shotParameterCalculation(-180, 180) + "\n\n");
            break;
        case 2:
            return ("YAW:\nYES - START YAW AT " + shotParameterCalculation(-180, 180) + " AND END AT " + shotParameterCalculation(-180,180)+"\n\n") 
    }
}

function fovShotCalculation() {
    let fovRNG = shotParameterCalculation(0,2)

    switch(fovRNG) {
        case 0:
            return ("FIELD OF VIEW:\n0\n\n")
            break;
        case 1:
            return ("FIELD OF VIEW:\nYES - STATIC FOV OF " + shotParameterCalculation(-80, 10) + "\n\n");
            break;
        case 2:
            return ("FIELD OF VIEW:\nYES - START FOV AT " + shotParameterCalculation(-80, 10) + " AND END AT " + shotParameterCalculation(-80,10) + "\n\n")
    }
}


function shotParameterDeclaration() {
    console.log("SHOT PARAMETER OVERVIEW\n[BIG stands for coordinates inside of large maps. SMALL stands for coordinates inside of small maps]\n\n");

    for (let x = 1; x <= totalShotSum; x++) {
     console.log("SHOT " + x + "\n\n" + "POSITION X:\n" + shotParameterCalculation(-2000, 2000) + " BIG\n" + shotParameterCalculation(-1000, 1000) + " SMALL\n\n" +
       "POSITION Y:\n" + shotParameterCalculation(-2000, 2000) + " BIG\n" + shotParameterCalculation(-1000, 1000) + " SMALL\n\n" + 
       "POSITION Z:\n" + shotParameterCalculation(0, 600) + " BIG\n" + shotParameterCalculation(0, 350) + " SMALL\n\n" + staticShotCalculation() + rollShotCalculation()
       + yawShotCalculation() + fovShotCalculation());

    }
}  

partFourDivider();
shotParameterDeclaration();


function partFiveDivider(){
    console.log ("\n\n#005\tDEPTH PARAMETERS\n[DETERMINES THE DEPTH OF FIELD PARAMETERS AND ANIMATION FOR EACH SHOT]\n\n");
}


function depthParameterDeclaration(){
console.log("DEPTH PARAMETER OVERVIEW\n\n")

for (let x = 1; x <= totalShotSum; x++) {
   console.log ("SHOT " + x + "\n\n" + "VERSION 1\nDEPTHFOCUS: "+ shotParameterCalculation(100, 2000)+ "\nDEPTHRANGE: " + shotParameterCalculation(100, 2000) + "\n\n"
        + "VERSION 2\nDEPTHFOCUS: "+ shotParameterCalculation(100, 2000)+ "\nDEPTHRANGE: " + shotParameterCalculation(100, 2000) + "\n\n" 
        + "VERSION 3\nDEPTHFOCUS: "+ shotParameterCalculation(100, 2000)+ "\nDEPTHRANGE: " + shotParameterCalculation(100, 2000) + "\n\n" 
        + "VERSION 4\nDEPTHFOCUS: "+ shotParameterCalculation(100, 2000)+ "\nDEPTHRANGE: " + shotParameterCalculation(100, 2000) + "\n\n")
    }
}

partFiveDivider();
depthParameterDeclaration();

function partSixDivider(){
    console.log ("#006\tPOST PRODUCTION\n[DETERMINES ENTIRE FLOW OF THE FILM BASED UPON THE PREVIOUSLY GENERATED PARAMETERS]\n\n");
}

let usableRunTime = 0;

function convertSecondsToFramesDeclaration() {
    usableRunTime = totalRunTime * 24;
    return ( "TOTAL USABLE FRAMES (BASED ON 24FPS):\t" + usableRunTime +"\n\n");
}

function shotRNG() {
    return Math.floor(Math.random() * (totalShotSum - 1 + 1)) + 1;
}

function frameRNG() {
    return Math.floor(Math.random() * (72 - 1 + 1)) + 1;
}

function shotVersion() {
    let versionRNG = shotParameterCalculation(1,4)
    return versionRNG;
}

function fullFilmDeclaration() {
    let introFrames = 240; // Based on 10 seconds * 24 frames per second
    let outtroFrames = 120; // Based on 5 seconds * 24 frames per second
    let usedFrames = introFrames + outtroFrames;

    console.log("FILM OVERVIEW REPORT\n\n");
    console.log("INTRO \t\tVERSION: N/A\tFRAMES: "+ introFrames)
    console.log("OUTTRO \t\tVERSION: N/A\tFRAMES: "+ outtroFrames + "\n")

    while (usedFrames < usableRunTime) {
        usedFrames += frameRNG();
        usedFrames++;
        console.log("SHOT " + shotRNG() + ":\t\t" + "VERSION: " +shotVersion() + "\t" + "TOTAL USED FRAMES: " + usedFrames)
    }

    console.log("\nDEFINITIVE FRAME COUNTER:\n" + usedFrames)
    
    if (usedFrames > usableRunTime) {
        console.log ("\nTOO MANY FRAMES USED:\n" + (usedFrames - usableRunTime) + " FRAMES");
    } else if (usedFrames == usableRunTime) {
        console.log ("\nNOTICED (NEARLY) EXACT RUNTIME:\t " + "RUNTIME WAS " + usableRunTime + " FRAMES AND USED FRAMES ARE " + usedFrames);
    } else {
       console.log ("\nTOO LESS FRAMES:" + "\n" + (usableRunTime - usableRunTime) + " FRAMES");
    }

    console.log("\n/////////////// END OF REPORT ///////////////")

};

partSixDivider();
console.log(convertSecondsToFramesDeclaration());
fullFilmDeclaration();
