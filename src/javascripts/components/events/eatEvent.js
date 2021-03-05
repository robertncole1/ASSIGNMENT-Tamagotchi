let full = 100;

const addEat = (e) => {
  e.preventDefault();
  full += 10;
  if (full > 100) {
    full = 100;
    document.querySelector('#eat-progress').innerHTML = `${full}`;
  } else {
    document.querySelector('#eat-progress').innerHTML = `${full}`;
  }
};

const subtractEat = (e) => {
  e.preventDefault();
  full -= 3;
  if (full < 0) {
    full = 0;
    document.querySelector('#eat-progress').innerHTML = `${full}`;
  } else {
    document.querySelector('#eat-progress').innerHTML = `${full}`;
  }
};

export { subtractEat, addEat };
