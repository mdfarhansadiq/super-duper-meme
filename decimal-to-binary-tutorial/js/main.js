// Selecting DOM
const submit1 = document.getElementById("submitConv");
const submit2 = document.getElementById("submitClr");
const result = document.getElementById("result");
const valInp = document.getElementById("number");

// Function
function binary(e) {
  e.preventDefault();
  const num = document.getElementById("number").value;
  // Input validation
  if (num === "") {
    alert("Please enter a number");
  } else if (num < 0) {
    alert("Please enter a positive number");
  } else {
    result.style.visibility = "visible";
  }

  //Converting to Binary
  let binary = Number(num).toString(2);
  result.innerHTML = binary;
}

function allClear() {
  const num = document.getElementById("number").value;
  const res = document.getElementById("result").value;

  if (num != "" || res != "") {
    document.getElementById("number").value = "";
    document.getElementById("result").innerHTML = "";
  }
}

function validInput() {
  const num = document.getElementById("number").value;

  for(var i = 0; i < num.length; i++)
  {
    if (!(num[i] >= "0" && num[i] <= "9")) {
      document.getElementById("note").textContent = "Invalid Input";
      return false;
    }
    else{
      document.getElementById("note").textContent = "";
      var x = document.getElementById("submitConv");
      x.type = "submit";
    }
  }
}

// Event Listener
submit1.addEventListener("click", binary);
submit2.addEventListener("click", allClear);
valInp.addEventListener("focusin", validInput);

