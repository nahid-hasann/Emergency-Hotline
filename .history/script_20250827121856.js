// ** 1 
const heartIcon = document.querySelectorAll('.heart-icon');
const heartCount = document.querySelector('.heart-count');

for(let i = 0; i < heartIcon.length; i++){
    heartIcon[i].addEventListener('click', function(){
    let count = parseInt(heartCount.innerText);
     count ++;
     heartCount.innerText = count;
    });
};

// ** 2 
const callButton = document.querySelectorAll('.call-button');
const coinCount = document.querySelector('.coin-count');


for(let i = 0; i < callButton.length; i++){
    callButton[i].addEventListener('click', function(){
        let coins = parseInt(coinCount.innerText);

        const mobileNumber = this.closest('.card').querySelector('.mobile-number');

      if(coins > 0){
         coins = coins - 20;
         coinCount.innerText = coins;
         alert('☎️ calling to ' + mobileNumber.innerText + " National Emergency ")
      }
      else{
        alert('😰 sorry for that');
      }
    });
}

// ** 3 

const copyButtons = document.querySelectorAll(".copy-button");
const copyCount = document.querySelector(".copy-count");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        const numberToCopy = this.closest(".card").querySelector(".mobile-number").innerText;

        navigator.clipboard.writeText(numberToCopy).then(() => {
            let count = parseInt(copyCount.innerText);
            copyCount.innerText = count + 1;
            alert("✅ Number copie: " + numberToCopy);
        });
    });
}

// ** 4 

const cardSection = document.querySelector('.card-section');
const callHistoryContainer = document.querySelector('.call-history-section');

cardSection
