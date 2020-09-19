$(function() {

	$(".numeric").numeric({ decimal : ".",  negative : false, scale: 3 });

	var codigo = $("#codigo");
	var codigoAluno = $("#codigoAluno");
	var nota1 = $("#nota1");
	var nota2 = $("#nota2");
	var nota3 = $("#nota3");
	var mediaFinal = $("#mediaFinal");
	var status = $("#status");

	$("#calcular").click( calculaMedia );

	function calculaMedia() {

		let maiorValor = 0;
		let media = 0;

		var notas = $("input[name='nota']").map( function() {return $(this).val()}).get();

		if(notas.length == 3) {

			maiorValor = Math.max.apply(Math, notas);

			for (var i = 0; i < notas.length; i++) {
			   media += Number(notas[i]);
			}

			media = (((media - maiorValor) * 3 ) + ( maiorValor * 4))/10;

			codigoAluno.text( codigo.val() );
			nota1.text( notas[0] );
			nota2.text( notas[1] );
			nota3.text( notas[2] );
			mediaFinal.text( media );

			if(media >= 5)
				status.text('Aprovado');
			else
				status.text('Reprovado');

		}

	}

});