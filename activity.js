// Activity decision database
const activityOptions = [
    // Indoor activities
    { name: "Movie Night", location: "indoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium" },
    { name: "Board Games", location: "indoor", groupSize: "small-group", activityLevel: "relaxed", duration: "medium" },
    { name: "Cooking Together", location: "indoor", groupSize: "couple", activityLevel: "moderate", duration: "medium" },
    { name: "Visit a Museum", location: "indoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium" },
    { name: "Indoor Rock Climbing", location: "indoor", groupSize: "couple", activityLevel: "very-active", duration: "medium" },
    { name: "Spa Day", location: "indoor", groupSize: "couple", activityLevel: "relaxed", duration: "long" },
    { name: "Escape Room", location: "indoor", groupSize: "small-group", activityLevel: "moderate", duration: "short" },
    { name: "Indoor Trampoline Park", location: "indoor", groupSize: "small-group", activityLevel: "very-active", duration: "medium" },
    { name: "Book Reading", location: "indoor", groupSize: "alone", activityLevel: "relaxed", duration: "medium" },
    { name: "Arts and Crafts", location: "indoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium" },
    { name: "Karaoke Night", location: "indoor", groupSize: "small-group", activityLevel: "moderate", duration: "medium" },
    { name: "Video Game Night", location: "indoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium" },
    
    // Outdoor activities
    { name: "Hiking", location: "outdoor", groupSize: "couple", activityLevel: "active", duration: "medium" },
    { name: "Picnic in the Park", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium" },
    { name: "Bike Riding", location: "outdoor", groupSize: "couple", activityLevel: "active", duration: "medium" },
    { name: "Beach Day", location: "outdoor", groupSize: "couple", activityLevel: "moderate", duration: "long" },
    { name: "Camping", location: "outdoor", groupSize: "small-group", activityLevel: "moderate", duration: "full-day" },
    { name: "Kayaking", location: "outdoor", groupSize: "couple", activityLevel: "active", duration: "medium" },
    { name: "Stargazing", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium" },
    { name: "Farmers Market", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "short" },
    { name: "Theme Park", location: "outdoor", groupSize: "small-group", activityLevel: "active", duration: "full-day" },
    { name: "Outdoor Concert", location: "outdoor", groupSize: "large-group", activityLevel: "moderate", duration: "medium" },
    { name: "Photography Walk", location: "outdoor", groupSize: "couple", activityLevel: "moderate", duration: "medium" },
    { name: "Garden Visit", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium" },
    { name: "Outdoor Yoga", location: "outdoor", groupSize: "couple", activityLevel: "moderate", duration: "short" },
    
    // Solo activities
    { name: "Meditation", location: "indoor", groupSize: "alone", activityLevel: "relaxed", duration: "short" },
    { name: "Journal Writing", location: "indoor", groupSize: "alone", activityLevel: "relaxed", duration: "short" },
    { name: "Solo Hike", location: "outdoor", groupSize: "alone", activityLevel: "active", duration: "medium" },
    { name: "Learning a New Skill", location: "indoor", groupSize: "alone", activityLevel: "moderate", duration: "medium" },
    
    // Group activities
    { name: "Potluck Dinner", location: "indoor", groupSize: "large-group", activityLevel: "relaxed", duration: "medium" },
    { name: "Group Hiking Trip", location: "outdoor", groupSize: "large-group", activityLevel: "active", duration: "long" },
    { name: "Game Night", location: "indoor", groupSize: "large-group", activityLevel: "relaxed", duration: "medium" },
    { name: "Bowling", location: "indoor", groupSize: "small-group", activityLevel: "moderate", duration: "medium" },
    { name: "Beach Volleyball", location: "outdoor", groupSize: "small-group", activityLevel: "very-active", duration: "medium" },
    { name: "Barbecue", location: "outdoor", groupSize: "large-group", activityLevel: "relaxed", duration: "medium" }
];

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initActivityDecisionPage();
});

function initActivityDecisionPage() {
    // Get form elements
    const decisionForm = document.getElementById('decision-form');
    const resetButton = document.getElementById('reset-button');
    
    // Add event listeners
    if (decisionForm) {
        decisionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            makeActivityDecision();
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
 * Makes an activity decision based on the selected criteria
 */
function makeActivityDecision() {
    // Get selected values
    const location = document.getElementById('location').value;
    const groupSize = document.getElementById('groupSize').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const duration = document.getElementById('duration').value;
    
    // Create criteria object
    const criteria = {
        location: location,
        groupSize: groupSize,
        activityLevel: activityLevel,
        duration: duration
    };
    
    // Filter options based on criteria
    let filteredOptions = filterOptions(activityOptions, criteria);
    
    // If no options match the criteria, provide a general option
    if (filteredOptions.length === 0) {
        displayResult("No exact matches found! How about trying something new?");
        
        // Try with fewer criteria
        const relaxedCriteria = {};
        if (location !== "any") relaxedCriteria.location = location;
        if (groupSize !== "any") relaxedCriteria.groupSize = groupSize;
        
        filteredOptions = filterOptions(activityOptions, relaxedCriteria);
        
        if (filteredOptions.length === 0) {
            // If still no matches, just pick a random option
            filteredOptions = activityOptions;
        }
    }
    
    // Make a random decision from filtered options
    const decision = makeRandomDecision(filteredOptions);
    
    // Display the result
    displayActivityResult(decision);
}

/**
 * Display the activity decision result
 * @param {Object} decision - The selected activity option
 */
function displayActivityResult(decision) {
    const resultElement = document.getElementById('result');
    const resultDetailsElement = document.getElementById('result-details');
    const resultContainer = document.querySelector('.result-container');
    
    if (resultElement && resultDetailsElement && resultContainer) {
        resultElement.textContent = decision.name;
        
        // Create details string
        let details = `A ${decision.activityLevel} ${decision.location} activity`;
        
        if (decision.groupSize === "alone") {
            details += " for some solo time";
        } else if (decision.groupSize === "couple") {
            details += " perfect for just the two of you";
        } else if (decision.groupSize === "small-group") {
            details += " for a small group";
        } else if (decision.groupSize === "large-group") {
            details += " for a larger group";
        }
        
        if (decision.duration === "short") {
            details += ", taking less than an hour.";
        } else if (decision.duration === "medium") {
            details += ", taking 1-3 hours.";
        } else if (decision.duration === "long") {
            details += ", taking 3-6 hours.";
        } else if (decision.duration === "full-day") {
            details += ", taking a full day.";
        }
        
        resultDetailsElement.textContent = details;
        resultContainer.style.display = 'block';
        
        // Scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}