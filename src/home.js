import headerImg from './IMAGES/NANIXHECHICKENHEADER.png';

export function home() {
    const divContent = document.getElementById('content');
    
    // Hero section with image
    const heroSection = document.createElement('div');
    heroSection.className = 'hero-section fade-in';
    
    const img = document.createElement('img');
    img.src = headerImg;
    img.alt = 'Nanixhe Chicken';
    heroSection.appendChild(img);
    
    // Welcome text section
    const welcomeSection = document.createElement('div');
    welcomeSection.className = 'welcome-text fade-in';
    
    const title = document.createElement('h1');
    title.textContent = '¡Bienvenidos a Nanixhe Chicken!';
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Descubre el auténtico sabor del pollo asado tradicional de Juchitán, Oaxaca. Desde 2008, hemos estado sirviendo el mejor pollo de la región con recetas familiares y la más alta calidad.';
    
    const features = document.createElement('p');
    features.textContent = '🍗 Pollo fresco y de calidad | 🔥 Asado al carbón tradicional | 🌶️ Salsas caseras | 🏠 Ambiente familiar';
    
    welcomeSection.appendChild(title);
    welcomeSection.appendChild(subtitle);
    welcomeSection.appendChild(features);
    
    divContent.appendChild(heroSection);
    divContent.appendChild(welcomeSection);
}

