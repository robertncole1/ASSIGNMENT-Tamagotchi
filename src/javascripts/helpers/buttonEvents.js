import { addEat, subtractEat } from '../components/events/eatEvent';
import { comitVoilence, runAway } from '../components/events/fightEvent';
import { slightlyFun, superFun } from '../components/events/playEvent';
import { deepSlumber, nap } from '../components/events/sleepEvent';

const buttonEvents = () => {
  document.querySelector('#healthy').addEventListener('click', addEat);
  document.querySelector('#unhealthy').addEventListener('click', subtractEat);
  document.querySelector('#super-fun').addEventListener('click', superFun);
  document.querySelector('#slightly-fun').addEventListener('click', slightlyFun);
  document.querySelector('#run-away').addEventListener('click', runAway);
  document.querySelector('#voilence').addEventListener('click', comitVoilence);
  document.querySelector('#nap').addEventListener('click', nap);
  document.querySelector('#deep-sleep').addEventListener('click', deepSlumber);
};

export default buttonEvents;
