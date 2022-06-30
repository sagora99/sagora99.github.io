var b = document.getElementsByTagName("BODY")[0];

b.addEventListener("mousemove", function (event) {
	parallaxed(event);

});

function parallaxed(e) {
	var amountMovedX = (e.clientX * -0.3 / 21);
	var amountMovedY = (e.clientY * -0.3 / 21);
	var x = document.getElementsByClassName("parallaxed");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
	}

	var amountMovedX2 = (e.clientX * -0.3 / 12);
	var amountMovedY2 = (e.clientY * -0.3 / 12);
	var x2 = document.getElementsByClassName("parallaxed_2");
	var i;
	for (i = 0; i < x2.length; i++) {
		x2[i].style.transform = 'translate(' + amountMovedX2 + 'px,' + amountMovedY2 + 'px)'
	}
}