// JAVASCRIPT 1: SINGLE PAGE ONLY
function toggleSection(targetId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.id === targetId) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  }


// JAVASCRIPT 2: MAKES THE BACK/FORWARD BUTTONS FUNCTIONAL
