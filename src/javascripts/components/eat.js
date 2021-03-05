const showEat = () => {
  document.querySelector('#eat').innerHTML = `<img class="eat-img" src="https://media4.giphy.com/media/ZgUU4915HJ7snCN99b/source.gif">
    <h2>EAT</h2>
    <p id="eat-progress">100</p>
    <button type="button" id="healthy" class="btn btn-dark">Healthy</button>
    <button type="button" id="unhealthy" class="btn btn-light">Unhealthy</button>
  </div>
</div>`;
};

export default showEat;
