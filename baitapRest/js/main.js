let AverageCalc = (...scores) => {
	let sum = 0;
	scores.map((score) => {
		sum += score * 1;
	});

	return (sum / scores.length).toFixed(2);
};

document.getElementById("btnKhoi1").addEventListener("click", () => {
	let math = document.getElementById("inpToan").value;
	let physics = document.getElementById("inpLy").value;
	let chemistry = document.getElementById("inpHoa").value;

	document.getElementById("tbKhoi1").innerHTML = AverageCalc(
		math,
		physics,
		chemistry
	);
});

document.getElementById("btnKhoi2").addEventListener("click", () => {
	let literature = document.getElementById("inpVan").value;
	let history = document.getElementById("inpSu").value;
	let geography = document.getElementById("inpDia").value;
	let english = document.getElementById("inpEnglish").value;

	document.getElementById("tbKhoi2").innerHTML = AverageCalc(
		literature,
		history,
		geography,
		english
	);
});
