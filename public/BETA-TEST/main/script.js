document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.primary-button, .secondary-button, .info-button, .success-button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert(`Clicked on ${button.textContent}`);
            // Add your navigation logic here
        });
    });
});

