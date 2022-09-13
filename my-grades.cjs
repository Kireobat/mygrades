/**import ReadLine from 'readline';

const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
**/

// Array for storage of grades
let grades =[]
const gList = [0,1,2,3,4,5,6]
let sum = 0

/**
 * Adds a grade
 * @param {int} grade 
 */

function addGrade(grade){
    if (gList.includes(grade)){
        grades.push(grade)
    }   else{
        console.log("Error")
    }
}

/**
 * Prints grades stored in "grades"
 */
function viewGrade(){
    console.log(grades)
}

/**
 * Removes last entry in "grades"
 */
function undo(){
    grades.pop()
}

/**
 * Prints the length of "grades"
 */
function length(){
    console.log(grades.length)
}

/**
 * Sorts "grades" from high to low
 */
function htl(){
    grades.sort(function(a,b){return b-a})
}

/**
 * Sorts "grades" from low to high
 */
function lth(){
    grades.sort(function(a,b){return a-b})
}

/**
 * Prints the highest number in "grades"
 */
function max(){
    console.log(Math.max(...grades))
}
/**
 * Prints the lowest number in "grades"
 */
function min(){
    console.log(Math.min(...grades))
}
/**
 * Removes the highest value in "grades"
 */
function rMax(){
    grades.pop(Math.max(...grades))
}
/**
 * Removes the lowers value in "grades"
 */
function rMin(){
    grades.pop(Math.min(...grades))
}
/**
 * Prints the average of all numbers in "grades"
 */
function average(){
    
    for(i=0; i<grades.length; i++){
        sum += grades[i]
    }
    sum = sum / grades.length
    console.log(sum)
}
/**
 * Returns the highest value
 * @returns 
 */
function pMax(){
    return(Math.max(...grades))
}
/**
 * Returns the lowest value
 * @returns 
 */
function pMin(){
    return(Math.min(...grades))
}

let advValue = {
    fornavn : "",
    etternavn : "",
    fag : "",
    karakter : ""
}

let advList = []

let a = ""
let b = ""
let c = ""
let d = ""
/**
 * Makes entries to advList:
 * @param {*} a is a string (fornavn)
 * @param {*} b is a string (etternavn)
 * @param {*} c is a string (fag)
 * @param {*} d is a integer (karakter)
 */
function advGrade(a, b, c, d){
    advValue = {
        fornavn : a,
        etternavn : b,
        fag : c,
        karakter : d
    }
    advList.push(advValue)
}
/**
 * Displays advList
 */
function advView(){
    console.log(advList)
}
/**
 * Searches "advList" for any fornavn entries matching the string "person"
 * @param {*} person 
 */
function advViewFornavn(person){
    for (i=0; i < advList.length; i++){
        if (advList[i].fornavn == person){
            console.log(advList[i])
        }
    }
   
}

/**
 * Searches "advList" for any etternavn entries matching the string "person"
 * @param {*} person 
 */
 function advViewEtternavn(person){
    for (i=0; i < advList.length; i++){
        if (advList[i].etternavn == person){
            console.log(advList[i])
        }
    }
   
}

/**
 * Searches "advList" for any fag entries matching the string "person"
 * @param {*} person 
 */
 function advViewFag(person){
    for (i=0; i < advList.length; i++){
        if (advList[i].fag == person){
            console.log(advList[i])
        }
    }
   
}
/**
 * Searches "advList" for any karakter entries matching the string "person"
 * @param {*} person 
 */
 function advViewKarakter(person){
    for (i=0; i < advList.length; i++){
        if (advList[i].karakter == person){
            console.log(advList[i])
        }
    }
   
}
exports.addGrade = addGrade
exports.viewGrade = viewGrade
exports.undo = undo
exports.length = length
exports.htl = htl
exports.lth = lth
exports.max = max
exports.min = min
exports.rMax = rMax
exports.rMin = rMin
exports.average = average
exports.pMax = pMax
exports.pMin = pMin
exports.advGrade = advGrade
exports.advView = advView
exports.advViewFornavn = advViewFornavn
exports.advViewEtternavn = advViewEtternavn
exports.advViewFag = advViewFag
exports.advViewKarakter = advViewKarakter