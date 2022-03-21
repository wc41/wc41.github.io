"use strict";

// Selecting elements
const vis1 = document.getElementsByClassName("vis1");
const vis2 = document.getElementsByClassName("vis2");
const vis3 = document.getElementsByClassName("vis3");
const vis4 = document.getElementsByClassName("vis4");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

[].forEach.call(document.querySelectorAll(".vis2"), function (el) {
  el.style.visibility = "hidden";
});
[].forEach.call(document.querySelectorAll(".vis3"), function (el) {
  el.style.visibility = "hidden";
});
[].forEach.call(document.querySelectorAll(".vis4"), function (el) {
  el.style.visibility = "hidden";
});

btn1.addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".vis2"), function (el) {
    el.style.visibility = "visible";
  });
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
