import asadoImg from './IMAGES/asado.jpg';
import rostizadoImg from './IMAGES/rostizado.jpg';
import barbacoaImg from './IMAGES/barbacoa.jpg';
import fritoImg from './IMAGES/frito.jpg';
import complementosImg from './IMAGES/complementos.jpg';

export function menuF() {
  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu-container fade-in';

  const title = document.createElement('h1');
  title.className = 'menu-title';
  title.textContent = 'Nuestro Menú';
  menuDiv.appendChild(title);

  // Sección: Pollos
  const pollosSection = document.createElement('div');
  pollosSection.className = 'menu-section';
  
  const pollosTitle = document.createElement('h3');
  pollosTitle.textContent = 'Pollos ';
  pollosSection.appendChild(pollosTitle);

  const pollosList = document.createElement('div');
  pollosList.className = 'menu-list grid-list';

  const pollos = [
    { name: 'Pollo asado tradicional', img: asadoImg },
    { name: 'Pollo rostizado especial', img: rostizadoImg },
    { name: 'Pollo a la barbacoa', img: barbacoaImg },
    { name: 'Pollo frito crujiente', img: fritoImg },
  ];

  pollos.forEach(pollo => {
    const card = document.createElement('div');
    card.className = 'menu-card square-card';
    const img = document.createElement('img');
    img.src = pollo.img;
    img.alt = pollo.name;
    img.className = 'menu-img square-img';
    card.appendChild(img);
    pollosList.appendChild(card);
    // Title below the card
    const label = document.createElement('div');
    label.className = 'menu-label';
    label.textContent = pollo.name;
    pollosList.appendChild(label);
  });
  pollosSection.appendChild(pollosList);
  menuDiv.appendChild(pollosSection);

  // Sección: Complementos (one big image, title below)
  const compSection = document.createElement('div');
  compSection.className = 'menu-section';
  
  const compTitle = document.createElement('h3');
  compTitle.textContent = 'Complementos';
  compSection.appendChild(compTitle);

  const compImgDiv = document.createElement('div');
  compImgDiv.className = 'complementos-img-container';
  const compImg = document.createElement('img');
  compImg.src = complementosImg;
  compImg.alt = 'Complementos';
  compImg.className = 'complementos-img square-img';
  compImgDiv.appendChild(compImg);
  compSection.appendChild(compImgDiv);

  const compLabel = document.createElement('div');
  compLabel.className = 'menu-label';
  compLabel.textContent = 'Complementos';
  compSection.appendChild(compLabel);

  menuDiv.appendChild(compSection);

  const divContent = document.getElementById("content");
  divContent.appendChild(menuDiv);
}