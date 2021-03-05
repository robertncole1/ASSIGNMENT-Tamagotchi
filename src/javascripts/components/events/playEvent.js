let fun = 50;

const superFun = (e) => {
  e.preventDefault();
  fun += 50;
  if (fun > 100) {
    fun = 100;
    document.querySelector('#play-progress').innerHTML = `${fun}`;
  } else {
    document.querySelector('#play-progress').innerHTML = `${fun}`;
  }
};

const slightlyFun = (e) => {
  e.preventDefault();
  fun += 2;
  if (fun > 100) {
    fun = 100;
    document.querySelector('#play-progress').innerHTML = `${fun}`;
  } else {
    document.querySelector('#play-progress').innerHTML = `${fun}`;
  }
};

export { slightlyFun, superFun };
