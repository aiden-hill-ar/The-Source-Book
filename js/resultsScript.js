const doc = document;

let lists = Array.from(doc.querySelectorAll("li"));
let list = Math.floor(Math.random() * lists.length);

const nameBar = doc.querySelector(".name-bar");
const nameSpan = nameBar.querySelector("span");

function setNameOrder() {
   let nums = [];
   for (let i = 0; i < lists.length; i++) {
      nums.push(i);
   }
   for (let i = 0; i < lists.length; i++) {
      const num = Math.floor(Math.random() * nums.length);
      let name = doc.createElement("a");
      name.innerText = lists[nums[num]].querySelector("h3 a").innerText;
      name.setAttribute("href", `./results.html#${name.innerText}`);
      name.target = "_self";
      nameSpan.append(name);
      nums.splice(num, 1);
   };
};

setNameOrder();