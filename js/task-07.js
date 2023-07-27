// const fontSizeControl = document.getElementById("font-size-control");
// const text = document.getElementById("text");

////// option 1
// const handleFontSizeChange = (event) => {
//   const fontSize = event.target.value;
//   text.style.fontSize = `${fontSize}px`;
// };

// fontSizeControl.addEventListener("input", handleFontSizeChange);
//////

////// option 2
// fontSizeControl.addEventListener("input", (event) => {
//   const fontSize = event.target.value;
//   text.style.fontSize = `${fontSize}px`;
// });
//////

////// option 3
const fontSizeControl = document.body.children[1];
const outputSpan = document.body.children[3];

fontSizeControl.addEventListener("input", handleFontSizeChange);

function handleFontSizeChange(event) {
  const fontSize = event.target.value;
  outputSpan.style.fontSize = `${fontSize}px`;
}
