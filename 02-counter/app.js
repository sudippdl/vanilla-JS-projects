//set initial count
let count = 0;

//select values and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

//forEach method
btns.forEach(function (btn) {
    //event listener
    btn.addEventListener('click', function(e){
        //check which btn user clicked
        const styles = e.currentTarget.classList;
        //conditions
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count>0){
            value.style.color = 'green'; 
        }
        if(count<0){
            value.style.color = 'red'; 
        }
        if(count === 0){
            value.style.color = '#222'; 
        }
        value.textContent = count;
    });
});