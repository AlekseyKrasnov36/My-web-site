// random password project
function password() {

  // part one (time)

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  if (hours == 0) {
    hours = 1;
  }
  if (minutes == 0) {
    minutes = 1;
  }
  if (seconds == 0) {
    seconds == 1;
  }
// random number
  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let end = (seconds * random(1,10)) * (minutes * random(6,34)) * (hours * random(3,6));
  let endMas = end.toString().split("");

// part two (A-Z / a-z)
 let mas = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
 let newMas = mas.sort (() =>  0.5 - Math.random()).slice(0,8);
  let specMas = ['!','@','#','$','-'];
  let specMasTwo = specMas.sort(() => - Math.random()).slice(0,5)
  let dopMas = ['^','&','*','(',')','_','+','=','?','№',';','%','[',']','{','}','/','!','<','>'];
  let dopMasTwo = dopMas.sort(() => - Math.random()).slice(0,5)

//  mas random item

  let final = [...newMas, ...endMas];
  let finalTwo = final.sort(() => 0.5 - Math.random()).slice(0,15) 

// part three (check checkbock)


  const checkboxOne = document.getElementById('checkbox-spec');
  const checkboxValueOne = checkboxOne.checked ? checkboxOne.value : '';

  const checkboxTwo = document.getElementById('checkbox-dop');
  const checkboxValueTwo = checkboxTwo.checked ? checkboxTwo.value : '';


// result


  if (checkboxValueOne && checkboxValueTwo == 'true') {
    let quq = [...finalTwo, ...dopMasTwo, ...specMasTwo]
    let quqF = quq.sort(() => 0.5 - Math.random()).slice(0,20) 
    quqF.length = Math.min(quqF.length, 20)
    let fi = quq.join('')
    let i = document.querySelector('.password');
      i.innerHTML = fi;
  }
   else if (checkboxValueOne == 'true'){
    let quq = [...finalTwo, ...specMasTwo]
    
    let quqF = quq.sort(() => 0.5 - Math.random()).slice(0,20) 
    quqF.length = Math.min(quqF.length, 20)
    
    let fi = quq.join('')
    let i = document.querySelector('.password');
      i.innerHTML = fi;
  }
   else if (checkboxValueTwo == 'true'){
    let quq = [...finalTwo, ...dopMasTwo]
    let quqF = quq.sort(() => 0.5 - Math.random()).slice(0,20) 
    quqF.length = Math.min(quqF.length, 20)
    let fi = quq.join('')
    let i = document.querySelector('.password');
      i.innerHTML = fi;
  } 
  
  else {
    let i = document.querySelector('.password');
    let finalTwoOne = finalTwo.join('')
        i.innerHTML = finalTwoOne;
  }
  
  return end
  
}