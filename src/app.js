/* eslint-disable */
import "bootstrap";
import "./style.css";

import spades from "./assets/img/01_of_spades_A.svg.png";
import diamonds from "./assets/img/200px-Playing_card_diamond_A.svg.png";
import clubs from "./assets/img/640px-Ace_of_clubs.svg.png";
import hearts from "./assets/img/Ace_of_hearts.svg.png";

window.onload = function () {
  //write your code here


  let palos = ['♦', '♥', '♠', '♣'];
  let pics = [diamonds, hearts, spades, clubs];
  let cartas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  let textMap = '<ul class="list-group">'
  textMap += '<li class="list-group-it∫em bg-success text-light">Poker Cards</li>'
  palos.map((iterator) => {
    pics.map((item) => {
      cartas.map((element) => {
        textMap += `
        <div class="container d-flex justify-content-center">
           <div class="card" style="width: 18rem;">
            <img src="${item}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${iterator}</h5>
              <p class="card-text">${element}</p>
            </div>
          </div>
        </div>
        `

      })
    })
  })
  textMap += '</ul>';
  document.querySelector('#poker').innerHTML = textMap;
}
