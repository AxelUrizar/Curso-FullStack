document.write('<table>');

for (let i=1; i <= 10; i++){
    document.write(`<tr><td>5 * ${i+1} = ${(i+1)*5}<tr><td>`)
    console.log(i);
}

document.write('</table>');

document.getElementById('texto-prueba1').innerHTML = '<p>Texto cambiado con Inner HTML</p>'

document.getElementById('texto-prueba2').innerText = 'Texto cambiado con Inner Text'

document.getElementById('texto-prueba3').textContent = 'Texto cambiado con Text Content'

document.getElementById('texto-prueba4').value = 'Texto cambiado con Value'


