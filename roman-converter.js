function convertToRoman(num) {
    let romanNumbers = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
   
   let roman = "";
   
    for (let key in romanNumbers) {
      while (num >= romanNumbers[key]) {
        roman += key;
        num -= romanNumbers[key];
      }
    }
   
    return roman;
   }
   
   convertToRoman(36);