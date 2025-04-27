// Music decision database
const musicOptions = [
    // Pop Music
    { name: "Taylor Swift Playlist", genre: "pop", mood: "upbeat", era: "contemporary", context: "any" },
    { name: "ABBA Greatest Hits", genre: "pop", mood: "upbeat", era: "60s-70s", context: "party" },
    { name: "Michael Jackson Collection", genre: "pop", mood: "energetic", era: "80s-90s", context: "party" },
    { name: "Ariana Grande Discography", genre: "pop", mood: "upbeat", era: "contemporary", context: "any" },
    { name: "Adele Ballads", genre: "pop", mood: "emotional", era: "2000s-2010s", context: "background" },

    // Rock Music
    { name: "Classic Rock Essentials", genre: "rock", mood: "energetic", era: "60s-70s", context: "road-trip" },
    { name: "Indie Rock Mix", genre: "rock", mood: "relaxed", era: "2000s-2010s", context: "background" },
    { name: "Rock Ballads", genre: "rock", mood: "emotional", era: "80s-90s", context: "date-night" },
    { name: "Rock Workout Mix", genre: "rock", mood: "energetic", era: "any", context: "workout" },
    { name: "Alternative Rock Classics", genre: "rock", mood: "melancholic", era: "90s-2000s", context: "focus" },

    // Hip Hop
    { name: "Old School Hip Hop", genre: "hip-hop", mood: "energetic", era: "80s-90s", context: "party" },
    { name: "Modern Hip Hop Hits", genre: "hip-hop", mood: "energetic", era: "contemporary", context: "party" },
    { name: "Chill Hip Hop", genre: "hip-hop", mood: "relaxed", era: "2000s-2010s", context: "background" },
    { name: "Hip Hop Workout Mix", genre: "hip-hop", mood: "energetic", era: "any", context: "workout" },
    { name: "Hip Hop Road Trip", genre: "hip-hop", mood: "upbeat", era: "any", context: "road-trip" },

    // R&B
    { name: "R&B Love Songs", genre: "r-and-b", mood: "romantic", era: "any", context: "date-night" },
    { name: "90s R&B Classics", genre: "r-and-b", mood: "upbeat", era: "80s-90s", context: "party" },
    { name: "Contemporary R&B", genre: "r-and-b", mood: "relaxed", era: "contemporary", context: "background" },
    { name: "R&B Slow Jams", genre: "r-and-b", mood: "romantic", era: "any", context: "date-night" },

    // Country
    { name: "Country Classics", genre: "country", mood: "relaxed", era: "60s-70s", context: "road-trip" },
    { name: "Modern Country Hits", genre: "country", mood: "upbeat", era: "contemporary", context: "party" },
    { name: "Country Love Songs", genre: "country", mood: "romantic", era: "any", context: "date-night" },
    { name: "Country Road Trip", genre: "country", mood: "upbeat", era: "any", context: "road-trip" },

    // Electronic
    { name: "EDM Party Mix", genre: "electronic", mood: "energetic", era: "contemporary", context: "party" },
    { name: "Chill Electronic", genre: "electronic", mood: "relaxed", era: "contemporary", context: "background" },
    { name: "Electronic Workout", genre: "electronic", mood: "energetic", era: "any", context: "workout" },
    { name: "Ambient Electronic", genre: "electronic", mood: "relaxed", era: "any", context: "focus" },

    // Classical
    { name: "Classical Essentials", genre: "classical", mood: "any", era: "any", context: "background" },
    { name: "Classical for Focus", genre: "classical", mood: "any", era: "any", context: "focus" },
    { name: "Classical Romantic", genre: "classical", mood: "romantic", era: "any", context: "date-night" },
    { name: "Upbeat Classical", genre: "classical", mood: "upbeat", era: "any", context: "any" },

    // Jazz
    { name: "Jazz Classics", genre: "jazz", mood: "relaxed", era: "60s-70s", context: "background" },
    { name: "Smooth Jazz", genre: "jazz", mood: "relaxed", era: "80s-90s", context: "date-night" },
    { name: "Upbeat Jazz", genre: "jazz", mood: "upbeat", era: "any", context: "party" },
    { name: "Jazz for Focus", genre: "jazz", mood: "relaxed", era: "any", context: "focus" },

    // Indie
    { name: "Indie Folk", genre: "indie", mood: "relaxed", era: "2000s-2010s", context: "background" },
    { name: "Indie Pop Hits", genre: "indie", mood: "upbeat", era: "contemporary", context: "road-trip" },
    { name: "Indie Rock Gems", genre: "indie", mood: "energetic", era: "2000s-2010s", context: "party" },
    { name: "Emotional Indie", genre: "indie", mood: "emotional", era: "any", context: "background" },

    // Alternative
    { name: "Alternative Classics", genre: "alternative", mood: "melancholic", era: "80s-90s", context: "any" },
    { name: "Alternative Rock Mix", genre: "alternative", mood: "energetic", era: "2000s-2010s", context: "road-trip" },
    { name: "Alternative Chill", genre: "alternative", mood: "relaxed", era: "contemporary", context: "background" },
    { name: "Alternative Workout", genre: "alternative", mood: "energetic", era: "any", context: "workout" }
];

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initMusicDecisionPage();
});

function initMusicDecisionPage() {
    // Get form elements
    const decisionForm = document.getElementById('decision-form');
    const resetButton = document.getElementById('reset-button');
    
    // Add event listeners
    if (decisionForm) {
        decisionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            makeMusicDecision();
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
 * Makes a music decision based on the selected criteria
 */
function makeMusicDecision() {
    // Get selected values
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;
    const era = document.getElementById('era').value;
    const context = document.getElementById('context').value;
    
    // Create criteria object
    const criteria = {
        genre: genre,
        mood: mood,
        era: era,
        context: context
    };
    
    // Filter options based on criteria
    let filteredOptions = filterOptions(musicOptions, criteria);
    
    // If no options match the criteria, provide a general option
    if (filteredOptions.length === 0) {
        displayResult("No exact matches found! How about trying something new?");
        
        // Try with fewer criteria
        const relaxedCriteria = {};
        if (genre !== "any") relaxedCriteria.genre = genre;
        if (mood !== "any") relaxedCriteria.mood = mood;
        
        filteredOptions = filterOptions(musicOptions, relaxedCriteria);
        
        if (filteredOptions.length === 0) {
            // If still no matches, just pick a random option
            filteredOptions = musicOptions;
        }
    }
    
    // Make a random decision from filtered options
    const decision = makeRandomDecision(filteredOptions);
    
    // Display the result
    displayMusicResult(decision);
}

/**
 * Display the music decision result
 * @param {Object} decision - The selected music option
 */
function displayMusicResult(decision) {
    const resultElement = document.getElementById('result');
    const resultDetailsElement = document.getElementById('result-details');
    const resultContainer = document.querySelector('.result-container');
    
    if (resultElement && resultDetailsElement && resultContainer) {
        resultElement.textContent = decision.name;
        
        // Create details string
        let details = `A ${decision.mood} ${decision.genre} playlist`;
        
        if (decision.era !== "any") {
            details += ` from the ${decision.era}`;
        }
        
        if (decision.context !== "any") {
            details += `, perfect for ${decision.context === "road-trip" ? "a road trip" : decision.context}`;
        }
        
        details += ".";
        
        resultDetailsElement.textContent = details;
        resultContainer.style.display = 'block';
        
        // Scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}