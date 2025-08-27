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


for(let i = 0; i < )

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