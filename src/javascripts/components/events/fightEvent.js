let strength = 100;

const runAway = (e) => {
  e.preventDefault();
  strength += 1;
  if (strength > 100) {
    strength = 100;
    document.querySelector('#fight-progress').innerHTML = `${strength}`;
  } else {
    document.querySelector('#fight-progress').innerHTML = `${strength}`;
  }
};

const comitVoilence = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength < 0) {
    strength = 0;
    document.querySelector('#fight-progress').innerHTML = `${strength}`;
  } else {
    document.querySelector('#fight-progress').innerHTML = `${strength}`;
  }
};

export { runAway, comitVoilence };
