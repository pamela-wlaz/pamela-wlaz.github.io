const toggleMenu = (e) => {
  const menu = document.getElementById("menu");
  const currentDisplay = menu.style.display;

  menu.style.display = currentDisplay === 'block'
    ? 'none'
    : 'block';
}

const openModal = (imgName) => {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");
  modal.onclick = () => {
    img.src = null;
    modal.style.visibility = 'hidden';
  }
  img.src = `assets/images/gallery/${imgName}`;
  modal.style.visibility = 'visible';
};
