// Frontend-developer
    const phrases = [
      "Freelancer",
      "Frontend Developer",
      "MERN Stack Developer"
    ];

    const dynamicText = document.getElementById("dynamic");

    let i = 0;   // phrase index
    let j = 0;   // character index
    let deleting = false;

    function typeEffect() {
      let current = phrases[i];

      if (!deleting) {
        dynamicText.textContent = current.substring(0, j++);
        if (j > current.length) {
          deleting = true;
          setTimeout(typeEffect, 1200); // wait before deleting
          return;
        }
      } else {
        dynamicText.textContent = current.substring(0, j--);
        if (j < 0) {
          deleting = false;
          i = (i + 1) % phrases.length; // next phrase
        }
      }

      // smoother speed
      let speed = deleting ? (50 + Math.random() * 50) : (100 + Math.random() * 70);
      setTimeout(typeEffect, speed);
    }

    typeEffect();
// Frontend-developer