const { request } = require("express");

const fs = require('fs');

//1-what floor does santa end up on
// ( -->should go up 1 floor)
// ) -->should go down 1 floor

function question1() {
    fs.readFile("./santa.txt", (err, data) => {
        console.time("challenge")
        const directions = data.toString();
        const levelArray = [...directions];
        const currentLvl = levelArray.reduce((acc, current) => {
            if (current === "(") {
                return acc += 1;
            }
            else if (current === ")") {
                return acc -= 1;
            }
        }, 0)
        /*  let count = 0;
         levelArray.forEach(level => {
             level === "(" ? count++ : count--
         }) */
        console.timeEnd("challenge");
        console.log('floor:', currentLvl)
    })
}

function question2() {
    fs.readFile("./santa.txt", (err, data) => {
        console.time("challenge");
        const directions = data.toString();
        const levelArray = [...directions];
        let count = 0;
        let positionBase = 0;
        for (let i = 0; i < levelArray.length; i++) {
            levelArray[i] === "(" ? count++ : count--;
            if (count == -1) {
                positionBase = i + 1;
                break;
            }

        }
        console.timeEnd('challenge')
        console.log(positionBase);

    })

}

// I Was Told There Would Be No Math
function question3() {
    fs.readFile('./day2.txt', (err, data) => {
        const list = data.toString().split('\r\n').map(dimension => {
            return dimension = dimension.split('x');
        });
        const total = list.reduce((acc, current) => {
            return acc += calculateArea(...current);
        }, 0)
        console.log(total);
    })
}

function calculateArea(l, w, h) {
    const dimension = [l, w, h];
    dimension.sort((a, b) => { a - b });
    const total = 2 * l * w + 2 * w * h + 2 * h * l + dimension[0] * dimension[1];
    return total;
}

question3();
