import './styles.css';

const botones = document.querySelectorAll('.nav-menu button');
const logoLink = document.getElementById('logo-link');

import { menuF } from "./menu";
import { about } from "./about";
import { home } from "./home";
const divContent = document.getElementById("content");

// Update button text to match Spanish labels
botones[0].textContent = 'Inicio';
botones[1].textContent = 'Menú';
botones[2].textContent = 'Nosotros';

// Show home section on initial load
if (divContent) {
  divContent.replaceChildren();
  home();
  botones.forEach(btn => btn.classList.remove('active'));
  botones[0].classList.add('active');
}

// Logo click goes to home
if (logoLink) {
  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    divContent.replaceChildren();
    home();
    botones.forEach(btn => btn.classList.remove('active'));
    botones[0].classList.add('active');
  });
}

botones[1].addEventListener('click', ()=>{
  divContent.replaceChildren();
  menuF();
  // Update active button
  botones.forEach(btn => btn.classList.remove('active'));
  botones[1].classList.add('active');
})

botones[2].addEventListener('click', ()=>{
  divContent.replaceChildren();
  about();
  // Update active button
  botones.forEach(btn => btn.classList.remove('active'));
  botones[2].classList.add('active');
})

botones[0].addEventListener('click', ()=>{
  divContent.replaceChildren();
  home();
  // Update active button
  botones.forEach(btn => btn.classList.remove('active'));
  botones[0].classList.add('active');
})