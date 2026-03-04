function calcularCusto() {
    const salarioBase = parseFloat(document.getElementById('salarioBase').value);
    const beneficios = parseFloat(document.getElementById('beneficios').value);
    const encargos = parseFloat(document.getElementById('encargos').value);

    if (isNaN(salarioBase) || isNaN(beneficios) || isNaN(encargos)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    const valorEncargos = salarioBase * (encargos / 100);
    const custoTotal = salarioBase + beneficios + valorEncargos;

    document.getElementById('custoTotal').textContent = `R$ ${custoTotal.toFixed(2)}`;
}
