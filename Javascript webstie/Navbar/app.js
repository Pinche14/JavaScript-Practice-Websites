const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links")

navToggle.addEventListener("click" , function(){
    links.classList.toggle("show-links");
});
//toggle() method toggles between hide() and show() for the selected elements.
// classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
// A DOMTokenList is a set of space seprated tokens.
// class attributes specifies one or more class names for an element.
// class names