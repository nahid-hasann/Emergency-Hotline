const heartIcon = document.querySelector('.heart-icon');
const heartCount = document.querySelector('.heart-count');

heartIcon.addEventListener('click', function(event){
     let count = parseInt(heartCount.innerText);
     count ++;
     heartCount.innerText = count;
});

const callButton = document.querySelector('.call-button');
const coinCount = document.querySelector('.coin-count');
const mobileNumber = document.querySelector('.mobile-number');

callButton.addEventListener('click', function(){
      let coins = parseInt(coinCount.innerText);

      if(coins > 0){
         coins = coins - 20;
         coinCount.innerText = coins;
      }


});