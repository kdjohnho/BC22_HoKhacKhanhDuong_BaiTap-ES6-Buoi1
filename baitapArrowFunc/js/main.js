const colorList = [
	"pallet",
	"viridian",
	"pewter",
	"cerulean",
	"vermillion",
	"lavender",
	"celadon",
	"saffron",
	"fuschia",
	"cinnabar",
];

let colorLoad = () => {
	let content = "";
	for (let i = 0; i < colorList.length; i++) {
		if (i == 0) {
			content +=
				"<button class='color-button " + colorList[i] + " active'></button>";
		} else {
			content += "<button class='color-button " + colorList[i] + "'></button>";
		}
	}
	document.getElementById("colorContainer").innerHTML = content;
};
colorLoad();

let getColor = document.getElementsByClassName("color-button");

// Loop through button list, DOM to each button
for (let i = 0; i < getColor.length; i++) {
	getColor[i].addEventListener("click", function () {
		changeColor(colorList[i], i);
	});
}

let changeColor = (color, index) => {
	for (let i = 0; i < getColor.length; i++) {
		getColor[i].classList.remove("active");
	}
	getColor[index].classList.add("active");

	// document.getElementById("house").classList.add(`${color}`);
	document.getElementById("house").className = "house " + color;
};
