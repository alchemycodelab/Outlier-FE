

function getScreenSize() {
  const screenWidth = document.documentElement.clientWidth || window.innerWidth;
  return screenWidth;
}

export default getScreenSize;