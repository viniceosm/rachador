function rachar () {
	let pagar = parseFloat(document.getElementById('txtPagar').value);
	let qtdPessoas = parseInt(document.getElementById('txtQtdePessoa').value);
	let quo = pagar / qtdPessoas;
	let quos = Array(qtdPessoas).fill(quo);

	let totalquos = () => quos.reduce((a, b) => a + b);
	let indicemaior = () => quos.indexOf(Math.max(...quos));

	if (countDecimals(quo) > 2) {
		for (let i in quos) {
			quos[i] = parseFloat((quos[i]).toFixed(2));
		}

		while (totalquos() > pagar) {
			quos[indicemaior()] = parseFloat((parseFloat(quos[indicemaior()].toFixed(2)) - 0.01).toFixed(2));
		}
	}

	let res = '';

	for(let r of verRepeticao(quos)) {
		res += '<br>' + pluralString((r.q + 1) + ' pessoa tem que pagar R$ ') + r.valorVerificar;
	}

	res = res.substring(4, res.length);

	document.getElementById('res').innerHTML = res;
}

document.getElementById('btnRachar').addEventListener('click', rachar);

function countDecimals(value) {
	if (Math.floor(value) !== value)
		return value.toString().split(".")[1].length || 0;
	return 0;
}

function verRepeticao(arr) {
	var valorRepeticaoIndex = [];
	var valorRepeticao = [];

	arr.forEach(valorVerificar => {
		var i = valorRepeticaoIndex.findIndex(v => v == valorVerificar);

		if (i == -1) {
			valorRepeticaoIndex.push(valorVerificar);
			i = valorRepeticaoIndex.length - 1;
		}

		var q = ((valorRepeticao[i] != undefined) ? (valorRepeticao[i].q + 1) : 0);
		valorRepeticao[i] = { valorVerificar, q };
	});

	return valorRepeticao;
}