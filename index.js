function aplicarDesconto(valor, desconto) {
	if (valor < desconto)
		return 0;
	return valor - desconto;
}

module.exports = {aplicarDesconto};