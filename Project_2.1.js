/**
 *   @author Sierra Smith (sjsmith8147@gmail.com
 *   @version 0.2.2
 *   @summary Project 3 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let lastName, firstName;
let dueD,dueM, dueY, bDay, bMonth, bYear, polNum, numFault, totalBill, age;
function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setLastName();
        setFirstName();
        setdueD();
        setdueM();
        setdueY();
        setbDay();
        setbMonth();
        setbYear();
        setAge();
        setpolNum();
        setnumFault();
        setTotalBill();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nIs this Correct? [0=yes, 1=no]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse(); //improper recursion
        }
    } else {
        continueResponse = 1;
    }
}

function setLastName() {
    lastName = PROMPT.question(`\nPlease enter last name: `);
}

function setFirstName() {
    firstName = PROMPT.question(`\nPlease enter first name: `);
}

function setdueD(){ //how come i can still put letter
    dueD = Number(PROMPT.question(`\nPlease enter the day of the month your bill is due: `));
    if (dueD < 0 || dueD > 28) {
        console.log(`${dueD} is an incorrect value. Please try again.`);
        setdueD();
    }
}

function setdueM(){
    dueM = Number(PROMPT.question(`\nPlease enter the numerical value of the month your bill is due: `));
    if (dueM < 0 || dueM > 12) {
        console.log(`${dueM} is an incorrect value. Please try again.`);
        setdueM();
    }
}

function setdueY(){
    dueY = Number(PROMPT.question(`\nPlease enter the year your bill is due: `));
    if (dueY < 1900 || dueY > 2020) {
        console.log(`${dueY} is an incorrect value. Please try again.`);
        setdueY();
    }
}

function setbDay(){
    bDay = Number(PROMPT.question(`\nPlease enter the day of the month you were born: `));
    if (bDay < 0 || bDay > 31) {
        console.log(`${bDay} is an incorrect value. Please try again.`);
        setbDay();
    }
}

function setbMonth(){
    bMonth = Number(PROMPT.question(`\nPlease enter the numerical value of the month you were born: `));
    if (bMonth < 0 || bMonth > 12) {
        console.log(`${bMonth} is an incorrect value. Please try again.`);
        setbMonth();
    }
}

function setbYear(){
    bYear = Number(PROMPT.question(`\nPlease enter the year you were born: `));
    if (bYear < 1900 || bYear > 2016) {
        console.log(`${bYear} is an incorrect value. Please try again.`);
        setbYear();
    }
}

function setAge() {
    let currentYear = 2016;
    age = currentYear - bYear;
}
function setpolNum(){
    polNum = Math.floor((Math.random() * 9999) + 1000);
}

function setnumFault(){
    numFault = Number(PROMPT.question(`\nIn the last three years, how many at fault accidents have you had? `));
}

function setTotalBill() {
    let basePrice = 100;
    let atFault = 50;
    const youngFee = 20,
        middleFee = 10,
        elderFee = 30,
        youngAge = 15,
        middleAge = 30,
        oldAge = 45,
        elderAge = 60;
    if (age > 0) {
        if (age > youngAge && age < middleAge) {
            totalBill = youngFee + basePrice + (atFault * numFault);
        } else if (age > middleAge && age < oldAge) {
            totalBill = middleFee + basePrice + (atFault * numFault);
        } else if (age > oldAge && age < elderAge) {
                totalBill = basePrice + (atFault * numFault);
            }
        } else if (age > elderAge) {
            totalBill = elderFee + basePrice + (atFault * numFault);
        }
    }

function printGoodbye() {
    process.stdout.write('\x1Bc');
    console.log(`\n Policy Number: ${polNum}, Total Bill is $ ${totalBill} and is due: (${dueM},${dueD},${dueY}) \n Name: ${lastName}, ${firstName} \n Birthday: (${bMonth} ,${bDay} ,${bYear}) Age: ${age} `);
}