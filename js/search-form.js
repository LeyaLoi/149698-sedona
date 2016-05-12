

var button = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
var arrival = popup.querySelector("[name=date-arrival]");
var departure = popup.querySelector("[name=date-departure]");
var form = popup.querySelector("form");

button.addEventListener("click", function(event) {
    if (popup.classList.contains("search-form-on")) {
        event.preventDefault();
        popup.classList.remove("search-form-on");
        arrival.classList.remove("search-form-error");
        departure.classList.remove("search-form-error");
    } else {
        event.preventDefault();
        popup.classList.add("search-form-on");
        arrival.focus();
    }
});

form.addEventListener("submit", function(event) {
    if (!arrival.value || !departure.value) {
        event.preventDefault();
        arrival.classList.add("search-form-error");
        departure.classList.add("search-form-error");
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode===27) {
        if (popup.classList.contains("search-form-on")) {
        popup.classList.remove("search-form-on");
        arrival.classList.remove("search-form-error");
        departure.classList.remove("search-form-error");
        }
    }
});
