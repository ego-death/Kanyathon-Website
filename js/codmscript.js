const arrOfChoices=Array.prototype.slice.call(document.querySelectorAll('.choice'));
const textObj={
	mode: "The tournament modes will include Search And Destroy, Domination, and Hardpoint. Standard ranked CODM rules apply.",
	structure: "All matches will be in best of three format. The match will include the modes in this order: Hardpoint, Domination and then S&D if required. First team to win two rounds wins the match.",
	qualifiers: "The qualifiers will be of Double Elimination type. A team will get eliminated after 2 consecutive losses.",
	playoffs: "The format of the playoffs will be Knockout stage from quarter-finals.",
	maps: "All maps as of latest CODM update will be played.",
	schedule: "Registration lasts from 8th-20th February, 2021. Qualifiers held from 22nd-27th Feb. Playoffs will be held on 21st March."
}
const block=document.querySelector('.displayInfo');
const information=document.querySelector('#putInfo');

console.log(textObj);

for(const choice of arrOfChoices){
	choice.addEventListener('click', function(e){
		for(const prop in textObj){
			if(e.target.innerText.toLowerCase()==prop){
				if(!(block.classList.value.split(" ").includes("w3-animate-opacity"))){
					block.classList.add("w3-animate-opacity");
				}
					setTimeout(function(){
						block.classList.remove("w3-animate-opacity");
					}, 500);
				block.style.display="block";
				information.innerText=textObj[prop];
			}
		}
	})
}