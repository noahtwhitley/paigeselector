// Food decision database
const foodOptions = [
    // Breakfast options
    { name: "Pancakes", mealType: "breakfast", cuisine: "american", location: ["cook", "eat-out"], price: ["budget", "moderate"] },
    { name: "Avocado Toast", mealType: "breakfast", cuisine: "american", location: ["cook", "eat-out"], price: ["budget", "moderate"] },
    { name: "IHOP", mealType: "breakfast", cuisine: "american", location: "eat-out", price: "moderate" },
    { name: "Breakfast Burrito", mealType: "breakfast", cuisine: "mexican", location: ["takeout", "cook", "delivery"], price: "budget" },
    { name: "Eggs Benedict", mealType: "breakfast", cuisine: "american", location: ["eat-out", "cook"], price: ["moderate", "budget"] },
    { name: "Smoothie Bowl", mealType: "breakfast", cuisine: "american", location: ["cook", "takeout"], price: "budget" },
    { name: "Bagel & Cream Cheese", mealType: "breakfast", cuisine: "american", location: ["cook", "takeout"], price: "budget" },
    { name: "French Toast", mealType: "breakfast", cuisine: "american", location: ["cook", "eat-out"], price: ["budget", "moderate"] },
    { name: "Breakfast Sandwich", mealType: "breakfast", cuisine: "american", location: ["cook", "takeout", "delivery"], price: "budget" },
    { name: "Granola & Yogurt", mealType: "breakfast", cuisine: ["american", "mediterranean"], location: "cook", price: "budget" },
    
    // Lunch options
    { name: "Sandwich", mealType: "lunch", cuisine: "american", location: ["cook", "takeout"], price: "budget" },
    { name: "Salad", mealType: "lunch", cuisine: ["mediterranean", "american"], location: ["cook", "takeout", "eat-out"], price: ["budget", "moderate"] },
    { name: "Burrito", mealType: ["lunch", "dinner"], cuisine: "mexican", location: ["takeout", "delivery", "eat-out"], price: "budget" },
    { name: "Sushi", mealType: ["lunch", "dinner"], cuisine: "japanese", location: ["eat-out", "takeout", "delivery"], price: ["moderate", "expensive"] },
    { name: "Pizza", mealType: ["lunch", "dinner"], cuisine: "italian", location: ["delivery", "takeout", "eat-out", "cook"], price: ["budget", "moderate"] },
    { name: "Ramen", mealType: ["lunch", "dinner"], cuisine: ["japanese", "chinese"], location: ["eat-out", "cook", "takeout"], price: ["budget", "moderate"] },
    { name: "Poke Bowl", mealType: "lunch", cuisine: ["japanese", "american"], location: ["takeout", "eat-out"], price: "moderate" },
    { name: "Panini", mealType: "lunch", cuisine: ["italian", "american"], location: ["takeout", "eat-out", "cook"], price: ["budget", "moderate"] },
    { name: "Falafel Wrap", mealType: "lunch", cuisine: "mediterranean", location: ["takeout", "eat-out"], price: "budget" },
    { name: "Soup & Sandwich", mealType: "lunch", cuisine: "american", location: ["cook", "takeout", "eat-out"], price: ["budget", "moderate"] },
    
    // Dinner options
    { name: "Pasta", mealType: "dinner", cuisine: "italian", location: ["cook", "eat-out", "takeout"], price: ["budget", "moderate", "expensive"] },
    { name: "Steak", mealType: "dinner", cuisine: "american", location: ["cook", "eat-out"], price: ["moderate", "expensive"] },
    { name: "Fancy Italian Restaurant", mealType: "dinner", cuisine: "italian", location: "eat-out", price: "expensive" },
    { name: "Thai Curry", mealType: "dinner", cuisine: "thai", location: ["delivery", "takeout", "eat-out", "cook"], price: ["moderate", "budget"] },
    { name: "Tacos", mealType: ["lunch", "dinner"], cuisine: "mexican", location: ["takeout", "cook", "eat-out"], price: "budget" },
    { name: "Indian Buffet", mealType: "dinner", cuisine: "indian", location: "eat-out", price: "moderate" },
    { name: "Chinese Takeout", mealType: "dinner", cuisine: "chinese", location: ["delivery", "takeout"], price: "budget" },
    { name: "Homemade Pizza", mealType: ["lunch", "dinner"], cuisine: "italian", location: "cook", price: "budget" },
    { name: "Grilled Chicken", mealType: "dinner", cuisine: ["american", "mediterranean"], location: "cook", price: ["budget", "moderate"] },
    { name: "Burger & Fries", mealType: ["lunch", "dinner"], cuisine: "american", location: ["eat-out", "takeout", "delivery", "cook"], price: ["budget", "moderate"] },
    { name: "Salmon", mealType: "dinner", cuisine: ["american", "mediterranean"], location: ["cook", "eat-out"], price: ["moderate", "expensive"] },
    { name: "Sushi Restaurant", mealType: "dinner", cuisine: "japanese", location: "eat-out", price: ["moderate", "expensive"] },
    { name: "Vietnamese Pho", mealType: ["lunch", "dinner"], cuisine: "vietnamese", location: ["eat-out", "takeout", "delivery"], price: "moderate" },
    
    // Snack options
    { name: "Popcorn", mealType: "snack", cuisine: "american", location: "cook", price: "budget" },
    { name: "Chips and Salsa", mealType: "snack", cuisine: "mexican", location: "cook", price: "budget" },
    { name: "Fresh Fruit", mealType: "snack", cuisine: "any", location: "cook", price: "budget" },
    { name: "Yogurt", mealType: ["snack", "breakfast"], cuisine: "any", location: "cook", price: "budget" },
    { name: "Hummus & Veggies", mealType: "snack", cuisine: "mediterranean", location: "cook", price: "budget" },
    { name: "Trail Mix", mealType: "snack", cuisine: "any", location: "cook", price: "budget" },
    { name: "Cheese & Crackers", mealType: "snack", cuisine: ["american", "european"], location: "cook", price: ["budget", "moderate"] },
    { name: "Protein Bar", mealType: "snack", cuisine: "any", location: "cook", price: "budget" },
    
    // Dessert options
    { name: "Ice Cream", mealType: "dessert", cuisine: "american", location: ["takeout", "cook", "eat-out"], price: ["budget", "moderate"] },
    { name: "Cake", mealType: "dessert", cuisine: "american", location: ["cook", "takeout"], price: ["budget", "moderate"] },
    { name: "Tiramisu", mealType: "dessert", cuisine: "italian", location: ["eat-out", "takeout"], price: "moderate" },
    { name: "Mochi", mealType: "dessert", cuisine: "japanese", location: ["takeout", "eat-out"], price: "moderate" },
    { name: "Cookies", mealType: "dessert", cuisine: "american", location: ["cook", "takeout"], price: "budget" },
    { name: "Brownies", mealType: "dessert", cuisine: "american", location: ["cook", "takeout"], price: "budget" },
    { name: "Cheesecake", mealType: "dessert", cuisine: "american", location: ["eat-out", "takeout"], price: ["moderate", "expensive"] },
    { name: "Gelato", mealType: "dessert", cuisine: "italian", location: ["eat-out", "takeout"], price: "moderate" },
    { name: "Cupcakes", mealType: "dessert", cuisine: "american", location: ["cook", "takeout"], price: "budget" },
    { name: "Chocolate Fondue", mealType: "dessert", cuisine: "european", location: ["cook", "eat-out"], price: ["moderate", "expensive"] },
    
    // Drink options
    { name: "Coffee", mealType: "drink", cuisine: "any", location: ["takeout", "cook", "eat-out"], price: ["budget", "moderate"] },
    { name: "Smoothie", mealType: ["drink", "breakfast"], cuisine: "any", location: ["cook", "takeout"], price: "budget" },
    { name: "Boba Tea", mealType: "drink", cuisine: "any", location: "takeout", price: "budget" },
    { name: "Wine", mealType: "drink", cuisine: "any", location: ["eat-out", "cook"], price: ["moderate", "expensive"] },
    { name: "Craft Beer", mealType: "drink", cuisine: "any", location: ["eat-out", "cook"], price: ["budget", "moderate"] },
    { name: "Matcha Latte", mealType: "drink", cuisine: "japanese", location: ["takeout", "cook"], price: "budget" },
    { name: "Hot Chocolate", mealType: "drink", cuisine: "any", location: ["cook", "takeout"], price: "budget" },
    { name: "Fresh Juice", mealType: "drink", cuisine: "any", location: ["cook", "takeout"], price: ["budget", "moderate"] },
    { name: "Cocktails", mealType: "drink", cuisine: "any", location: ["eat-out", "cook"], price: ["moderate", "expensive"] },
    { name: "Chai Tea", mealType: "drink", cuisine: "indian", location: ["cook", "takeout"], price: "budget" }
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
    
    // Filter options based on criteria but prevent duplicates
    let filteredOptions = [];
    
    // First pass: Find all options that match at least one of the required criteria values
    for (const option of foodOptions) {
        let isMatch = true;
        
        for (const key in criteria) {
            // Skip if criteria is not set or is set to "any"
            if (!criteria[key] || criteria[key] === "any") {
                continue;
            }
            
            let optionMatches = false;
            
            // Handle array values in the option
            if (Array.isArray(option[key])) {
                // If the option has this key as an array, check if the criteria value is in the array
                if (option[key].includes(criteria[key])) {
                    optionMatches = true;
                }
            } else {
                // If the option value matches the criteria
                if (option[key] === criteria[key]) {
                    optionMatches = true;
                }
            }
            
            // If this criteria doesn't match, this option is not a match
            if (!optionMatches) {
                isMatch = false;
                break;
            }
        }
        
        if (isMatch) {
            filteredOptions.push(option);
        }
    }
    
    // If no options match the criteria, provide a general option
    if (filteredOptions.length === 0) {
        displayResult("No exact matches found! How about trying something new?");
        
        // Try with fewer criteria
        const relaxedCriteria = {};
        if (mealType !== "any") relaxedCriteria.mealType = mealType;
        
        // Re-run the match with relaxed criteria
        for (const option of foodOptions) {
            let isMatch = true;
            
            for (const key in relaxedCriteria) {
                let optionMatches = false;
                
                // Handle array values in the option
                if (Array.isArray(option[key])) {
                    if (option[key].includes(relaxedCriteria[key])) {
                        optionMatches = true;
                    }
                } else {
                    if (option[key] === relaxedCriteria[key]) {
                        optionMatches = true;
                    }
                }
                
                if (!optionMatches) {
                    isMatch = false;
                    break;
                }
            }
            
            if (isMatch) {
                filteredOptions.push(option);
            }
        }
        
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
        
        // Get the current selected values
        const currentCuisine = document.getElementById('cuisine').value;
        const currentLocation = document.getElementById('location').value;
        const currentPrice = document.getElementById('price').value;
        
        // Determine which cuisine to display
        let cuisineToUse;
        if (currentCuisine !== "any" && Array.isArray(decision.cuisine) && decision.cuisine.includes(currentCuisine)) {
            cuisineToUse = currentCuisine;
        } else if (Array.isArray(decision.cuisine)) {
            cuisineToUse = decision.cuisine[Math.floor(Math.random() * decision.cuisine.length)];
        } else {
            cuisineToUse = decision.cuisine;
        }
        
        // Determine which location to display
        let locationToUse;
        if (currentLocation !== "any" && Array.isArray(decision.location) && decision.location.includes(currentLocation)) {
            locationToUse = currentLocation;
        } else if (Array.isArray(decision.location)) {
            locationToUse = decision.location[Math.floor(Math.random() * decision.location.length)];
        } else {
            locationToUse = decision.location;
        }
        
        // Determine which price to display
        let priceToUse;
        if (currentPrice !== "any" && Array.isArray(decision.price) && decision.price.includes(currentPrice)) {
            priceToUse = currentPrice;
        } else if (Array.isArray(decision.price)) {
            priceToUse = decision.price[Math.floor(Math.random() * decision.price.length)];
        } else {
            priceToUse = decision.price;
        }
        
        // Create details string
        let details = `A ${priceToUse} ${cuisineToUse} option`;
        
        // Add location details
        if (locationToUse === "cook") {
            details += " to make at home.";
        } else if (locationToUse === "eat-out") {
            details += " to enjoy at a restaurant.";
        } else if (locationToUse === "takeout") {
            details += " for takeout.";
        } else if (locationToUse === "delivery") {
            details += " for delivery.";
        }
        
        resultDetailsElement.textContent = details;
        resultContainer.style.display = 'block';
        
        // Scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}