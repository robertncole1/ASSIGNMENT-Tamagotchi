const showPlay = () => {
  document.querySelector('#play').innerHTML = `<img class="play-img" src="https://img1.picmix.com/output/stamp/normal/3/3/5/8/1628533_2b6fe.gif">
  <h2>PLAY</h2>
  <p id="play-progress">50</p>
  <button type="button" id="super-fun" class="btn btn-dark">Super Fun</button>
  <button type="button" id="slightly-fun" class="btn btn-light">Slightly Fun</button>
</div>
</div>`;
};

export default showPlay;
