$(function() {

	$(".numeric").numeric({ decimal : ".",  negative : false, scale: 3 });

	var valorPagar = $("#valorPagar");
	
	$("#calcular").click( calcularValor );

	function calcularValor() {

		let qtdLitros = $("#litros").val();
		let tipoCombustivel = $("#tipoCombustivel").val();
		let valor = 0;

		if(Number(qtdLitros) > 0) {

			if(tipoCombustivel === 'A') {

				valor = Number(qtdLitros) * 2.19;

				if(Number(qtdLitros) > 20)
					valor -= (valor / 100) * 5;
				else
					valor -= (valor / 100) * 3;


			} else {

				valor = Number(qtdLitros) * 2.99;

				if(Number(qtdLitros) > 20)
					valor -= (valor / 100) * 6;
				else
					valor -= (valor / 100) * 4;

			}


			valorPagar.text(  formatMoney(valor, 'R$ ') );

		}

	}

	function formatMoney(x, symbol) {
	    if (!symbol) {
	        symbol = "";
	    }
	    return accounting.formatMoney(x, symbol, 2, "," == 0 ? ' ' : ".", ",", "%s%v");
	}

});