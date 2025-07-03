window.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loaderBg');
  const type = document.getElementById('aetherType');
  const word = "Aether";
  let i = 0;

  if (!sessionStorage.getItem('loaderShown')) {
    // Typewriter effect
    type.textContent = "";
    function typeIt() {
      if (i < word.length) {
        type.textContent += word[i];
        i++;
        setTimeout(typeIt, 80); // speed here
      } else {
        setTimeout(() => {
          loader.classList.add('hide');
          setTimeout(() => loader.classList.add('_gone'), 390);
          sessionStorage.setItem('loaderShown', 'yes');
        }, 420); // time before fade out
      }
    }
    typeIt();
  } else {
    loader.style.display = "none";
  }
});
