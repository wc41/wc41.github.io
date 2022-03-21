"use strict";

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");

const nova = document.querySelector(".novapic");

[].forEach.call(document.querySelectorAll(".vis2"), function (el) {
  el.style.visibility = "hidden";
});
[].forEach.call(document.querySelectorAll(".vis3"), function (el) {
  el.style.visibility = "hidden";
});
[].forEach.call(document.querySelectorAll(".vis4"), function (el) {
  el.style.visibility = "hidden";
});
[].forEach.call(document.querySelectorAll(".vis5"), function (el) {
  el.style.visibility = "hidden";
});
[].forEach.call(document.querySelectorAll(".vis6"), function (el) {
  el.style.visibility = "hidden";
});

btn1.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".vis2"), function (el) {
    el.style.visibility = "visible";
  });
  nova.classList.add("novacolor");
});

btn2.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".vis3"), function (el) {
    el.style.visibility = "visible";
  });
});

btn3.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".vis4"), function (el) {
    el.style.visibility = "visible";
  });
});
btn4.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".vis5"), function (el) {
    el.style.visibility = "visible";
  });
});
btn5.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".vis6"), function (el) {
    el.style.visibility = "visible";
  });
});
