"use strict";

const enableExp = document.getElementById("pv-expand");
const expandable = document.getElementById("exp");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let expanded = false;

const expand = () => {
  if (!expanded) {
    expandable.classList.remove("hidden");
    plus.classList.add("hidden");
    minus.classList.remove("hidden");

    expanded = true;
  } else {
    expandable.classList.add("hidden");
    minus.classList.add("hidden");
    plus.classList.remove("hidden");
    expanded = false;
  }
};

enableExp.addEventListener("click", (e) => {
  expand();
});
