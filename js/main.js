"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("today");
  if(!element) return;
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() +1;
  let day = date.getDate();
  if(month < 10) {month = "0" + month;}
  if(day < 10) {day = "0" + day;}

  const datumText = `${year}-${month}-${day}`;
  element.textContent = datumText;
})
