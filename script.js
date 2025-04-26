// Select the petal container and define the number of petals
const petalContainer = document.querySelector('.petal-container');
const petalCount = 50; // Number of petals

// Create Petals dynamically with animation
for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  petal.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
  petal.style.animationDelay = Math.random() * 5 + 's'; // Random delay before falling
  petalContainer.appendChild(petal);
}

// Sparkling Glitter Particles
const glitterContainer = document.createElement('div');
glitterContainer.classList.add('glitter-container');
document.body.appendChild(glitterContainer);

const glitterParticleCount = 100; // Number of glitter particles

// Function to create glitter particles
function createGlitterParticle() {
  const glitterParticle = document.createElement('div');
  glitterParticle.classList.add('glitter-particle');
  glitterParticle.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  glitterParticle.style.top = Math.random() * 100 + 'vh'; // Random vertical position
  glitterParticle.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random animation duration
  glitterParticle.style.animationDelay = Math.random() * 5 + 's'; // Random delay before appearing
  glitterContainer.appendChild(glitterParticle);

  // Remove glitter particle after animation
  setTimeout(() => {
    glitterParticle.remove();
  }, 5000); // Remove particle after 5 seconds
}

// Function to animate glitter particles
function animateGlitterParticles() {
  if (Math.random() > 0.2) { // Reduce the rate of glitter particle creation
    createGlitterParticle(); // Create a new glitter particle every 100ms
  }
}

// Call the glitter particle animation function every 100ms
setInterval(animateGlitterParticles, 100);

// Make petals and glitter respond to mouse movement
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Add interactive effect to petals based on mouse position
  const petals = document.querySelectorAll('.petal');
  petals.forEach(petal => {
    const petalX = petal.offsetLeft + petal.offsetWidth / 2;
    const petalY = petal.offsetTop + petal.offsetHeight / 2;

    const distanceX = mouseX - petalX;
    const distanceY = mouseY - petalY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const movement = Math.min(distance / 10, 50); // Set max movement
    petal.style.transform = `translate3d(${distanceX / 10}px, ${distanceY / 10}px, 0)`;
  });

  // Make glitter particles follow the mouse
  const glitterParticles = document.querySelectorAll('.glitter-particle');
  glitterParticles.forEach(particle => {
    const glitterX = particle.offsetLeft + particle.offsetWidth / 2;
    const glitterY = particle.offsetTop + particle.offsetHeight / 2;

    const distanceX = mouseX - glitterX;
    const distanceY = mouseY - glitterY;

    const movement = Math.min(Math.sqrt(distanceX * distanceX + distanceY * distanceY) / 10, 30);
    particle.style.transform = `translate3d(${distanceX / 30}px, ${distanceY / 30}px, 0)`;
  });
});

// Optionally, you can add a resize event listener to handle screen resizing
window.addEventListener('resize', () => {
  // Re-calculate positions of elements if necessary
  const petals = document.querySelectorAll('.petal');
  petals.forEach(petal => {
    const randomX = Math.random() * 100 + 'vw';
    petal.style.left = randomX; // Adjust petal position based on new screen size
  });
});

// Optional: Throttle the mousemove event listener for performance optimization
let throttleTimeout;
document.addEventListener('mousemove', (e) => {
  clearTimeout(throttleTimeout);
  throttleTimeout = setTimeout(() => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const petals = document.querySelectorAll('.petal');
    petals.forEach(petal => {
      const petalX = petal.offsetLeft + petal.offsetWidth / 2;
      const petalY = petal.offsetTop + petal.offsetHeight / 2;

      const distanceX = mouseX - petalX;
      const distanceY = mouseY - petalY;

      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const movement = Math.min(distance / 10, 50); // Set max movement
      petal.style.transform = `translate3d(${distanceX / 10}px, ${distanceY / 10}px, 0)`;
    });

    // Make glitter particles follow the mouse
    const glitterParticles = document.querySelectorAll('.glitter-particle');
    glitterParticles.forEach(particle => {
      const glitterX = particle.offsetLeft + particle.offsetWidth / 2;
      const glitterY = particle.offsetTop + particle.offsetHeight / 2;

      const distanceX = mouseX - glitterX;
      const distanceY = mouseY - glitterY;

      const movement = Math.min(Math.sqrt(distanceX * distanceX + distanceY * distanceY) / 10, 30);
      particle.style.transform = `translate3d(${distanceX / 30}px, ${distanceY / 30}px, 0)`;
    });
  }, 10); // Delay processing the mousemove event for 10ms
});
