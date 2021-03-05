const showSleep = () => {
  document.querySelector('#sleep').innerHTML = `<img class="sleep-img" src="https://media3.giphy.com/media/7OVT73S4cJYLMkXVWd/giphy.gif">
  <h2>SLEEP</h2>
  <p id="sleep-progress">50</p>
  <button type="button" id="nap" class="btn btn-dark">Nap</button>
  <button type="button" id="deep-sleep" class="btn btn-light">Deep Slumber</button>
</div>
</div>`;
};

export default showSleep;
