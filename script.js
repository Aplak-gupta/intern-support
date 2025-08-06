// Generate floating particles dynamically
const container = document.getElementById("particles-container");

for (let i = 0; i < 20; i++) {
  const particle = document.createElement("span");
  const size = Math.random() * 20 + 10;
  const delay = Math.random() * 20;
  const duration = Math.random() * 20 + 10;
  const left = Math.random() * 100;

  particle.style.position = "absolute";
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.borderRadius = "50%";
  particle.style.background = i % 2 === 0 ? "rgba(255,255,255,0.15)" : "rgba(15,98,254,0.3)";
  particle.style.left = `${left}%`;
  particle.style.animation = `float ${duration}s linear infinite`;
  particle.style.animationDelay = `${delay}s`;

  container.appendChild(particle);
}

// Add float animation dynamically
const style = document.createElement("style");
style.textContent = `
@keyframes float {
  0% {
    transform: translateY(100vh) scale(0.5);
  }
  100% {
    transform: translateY(-10vh) scale(1.2);
  }
}`;
document.head.appendChild(style);

