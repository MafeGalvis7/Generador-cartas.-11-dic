/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  function randomCard() {
    let suits = ["♦", "♥", "♠", "♣"];
    let number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let rdmSuits = suits[Math.floor(Math.random() * suits.length)];
    let rdmNumber = number[Math.floor(Math.random() * number.length)];

    let color = rdmSuits === "♦" || rdmSuits == "♥" ? "red" : "black";

    document.querySelector(".suits-top").innerHTML = rdmSuits;
    document.querySelector(".number").innerHTML = rdmNumber;
    document.querySelector(".suits-bottom").innerHTML = rdmSuits;

    document.querySelector(".suits-top").style.color = color;
    document.querySelector(".suits-bottom").style.color = color;
  }
  randomCard();
};
