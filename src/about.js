import davidImg from './IMAGES/david.jpg'

export function about(){
    const divContent = document.getElementById('content');
    
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'about-container fade-in';
    
    const aboutText = document.createElement('div');
    aboutText.className = 'about-text';
    
    const title = document.createElement('h1');
    title.textContent = 'Nuestra Historia';
    title.style.color = '#ff6b35';
    title.style.fontSize = '2.5rem';
    title.style.marginBottom = '1.5rem';
    title.style.textAlign = 'center';
    
    const parrafo = document.createElement('p');
    parrafo.textContent = "Nanixhe Chicken nace en el 2008 después de que David Guzmán decide guiarse por su pasión a la cocina. David se da cuenta que en Juchitán no hay pollos como los que ha comido en otras partes de la república, entonces él decide crear el mejor pollo de Juchitán Oaxaca.";
    
    const parrafo2 = document.createElement('p');
    parrafo2.textContent = "Desde el momento de la fundación de Nanixhe Chicken la empresa nunca se olvida de su misión original: crear el mejor pollo de la zona, mientras se le da al cliente la atención e higiene que merece.";
    
    const parrafo3 = document.createElement('p');
    parrafo3.textContent = "Hoy en día, seguimos manteniendo la misma calidad y pasión por la cocina que nos caracteriza desde el primer día. Nuestro compromiso es ofrecer el mejor pollo asado de Juchitán con el sabor auténtico que nos hace únicos.";
    
    aboutText.appendChild(title);
    aboutText.appendChild(parrafo);
    aboutText.appendChild(parrafo2);
    aboutText.appendChild(parrafo3);
    
    const aboutImage = document.createElement('div');
    aboutImage.className = 'about-image';
    
    const img = document.createElement('img');
    img.src = davidImg;
    img.alt = 'David Guzmán - Fundador de Pollos Asados Nanixhe';
    
    const imgCaption = document.createElement('p');
    imgCaption.textContent = 'David Guzmán - Fundador';
    imgCaption.style.textAlign = 'center';
    imgCaption.style.marginTop = '1rem';
    imgCaption.style.fontWeight = 'bold';
    imgCaption.style.color = '#ff6b35';
    
    aboutImage.appendChild(img);
    aboutImage.appendChild(imgCaption);
    
    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(aboutImage);
    
    divContent.appendChild(aboutContainer);
}