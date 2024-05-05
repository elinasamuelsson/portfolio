let problem = "";
let result = "";

const button = document.getElementsByTagName("button");
const displayWindow = document.getElementById("displayWindow");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (event) {
    const clickedButton = event.target;

    if (clickedButton.tagName === "BUTTON") {
      const buttonText = clickedButton.textContent;

      switch (buttonText) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "+":
        case "-":
        case "*":
        case "/":
          problem += buttonText;
          displayWindow.innerText = problem;
          break;
        case "=":
          result = eval(problem);
          displayWindow.innerText = result;
          problem = "";
          // TODO: fix handling for "undefined"
          break;
        case "C":
          problem = "";
          displayWindow.innerText = problem;
          break;
      }
    }
  });
}
