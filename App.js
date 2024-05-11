function dice() {
  const num = document.getElementById("number").value;
  const result = document.getElementById("result");
  const images = document.getElementById("image");
  const value = [];
  const img = [];
  for (let i = 0; i < num; i++) {
    const N = Math.floor(Math.random() * 6) + 1;
    value.push(N);
    console.log(N);
    img.push(`<img src=" ${N}.png" alt="${N}">`);
  }
  result.textContent = `Dice :${value.join(", ")}`;
  images.innerHTML = img.join("");
}
