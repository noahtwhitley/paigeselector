// Food decision database
const foodOptions = [
    // breakfast 
    { name: "Waffles", mealType: "breakfast", cuisine: "american", location: ["cook", "eat-out"], price: ["budget", "moderate"], description: "I do not need this one in here girl. You love with refridgerated syrup & cookie butter YAY" },
    { name: "Pancakes", mealType: "breakfast", cuisine: "american", location: ["cook", "eat-out"], price: ["budget", "moderate"], description: "I know you like waffle more but maybe you want to switch up. Original pancake house was so good when we went that one time" },
    { name: "Avocado Toast", mealType: "breakfast", cuisine: "american", location: ["cook", "eat-out"], price: ["budget", "moderate"], description: "Queen makes a MEAN avacado toast. Whenever I eat I think about the one time you made it for me to eat on the way to school" },
    { name: "IHOP", mealType: "breakfast", cuisine: "american", location: "eat-out", price: "moderate", description: "IHOP is awesome. We should go more. They had minions at one point & you love minions" },
    { name: "Breakfast Burrito", mealType: "breakfast", cuisine: "mexican", location: ["takeout", "cook", "delivery"], price: ["budget", "moderate"], description: "Either the ones I make you that are awesome get them takeout could be delish" },
    { name: "Maverik Egg & Cheese Bundle & Diet Coke", mealType: "breakfast", cuisine: "american", location: ["takeout", "eat-out"], price: ["budget"], description: "Iconic paige breakfast YUUP" },
    { name: "Maverik Poppyseed Muffin & Diet Coke", mealType: "breakfast", cuisine: "american", location: ["takeout", "eat-out"], price: ["budget"], description: "I remember when you put me on this & I haven't been the same since. Diet coke everytime we go into maverik obvi" },
    { name: "Maverik Maple Bar & Diet Coke", mealType: "breakfast", cuisine: "american", location: ["takeout", "eat-out"], price: ["budget"], description: "The standard. I remember when we were both obsessed with this & would have like everyday of the week" },
    { name: "Scrambled Eggs", mealType: "breakfast", cuisine: "american", location: "cook", price: "budget", description: "Scrambled eggs yay! always with ketchup" },
    { name: "Chick-Fil-A Breakfast Burrito", mealType: "breakfast", cuisine: "american", location: ["takeout", "eat-out"], price: ["moderate"], description: "LOVE. Whenever we have the time is def the go-to. Reminds me of working together" },
    { name: "Smoothie Bowl", mealType: "breakfast", cuisine: "american", location: ["cook", "takeout"], price: "budget", description: "We must make this be a thing. Smoothie bowl so good & so many different flavor" },
    { name: "Einstein Bagels", mealType: "breakfast", cuisine: "american", location: "takeout", price: "moderate", description: "This is what I picture when I think of breakfast with paige. Reminds me of spring/summer & the one time we saw maddi & her boofed man" },
    { name: "Kneaders Breakfast", mealType: "breakfast", cuisine: "american", location: ["eat-out", "takeout"], price: "moderate", description: "Kneaders breakfast is SO GOOD. They have all you can eat french toast that is SO GOOD holy" },
    { name: "French Toast", mealType: "breakfast", cuisine: "american", location: ["cook", "eat-out"], price: ["budget", "moderate"], description: "French toast is SO good. French toast sticks too tbh. Ask me anytime & I will make some" },
    { name: "Granola & Greek Yogurt", mealType: "breakfast", cuisine: "american", location: "cook", price: "budget", description: "I love making this for us. like the most filling ever & taste so good" },
    { name: "Oatmeal", mealType: "breakfast", cuisine: "american", location: "cook", price: "budget", description: "Honestly if you add the right stuff or buy the right packs oatmeal is so good. lmk & ill put you on" },

    // lunch 
    { name: "Ham & Cheese Sandwich", mealType: "lunch", cuisine: "american", location: "cook", price: "moderate", description: "the classic paige lunch remind me of your first semester at UVU when it was your fav ever" },
    { name: "Peanut Butter & Jelly Sandwich", mealType: "lunch", cuisine: "american", location: "cook", price: "moderate", description: "Your mom's fav! super easy & classic" },
    { name: "Salad", mealType: "lunch", cuisine: "american", location: ["cook", "takeout", "eat-out"], price: ["budget", "moderate"], description: "get one of those baggies from the store for them, or treat yourself with a ceaser" },
    { name: "Maverik Pizza & Diet Coke", mealType: "lunch", cuisine: "american", location: "takeout", price: "budget", description: "Girl LOVE this & I need to try. Everytime we go into Maverik we must get Diet Coke" },
    { name: "Paige Special Chicken & Rice", mealType: "lunch", cuisine: "american", location: "cook", price: "budget", description: "You've only made once but it was REAL good. Super easy to pack & take with you" },
    
    //lunch & dinner
    { name: "Firehouse Subs", mealType: ["lunch", "dinner"], cuisine: "american", location: ["eat-out", "takeout"], price: "moderate", description: "your FAVE. pickles included you LOVE" },
    { name: "Jimmy Johns", mealType: ["lunch", "dinner"], cuisine: "american", location: ["eat-out", "takeout"], price: "moderate", description: "Remember when we went to Jimmy Johns like everyday? It always reminds me of your Pickle & Salt & Vinegar Chip combo" },
    { name: "Lunchable", mealType: "lunch", cuisine: "american", location: ["cook", "takeout"], price: "budget", description: "Get the Pizza or Cheese & Cracker one, or honestly all of them are good. Always reminds me of your 18th Birthday & Paddle Boarding out & eating them" },
    { name: "In-N-Out Grilled Cheese", mealType: ["lunch", "dinner"], cuisine: "american", location: ["eat-out", "takeout"], price: "moderate", description: "CLASSIC. get with fries or animal fries & a MASSIVE diet coke" },
    { name: "Five Guys Grilled Cheese", mealType: ["lunch", "dinner"], cuisine: "american", location: ["eat-out", "takeout"], price: "moderate", description: "Girl want to eat Five guys :S Complete with your freak dip" },
    { name: "PIZZAAA", mealType: ["lunch", "dinner"], cuisine: "european", location: ["delivery", "takeout", "eat-out", "cook"], price: ["budget", "moderate", "expensive"], description: "PIZAAAA. Our fav food & for good reason. Get from MOD or Pizzeria Limone or Dominos or Little Ceasers or ANYWHERE. Also can make a mean homemade one" },
    { name: "Taco bell", mealType: ["lunch", "dinner"], cuisine: "mexican", location: ["takeout", "eat-out"], price: ["budget"], description: "TACO BELLLL. Get a Crunchwrap & Baja Blast & you're set" },
    { name: "Costa Vida", mealType: ["lunch", "dinner"], cuisine: "mexican", location: ["takeout", "eat-out"], price: "moderate", description: "Get a Burrito or Salad or Nachos or Quesidilla with Cinnamon Tortilla OBVI" },
    { name: "Cafe Rio", mealType: ["lunch", "dinner"], cuisine: "mexican", location: ["takeout", "eat-out"], price: "moderate", description: "Get a Burrito or Salad or Nachos or Quesidilla. INVITE ME" },
    { name: "Ramen", mealType: ["lunch", "dinner"], cuisine: "east asian", location: ["eat-out", "cook", "takeout"], price: ["budget", "moderate"], description: "Either make it at home with the packets your mom buys or go get it fancy. Remember when we went to ramen when we first started dating?" },
    { name: "Chipotle", mealType: ["lunch", "dinner"], cuisine: "mexican", location: ["takeout", "eat-out"], price: "moderate", description: "Two meals in one if you get a Burrito or Bowl" },
    { name: "Raising Canes", mealType: ["lunch", "dinner"], cuisine: "american", location: ["takeout", "eat-out"], price: "moderate", description: "Canes the GOAT. Get this & some hole & you are SET" },
    { name: "Poke Bowl", mealType: "lunch", cuisine: "east asian", location: ["takeout", "eat-out"], price: "moderate", description: "I NEED to put you on to this one place that does curry poke bowls. lmk & I will take you" },
    { name: "Chicken Place at Mountain View Village", mealType: ["lunch", "dinner"], cuisine: "american", location: ["takeout", "eat-out"], price: "moderate", description: "I can't remember the name but this place so good. We used to go ALL THE TIME" },
    { name: "Tacos", mealType: ["lunch", "dinner"], cuisine: "mexican", location: ["takeout", "eat-out"], price: ["budget", "moderate"], description: "So many options for taco. Smoked Taco, Jurrasic Taco, or even a Food Truck would be delish" },
    { name: "Greek!", mealType: ["lunch", "dinner"], cuisine: "mediterranean", location: ["takeout", "eat-out"], price: "moderate", description: "I love Greek Food. Baaaaa" },
    { name: "Kneaders", mealType: ["lunch", "dinner"], cuisine: "american", location: ["takeout", "eat-out"], price: "moderate", description: "KNEADERS YUUUU. Get Paige Sandwich & Soup or Soup & Bread Bowl" },
    { name: "Cupbop!", mealType: ["lunch", "dinner"], cuisine: "east asian", location: ["takeout", "eat-out"], price: "moderate", description: "Me & your Mom fav. Invite one of us if you decide on Cupbop" },

    //dinner
    { name: "Homemade Pasta", mealType: "dinner", cuisine: "european", location: "cook", price: ["budget", "moderate", "expensive"], description: "I have not tried to make Fancy Pasta from scratch but Buttered Noodles your FAV" },
    { name: "Steak", mealType: "dinner", cuisine: "american", location: ["cook", "eat-out"], price: ["moderate", "expensive"], description: "YAY Steak! Either have me cook for you or go to Texas Roadhouse YUM" },
    { name: "BRIO", mealType: "dinner", cuisine: "european", location: "eat-out", price: "expensive", description: "THE fancy dinner spot. idc who came here before us this is our spot" },
    { name: "Curry", mealType: "dinner", cuisine: "south asian", location: ["delivery", "takeout", "eat-out", "cook"], price: "moderate", description: "CURRY YUUUU. So many delish places(Thai Land) or we can make from Trader Joe's" },
    { name: "Chinese Takeout", mealType: "dinner", cuisine: "east asian", location: ["delivery", "takeout"], price: "budget", description: "Classic food that is in movies. There are a ton of places around us that would be so good" },
    { name: "Homemade Naan Pizza", mealType: ["lunch", "dinner"], cuisine: "european", location: "cook", price: "budget", description: "Naan pizza yummmmmmmm" },
    { name: "La Fountain", mealType: "dinner", cuisine: "mexican", location: "eat-out", price: "expensive", description: "A Paige fav! Always reminds me of your graduation" },
    { name: "Vietnamese Pho", mealType: "dinner", cuisine: "east asian", location: ["eat-out", "takeout", "delivery"], price: "moderate", description: "MY FAV. We need to make this a go-to PLEASEEE" },
    { name: "WINGSTOP", mealType: "dinner", cuisine: "american", location: ["eat-out", "takeout"], price: "moderate", description: "YUSSSSS. WINGSTOP. Hot Honey & Lemon Peper the GOAT" },
    { name: "BDUBS", mealType: "dinner", cuisine: "american", location: ["eat-out", "takeout"], price: ["moderate", "expensive"], description: "BUFFALO WILD WINGS! Asian Zing is so good. Go on Tuesday for 50% off Classic Wings & Thursday for 50% off Boneless" },
    { name: "Noodles & Co", mealType: "dinner", cuisine: "american", location: ["eat-out", "takeout"], price: "moderate", description: "NOODLESSS. Always get a Rice Crispy too" },  
    
    // Snacks & Desserts
    { name: "Tzatziki & Naan Bread", mealType: "snack/dessert", cuisine: "mediterranean", location: "cook", price: "budget", description: "YAY. Always reminds me of dinner at your house" },
    { name: "Chips & Salsa/Guac", mealType: "snack/dessert", cuisine: "mexican", location: "cook", price: "budget", description: "YUUUUU. We make mean salsa & Guac. Awesome snack" },
    { name: "Fruit", mealType: "snack/dessert", cuisine: "any", location: "cook", price: "budget", description: "Strawberries, Grapes, Apples, Raspberries, Mango, Peach & Cream,." },
    { name: "Yogurt", mealType: ["snack/dessert", "breakfast"], cuisine: "any", location: "cook", price: "budget", description: "Gurt: Yo" },
    { name: "Pretzel Bites", mealType: "snack/dessert", cuisine: "american", location: "takeout", price: ["budget", "moderate"], description: "ICON. From Swig or Auntie Annes or Thirst" },
    { name: "Hummus & Carrots", mealType: "snack/dessert", cuisine: "mediterranean", location: "cook", price: "budget", description: "Awesome snack for like healthyish vibe" },
    { name: "Wendy's Fries & Frosty", mealType: "snack/dessert", cuisine: "american", location: "takeout", price: "budget", description: "CLASSIC treat" },
    { name: "Sonic Pickle Fries", mealType: "snack/dessert", cuisine: "american", location: "takeout", price: ["budget", "moderate"], description: "YUM. Paige FAV FAV" },
    { name: "Carrots & Ranch", mealType: "snack/dessert", cuisine: "american", location: "cook", price: "budget", description: "You would drink ranch if you could" },
    { name: "Charcuterie Board Things", mealType: "snack/dessert", cuisine: "any", location: "cook", price: "moderate", description: "YUMMMMMM. Cheese & crackers & bread & all things awesome" },
    { name: "Cookie Butter Ice Cream", mealType: "snack/dessert", cuisine: "american", location: "cook", price: "budget", description: "YOUR FAV. Always with arcane" },
    { name: "Beignets", mealType: "snack/dessert", cuisine: "any", location: ["cook", "takeout"], price: ["budget", "moderate"], description: "your FAV. idk how much you will want after you're around then all the time but for now you LOVE" },
    { name: "Mochi", mealType: "snack/dessert", cuisine: "east asian", location: ["takeout", "eat-out"], price: "moderate", description: "Actually awesome if you get the right stuff" },
    { name: "Pumkin Chocolate Chip Cookies", mealType: "snack/dessert", cuisine: "american", location: ["cook", "takeout"], price: "budget", description: "The GOAT cookie. Both of our fav" },
    { name: "Little Sugar Cookie Dough With Drawing ", mealType: "snack/dessert", cuisine: "any", location: ["cook", "takeout"], price: "budget", description: "I don't remember what they're called but they are so so good" },
    { name: "Gelato", mealType: "snack/dessert", cuisine: "european", location: ["eat-out", "takeout"], price: "moderate", description: "SO good. I love the place down in SLC but we probs have some good ones around us" },
    { name: "Chocolate Fondue", mealType: "snack/dessert", cuisine: "european", location: ["cook", "eat-out"], price: ["moderate", "expensive"], description: "We NEED to do this it would be so awesome" },
    
    // Drink options
    { name: "Swig Texas Tab with Diet Coke", mealType: "drink", cuisine: "any", location: "takeout", price: ["budget", "moderate"], description: "THE Paige drink. Got me hooked also :p" },
    { name: "Swig Hula Girl", mealType: "drink", cuisine: "any", location: "takeout", price: ["budget", "moderate"], description: "THE Paige alternitive drink. If you in the mood to go classic but switch it up a bit" },
    { name: "Roxberry Pina Colada Smoothie", mealType: "drink", cuisine: "any", location: "takeout", price: "moderate", description: "SO GOOD. Worth the one million dollar price tag" },
    { name: "Mavvy Diet Coke :P", mealType: "drink", cuisine: "any", location: "takeout", price: "budget", description: "We have consumed an ungodly amount of these. SO good though" },
    { name: "Homemade Swig Texas Tab with Diet Coke", mealType: "drink", cuisine: "any", location: "cook", price: "budget", description: "THE Paige drink. This time we try to save money & make at home. One million coconut creamer pls" },
    { name: "Save SodaBoba", mealType: "drink", cuisine: "any", location: "takeout", price: "budget", description: "Is the Boba worth it O.O" },
    { name: "Alchohol", mealType: "drink", cuisine: "any", location: ["eat-out", "cook"], price: ["moderate", "expensive"], description: "AHAHAHHAHAHAHAHAHHAHAHAHA" },
    { name: "Chai!", mealType: "drink", cuisine: "any", location: ["takeout", "cook"], price: "moderate", description: "Get from Dutch or Make it! Needs coconut creamer" },
    { name: "Hot Chocolate", mealType: "drink", cuisine: "any", location: ["cook", "takeout"], price: "budget", description: "The GOAT for when it cold out. make it delish with mix in stuff" },
    { name: "Paige Juice", mealType: "drink", cuisine: "any", location:  "takeout", price: ["budget", "moderate"], description: "TBH idek what flavor it is but it is real good & your FAV" },
    { name: "Water!", mealType: "drink", cuisine: "any", location: "any", price: "budget", description: "Don't take this the wrong way but sometime water is needed. I'll fill it up for you" },
];

//initialize page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initFoodDecisionPage();
});

function initFoodDecisionPage() {
    //get form elements
    const decisionForm = document.getElementById('decision-form');
    const resetButton = document.getElementById('reset-button');
    
    //add event listeners
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

//makes a food decision based on the selected criteria
function makeFoodDecision() {
    //get selected values
    const mealType = document.getElementById('meal-type').value;
    const cuisine = document.getElementById('cuisine').value;
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    
    //create criteria object
    const criteria = {
        mealType: mealType,
        cuisine: cuisine,
        location: location,
        price: price
    };
    
    //filter options based on criteria but prevent duplicates
    let filteredOptions = [];
    
    //first pass: find all options that match at least one of the required criteria values
    for (const option of foodOptions) {
        let isMatch = true;
        
        for (const key in criteria) {
            //skip if criteria is not set or is set to "any"
            if (!criteria[key] || criteria[key] === "any") {
                continue;
            }
            
            let optionMatches = false;
            
            //handle array values in the option
            if (Array.isArray(option[key])) {
                //if the option has this key as an array, check if the criteria value is in the array
                if (option[key].includes(criteria[key])) {
                    optionMatches = true;
                }
            } else {
                //if the option value matches the criteria
                if (option[key] === criteria[key]) {
                    optionMatches = true;
                }
            }
            
            //if this criteria doesn't match, this option is not a match
            if (!optionMatches) {
                isMatch = false;
                break;
            }
        }
        
        if (isMatch) {
            filteredOptions.push(option);
        }
    }
    
    //if no options match the criteria, provide a general option
    if (filteredOptions.length === 0) {
        displayResult("No exact matches found! How about trying something different?");
        
        //try with fewer criteria
        const relaxedCriteria = {};
        if (mealType !== "any") relaxedCriteria.mealType = mealType;
        
        //re-run the match with relaxed criteria
        for (const option of foodOptions) {
            let isMatch = true;
            
            for (const key in relaxedCriteria) {
                let optionMatches = false;
                
                //handle array values in the option
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
            //if still no matches, just pick a random option
            filteredOptions = foodOptions;
        }
    }
    
    //make a random decision from filtered options
    const decision = makeRandomDecision(filteredOptions);
    
    //display the result
    displayFoodResult(decision);
}

/**
 * display the food decision result
 * @param {Object} decision - the selected food option
 */
function displayFoodResult(decision) {
    const resultElement = document.getElementById('result');
    const resultDetailsElement = document.getElementById('result-details');
    const resultContainer = document.querySelector('.result-container');
    
    if (resultElement && resultDetailsElement && resultContainer) {
        resultElement.textContent = decision.name;
        
        //use the custom description
        resultDetailsElement.textContent = decision.description;
        resultContainer.style.display = 'block';
        
        //scroll to the result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
}