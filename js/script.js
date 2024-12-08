const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    topbar.style.backgroundColor = 'rgba(240, 231, 207)';
    topbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  } else {
    topbar.style.backgroundColor = 'rgba(240, 231, 207)';
    topbar.style.boxShadow = '0 2px 5px rgba(38, 37, 35, 0.1)';
  }
});

document.getElementById('readMoreBtn').addEventListener('click', function() {
  document.getElementById('part1').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  const claytonImage = document.querySelector(".clayton");
  observer.observe(claytonImage);
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  const leftImage = document.querySelector(".left-image");
  observer.observe(leftImage);
});

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  function showSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  }

  document.getElementById('backButton').addEventListener('click', function() {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      showSection(currentSectionIndex);
    } else {
      currentSectionIndex = sections.length - 1;
      showSection(currentSectionIndex);
    }
  });

  document.getElementById('forwardButton').addEventListener('click', function() {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      showSection(currentSectionIndex);
    } else {
      currentSectionIndex = 0;
      showSection(currentSectionIndex);
    }
  });

  showSection(currentSectionIndex);
});

