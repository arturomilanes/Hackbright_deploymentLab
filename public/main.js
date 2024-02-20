let randomColor = Math.floor(Math.random()*16777215).toString(16);
document.querySelector("#button").addEventListener('click', () => {
  document.querySelector("#content").style.color = `#${randomColor}`;
})