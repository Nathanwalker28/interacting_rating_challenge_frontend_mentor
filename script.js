const btnRating = document.querySelectorAll(".rating button");
const btnSubmit = document.querySelector('#btn_submit');
const ratingNumber = document.querySelector('#rating_number');
const cardStart = document.querySelector('#card_start');
const cardThanks = document.querySelector('#card_thanks');



btnRating.forEach(element => {
    element.addEventListener('click', function () {
        element.classList.toggle('active');
        ratingNumber.innerText = element.textContent;

        btnSubmit.addEventListener('click', function () {
            cardStart.classList.toggle('hidden');
            cardThanks.classList.toggle('hidden');
        });
    });
});
