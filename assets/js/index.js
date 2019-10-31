// Back to top function - 
// Modified from a tutorial found at
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

// Declare the button
var backToTop = document.getElementById("topBtn");

// When scrolling beyond 50px from the top of the page, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		topBtn.style.display = "block";
	}	else {
		topBtn.style.display = "none";
	}
}

// Function that makes the page scroll back to the top when pressed
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Pie Chart Used in Skills Section
// Modified from a tutorial located at 
// https://canvasjs.com/javascript-charts/pie-chart-legends/ - by Canvasjs

// Declare the chart variable
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		// Chart Title
		text: "Coding Skills"
	},
	legend:{
		// Cursor Type
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		// Chart Type
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: 26, name: "HTML5", exploded: true },
			{ y: 20, name: "CSS3" },
			{ y: 5, name: "JavaScript" },
			{ y: 3, name: "Python" },
			{ y: 7, name: "MYSQLI" },
			{ y: 17, name: "PHP" },
			{ y: 22, name: "Jquery"}
		]
	}]
});
chart.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}
