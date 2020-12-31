// Getting the Question elememts
const question = document.querySelectorAll('#question1');
//Increment the score
let score = 0;
// Getting the Submit Button
const button = document.querySelector('.submit');

// Adding an Event Listener
button.addEventListener('click', (e) => {
    e.preventDefault();
    //Using a for Each loop
    question.forEach((check) => {
        // Check correct answer
      if(check.value === 'Brendan Eich' &  check.checked === true){
         score++;
        document.querySelector('.passed').innerHTML = '&#9989';
        document.querySelector('.failed').style.display = 'none';
      }else{
        document.querySelector('.failed').innerHTML = '&#10060';
      }
      if(check.value === 'function addNum()' &  check.checked === true){
            score++;
        document.querySelector('.passed2').innerHTML = '&#9989';
        document.querySelector('.failed2').style.display = 'none';
      }else{
        document.querySelector('.failed2').innerHTML = '&#10060';
      }
      if(check.value === 'console.log()' &  check.checked === true){
        score++;
        document.querySelector('.passed3').innerHTML = '&#9989';
        document.querySelector('.failed3').style.display = 'none';
       }else{
        document.querySelector('.failed3').innerHTML = '&#10060';
      }
       if(check.value === 'True' &  check.checked === true){
        score++;
        document.querySelector('.passed4').innerHTML = '&#9989';
        document.querySelector('.failed4').style.display = 'none';
       }else{
        document.querySelector('.failed4').innerHTML = '&#10060';
      }
       if(check.value === 'Browser' &  check.checked === true){
        score++;
        document.querySelector('.passed5').innerHTML = '&#9989';
        document.querySelector('.failed5').style.display = 'none';
       }else{
        document.querySelector('.failed5').innerHTML = '&#10060';
      }
       if(check.value === 'for(let i = 0; i > 0; i++);' &  check.checked === true){
        score++;
        document.querySelector('.passed6').innerHTML = '&#9989';
        document.querySelector('.failed6').style.display = 'none';
       }else{
        document.querySelector('.failed6').innerHTML = '&#10060';
      }
       if(check.value === 'forEach()' &  check.checked === true){
        score++;
        document.querySelector('.passed7').innerHTML = '&#9989';
        document.querySelector('.failed7').style.display = 'none';
       }else{
        document.querySelector('.failed7').innerHTML = '&#10060';
      }
       if(check.value === 'using typeOf' &  check.checked === true) {
        score++;
        document.querySelector('.passed8').innerHTML = '&#9989';
        document.querySelector('.failed8').style.display = 'none';
       }else{
        document.querySelector('.failed8').innerHTML = '&#10060';
      }
       if(check.value === '6' &  check.checked === true){
        score++;
        document.querySelector('.passed9').innerHTML = '&#9989';
        document.querySelector('.failed9').style.display = 'none';
       }else{
        document.querySelector('.failed9').innerHTML = '&#10060';
      }
       if(check.value === 'toUpperCase()' &  check.checked === true){
        score++;
        document.querySelector('.passed10').innerHTML = '&#9989';
        document.querySelector('.failed10').style.display = 'none';
       }else{
        document.querySelector('.failed10').innerHTML = `&#10060`;
        
      }            
    })
    // Cacculate the Score
    let total = score++
    document.querySelector('.total').innerHTML = `Total Score: ${total} out of 10`
    if(total === 10){
      score = 10;
      total = score;
    }
    score = 0
    // Check Answers
    let answer  = document.querySelector('.answer').innerHTML = 'Click Here To Check For Answers'
})
// Repeat the quiz
const repeat = document.querySelector('.repeat');
repeat.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.reload()
})


