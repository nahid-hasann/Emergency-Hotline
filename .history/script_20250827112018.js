// ** 1 
const heartIcon = document.querySelectorAll('.heart-icon');
const heartCount = document.querySelector('.heart-count');

for(let i = 0; i < heartIcon.length; i++){
    heartIcon
}

// ** 2 
const callButton = document.querySelector('.call-button');
const coinCount = document.querySelector('.coin-count');
const mobileNumber = document.querySelector('.mobile-number');

callButton.addEventListener('click', function(){
      let coins = parseInt(coinCount.innerText);

      if(coins > 0){
         coins = coins - 20;
         coinCount.innerText = coins;
         alert('☎️ calling to ' + mobileNumber.innerText + " National Emergency ")
      }
      else{
        alert('😰 sorry for that');
      }


});

// ** 3 

const copybutton = document.querySelector(".copy-button");
const copycount = document.querySelector(".copy-count");

copybutton.addEventListener("click", async function(){
    const numberToCopy = document.querySelector(".mobile-number").innerText;

    try {

        await navigator.clipboard.writeText(numberToCopy);

        let count = parseInt(copycount.innerText);
        count++;
        copycount.innerText = count;

  
        alert(" 👍 Number copie: " + numberToCopy);

    } catch (err) {
        console.error("failed!", err);
    }
});