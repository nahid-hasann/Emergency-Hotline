// ** 1 
const heartIcon = document.querySelector('.heart-icon');
const heartCount = document.querySelector('.heart-count');

heartIcon.addEventListener('click', function(event){
     let count = parseInt(heartCount.innerText);
     count ++;
     heartCount.innerText = count;
});

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

const copyButton = document.querySelector(".copy-button");
const copyCount = document.querySelector(".copy-count");

copyButton.addEventListener("click", async function(){
    const numberToCopy = document.querySelector(".mobile-number").innerText;

    try {
        // Clipboard এ copy করা
        await navigator.clipboard.writeText(numberToCopy);

        // Copy successful হলে count বাড়ানো
        let count = parseInt(copyCount.innerText);
        count++;
        copyCount.innerText = count;

        // Alert দেখানো
        alert("✅ Number copied: " + numberToCopy);

    } catch (err) {
        console.error("Copy failed!", err);
    }
});