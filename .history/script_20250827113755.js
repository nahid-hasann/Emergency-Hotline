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

const copybutton = document.querySelectorAll(".copy-button");
const copycount = document.querySelector(".copy-count");

for (let i = 0; i < copybutton.length; i++) {
    copybutton[i].addEventListener("click", function () {
        // এই card এর নাম্বার বের করা
        const numberToCopy = this.closest(".card").querySelector(".mobile-number").innerText;

        // Temporary input দিয়ে copy
        const tempInput = document.createElement("input");
        tempInput.value = numberToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // Copy count বাড়ানো
        let count = parseInt(copycount.innerText);
        copycount.innerText = count + 1;

        alert("✅ Number copied: " + numberToCopy);
    });
}