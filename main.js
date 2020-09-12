const NumToRoman = () => {
  let number = document.getElementById("numToRoman").value;
  let numInt = Number(number);
  let result = "";

  if (number === "") {
    alert("Please input a number!");
    document.getElementById("romanAns").value = "";
  } else if (numInt === 0 || numInt >= 5000 || numInt % 1 != 0) {
    document.getElementById("romanAns").value = "Invalid";
  } else {
    result = ConvertNumToRoman(numInt);
    document.getElementById("romanAns").value = result;
  }
};

// Converting number to roman numerals
const ConvertNumToRoman = (num) => {
  let result = "";

  while (num != 0) {
    if (num >= 1000) {
      result += "M";
      num -= 1000;
    } else if (num >= 900) {
      result += "CM";
      num -= 900;
    } else if (num >= 500) {
      result += "D";
      num -= 500;
    } else if (num >= 400) {
      result += "CD";
      num -= 400;
    } else if (num >= 100) {
      result += "C";
      num -= 100;
    } else if (num >= 90) {
      result += "XC";
      num -= 90;
    } else if (num >= 50) {
      result += "L";
      num -= 50;
    } else if (num >= 40) {
      result += "XL";
      num -= 40;
    } else if (num >= 10) {
      result += "X";
      num -= 10;
    } else if (num >= 9) {
      result += "IX";
      num -= 9;
    } else if (num >= 5) {
      result += "V";
      num -= 5;
    } else if (num >= 4) {
      result += "IV";
      num -= 4;
    } else {
      result += "I";
      num -= 1;
    }
  }

  return result;
};

const RomanToNum = () => {
  let romNum = document.getElementById("romanToNum").value;
  let upper = romNum.toUpperCase();
  let ctr = 0;
  let comparison = "";

  if (romNum === "") {
    alert("Please input a roman number!");
    document.getElementById("numAns").value = "";
  } else {
    for (let i = 0; i < upper.length; i++) {
      if (upper[i] == "I") {
        ctr += 1;
      }
      if (upper[i] == "V") {
        if (upper[i - 1] == "I") {
          ctr += 3;
        } else {
          ctr += 5;
        }
      }
      if (upper[i] == "X") {
        if (upper[i - 1] == "I") {
          ctr += 8;
        } else {
          ctr += 10;
        }
      }
      if (upper[i] == "L") {
        if (upper[i - 1] == "X") {
          ctr += 30;
        } else {
          ctr += 50;
        }
      }
      if (upper[i] == "C") {
        if (upper[i - 1] == "X") {
          ctr += 80;
        } else {
          ctr += 100;
        }
      }
      if (upper[i] == "D") {
        if (upper[i - 1] == "C") {
          ctr += 300;
        } else {
          ctr += 500;
        }
      }
      if (upper[i] == "M") {
        if (upper[i - 1] == "C") {
          ctr += 800;
        } else {
          ctr += 1000;
        }
      }
    }
    comparison = ConvertNumToRoman(ctr);
    if (comparison == upper) {
      document.getElementById("numAns").value = ctr;
    } else {
      document.getElementById("numAns").value = "Invalid";
    }
  }
};

// Displaying Key concept to html table
fetch("conversion.json").then((res) => {
  res.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      let temp = "";

      data.forEach((elem) => {
        temp += "<tr>";
        temp += "<td>" + elem.number + "</td>";
        temp += "<td>" + elem.roman + "</td>";
        temp += "</tr>";
      });

      document.getElementById("data-conversion").innerHTML = temp;
    }
  });
});
