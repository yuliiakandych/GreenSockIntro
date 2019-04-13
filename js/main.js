(() => {
	console.log('fired');

	const targetBox = document.querySelector('.box');

	// basic greensock animation
	// TweenMax.to(el, time, {props});\

	function runAnimation(){
	TweenMax.to(targetBox, 0.8, {
		x: 450, 
		rotation: 180,
		scaleX: 1.5,
		scaleY:1.5

		});
	}

	function resetAnimation(){
	TweenMax.to(targetBox, 0.8, {
		x: 0, 
		rotation: 0,
		scaleX: 1,
		scaleY:1

		});
	}

targetBox.addEventListener("mouseover", runAnimation);
targetBox.addEventListener("mouseout", resetAnimation);	


})();