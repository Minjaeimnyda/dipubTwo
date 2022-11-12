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
let rockPos = -500;

function trans(idx, drtn) {
  flags[idx] = true;
  for (let i = 0; i < 6; i += 1) {
    if (i !== idx) flags[i] = false;
  }
  test.style.opacity = 0;
  setTimeout(() => {
    test.style.opacity = 1;
  }, drtn);
}

function scrollFn()
{
    console.log(window.scrollY);

  const scrollY = window.scrollY;
  const direction = scrollY > lastScrollY ? "d" : "u";
    //targetRotate = 0;

    if(window.scrollY >=0 && window.scrollY < 300) {
        if (!flags[0]) {
      trans(0, 300);
      setTimeout(() => {
        test.setAttribute("src", "nasaImg/craftOne.png");
      }, 300);
    }
    $objects.forEach((v) => (v.style.opacity = 0));
        //test.setAttribute('src', 'nasaImg/craftOne.png');
        
        startPos = 0;
        endPos = 299;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        
        nowRotate = findAngle(0 , 0, duration, nowPos);
    }
    else if(window.scrollY >=300 && window.scrollY < 500) {
        if (!flags[1]) {
      trans(1, 300);

      setTimeout(() => {
        test.setAttribute("src", "nasaImg/craftThree.png");
      }, 300);
    }
    $objects.forEach((v) => (v.style.opacity = 0));
        //test.setAttribute('src', 'nasaImg/craftThree.png');
        startPos = 300;
        endPos = 499;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        
        nowRotate = findAngle(0 , 0, duration, nowPos);
    }
    else if(window.scrollY >= 500 && window.scrollY < 2650){
        if (!flags[2]) {
      trans(2, 300);
      setTimeout(() => {
        test.setAttribute("src", "nasaImg/craftTwo.png");
      }, 300);
    }
    $objects.forEach((v) => (v.style.opacity = 0));
        //test.setAttribute('src', 'nasaImg/craftTwo.png');
        startPos = 500;
        endPos = 2650-1;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        
        nowRotate = findAngle(0 , -5, duration, nowPos);
        planetPos = findAngle(0 , 300, duration, nowPos);
    }
    else if(window.scrollY >= 2650 && window.scrollY < 5450) {
        if (!flags[3]) {
      trans(3, 300);
      setTimeout(() => {
        test.setAttribute("src", "nasaImg/craftFour.png");
      }, 300);
    }
    $objects.forEach((v) => (v.style.opacity = 0));
        //test.setAttribute('src', 'nasaImg/craftFour.png');
        targetRotate = 0;
        startPos = 2650;
        endPos = 5450-1;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        rock.classList.remove('show');
        rockPos = 0;
        rock.style.bottom = rockPos + 'px';
        nowRotate = findAngle(-60, -70, duration, nowPos);
    }
    else if(window.scrollY >= 5450 && window.scrollY < 7650) {
        if (!flags[4]) {
      trans(4, 300);
      setTimeout(() => {
        test.setAttribute("src", "nasaImg/craftFive.png");
      }, 300);
    }
        $objects.forEach((v) => (v.style.opacity = 0));
        //test.setAttribute('src', 'nasaImg/craftFive.png');
        targetRotate = 0;
        startPos = 5450;
        endPos = 7650-1;
        duration = endPos - startPos;
        nowPos = window.scrollY - startPos;
        //rock.classList.add('show');
        //rock.style.bottom = rockPos + 'px';
        //rockPos += 10;
        rotRatio.classList.remove('on');
        smallRock.classList.remove('on');
        clork.classList.remove('on');
        dumBell.classList.remove('on');
        solar.classList.remove('on');
        nowRotate = findAngle(130, 135, duration,nowPos);
    }
    else  if(window.scrollY >= 7650) {
        if (!flags[5]) {
      trans(5, 2000);
      setTimeout(() => {
        test.setAttribute("src", "nasaImg/boom.png");
        $objects.forEach((v) => (v.style.opacity = 1));
        $cfOne.classList.add("boomed");
      }, 2000);
        //test.setAttribute('src', 'nasaImg/boom.png');
        targetRotate = 0;
        startPos = 7650-1;
        endPos = 7650;
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
         //
    else if(window.scrollY >=7450 && window.scollY <7550) {
    rock.classList.add("show");
    if (direction === "d") {
      rockPos += 6.4;
    } else if (direction === "u") {
      rockPos -= 6.4;
    }
    rock.style.bottom = rockPos + "px";}
    //
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
