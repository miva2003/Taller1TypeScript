import { series } from './data.js';
import { Serie } from './Serie.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const promedio: HTMLElement = document.getElementById('promedio')!;

renderSeriesInTable(series);
promedio.innerHTML = `<strong>Seasons average: ${getPromedio(series).toFixed(0)}<strong>`;

function renderSeriesInTable(s: Serie[]): void {
  console.log("Cargando series en la tabla...", s);
  s.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${c.id}</td>
      <td><span class="serie-name">${c.name}</span></td>
      <td>${c.channel}</td>
      <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedio(s: Serie[]): number {
  let total = 0;
  s.forEach(c => {
    total += c.seasons;
  });
  return total / s.length;
}
console.log("Hola desde main.ts");
