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
        const helpLineNames = this.c

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
const callHistoryButoon = document.querySelector('.clear-button');

cardSection.addEventListener('click', function(event) {
      const target = event.target;
      const clearButton = document.getElementById('clear');

      if(target.classList.contains('call-button') || target.closest('.call-button')){
        const card = target.closest('.card');

        const helplineName = card.querySelector('.helpline-name').innerText;
        const mobileNumber = card.querySelector('.mobile-number').innerText;
        const currentTime = new Date().toLocaleTimeString();

        const newDiv = document.createElement('div');

        newDiv.innerHTML = `

                 <div class="flex justify-around mt-[20px] bg-[#fafafa] p-[10px] rounded-xl">
                    <div>
                    <h1>${helplineName}</h1>
                    <p>${mobileNumber}</p>
                 </div>
                 <div class="flex justify-center items-center">
                    <p>${currentTime}</p>
                 </div>
                 </div>

        
        `;
        callHistoryContainer.appendChild(newDiv);
      }
      clearButton.addEventListener('click', function(){
         newDiv.innerHTML = "";
      })

});

// ** 5 

const clearButton = document.getElementById('clear');
const callHistorysection = document.querySelector('.call-history-section');

clearButton.addEventListener('click', function(event){
      callHistorysection.innerHTML = "";
});
