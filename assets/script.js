const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		
			
		
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		
	}
]





var indexCourant = 0;
const flechDroite = document.querySelector(".arrow_right");
const flechGauche = document.querySelector(".arrow_left");

/******dots */

const dotes = document.querySelectorAll(".dot");




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




function changeSlide()
{

	var slideCourante = slides[indexCourant];

	document.getElementById("slide").src =  "./assets/images/slideshow/" + slideCourante.image;
	document.getElementById("text").innerHTML =   slideCourante.tagLine;

	for (var i=0 ;  i<dotes.length; i++ )
	{
		var dot = dotes[i];
		if (i===indexCourant)
		{ 
			
			dot.classList.add("dot_selected");
		}
		else
		{
			dot.classList.remove("dot_selected");
		}
	}

	

}








