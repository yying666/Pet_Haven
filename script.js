var buttons = document.querySelectorAll(".btn");
var cards = document.querySelectorAll(".item");
var changeText = document.querySelector(".change");
var searchBar = document.querySelector('input');


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == 'all') {
            cards.forEach(function (card) {
                card.style.display = 'block';
            })
        } else {
            cards.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            })

        }
    });
});

searchBar.addEventListener('keyup', function (event) {
    var userInput = event.target.value.toLowerCase().trim();
    cards.forEach(function (card) {
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block';

        } else {
            card.style.display = 'none';
        }
    });
});

// buttons[0].addEventListener("click", function () {
//     cards.forEach(function (card) {
//         card.style.display = "block";
//         changeText.textContent = "membERs";
//     })
// });

// buttons[1].addEventListener("click", function () {
//     var btnClick = buttons[1].textContent.toLowerCase();
//     cards.forEach(function (card) {
//         if (card.classList.contains("cat")) {
//             card.style.display = "block";
//             changeText.textContent = "Cats";
//         }
//         else {
//             card.style.display = "none";
//         }
//     })
// });
// buttons[2].addEventListener("click", function () {
//     var btnClick = buttons[2].textContent.toLowerCase();
//     cards.forEach(function (card) {
//         if (card.classList.contains('dog')) {
//             card.style.display = "block";
//             changeText.textContent = "Dogs";
//         }
//         else {
//             card.style.display = "none";
//         }
//     })
// });
// buttons[3].addEventListener("click", function () {
//     var btnClick = buttons[3].textContent.toLowerCase();
//     cards.forEach(function (card) {
//         if (card.classList.contains('hamster')) {
//             card.style.display = "block";
//             changeText.textContent = "Hamsters";
//         }
//         else {
//             card.style.display = "none";
//         }
//     })
// });
// buttons[4].addEventListener("click", function () {
//     var btnClick = buttons[4].textContent.toLowerCase();
//     cards.forEach(function (card) {
//         if (card.classList.contains('others')) {
//             card.style.display = "block";
//             changeText.textContent = "Others";
//         }
//         else {
//             card.style.display = "none";
//         }
//     })
// });

var imageall = document.querySelectorAll(".card-img-top");
imageall.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.style.width = "100%";
        element.style.height = "75%";
    })
});

imageall.forEach(function (element) {
    element.addEventListener("mouseout", function () {
        element.style.width = "100%";
        element.style.height = "55%";
    })
});