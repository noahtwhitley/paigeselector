// Movie decision database
const movieOptions = [
    // Action Movies
    { name: "Die Hard", genre: "action", era: "classic", length: "medium", mood: "intense" },
    { name: "The Matrix", genre: "action", era: "80s-90s", length: "medium", mood: "thought-provoking" },
    { name: "Mission Impossible: Fallout", genre: "action", era: "2000s-2010s", length: "long", mood: "intense" },
    { name: "Mad Max: Fury Road", genre: "action", era: "2000s-2010s", length: "medium", mood: "intense" },
    { name: "John Wick", genre: "action", era: "2000s-2010s", length: "medium", mood: "intense" },
    { name: "Top Gun: Maverick", genre: "action", era: "recent", length: "medium", mood: "inspiring" },
    
    // Comedy Movies
    { name: "Airplane!", genre: "comedy", era: "classic", length: "short", mood: "light" },
    { name: "Dumb and Dumber", genre: "comedy", era: "80s-90s", length: "medium", mood: "light" },
    { name: "The Hangover", genre: "comedy", era: "2000s-2010s", length: "medium", mood: "light" },
    { name: "Bridesmaids", genre: "comedy", era: "2000s-2010s", length: "medium", mood: "light" },
    { name: "Superbad", genre: "comedy", era: "2000s-2010s", length: "medium", mood: "light" },
    { name: "Barbie", genre: "comedy", era: "recent", length: "medium", mood: "light" },
    
    // Drama Movies
    { name: "The Godfather", genre: "drama", era: "classic", length: "long", mood: "serious" },
    { name: "Shawshank Redemption", genre: "drama", era: "80s-90s", length: "long", mood: "inspiring" },
    { name: "The Social Network", genre: "drama", era: "2000s-2010s", length: "medium", mood: "thought-provoking" },
    { name: "Parasite", genre: "drama", era: "recent", length: "medium", mood: "thought-provoking" },
    { name: "The Whale", genre: "drama", era: "recent", length: "medium", mood: "serious" },
    { name: "Oppenheimer", genre: "drama", era: "recent", length: "long", mood: "serious" },
    
    // Romance Movies
    { name: "Casablanca", genre: "romance", era: "classic", length: "medium", mood: "romantic" },
    { name: "When Harry Met Sally", genre: "romance", era: "80s-90s", length: "medium", mood: "light" },
    { name: "The Notebook", genre: "romance", era: "2000s-2010s", length: "medium", mood: "romantic" },
    { name: "La La Land", genre: "romance", era: "2000s-2010s", length: "medium", mood: "romantic" },
    { name: "Pride and Prejudice", genre: "romance", era: "2000s-2010s", length: "long", mood: "romantic" },
    { name: "Past Lives", genre: "romance", era: "recent", length: "medium", mood: "thought-provoking" },
    
    // Thriller Movies
    { name: "The Silence of the Lambs", genre: "thriller", era: "80s-90s", length: "medium", mood: "intense" },
    { name: "Se7en", genre: "thriller", era: "80s-90s", length: "medium", mood: "intense" },
    { name: "Gone Girl", genre: "thriller", era: "2000s-2010s", length: "long", mood: "intense" },
    { name: "Get Out", genre: "thriller", era: "2000s-2010s", length: "medium", mood: "thought-provoking" },
    { name: "Prisoners", genre: "thriller", era: "2000s-2010s", length: "long", mood: "intense" },
    { name: "Saltburn", genre: "thriller", era: "recent", length: "long", mood: "intense" },
    
    // Horror Movies
    { name: "The Exorcist", genre: "horror", era: "classic", length: "medium", mood: "intense" },
    { name: "The Shining", genre: "horror", era: "classic", length: "long", mood: "intense" },
    { name: "Scream", genre: "horror", era: "80s-90s", length: "medium", mood: "intense" },
    { name: "Hereditary", genre: "horror", era: "2000s-2010s", length: "medium", mood: "intense" },
    { name: "The Witch", genre: "horror", era: "2000s-2010s", length: "medium", mood: "serious" },
    { name: "Talk to Me", genre: "horror", era: "recent", length: "medium", mood: "intense" },
    
    // Sci-Fi Movies
    { name: "Blade Runner", genre: "sci-fi", era: "classic", length: "medium", mood: "thought-provoking" },
    { name: "Star Wars: The Empire Strikes Back", genre: "sci-fi", era: "classic", length: "medium", mood: "inspiring" },
    { name: "Interstellar", genre: "sci-fi", era: "2000s-2010s", length: "long", mood: "thought-provoking" },
    { name: "Arrival", genre: "sci-fi", era: "2000s-2010s", length: "medium", mood: "thought-provoking" },
    { name: "Dune", genre: "sci-fi", era: "recent", length: "long", mood: "serious" },
    { name: "Everything Everywhere All at Once", genre: "sci-fi", era: "recent", length: "long", mood: "thought-provoking" },
    
    // Fantasy Movies
    { name: "The Princess Bride", genre: "fantasy", era: "80s-90s", length: "medium", mood: "light" },
    { name: "The Lord of the Rings: The Fellowship of the Ring", genre: "fantasy", era: "2000s-2010s", length: "long", mood: "inspiring" },
    { name: "Harry Potter and the Prisoner of Azkaban", genre: "fantasy", era: "2000s-2010s", length: "long", mood: "inspiring" },
    { name: "Pan's Labyrinth", genre: "fantasy", era: "2000s-2010s", length: "medium", mood: "thought-provoking" },
    { name: "The Shape of Water", genre: "fantasy", era: "2000s-2010s", length: "medium", mood: "romantic" },
    { name: "Poor Things", genre: "fantasy", era: "recent", length: "long", mood: "thought-provoking" },
    
    // Animation Movies
    { name: "The Lion King", genre: "animation", era: "80s-90s", length: "medium", mood: "inspiring" },
    { name: "Spirited Away", genre: "animation", era: "2000s-2010s", length: "medium", mood: "thought-provoking" },
    { name: "Inside Out", genre: "animation", era: "2000s-2010s", length: "short", mood: "thought-provoking" },
    { name: "Spider-Man: Into the Spider-Verse", genre: "animation", era: "2000s-2010s", length: "medium", mood: "inspiring" },
    { name: "Soul", genre: "animation", era: "recent", length: "short", mood: "thought-provoking" },
    { name: "The Boy and the Heron", genre: "animation", era: "recent", length: "medium", mood: "thought-provoking" },
    
    // Documentary Movies
    { name: "March of the Penguins", genre: "documentary", era: "2000s-2010s", length: "short", mood: "inspiring" },
    { name: "Won't You Be My Neighbor?", genre: "documentary", era: "2000s-2010s", length: "short", mood: "inspiring" },
    { name: "Free Solo", genre: "documentary", era: "2000s-2010s", length: "medium", mood: "intense" },
    { name: "My Octopus Teacher", genre: "documentary", era: "recent", length: "medium", mood: "thought-provoking" },
    { name: "Summer of Soul", genre: "documentary", era: "recent", length: "medium", mood: "inspiring" },
    { name: "American Symphony", genre: "documentary", era: "recent", length: "medium", mood: "inspiring" }
];

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initMovieDecisionPage();
});

function initMovieDecisionPage() {
    // Get form elements
    const decisionForm = document.getElementById('decision-form');
    const resetButton = document.getElementById('reset-button');
    
    // Add event listeners
    if (decisionForm) {
        decisionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            makeMovieDecision();
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
 * Makes a movie decision based on the selected criteria
 */
function makeMovieDecision() {
    // Get selected values
    const genre = document.getElementById('genre').value;
    const era = document.getElementById('era').value;
    const length = document.getElementById('length').value;
    const mood = document.getElementById('mood').value;
    
    // Create criteria object
    const criteria = {
        genre: genre,
        era: era,
        length: length,
        mood: mood
    };
    
    // Filter options based on criteria
    let filteredOptions = filterOptions(movieOptions, criteria);
    
    // If no options match the criteria, provide a general option
    if (filteredOptions.length === 0) {
        displayResult("No exact matches found! How about trying something new?");
        
        // Try with fewer criteria
        const relaxedCriteria = {};
        if (genre !== "any") relaxedCriteria.genre = genre;
        if (mood !== "any") relaxedCriteria.mood = mood;
        
        filteredOptions = filterOptions(movieOptions, relaxedCriteria);
        
        if (filteredOptions.length === 0) {
            // If still no matches, just pick a random option
            filteredOptions = movieOptions;
        }
    }
    
    // Make a random decision from filtered options
    const decision = makeRandomDecision(filteredOptions);
    
    // Display the result
    displayMovieResult(decision);
}

/**
 * Display the movie decision result
 * @param {Object} decision - The selected movie option
 */
function displayMovieResult(decision) {
    const resultElement = document.getElementById('result');
    const resultDetailsElement = document.getElementById('result-details');
    const resultContainer = document.querySelector('.result-container');
    
    if (resultElement && resultDetailsElement && resultContainer) {
        resultElement.textContent = decision.name;
        
        // Create details string
        let details = `A ${decision.mood} ${decision.genre} movie`;
        
        if (decision.era === "classic") {
            details += " from the classic era";
        } else if (decision.era === "80s-90s") {
            details += " from the 80s-90s";
        } else if (decision.era === "2000s-2010s") {
            details += " from the 2000s-2010s";
        } else if (decision.era === "recent") {
            details += " from recent years";
        }
        
        if (decision.length === "short") {
            details += ", under 90 minutes long.";
        } else if (decision.length === "medium") {
            details += ", between 90-120 minutes long.";
        } else if (decision.length === "long") {
            details += ", over 2 hours long.";
        }
        
        resultDetailsElement.textContent = details;
        resultContainer.style.display = 'block';
        
        // Scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}