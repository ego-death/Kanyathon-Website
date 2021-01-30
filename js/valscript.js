const arrOfChoices=Array.prototype.slice.call(document.querySelectorAll('.choice'));
const textObj={
	mode: "The mode is Team Deathmatch",
	qualifiers: "The qualifiers will be of Double Elimination type. A team will get eliminated after 2 consecutive losses.",
	playoffs: "The format of the playoffs will be Knockout stage from quarter-finals.",
	maps: "The maps in play will be Bind, Haven, Split and Icebox.",
	schedule: "Registration lasts from 8th-20th February, 2021. Qualifiers held from 7th-13th March. Playoffs will be held on 23rd March."
}
const block=document.querySelector('.displayInfo');
const information=document.querySelector('#putInfo');

console.log(textObj);

for(const choice of arrOfChoices){
	choice.addEventListener('click', function(e){
		for(const prop in textObj){
			if(e.target.innerText.toLowerCase()==prop){
				block.style.display="block";
				information.innerText=textObj[prop];
			}
		}
	})
}