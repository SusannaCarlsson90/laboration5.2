"use strict"; //säkerhetsställer strikt läge, hjälper hitta misstag i kod

//Kör ner hela sidan, (DOM:en) har laddats in
document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("today"); //hämtar element från html med id today
  if(!element) return; //avbryter om det inte finns
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() +1; //månader i js börjar på 0
  let day = date.getDate();
  //lägger till en nolla på en siffriga månader och dagar
  if(month < 10) {month = "0" + month;}
  if(day < 10) {day = "0" + day;}

  //Skapar variabel datumText, skriver textsträng i format ÅÅÅÅ-MM-DD och lägger sedan in i footern
  const datumText = `${year}-${month}-${day}`; 
  element.textContent = datumText;
})
