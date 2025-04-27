// Common functions that will be used across pages

/**
 * Makes a random decision from a list of options
 * @param {Array} options - Array of options to choose from
 * @returns {string} The randomly selected option
 */
function makeRandomDecision(options) {
    if (!options || options.length === 0) {
        return "No options available";
    }
    
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

/**
 * Displays the result of a decision
 * @param {string} resultText - The text to display
 */
function displayResult(resultText) {
    const resultElement = document.getElementById('result');
    const resultContainer = document.querySelector('.result-container');
    
    if (resultElement && resultContainer) {
        resultElement.textContent = resultText;
        resultContainer.style.display = 'block';
        
        // Scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Resets the form and hides the result
 */
function resetDecision() {
    const resultContainer = document.querySelector('.result-container');
    
    if (resultContainer) {
        resultContainer.style.display = 'none';
    }
    
    // Uncheck all checkboxes and reset selects
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
}

/**
 * Filters options based on selected criteria
 * @param {Array} allOptions - All available options
 * @param {Object} criteria - Object containing filtering criteria
 * @returns {Array} Filtered options
 */
function filterOptions(allOptions, criteria) {
    return allOptions.filter(option => {
        for (const key in criteria) {
            // Skip if criteria is not set or is set to "any"
            if (!criteria[key] || criteria[key] === "any") {
                continue;
            }
            
            // If option doesn't match the criteria, filter it out
            if (option[key] !== criteria[key]) {
                return false;
            }
        }
        return true;
    });
}

/**
 * Filters options based on selected criteria, supporting multiple values
 * @param {Array} allOptions - All available options
 * @param {Object} criteria - Object containing filtering criteria
 * @returns {Array} Filtered options
 */
function filterOptionsMulti(allOptions, criteria) {
    return allOptions.filter(option => {
        for (const key in criteria) {
            // Skip if criteria is not set or is set to "any"
            if (!criteria[key] || criteria[key] === "any") {
                continue;
            }
            
            // Handle array values in the option
            if (Array.isArray(option[key])) {
                // If the option has this key as an array, check if the criteria value is in the array
                if (!option[key].includes(criteria[key])) {
                    return false;
                }
            } else {
                // If the option doesn't match the criteria, filter it out
                if (option[key] !== criteria[key]) {
                    return false;
                }
            }
        }
        return true;
    });
}

/**
 * Initializes the page event listeners
 * This function should be called on each decision page
 */
function initDecisionPage() {
    const decisionForm = document.getElementById('decision-form');
    const resetButton = document.getElementById('reset-button');
    
    if (decisionForm) {
        decisionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // The specific implementation will be on each page
        });
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', function(e) {
            e.preventDefault();
            resetDecision();
        });
    }
}