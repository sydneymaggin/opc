const recipe = {
  "@context": "https://schema.org",
  "@type": "Recipe",
  "author": "Recipe from Delish.com",
  "cookTime": "15M",
  "datePublished": "07-06-2020",
  "description": "It's all about the crust. Choose a hearty bread, butter it up, and shred your favorite cheddar for the best grilled cheese ever: crispy-crunchy on the outside, melty, cheddar middle, and the world's most impressive cheese pull.",
  "image": "bananabread.jpg",
  "recipeIngredient": [
    "3 or 4 ripe bananas, smashed",
    "1 egg",
    "3/4 cup of sugar"
  ],
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/Comment",
    "userInteractionCount": "140"
  },
  "name": "Mom's World Famous Banana Bread",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "240 calories",
    "fatContent": "9 grams fat"
  },
  "prepTime": "PT15M",
  "recipeInstructions": "Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.",
  "recipeYield": "1 loaf",
  "suitableForDiet": "https://schema.org/LowFatDiet"
}

const titleElement = document.getElementById("title");

titleElement.innerText = recipe.name;

document.getElementById("description").innerText = recipe.description;

document.getElementById("author").innerText = recipe.author;