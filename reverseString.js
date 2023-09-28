function reverse(str) {
  str = str.split("");
  let newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  newStr = newStr.join("");
  return newStr;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse("apple")); // 'elppa'
console.log(reverse2("apple")); // 'elppa'
console.log(reverse3("apple")); // 'elppa'
