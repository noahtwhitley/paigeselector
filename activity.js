// Activity decision database
const activityOptions = [
    // Indoor activities
    { name: "Vinyl Shopping", location: "indoor", groupSize: ["couple", "alone"], activityLevel: "relaxed", duration: "medium", description: "Graywhale or 3Hive are the best. Love going record shopping with you" },
    { name: "Cozy Movie Night", location: "indoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium", description: "We have SO many movies & TV shows we need to watch, so lets start!" },
    { name: "Coffee Shop", location: "indoor", groupSize: ["alone", "couple", "small-group"], activityLevel: "relaxed", duration: "medium", description: "Peace on Earth or finding a new one & pretening to do homework but getting like 0% done is AWESOME" },
    { name: "Thrifting", location: "indoor", groupSize: ["couple", "small-group"], activityLevel: "moderate", duration: "medium", description: "Thrifting with Paige is the dream. Going to Savers & buying things for our future home is my FAV" },
    { name: "Craft Night", location: "indoor", groupSize: ["couple", "small-group"], activityLevel: "moderate", duration: "medium", description: "CRAFTS!!! I will always make bracelets or anything with you" },
    { name: "Bake Something Cute", location: "indoor", groupSize: "couple", activityLevel: "moderate", duration: "medium", description: "Idek what we would make but it could be way fun to make some cute desserts" },
    { name: "Board Gamesssss", location: "indoor", groupSize: ["couple", "small-group"], activityLevel: "relaxed", duration: "medium", description: "We need to play more board games/card games" },
    { name: "Museum Visit", location: "indoor", groupSize: ["couple", "small-group"], activityLevel: "relaxed", duration: "medium", description: "Musumes are so so so cool, we need to go to more if its UMOCA or something else" },
    { name: "Plant Shopping", location: "indoor", groupSize: ["couple", "alone"], activityLevel: "relaxed", duration: "short", description: "PLANTS! Once we get the house in the fall we will have SO MANY PLANTS" },
    { name: "Find a Cutesy Bookstore", location: "indoor", groupSize: ["couple", "alone"], activityLevel: "relaxed", duration: "medium", description: "I already KNOW there are some cute ones around us, & books are so Paige. Maybe we can get you a new Anne of Green Gables" },
    { name: "Painting", location: "indoor", groupSize: ["alone", "couple", "small-group"], activityLevel: "relaxed", duration: "medium", description: "Going to a lookout or park or up the canyon & painting with Paige is AWESOME" },
    { name: "Arcade", location: "indoor", groupSize: ["couple", "small-group"], activityLevel: "moderate", duration: "medium", description: "LOVE arcade. Nickle City is right next to us!" },
    { name: "Karaoke :P", location: "indoor", groupSize: ["small-group", "large-group"], activityLevel: "moderate", duration: "medium", description: "Channel your inner Blake. Karaoke night with a group of friend would be so fun" },
    { name: "Photoshoot Shot By Yours Truly", location: "indoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium", description: "Spend an hour figuring out an outfit & then another 1 trying to find somewhere YUUUUP" },
    { name: "Read a Book Bro", location: "indoor", groupSize: ["alone", "couple"], activityLevel: "relaxed", duration: ["short", "medium", "long"], description: "Go to park or just at home & read & have a good drink yay!" },
    
    // Outdoor activities
    { name: "Farmers Market", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "moderate", duration: "medium", description: "So cute! We must make this a thing especially when we need groceries" },
    { name: "Asian Market", location: "any", groupSize: ["couple", "small-group"], activityLevel: "moderate", duration: "medium", description: "We neeeed to go more! We can try all the weird foods" },
    { name: "Sunset Picnic", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium", description: "Flight park or our canyon road & go watch sunset & eat fruit" },
    { name: "Hike to a Waterfall", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "active", duration: ["medium", "long"], description: "We are so close to so many cool waterfall hikes. Let's do some research & find an easy cute one" },
    { name: "Find a Festival", location: "outdoor", groupSize: ["couple", "small-group", "large-group"], activityLevel: "moderate", duration: ["medium", "long"], description: "We need to be stalker but I feel like we can always find something on a weekend" },
    { name: "Drive-in Movie", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium", description: "We NEED to make these a thing. I always think about the one we did when we first started dating" },
    { name: "Hammocking", location: "outdoor", groupSize: ["couple", "alone"], activityLevel: "relaxed", duration: ["short", "medium"], description: "Like the only thing I wanted to do when we first started dating. There is that way cool park in daybreak for hammocking" },
    { name: "Botanical Garden", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium", description: "Red Butte Garden looks so pretty & they sometimes have little concerts too!" },
    { name: "Stargazing", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "medium", description: "The US thing. Go to our park or honestly anywhere with music & us" },
    { name: "Casual Concert", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "moderate", duration: "medium", description: "figure out who's playing at Kilby Court on any weekend, or maybe one like The Moss concert we went to?" },
    { name: "Go Feed Ducks", location: "outdoor", groupSize: "couple", activityLevel: "relaxed", duration: "short", description: "I love ducks & we should go feed them" },
    { name: "Roller Blading", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "active", duration: "medium", description: "PLEASE PLEASE PLEASE. One dollar on Wednesdays we MUST go soon" },
    { name: "Paddleboarding", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "active", duration: "medium", description: "Paddleboarding so fun summer core. Tibble or any reservoir around us" },
    { name: "Just Go Hangout In A Park", location: "outdoor", groupSize: ["alone", "couple"], activityLevel: "moderate", duration: "short", description: "So many cutesy parks around us. Honestly my preferance to sitting next to a pool" },
    { name: "Go Swimming", location: "outdoor", groupSize: ["alone", "couple", "small-group", "large-group"], activityLevel: "moderate", duration: "short", description: "If it's at your house or somewhere else, swimming is awesome" },
    { name: "Ghost Towns", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "moderate", duration: "long", description: "Utah has so many abandoned mining towns! We MUST check them out" },
    
    // Solo activities
    { name: "Journaling", location: "indoor", groupSize: "alone", activityLevel: "relaxed", duration: ["short", "medium"], description: "I need to do this more. Really let your future self know what's going on right now" },
    { name: "Self-care Night", location: "indoor", groupSize: "alone", activityLevel: "relaxed", duration: "medium", description: "Give yourselve the Paige's Jawsome Spa Treatment. Bathbomb & all the fancy selfcare things you have" },
    { name: "Rearrange Your Room", location: "indoor", groupSize: "alone", activityLevel: "moderate", duration: ["medium", "long"], description: "Move some things around, make your days feel less repetitive" },
    { name: "Make One Billion TikTok Drafts", location: "indoor", groupSize: "alone", activityLevel: "moderate", duration: "short", description: "I know you saved sounds, put them to work girl" },
    { name: "Solo Coffee Date", location: ["indoor", "outdoor"], groupSize: "alone", activityLevel: "relaxed", duration: "medium", description: "Go get some chai & People-watch or get some homework done" },
    { name: "Create a New Playlist", location: "indoor", groupSize: "alone", activityLevel: "relaxed", duration: ["short", "medium"], description: "Find a mood or feeling or song & make a whole playlist around it! Send it to me after & I'll listen to it" },
    { name: "Letter Writing", location: "indoor", groupSize: "alone", activityLevel: "relaxed", duration: "short", description: "Send a cute letter to someone you love" },
    
    // Group activities
    { name: "Jackbox", location: "indoor", groupSize: ["small-group", "large-group"], activityLevel: "moderate", duration: "medium", description: "Kinda the best group activity. I'll buy it for you!" },
    { name: "Potluck Dinner", location: "indoor", groupSize: ["small-group", "large-group"], activityLevel: "relaxed", duration: "medium", description: "Plan a dinner with friends & make them bring stuff" },
    { name: "Group Hike", location: "outdoor", groupSize: ["small-group", "large-group"], activityLevel: "active", duration: ["medium", "long"], description: "So many hikes around us! A group hike would be so fun" },
    { name: "Trivia Night", location: "indoor", groupSize: ["small-group", "large-group"], activityLevel: "relaxed", duration: "medium", description: "Grove Station does one every Tuesday!" },
    { name: "Day at a Lake", location: "outdoor", groupSize: ["small-group", "large-group"], activityLevel: "moderate", dusration: "long", description: "Bring drinks & snacks & fun outdoor activites!" },
    { name: "Bowling", location: "indoor", groupSize: ["small-group", "large-group"], activityLevel: "moderate", duration: "medium", description: "Bowling is awesome even if I SUCK. Good activity for double dates & a ton around us." },
    { name: "Backyard Bonfire", location: "outdoor", groupSize: ["small-group", "large-group"], activityLevel: "relaxed", duration: "medium", description: "Get people together & make smore's & just enjoy each other's company" },
    
    // Creative activities
    { name: "Make a Zine", location: "indoor", groupSize: ["alone", "couple"], activityLevel: "moderate", duration: ["medium", "long"], description: "Show me how you do it! Zine so cool" },
    { name: "Junk Journaling!", location: "indoor", groupSize: ["alone", "couple"], activityLevel: "moderate", duration: ["medium", "long"], description: "You have all the stuff! This is a sign to do it" },
    { name: "Scrapbooking", location: "indoor", groupSize: ["alone", "couple"], activityLevel: "relaxed", duration: "medium", description: "LOVE scrapbooking! Maybe for a trip or season or concert?" },
    { name: "Embroidery", location: "indoor", groupSize: ["alone", "couple"], activityLevel: "relaxed", duration: ["medium", "long"], description: "Embroidery is so fun & easy. We can get some blanks & make them projects" },
    { name: "Collage Making", location: "indoor", groupSize: ["alone", "couple", "small-group"], activityLevel: "relaxed", duration: "medium", description: "Make collages for whatever. Making cards from scratch could be fun" },
    { name: "Dye Something", location: "indoor", groupSize: ["alone", "couple"], activityLevel: "moderate", duration: "medium", description: "I always have something I want to dye, so let's do it!" },
    
    // Active/Fitness
    { name: "Find a Place to do Yoga", location: ["indoor", "outdoor"], groupSize: ["alone", "couple", "small-group"], activityLevel: "active", duration: "short", description: "Inside, a park, even a studio if you feel up to it" },
    { name: "Rock Climbing", location: "indoor", groupSize: ["couple", "small-group"], activityLevel: "very-active", duration: "medium", description: "PLS! We go rock climb at UVU for like $2" },
    { name: "Pickleball", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "active", duration: "medium", description: "I know your Dad or Ben would love if we joined them" },
    { name: "Morning Walk Ritual", location: "outdoor", groupSize: ["alone", "couple"], activityLevel: "moderate", duration: "short", description: "We can walk in silence to wake up or yap while we wake up, either way I feel better if I start my day off with walk" },
    
    // Relaxing/Wellness
    { name: "Visit a Hot Spring", location: "outdoor", groupSize: ["couple", "small-group"], activityLevel: "relaxed", duration: ["medium", "long"], description: "Midway crater is so cool but there's also a ton close to us!" },
    { name: "DIY Nail Art", location: "indoor", groupSize: ["alone", "couple"], activityLevel: "relaxed", duration: "medium", description: "Let's spend forever trying to make impossible nails happen. Kyra has all the stuff we need" },
    { name: "Digital Detox Day", location: ["indoor", "outdoor"], groupSize: ["alone", "couple"], activityLevel: "relaxed", duration: ["medium", "long"], description: "I know this would suck but I think it could kinda be awesome" },
    { name: "Go Try New Things From Coffee Shop", location: "indoor", groupSize: ["couple", "small-group"], activityLevel: "relaxed", duration: "short", description: "I feel like there is SO much at coffee shops & we really just get the same stuff every time. Lets switch it up!" },
    { name: "Spend Some Time in Nature", location: "outdoor", groupSize: ["alone", "couple"], activityLevel: "relaxed", duration: "short", description: "Go up the canyon or just find a quiet spot & exist there for a lil" },
    { name: "Go on a Drive!", location: "outdoor", groupSize: ["alone", "couple"], activityLevel: "relaxed", duration: "short", description: "weither its driving up the canyon or around neiborhoods, or blasting music or just talking, I will always go on a drive with you" }
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
    
    // Filter options based on criteria but prevent duplicates
    let filteredOptions = [];
    
    // First pass: Find all options that match at least one of the required criteria values
    for (const option of activityOptions) {
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
        displayResult("No exact matches found! How about trying something different?");
        
        // Try with fewer criteria
        const relaxedCriteria = {};
        if (location !== "any") relaxedCriteria.location = location;
        if (groupSize !== "any") relaxedCriteria.groupSize = groupSize;
        
        // Re-run the match with relaxed criteria
        for (const option of activityOptions) {
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
        
        // Use the custom description
        resultDetailsElement.textContent = decision.description;
        resultContainer.style.display = 'block';
        
        // Scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}