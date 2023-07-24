const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"doty":`
			<button class="dot dot_selected" id="dot1"></button>
			<button class="dot" id="dot2"></button>
			<button class="dot" id="dot3"></button>
			<button class="dot" id="dot4"></button>	
			`
		
			
		
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"doty":`
			<button class="dot" id="dot1"></button>
			<button class="dot dot_selected" id="dot2"></button>
			<button class="dot" id="dot3"></button>
			<button class="dot" id="dot4"></button>	
			`
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"doty":`
			<button class="dot" id="dot1"></button>
			<button class="dot" id="dot2"></button>
			<button class="dot dot_selected" id="dot3"></button>
			<button class="dot" id="dot4"></button>	
			`
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"doty":`
			<button class="dot" id="dot1"></button>
			<button class="dot" id="dot2"></button>
			<button class="dot" id="dot3"></button>
			<button class="dot dot_selected" id="dot4"></button>	
			`
	}
]





var indexCourant = 0;
const flechDroite = document.querySelector(".arrow_right");
const flechGauche = document.querySelector(".arrow_left");

/******dots */

const dotes = document.querySelector(".dots");




flechDroite.addEventListener("click", function () 
{
	indexCourant++;
	if(indexCourant>=slides.length)
	{
		indexCourant=0;
	}
	changeSlide();
	
});

flechGauche.addEventListener("click", function () {

	indexCourant--;
	if(indexCourant<0)
	{
		indexCourant=slides.length-1;
	}
	changeSlide();
});


/*dotes.addEventListener("click", function () {});*/


function changeSlide()
{

	var slideCourante = slides[indexCourant];

	document.getElementById("slide").src =  "./assets/images/slideshow/" + slideCourante.image;
	document.getElementById("text").innerHTML =   slideCourante.tagLine;

	/*for (var i=0 ;  i<slides.length; i++ )
	{
		
	}*/

	cdot();

}

window.onload=init;

function init()
{
	cdot();
}

function cdot()
{
	var slidedot = slides[indexCourant];

	document.getElementById("dotsId").innerHTML = slidedot.doty;

	/*for (var i=0 ;  i<slides.length; i++ )
	{
		
	}*/

}




