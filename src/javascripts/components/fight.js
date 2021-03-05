const showFight = () => {
  document.querySelector('#fight').innerHTML = `<img class="fight-img" src="https://c.tenor.com/6yhYlvmv6-EAAAAj/animal-puppy.gif">
  <h2>FIGHT</h2>
  <p id="fight-progress">100</p>
  <button type="button" id="run-away" class="btn btn-dark">Run Away (Bravely)</button>
  <button type="button" id="voilence" class="btn btn-light">Commit Violence</button>
</div>
</div>`;
};

export default showFight;
