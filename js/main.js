const leftBtn=document.querySelector('#leftBtn').addEventListener('click', prevPic);
const rightBtn=document.querySelector('#rightBtn').addEventListener('click', nextPic);
const pic=document.querySelector('.cod1');
console.log(pic);
const keepPicLinks=["images/codmobilecarousel.jpg", "images/valorantcarousel.jpg", "images/codmobilecarousel2.jpg"];
let count=0;

function prevPic(){
	if(!count) count=2;
	else count--;
	pic.src=keepPicLinks[count];
}

function nextPic(){
	if(count==2) count=0;
	else count++;
	pic.src=keepPicLinks[count];
}

















