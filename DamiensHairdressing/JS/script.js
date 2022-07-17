/*
     DamiensHairdressing
     Ronan Goligy
     2021
     Script.js
*/

// cycle Through words
const textList = ["Perms,", "Foils,", "Fades,", "Colours,  ", "Beards,"];

const cycle = document.querySelector("#cycle");

let i = 0;
const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 1500);
