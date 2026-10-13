let lists;

fetch('./pages/results.html')
   .then(res => res.text())
   .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      lists = Array.from(doc.querySelectorAll('.initial-container li'));
      console.log(lists);
});
/*
const doc = document;

let lists;
let list;

const sourceOtd = doc.querySelector(".source-otd");

function setSourceOtd(personList) {
   list = lists[list];
   const header = list.querySelector("h3 a");
   const text = list.querySelector("p");
   sourceOtd.classList.add("set");
   const person = sourceOtd.querySelector(".person a");
   person.setAttribute("href", `./pages/results.html#${header.text}`);
   const sourceOtdText = sourceOtd.querySelector("p");

   person.innerText = header.innerText;
   sourceOtdText.innerText = text.innerText;
};

function setList() {
   list = Math.floor(Math.random() * lists.length);
};

let lastDate = "lastDate";
let exsisting = localStorage.getItem(lastDate);

let currentList = "currentList";
let listExsisting = localStorage.getItem(setList);

if (exsisting === null) {
   localStorage.setItem(lastDate, JSON.stringify(Date.now()));
   localStorage.setItem(currentList, JSON.stringify(list));
} else {
   lastDate = JSON.parse(exsisting);
}

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
      name.setAttribute("href", `./pages/results.html#${name.innerText}`);
      name.target = "_self";
      nameSpan.append(name);
      nums.splice(num, 1);
   };
};

const day = 1000 * 60 * 60 * 24;

async function loadDoc() {
   const response = await fetch("./pages/results.html");
   const html = await response.text();
   const resultsDoc = new DOMParser().parseFromString(html, "text/html");
   lists = Array.from(resultsDoc.querySelectorAll("li"));
   if (listExsisting === null) {
      setList();
      localStorage.setItem(currentList, JSON.stringify(list));
   } else {
      currentList = JSON.parse(listExsisting);
   }
   if ((Date.now() - lastDate) >= day) {
      setList();
      setSourceOtd(list);
   } else if (sourceOtd.classList.contains("set") === false) {
      setSourceOtd(list);
   }
   setNameOrder();
};
loadDoc();
*/