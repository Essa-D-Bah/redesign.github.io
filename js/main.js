const openNavMenu = () => {
  const burger = document.querySelector('.burger');
  let isOpen = false;
  burger.addEventListener('click', () => {
    if (!isOpen) {
      document
        .querySelector('.nav_elements')
        .classList.add('nav_elements_onopen');
      isOpen = true;
    } else {
      document
        .querySelector('.nav_elements')
        .classList.remove('nav_elements_onopen');
      isOpen = false;
    }
  });
};
openNavMenu();

const logoBurger = document.querySelector('.logoBurger');
const navElements = document.querySelector('.nav_elements');
const logo_link = document.querySelector('.logo_link');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    logoBurger.classList.add('logoBurger_onscroll');
    navElements.classList.add('nav_elements_onscroll');
  } else {
    logoBurger.classList.remove('logoBurger_onscroll');
    navElements.classList.remove('nav_elements_onscroll');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    document.querySelector('.nav').classList.add('nav_scroll');
    document.querySelectorAll('.links').forEach((link) => {
      link.classList.add('links_scroll');
    });
  } else {
    document.querySelector('.nav').classList.remove('nav_scroll');
    document.querySelectorAll('.links').forEach((link) => {
      link.classList.remove('links_scroll');
    });
  }
});

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

answers[0].classList.add('active_answer');

const answerLoader = (clickedElem, loadElem) => {
  clickedElem.addEventListener('click', () => {
    answers.forEach((element) => {
      if (element == loadElem) {
        loadElem.classList.add('active_answer');
      } else {
        element.classList.remove('active_answer');
      }
    });
  });
};

for (let i = 0; i < answers.length; i++) {
  answerLoader(questions[i], answers[i]);
}
