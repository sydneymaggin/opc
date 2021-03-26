const recipe = {
  "@type": "Recipe",
  "author": "Recipe from Delish.com",
  "cookTime": "15M",
  "datePublished": "07-06-2020",
  "description": "It's all about the crust. Choose a hearty bread, butter it up, and shred your favorite cheddar for the best grilled cheese ever: crispy-crunchy on the outside, melty, cheddar middle, and the world's most impressive cheese pull.",
  "recipeIngredient": [
    "2 1/2 tbsp softened butter",
    "2 slices sourdough bread",
    "1 cup shredded cheddar"
],
"name": "The Best Grilled Cheese Recipe",
"nutrition": {

},
"prepTime": "Prep Time: 15 minutes",
"instructions": "Spread 1 tablespoon butter on one side of each slice of bread. With butter side down, top each slice of bread with about ½ cup cheddar. In a skillet over medium heat, melt 1 tablespoon butter. Add two slices of bread, butter side down. Cook until bread is golden and cheese is starting to melt, about 2 minutes. Flip one piece of bread on top of the other and continue to cook until cheese is melty, about 30 seconds more. Repeat for the second sandwich, wiping skillet clean if necessary. ",
"recipeYield": "1 sandwich",
}


const titleElement = document.getElementById("title");

titleElement.innerText = recipe.name;

document.getElementById("description").innerText = recipe.description;

document.getElementById("author").innerText = recipe.author;

const instructionElement  = document.getElementById("instructions");

instructionElement.innerText = recipe.instructions;

const timeElement = document.getElementById("time");

timeElement.innerText = recipe.prepTime;


const ingredientElement = document.getElementById("ingredients");

ingredientElement.innerText = recipe.recipeIngredient;

