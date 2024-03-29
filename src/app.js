/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import spades from "./assets/img/01_of_spades_A.svg.png";
import diamonds from "./assets/img/200px-Playing_card_diamond_A.svg.png";
import clubs from "./assets/img/640px-Ace_of_clubs.svg.png";
import hearts from "./assets/img/Ace_of_hearts.svg.png";

window.onload = function () {
  //write your code here

  // PRIMERA OPCIÓN FUNCIONANDO:

  /*   let palos = ['♦', '♥', '♠', '♣'];
    let cartas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  
    let textMap = '<ul class="list-group">'
    textMap += '<li class="list-group-item bg-success text-light">Using .map()</li>'
  
    palos.map((iterator) => {
      cartas.map((item) => {
        textMap += `
           <li class="list-group-item">
             ${iterator}${item}
           </li>
         `
      })
    })
  
  
    textMap += '</ul>';
    document.querySelector('#poker').innerHTML = textMap;
  };
   */


  // SEGUNDA OPCIÓN CON IMAGENES:

  let palos = ['♦', '♥', '♠', '♣'];
  let cartas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  let pics = { diamonds, hearts, spades, clubs };

  

/*   palos.map((iterator) => {
    cartas.map((item) => {
      Object.keys(pics).map((key) => {
        let element = pics[key];
        textMap += `
        <li class="list-group-item">
        ${iterator}${item}<img src="${element}" alt="${key}">
        </li>
      `
      })
    })
  }) */
  let textMap = '<ul class="list-group">'
  textMap += '<li class="list-group-it∫em bg-success text-light">Using .map()</li>'

  let resultado = cartas.map((elemento2, indice) => {
    let elemento1 = palos[indice]; // Obtener el elemento correspondiente de let1
    let elemento3 = pics[elemento1]; // Obtener el elemento correspondiente de pics
    return elemento1 + elemento2 + `<img src="${elemento3}" alt="${elemento1}${elemento2}">`; // Combinar elementos de let1, let2 y pics y devolverlos
  });

  textMap += resultado.join(""); // Unir todos los elementos del arreglo resultado y agregarlos a textMap

  textMap += '</ul>';
  document.querySelector('#poker').innerHTML = textMap;
}
