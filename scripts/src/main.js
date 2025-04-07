import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promedio = document.getElementById('promedio');
renderSeriesInTable(series);
promedio.innerHTML = "<strong>Seasons average: ".concat(getPromedio(series).toFixed(0), "<strong>");
function renderSeriesInTable(s) {
    console.log("Cargando series en la tabla...", s);
    s.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td>".concat(c.id, "</td>\n      <td><span class=\"serie-name\">").concat(c.name, "</span></td>\n      <td>").concat(c.channel, "</td>\n      <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedio(s) {
    var total = 0;
    s.forEach(function (c) {
        total += c.seasons;
    });
    return total / s.length;
}
console.log("Hola desde main.ts");
