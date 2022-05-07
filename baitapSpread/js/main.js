const heading = document.querySelector(".heading");

let jumpText = (text) => {
	let letter = [...text];

	return letter.map((letter) => `<span>${letter}</span>`).join("");
};

heading.innerHTML = jumpText(heading.innerText);
