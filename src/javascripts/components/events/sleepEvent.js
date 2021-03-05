let energy = 50;

const nap = (e) => {
  e.preventDefault();
  energy += 50;
  if (energy > 100) {
    energy = 100;
    document.querySelector('#sleep-progress').innerHTML = `${energy}`;
  } else {
    document.querySelector('#sleep-progress').innerHTML = `${energy}`;
  }
};

const deepSlumber = (e) => {
  e.preventDefault();
  energy += 60;
  if (energy > 100) {
    energy = 100;
    document.querySelector('#sleep-progress').innerHTML = `${energy}`;
  } else {
    document.querySelector('#sleep-progress').innerHTML = `${energy}`;
  }
};

export { nap, deepSlumber };
