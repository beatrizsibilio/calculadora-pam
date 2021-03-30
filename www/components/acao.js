// This is a JavaScript file

var valor1="", valor2, operacao;

$(document).on('click','.num', function(){
  var atual = $(this).html();
  var valorVisor = $('#visor').val();
  if (valorVisor == 0)
  {
    valorVisor = "";
  }
  var visor = valorVisor + atual
  $('#visor').val(visor);
});

$(document).on('click','.ope', function(){
  operacao = $(this).html();
  valor1 = $('#visor').val();
  $('#visor').val("");
});

$(document).on('click','.calcular', function(){
  var valor2 = $('#visor').val();
  var total;
  $('#visor').val();
  if (operacao == '+'){
    total = parseFloat(valor1) + parseFloat(valor2);
  }
  if (operacao == '-'){
    total = parseFloat(valor1) - parseFloat(valor2);
  }
  if (operacao == 'x'){
    total = parseFloat(valor1) * parseFloat(valor2);
  }
  if (operacao == '/'){
    total = parseFloat(valor1) / parseFloat(valor2);
  }
  $('#visor').val(total);
});

$(document).on('click','.ce', function(){
  $('#visor').val("0");
});