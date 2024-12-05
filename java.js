const openSidebar = document.querySelector(".open-sidebar");
const closeSidebar = document.querySelector(".close-btn");
const sidebar = document.querySelector(".navbar");

openSidebar.addEventListener("click", () => {
    sidebar.classList.add("show");
    document.body.classList.add("no-scroll");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show");
    document.body.classList.remove("no-scroll");
}) 