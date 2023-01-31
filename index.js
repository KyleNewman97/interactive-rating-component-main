// State
let selectedRating = null;

// Find the feedback submit button
const submitButton = document.getElementById('feedback-submit-button');
submitButton.onclick = () => {
    console.log(`Rating of ${selectedRating} submitted.`);
};

/**
 * Function to call on the mouse up event of a rating button
 * @param {HTMLButtonElement} button 
 * @param {HTMLCollectionOf<HTMLButtonElement>} buttons
 */
function setAsActiveButton(button, buttons) {
    // Clear the colour of all other rating buttons
    for (i = 0; i < buttons.length; i++) {
        const refreshButton = buttons.item(i);
        refreshButton.style.backgroundColor = '#272e37';
        refreshButton.style.color = '#959eac';
    }

    // Set this as the active rating button
    button.style.backgroundColor = '#7c8798';
    button.style.color = '#ffffff';

    // Cache the rating
    selectedRating = button.textContent;
}

/**
 * A function to call when the mouse is down on the button.
 * @param {HTMLButtonElement} button 
 */
function handleMouseDown(button) {
    button.style.backgroundColor = '#fb7413';
    button.style.color = '#ffffff';
}

/**
 * A function to call when the mouse leaves the button's contents.
 * @param {HTMLButtonElement} button 
 */
function handleMouseLeave(button) {
    if (button.textContent == selectedRating) return;
    button.style.backgroundColor = '#272e37';
    button.style.color = '#959eac';
}

// Listen for rating button clicks
const ratingButtons = document.getElementsByClassName('feedback-rating');
for (i = 0; i < ratingButtons.length; i++) {
    const ratingButton = ratingButtons.item(i);
    ratingButton.onmousedown = () => handleMouseDown(ratingButton);
    ratingButton.onmouseleave = () => handleMouseLeave(ratingButton);
    ratingButton.onmouseup = () => setAsActiveButton(ratingButton, ratingButtons);
}