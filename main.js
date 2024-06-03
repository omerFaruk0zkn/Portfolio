const menuBar = document.getElementById('menuBar');
const resNav = document.getElementById('res-nav');
const body = document.querySelector('body');
const resLiElements = document.querySelectorAll('#res-nav li')
const main = document.querySelector('main');

const links = document.querySelectorAll('nav li');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active-link');
      });
      link.classList.add('active-link');
    });
  });
}

menuBar.addEventListener('click', () => {
  body.classList.add('active');
})

resLiElements.forEach(li => {
  li.addEventListener('click', () => {
    body.classList.remove('active');
  })
})

document.addEventListener('click', e => {
  const isClickInsideResNav = resNav.contains(e.target);
  const isClickInsideMenuBar = menuBar.contains(e.target);

  if(!isClickInsideResNav && !isClickInsideMenuBar) {
    body.classList.remove('active')
  }

  body.className.includes('active') ? main.style.opacity='70%' : main.style.opacity='100%';
})