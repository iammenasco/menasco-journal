const iammenasco = document.querySelector('.iammenasco');
const i = document.querySelector('.i');
const am = document.querySelector('.am');
const menasco = document.querySelector('.menasco');
const links = document.querySelector('.links');

const auroral = document.getElementById('auroral');

const aurorals = [
  'agrabah',
  'northern',
  'northern-intense',
  'northern-dimmed',
  'northern-dusk',
  'northern-warm'
];

const randomAuroral = () => {
  const colorScheme = aurorals[Math.floor(Math.random() * aurorals.length)];
  auroral.className = `auroral-${colorScheme}`;
};

const rerunAnimation = () => {
  i.classList.remove('i-animate');
  am.classList.remove('am-animate');
  menasco.classList.remove('menasco-animate');
  links.classList.remove('menasco-animate');

  const trick = iammenasco.offsetWidth;

  i.classList.add('i-animate');
  am.classList.add('am-animate');
  menasco.classList.add('menasco-animate');
  links.classList.add('menasco-animate');

  randomAuroral();

  return trick;
};

iammenasco.addEventListener('click', rerunAnimation);
document.addEventListener('DOMContentLoaded', randomAuroral);
