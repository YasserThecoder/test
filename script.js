// Get the petal container element
const petalContainer = document.querySelector('.petal-container');

// Number of falling petals
const petalCount = 50; // You can adjust this number for more or fewer petals

// Create falling petals dynamically
for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw'; // Random horizontal position (from 0 to 100vw)
  petal.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration for each petal to fall
  petal.style.animationDelay = Math.random() * 5 + 's'; // Random delay before each petal starts falling
  petalContainer.appendChild(petal);
}
