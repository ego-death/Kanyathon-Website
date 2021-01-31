const leftBtn=document.querySelector('#leftBtn').addEventListener('click', prevPic);
const rightBtn=document.querySelector('#rightBtn').addEventListener('click', nextPic);
const pic=document.querySelector('#carouselBackground');
console.log(pic);
const keepPicLinks=["images/carousel2.jpg", "images/carousel3.jpg", "images/carousel1.jpg"];
let count=0;

function prevPic(){
	if(!count) count=2;
	else count--;
	//pic.classList.remove("w3-animate-opacity");
	//pic.classList.add("w3-animate-opacity");
	pic.src=keepPicLinks[count];
}

function nextPic(){
	if(count==2) count=0;
	else count++;
	pic.src=keepPicLinks[count];
}

















