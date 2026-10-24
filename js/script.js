const doc = document;

/* ------------------------------- navigation ------------------------------- */

const homeButton = doc.querySelector("#home");
const sourcesButton = doc.querySelector("#sources");

const homeContent = doc.querySelector(".content.home");
const sourcesContent = doc.querySelector(".content.sources");

function hideAllExcept(exception) {
    const buttons = [homeButton, sourcesButton];
    const contents = [homeContent, sourcesContent];
    const exceptionPosition = buttons.indexOf(exception);
    buttons[exceptionPosition].classList.add("active");
    contents[exceptionPosition].classList.add("active");

    buttons.splice(exceptionPosition, 1);
    contents.splice(exceptionPosition, 1);

    buttons.forEach(content => {
        content.classList.remove("active");
    });
    contents.forEach(content => {
        content.classList.remove("active");
    });
};

homeButton.addEventListener("click", e => {
    hideAllExcept(homeButton);
});
sourcesButton.addEventListener("click", e => {
    hideAllExcept(sourcesButton);
});

/* ----------------------------- featured source ---------------------------- */

const fSList = doc.querySelector(".featured-source ul");
const sources = Array.from(doc.querySelectorAll(".source"));

let chosenList;

const lastFSUpdate = "lastUpdate";
const exsisting = localStorage.getItem("lastUpdate");

function updateList() {
    const num = Math.floor(Math.random() * sources.length);
    chosenList = sources[num];
    fSList.innerHTML = "";
    fSList.appendChild(chosenList.cloneNode(true));
}

if (exsisting === null) {
    updateList();
}

/* ------------------------------- link hover ------------------------------- */

const links = Array.from(doc.querySelectorAll("a"));
let clientX;

function setClientX(e) {
    clientX = e.clientX;
}

doc.addEventListener("mousemove", e => {
    setClientX(e);
});

links.forEach(link => {
    link.addEventListener("mousemove", e => {
        const target = e.target;
        const width = target.getBoundingClientRect().width;
        const targetX = target.getBoundingClientRect().x;
        const relativeEnterPos = Math.round((clientX - targetX) / width * 100);
        link.style.setProperty("--position", `${relativeEnterPos}%`);
    });
});

/* ---------------------------------- theme --------------------------------- */

const themeButton = doc.querySelector(".theme-toggle");
const darkSvg = themeButton.querySelector(".dark");
const lightSvg = themeButton.querySelector(".light");

function switchTheme(theme) {
    doc.documentElement.classList.toggle("dark", theme === "dark");

    darkSvg.classList.toggle("active", theme === "light");
    lightSvg.classList.toggle("active", theme === "dark");
}

themeButton.addEventListener("click", e => {
    if (themeButton.querySelector(".dark.active")) {
        switchTheme("dark");
    } else if (themeButton.querySelector(".light.active")) {
        switchTheme("light");
    }
});