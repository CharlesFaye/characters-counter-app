const characters = document.getElementById('characters');
const result = document.getElementById('result');
const resultParagraph = document.querySelector('#result > p');

/**
 * Handles the character count logic for a text input field.
 * Updates the UI to reflect the current character count, changes colors based on thresholds,
 * and displays appropriate messages to the user.
 *
 * Behavior:
 * - If the input is empty, displays a prompt to start typing.
 * - If the character count is between 250 and 279, warns the user they are nearing the limit.
 * - If the character count is 280 or more, notifies the user that the limit has been reached.
 * - Otherwise, displays the current character count in blue.
 *
 * Assumes the existence of the following DOM elements:
 * - `characters`: The input or textarea element being monitored.
 * - `resultParagraph`: The paragraph element where messages are displayed.
 * - `result`: The container element for `resultParagraph`.
 */
const handleCharacterCount = () => {
      if (!characters.value.length) {
        resultParagraph.style.color = "rgb(66, 63, 63)";
        resultParagraph.textContent = "Commencer à taper pour voir le nombre de caractères.";
    }
    else if (characters.value.length >= 250 && characters.value.length < 280) {
        characters.style.outlineColor = "rgb(234, 179, 8)";
        resultParagraph.style.color = "rgb(234, 179, 8)";
        resultParagraph.textContent = `Vous avez saisi ${characters.value.length} caractères. Il vous reste ${280 - characters.value.length} caractère(s) à saisir avant d'atteindre la limite autorisée.`
    }
    else if (characters.value.length >= 280) {
        resultParagraph.style.color = "red";
        characters.style.outlineColor = "red";
        resultParagraph.textContent = "Vous avez atteint la limite du nombre de caractères autorisé.";
    
    }
   else  {
        characters.style.outlineColor =  "blue";
        resultParagraph.style.color = "blue";
        resultParagraph.textContent = `Vous avez saisi ${characters.value.length} caractères.`;
        result.appendChild(resultParagraph);
   }
}

characters.addEventListener('input', handleCharacterCount);