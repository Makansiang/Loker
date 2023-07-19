const btn = document.querySelector('#btn');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const body = document.body;
let isImage1 = true;

const backgroundImages = ['bg.jpg', 'bg1.png'];

btn.addEventListener('click', ()=>{
    isImage1 = !isImage1;
    const imageIndex = isImage1 ? 0 : 1;

    if(container1.style.display!== 'none'){
        container1.style.display="none";
        container2.style.display="flex";
        body.style.backgroundImage = `url('${backgroundImages[imageIndex]}')`;

    }else{
        container1.style.display="flex";
        container2.style.display="none";
    };
});
