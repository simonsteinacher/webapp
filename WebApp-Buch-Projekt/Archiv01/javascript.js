document.querySelector('#bannerbutton').addEventListener("click",showbanner); 
function showbanner(){
	var element = document.querySelector('#top_banner'); 
	var text_element = document.getElementById('bannerbutton'); 
	var classname = 'banneractive'; 

	if(element.classList.contains(classname)){
		element.classList.remove(classname); 
		text_element.innerHTML ="Jetzt Banner einblenden!"; 
	}else{
		element.classList.add(classname); 
		text_element.innerHTML ="Jetzt Banner ausblenden!"; 
	}
}

document.querySelector('#card').addEventListener("click",turn); 
function turn(){
	var element2 = document.querySelector('#card'); 
	var classname2 = 'turn';

	if(element2.classList.contains(classname2)){
		element2.classList.remove(classname2); 
	}else{
		element2.classList.add(classname2); 
	}
}