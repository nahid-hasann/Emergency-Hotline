const heartIcon = document.querySelector('.heart-icon');
const heartCount = document.querySelector('.heart-count');

heartIcon.addEventListener('click', function(event){
     let count = parseInt(heartCount.innerText);
     count ++;
     heartCount.innerText = count;
});

const callButton = document.querySelector('')