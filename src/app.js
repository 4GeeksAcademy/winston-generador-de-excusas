/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El Gato", "Mi Abuelo", "EL Cartero", "Mi Guacamaya"];
  let action = ["comió", "orinó", "aplastó", "rompió", "vomitó"];
  let what = ["mi tarea", "mi móvil", "mi coche", "mi portátil"];
  let when = [
    "antes de clases",
    "mientras dormía",
    "cuando entrenaba",
    "durante mi almuerzo",
    "mientras veía netflix"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  document.querySelector("#excusa").innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
};
