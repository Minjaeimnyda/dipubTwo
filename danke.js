let one = 'a';
let test = document.querySelector('#test1');
let rock = document.querySelector('#rock');
let rocPos = 0

let rotRatio = document.querySelector('#rotRatio');
let smallRock = document.querySelector('#smallRock');
let clork = document.querySelector('#clork');
let dumBell = document.querySelector('#dumBell');
let solar = document.querySelector('#solar');

console.log(window.scrollY);

let targetRotate = 0;
let nowRotate = 0;

window.addEventListener('scroll', scrollFn);
//window.addEventListener('scroll', () => {
    //if(window.scrollY >= 10800){

    //rock.style.bottom = rockPos + 'px';
    //rockPos += 10;
    //} else {
        //rockPos = 0;
        //rock.style.bottom = rockPos + 'px';
    //}
//})

let startPos;
let endPos;
let duration;
let nowPos;
let planetPos = 0;
let rockPos = 500;

function scrollFn()
{
    //targetRotate = 0;

    if(window.scrollY >=0 && window.scrollY < 300) {
        test.setAttribute('src', 'nasaImg/craftOne.png');
        startPos = 0;
        endPos = 299;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        
        nowRotate = findAngle(0 , 0, duration, nowPos);
    }
    else if(window.scrollY >=300 && window.scrollY < 500) {
        test.setAttribute('src', 'nasaImg/craftThree.png');
        startPos = 300;
        endPos = 499;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        
        nowRotate = findAngle(0 , 0, duration, nowPos);
    }
    else if(window.scrollY >= 500 && window.scrollY < 5000)
    {
        test.setAttribute('src', 'nasaImg/craftTwo.png');
        startPos = 500;
        endPos = 5000-1;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        
        nowRotate = findAngle(0 , -5, duration, nowPos);
        planetPos = findAngle(0 , 300, duration, nowPos);
    }
    else if(window.scrollY >= 5000 && window.scrollY < 10500) {
        test.setAttribute('src', 'nasaImg/craftFour.png');
        targetRotate = 0;
        startPos = 5000;
        endPos = 10500-1;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        rock.classList.remove('show');
        rockPos = 0;
        rock.style.bottom = rockPos + 'px';
        nowRotate = findAngle(-60, -70, duration, nowPos);
    }
    else if(window.scrollY >= 10500 && window.scrollY < 12000) {
        test.setAttribute('src', 'nasaImg/craftFive.png');
        targetRotate = 0;
        startPos = 10500;
        endPos = 12000-1;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        rock.classList.add('show');
        rock.style.bottom = rockPos + 'px';
        rockPos += 10;
        rotRatio.classList.remove('on');
        smallRock.classList.remove('on');
        clork.classList.remove('on');
        dumBell.classList.remove('on');
        solar.classList.remove('on');
        nowRotate = findAngle(130, 135, duration,nowPos);
    }
    else  if(window.scrollY >= 12000) {
        test.setAttribute('src', 'nasaImg/boom.png');
        targetRotate = 0;
        startPos = 12000-1;
        endPos = 15000;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        rock.classList.remove('show');
        rotRatio.classList.add('on');
        smallRock.classList.add('on');
        clork.classList.add('on');
        dumBell.classList.add('on');
        solar.classList.add('on');
        nowRotate = findAngle(0, 0, duration,nowPos);
    }
}

function findAngle(_angleA, _angleB, _duration, _nowScroll)
{
    let finalAngle = _angleA + (_angleB-_angleA) *_nowScroll/_duration;
    return finalAngle;
}

let rotateAni = requestAnimationFrame(makeAni);

function makeAni()
{
    test.style.transform = "rotate(" + nowRotate + "deg)";
    //nowRotate += (targetRotate - nowRotate)*0.05;
    requestAnimationFrame(makeAni);
}



/*
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY >500) {
        
    }
    })
 window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    
    })
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    
    })
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
   
    })
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    
    })
*/
