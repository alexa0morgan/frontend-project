const faq = document.querySelector('#faq');
faq.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  e.target.querySelector('.faq__arrow').classList.toggle('faq__arrow--rotate');

  const answerLast = faq.querySelector('.faq__answer--visible');
  answerLast?.classList.remove('faq__answer--visible');

  const answerCurrent = e.target.parentNode.nextElementSibling;
  if (answerLast !== answerCurrent) {
    answerCurrent.classList.add('faq__answer--visible');
  }
});
