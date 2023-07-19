'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);
  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply the last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Load more work button functionality
 */

// Sample data for demonstration purposes
const additionalItems = [
  // Add your additional portfolio items here
  // Each item should be in the same format as the existing ones
  // For example:
  // { title: "New Work 1", imageSrc: "path/to/image1.jpg" },
  // { title: "New Work 2", imageSrc: "path/to/image2.jpg" },
];

const loadMoreButton = document.querySelector(".load-more");
let currentPage = 1;

loadMoreButton.addEventListener("click", function () {
  currentPage++;
  loadPortfolioItems(currentPage);
});

function loadPortfolioItems(page) {
  const itemsPerPage = 4; // You can adjust the number of items per page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const portfolioList = document.getElementById("portfolio-list");

  for (let i = startIndex; i < endIndex && i < additionalItems.length; i++) {
    const item = additionalItems[i];
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = item.imageSrc;
    image.alt = item.title;
    listItem.appendChild(image);
    portfolioList.appendChild(listItem);
  }

  if (endIndex >= additionalItems.length) {
    loadMoreButton.style.display = "none";
  }
}
