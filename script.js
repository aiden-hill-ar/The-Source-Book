const doc = document;

/* ---------------------------- page navigations ---------------------------- */

const homeButton = doc.querySelector("button#home");
const sourcesButton = doc.querySelector("button#sources");
const indexButton = doc.querySelector("button#index");

const homeContent = doc.querySelector(".content.home");
const sourcesContent = doc.querySelector(".content.sources");
const indexContent = doc.querySelector(".content.index");

function hideAllExcept(exception) {
    const buttons = [homeButton, sourcesButton, indexButton];
    const contents = [homeContent, sourcesContent, indexContent];
    const exceptionPosition = buttons.indexOf(exception);
    buttons[exceptionPosition].classList.add("shown");
    contents[exceptionPosition].classList.add("shown");

    buttons.splice(exceptionPosition, 1);
    contents.splice(exceptionPosition, 1);

    buttons.forEach(content => {
        content.classList.remove("shown");
    });
    contents.forEach(content => {
        content.classList.remove("shown");
    });
};

homeButton.addEventListener("click", e => {
    hideAllExcept(homeButton);
});
sourcesButton.addEventListener("click", e => {
    hideAllExcept(sourcesButton);
});
indexButton.addEventListener("click", e => {
    hideAllExcept(indexButton);
})

/* ---------------------------------- menus --------------------------------- */

const menus = Array.from(doc.querySelectorAll(".menu"));

menus.forEach(menu => {
    menu.addEventListener("click", e => {
        const button = e.target.closest("button.menu-button");
        if (!button) return;
        const menu = button.closest(".menu");
        button.classList.toggle("shown");
        menu.querySelector(".menu-options").classList.toggle("shown");
    });
});

doc.addEventListener("click", e => {
    for (let i = 0; i < menus.length; i++) {
        if (e.target.closest(".menu")) return;
    }
    menus.forEach(menu => {
        for (let i = 0; i < menu.childElementCount; i++) {
            menu.children[i].classList.remove("shown");
        }
    })
});

/* ---------------------------------- theme --------------------------------- */

let theme = localStorage.getItem("theme");

const lightButton = doc.querySelector("#light");
const darkButton = doc.querySelector("#dark");

const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)")

if (theme) {
    doc.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
        darkButton.classList.remove("shown");
        lightButton.classList.add("shown");
    } else {
        darkButton.classList.add("shown");
    }
} else if (deviceTheme.matches) {
    lightButton.classList.add("shown");
    darkButton.classList.remove("shown");
    doc.documentElement.setAttribute("data-theme", "dark");
} else {
    darkButton.classList.add("shown");
    doc.documentElement.setAttribute("data-theme", "light");
}

function setTheme(type) {
    doc.documentElement.setAttribute("data-theme", type);
    localStorage.setItem("theme", type);
    lightButton.classList.toggle("shown", type === "dark");
    darkButton.classList.toggle("shown", type === "light");
}

lightButton.addEventListener("click", e => {
    setTheme("light");
});
darkButton.addEventListener("click", e => {
    setTheme("dark");
});