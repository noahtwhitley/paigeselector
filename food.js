// Food decision database
const foodOptions = [
    // Breakfast options
    { name: "Pancakes", mealType: "breakfast", cuisine: "american", location: "cook", price: "budget" },
    { name: "Avocado Toast", mealType: "breakfast", cuisine: "american", location: "cook", price: "budget" },
    { name: "IHOP", mealType: "breakfast", cuisine: "american", location: "eat-out", price: "moderate" },
    { name: "Breakfast Burrito", mealType: "breakfast", cuisine: "mexican", location: "takeout", price: "budget" },
    { name: "Eggs Benedict", mealType: "breakfast", cuisine: "american", location: "eat-out", price: "moderate" },
    { name: "Smoothie Bowl", mealType: "breakfast", cuisine: "american", location: "cook", price: "budget" },
    
    // Lunch options
    { name: "Sandwich", mealType: "lunch", cuisine: "american", location: "cook", price: "budget" },
    { name: "Salad", mealType: "lunch", cuisine: "mediterranean", location: "cook", price: "budget" },
    { name: "Burrito", mealType: "lunch", cuisine: "mexican", location: "takeout", price: "budget" },
    { name: "Sushi", mealType: "lunch", cuisine: "japanese", location: "eat-out", price: "moderate" },
    { name: "Pizza", mealType: "lunch", cuisine: "italian", location: "delivery", price: "moderate" },
    { name: "Ramen", mealType: "lunch", cuisine: "japanese", location: "eat-out", price: "moderate" },
    
    // Dinner options
    { name: "Pasta", mealType: "dinner", cuisine: "italian", location: "cook", price: "budget" },
    { name: "Steak", mealType: "dinner", cuisine: "american", location: "cook", price: "expensive" },
    { name: "Fancy Italian Restaurant", mealType: "dinner", cuisine: "italian", location: "eat-out", price: "expensive" },
    { name: "Thai Curry", mealType: "dinner", cuisine: "thai", location: "delivery", price: "moderate" },
    { name: "Tacos", mealType: "dinner", cuisine: "mexican", location: "takeout", price: "budget" },
    { name: "Indian Buffet", mealType: "dinner", cuisine: "indian", location: "eat-out", price: "moderate" },
    { name: "Chinese Takeout", mealType: "dinner", cuisine: "chinese", location: "delivery", price: "budget" },
    
    // Snack options
    { name: "Popcorn", mealType: "snack", cuisine: "american", location: "cook", price: "budget" },
    { name: "Chips and Salsa", mealType: "snack", cuisine: "mexican", location: "cook", price: "budget" },
    { name: "Fruit", mealType: "snack", cuisine: "any", location: "cook", price: "budget" },
    { name: "Yogurt", mealType: "snack", cuisine: "any", location: "cook", price: "budget" },
    
    // Dessert options
    { name: "Ice Cream", mealType: "dessert", cuisine: "american", location: "takeout", price: "budget" },
    { name: "Cake", mealType: "dessert", cuisine: "american", location: "cook", price: "budget" },
    { name: "Tiramisu", mealType: "dessert", cuisine: "italian", location: "eat-out", price: "moderate" },
    { name: "Mochi", mealType: "dessert", cuisine: "japanese", location: "takeout", price: "moderate" },
    
    // Drink options
    { name: "Coffee", mealType: "drink", cuisine: "any", location: "takeout", price: "budget" },
    { name: "Smoothie", mealType: "drink", cuisine: "any", location: "cook", price: "budget" },
    { name: "Boba Tea", mealType: "drink", cuisine: "any", location: "takeout", price: "budget" },
    { name: "Wine", mealType: "drink", cuisine: "any", location: "eat-out", price: "moderate" }
];

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initFoodDecisionPage();
});

function initFoodDecisionPage() {
    // Get form elements
    const decisionForm = document.getElementById('decision-form');
    const resetButton = document.getElementById('reset-button');
    
    // Add event listeners
    if (decisionForm) {
        decisionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            makeFoodDecision();
        });
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', function(e) {
            e.preventDefault();
            resetDecision();
        });
    }
}

/**
 * Makes a food decision based on the selected criteria
 */
function makeFoodDecision() {
    // Get selected values
    const mealType = document.getElementById('meal-type').value;
    const cuisine = document.getElementById('cuisine').value;
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    
    // Create criteria object
    const criteria = {
        mealType: mealType,
        cuisine: cuisine,
        location: location,
        price: price
    };
    
    // Filter options based on criteria
    let filteredOptions = filterOptions(foodOptions, criteria);
    
    // If no options match the criteria, provide a general option
    if (filteredOptions.length === 0) {
        displayResult("No exact matches found! How about trying something new?");
        
        // Try with fewer criteria
        const relaxedCriteria = {};
        if (mealType !== "any") relaxedCriteria.mealType = mealType;
        
        filteredOptions = filterOptions(foodOptions, relaxedCriteria);
        
        if (filteredOptions.length === 0) {
            // If still no matches, just pick a random option
            filteredOptions = foodOptions;
        }
    }
    
    // Make a random decision from filtered options
    const decision = makeRandomDecision(filteredOptions);
    
    // Display the result
    displayFoodResult(decision);
}

/**
 * Display the food decision result
 * @param {Object} decision - The selected food option
 */
function displayFoodResult(decision) {
    const resultElement = document.getElementById('result');
    const resultDetailsElement = document.getElementById('result-details');
    const resultContainer = document.querySelector('.result-container');
    
    if (resultElement && resultDetailsElement && resultContainer) {
        resultElement.textContent = decision.name;
        
        // Create details string
        let details = `A ${decision.price} ${decision.cuisine} option`;
        
        if (decision.location === "cook") {
            details += " to make at home.";
        } else if (decision.location === "eat-out") {
            details += " to enjoy at a restaurant.";
        } else if (decision.location === "takeout") {
            details += " for takeout.";
        } else if (decision.location === "delivery") {
            details += " for delivery.";
        }
        
        resultDetailsElement.textContent = details;
        resultContainer.style.display = 'block';
        
        // Scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}