(function () {
  let timerId = [];
  document.addEventListener('DOMContentLoaded', () => {

    const scrollLines = document.querySelectorAll('.third-block__item-line-progress');
    const scrollIcons = document.querySelectorAll('.third-block__item-icon');
    const scrollBlockContainer = document.querySelector('.third-block__list');
    const highEdge = scrollBlockContainer.offsetTop + scrollBlockContainer.offsetHeight;
    const lowEdge = scrollBlockContainer.offsetTop - scrollBlockContainer.offsetHeight;

    // Функция активирует прогресс бар
    const scrollAnimationLines = () => {
      let windowCenter = (window.innerHeight / 2) + window.scrollY;
      scrollLines.forEach(el => {
        if (windowCenter > lowEdge && windowCenter < highEdge) {
          el.classList.add('third-block__item-line-progress--active');
        } else {
          el.classList.remove('third-block__item-line-progress--active');
        }
      });
    };
    // Функция активирует иконки с задержкой времени

    const scrollAnimationIcons = (timerId) => {
      let windowCenter = (window.innerHeight / 2) + window.scrollY;
      scrollIcons.forEach((el, i) => {
        if (windowCenter > lowEdge && windowCenter < highEdge) {
          let delay = 2000 * i;
          timerId.push(setTimeout(() => {el.classList.add('third-block__item-icon--active')}, delay));
        } else {
          el.classList.remove('third-block__item-icon--active');
          timerId.forEach(timer => clearTimeout(timer));
        }
      })
    };

    window.addEventListener('scroll', () => {
      scrollAnimationLines();
      scrollAnimationIcons(timerId);
    });
  });
})()
