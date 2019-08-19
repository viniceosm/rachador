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

	let res = 'Cada um paga isso -> ';

	quos.map(function(v, i){
		res += '<br>' + (i+1) + ') R$ ' + v;
	});

	res += '<br><br>' +
			'Total ae -> ' + totalquos();

	document.getElementById('res').innerHTML = res;

	function countDecimals(value) {
		if (Math.floor(value) !== value)
			return value.toString().split(".")[1].length || 0;
		return 0;
	}
}

document.getElementById('btnRachar').addEventListener('click', rachar);