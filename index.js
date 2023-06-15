//span
const crushName = document.getElementById("crush");
const usersName = document.getElementById("userName");

const calculate = document.getElementById("calc");
//inputs
const inputCrush = document.getElementById("crushesName");
const inputUserName = document.getElementById("yourName");
const results = document.getElementById("percent");

calculate.addEventListener("click", () => {
  const percentage = Math.floor(Math.random() * 100 + 1);
  if (
    (inputCrush.value == null || inputCrush.value == "") &&
    (inputUserName.value == null || inputUserName.value === "")
  ) {
    alert("please fill all the inputs");
    location.reload();
  }
  // 1-10
  if (percentage <= 10) {
    percent.innerHTML = `

    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>way pag-asa lods ngita nag laen<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} 💔 ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 20) {
    // 10-20
    percent.innerHTML = `

    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>ngit-ngita lods<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} 💔 ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 30) {
    // 20-30
    percent.innerHTML = `

    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>medyo ngit-ngit gamay<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} 💔 ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 40) {
    // 30-40
    percent.innerHTML = `

    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>medyo hayag gamay<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} 💔 ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 50) {
    // 30-40
    percent.innerHTML = `
    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>medyo ngitngit gamay lods<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} 💔 ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 60) {
    // 30-40
    percent.innerHTML = `

    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>naay pag-asa lods!<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} ❤️ ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 70) {
    // 30-40
    percent.innerHTML = `

    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3> taya panguyabi nana oi <h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} ❤️ ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 80) {
    // 30-40
    percent.innerHTML = `
    
    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>taya may pa mang iring makasabot pa man <h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} ❤️ ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 90) {
    // 30-40
    percent.innerHTML = `
 
    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>bogoas buang oi mao nana oh<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} ❤️ ${inputCrush.value}</h3>
  `;
  } else if (percentage <= 100) {
    // 30-40
    percent.innerHTML = `

 
    <h2>your compatibility percentage is ${percentage}%</h2>
    <h3>baw lang nimo oi<h3/>
    `;
    crushName.innerHTML = `
    <h3>${inputUserName.value} ❤️ ${inputCrush.value}</h3>
  `;
  }
});
