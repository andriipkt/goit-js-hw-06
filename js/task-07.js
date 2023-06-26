const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

const handleFontSizeChange = (event) => {
  const fontSize = event.target.value;
  text.style.fontSize = `${fontSize}px`;
};

fontSizeControl.addEventListener("input", handleFontSizeChange);
