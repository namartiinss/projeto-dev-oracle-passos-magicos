if (window.location.pathname === '/projeto-dev-passos-magicos/desafio-exemplo.html' || window.location.pathname === '/desafio-exemplo.html') {
	const btns = document.querySelectorAll(".trocar-desafio button");
	let count = 1;

	const title = document.querySelector(".desafio h2");
	const senioridade = document.querySelector(".trocar-desafio h1");
	const imagem = document.querySelector(".flex-desafio img");
	const textoDesafio = document.querySelector(".flex-desafio p");

	btns[0].addEventListener("click", () => {
		count--;
		if (count <= 0) {
			count = 0;
		}
		verificarTexto(count);
	});

	btns[1].addEventListener("click", () => {
		count++;
		if (count >= 3) {
			count = 3;
		}
		verificarTexto(count);
	});

	function verificarTexto(count) {
		if (count == 1) {
			title.innerHTML = "Desenvolvimento Login";
			senioridade.innerHTML = "Júnior";
			imagem.src = "./assets/images/desafio1-imagem.png";
			textoDesafio.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.`;
		} else if (count == 2) {
			title.innerHTML = "Website Coca Cola";
			senioridade.innerHTML = "Intermediário";
			imagem.src = "./assets/images/desafio2-imagem.png";
			textoDesafio.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.`;
		} else if (count == 3) {
			title.innerHTML = "Website Relógio";
			senioridade.innerHTML = "Avançado";
			imagem.src = "./assets/images/desafio3-imagem.png";
			textoDesafio.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec gravida imperdiet nulla suspendisse amet. Aliquet in aliquet facilisis in ultrices. Magna nam sed aliquet in amet.`;
		}
	}
	verificarTexto(count);


	document.querySelector("form button").addEventListener("click", (e) => {
		const form = document.querySelector("form");
		if (form.checkValidity()) {
			e.preventDefault();
			document.querySelector(".modal").style.opacity = 1;
			document.querySelector(".modal").style.pointerEvents = "All";
		}
	});

	document.querySelector(".modal button").addEventListener("click", () => {
		document.querySelector(".modal").style.opacity = 0;
		document.querySelector(".modal").style.pointerEvents = "none";

		document.querySelectorAll(".form-inputs input")[0].value = "";
		document.querySelectorAll(".form-inputs input")[1].value = "";
	});
}

const inputVerificar = document.querySelector("#checkbox-menu");

inputVerificar.addEventListener("click", () => {
    if (inputVerificar.checked == true) {
        document.querySelector("header").style.left = "0%";
    } else {
        document.querySelector("header").style.left = "100%";
    }
});
