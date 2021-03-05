import '../styles/main.scss';
import showEat from './components/eat';
import showFight from './components/fight';
import showPlay from './components/play';
import showSleep from './components/sleep';
import buttonEvents from './helpers/buttonEvents';

const init = () => {
  showEat();
  showPlay();
  showFight();
  showSleep();
  buttonEvents();
};

init();
