/*  Abre e fecha o menu quando clicar no icone: hamburguer e x  */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*  quando clicar em um item do menu, esconder menu  */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slides swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal:  mostrar elementos quando der scroll na página 

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 700,
  reset: true
})

scrollReveal.reveal(
  ` #home .image, #home .text,
  #about .image, #about .text,
  #services, #services .card,
  #testmonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand .footer .social
`,
  { interval: 100 }
)*/

/* When Scroll 
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})*/

/* Menu ativo conforme seção visivel na pagina
const section = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active') 
    }
  }
}
*/

/*Voltar ao topo */



function scrollTo(element) {
  document.querySelector(element).scrollIntoView({behavior: 'smooth' });
}

document.querySelectorAll("#topo").addEventListener('click', function(event)  {
event.preventDefault();

scrollTo('#header');
});