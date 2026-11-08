const toggle = document.querySelector("#toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

toggle.addEventListener("click", function() {

    menu.classList.toggle("active");

});

items.forEach(item => {

    item.addEventListener("click", function() {

        items.forEach(el => {
            el.classList.remove("active");
        });

        item.classList.add("active");

    });

});