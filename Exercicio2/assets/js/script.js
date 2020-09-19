$(function() {

	$(".numeric").numeric({ decimal : ".",  negative : false, scale: 3 });

	var pesoIdeal = $("#pesoIdeal");
	
	$("#calcular").click( calcularPeso );

	function calcularPeso() {

		let valorAltura = $("#altura").val();
		let valorSexo = $("#sexo").val();
		let peso = 0;

		if(Number(valorAltura) > 0) {

			if(valorSexo == 'M')
				peso = (72.7 * Number(valorAltura)) - 58;
			else
				peso = (62.1 * Number(valorAltura)) - 44.7;

			pesoIdeal.text(peso.toFixed(2)+' kg'); 

		}

	}

});