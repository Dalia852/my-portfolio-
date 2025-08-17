 function showSection(id) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(id).classList.add('active');
    }

    // Show the profile section on first load
    window.onload = function () {
      showSection('profile');
    };





  
// about me
const designerSide = document.querySelector('.upper-side');

document.addEventListener('mousemove', (e) => {
  if (!designerSide || !document.getElementById('about').classList.contains('active')) return;

  const x = (e.clientX / window.innerWidth) * 100;
  designerSide.style.clipPath = `polygon(0 0, ${x}% 0, ${x}% 100%, 0% 100%)`;
});





// experience

// Accordion behavior for the experience section
const accordionButtons = document.querySelectorAll('.exper-btn');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    // Close any other open accordion
    document.querySelectorAll('.exper-content').forEach((panel) => {
      if (panel !== content) {
        panel.style.maxHeight = null;
      }
    });

    // Toggle the clicked one
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
