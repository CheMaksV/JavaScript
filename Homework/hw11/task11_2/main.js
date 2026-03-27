// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

let recipesDiv = document.createElement('div');
recipesDiv.classList.add('recipes');
fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then((recipesObject) => {
        let {recipes} = recipesObject;
        for (const recipe of recipes) {
            let recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            let recipeInfo = document.createElement('p');
            recipeInfo.classList.add('recipe-info');
            recipeInfo.innerText = `
                      userId: ${recipe.userId}
                      name: ${recipe.name}
                      prepTimeMinutes: ${recipe.prepTimeMinutes}
                      cookTimeMinutes: ${recipe.cookTimeMinutes}
                      servings: ${recipe.servings}
                      difficulty: ${recipe.difficulty}
                      cuisine: ${recipe.cuisine}
                      caloriesPerServing: ${recipe.caloriesPerServing}
                      rating: ${recipe.rating}
                      reviewCount: ${recipe.reviewCount}`;
            let recipeImg = document.createElement('img');
            recipeImg.src = recipe.image;
            recipeImg.style.width = '400px';

            let typeMealH3 = document.createElement('h3');
            typeMealH3.classList.add('mealTypeTitle');
            typeMealH3.innerText = 'mealType:';
            let typeMealUl = document.createElement('ul');
            typeMealUl.classList.add('mealType');
            for (const typeMeal of recipe.mealType) {
                let typeMealLi = document.createElement('li');
                let typeMealInfo = document.createElement('p');
                typeMealInfo.innerText = typeMeal;
                typeMealLi.appendChild(typeMealInfo)
                typeMealUl.appendChild(typeMealLi);
            }

            let ingredientsH3 = document.createElement('h3');
            ingredientsH3.classList.add('ingredientsTitle');
            ingredientsH3.innerText = 'Ingredients:';
            let ingredientsOl = document.createElement('ol');
            ingredientsOl.classList.add('ingredients');
            for (const ingredient of recipe.ingredients) {
                let ingredientLi = document.createElement('li');
                ingredientLi.classList.add('ingredient');
                let ingredientInfo = document.createElement('p');
                ingredientInfo.innerText = ingredient;
                ingredientLi.appendChild(ingredientInfo)
                ingredientsOl.appendChild(ingredientLi);
            }

            let instructionsH3 = document.createElement('h3');
            instructionsH3.classList.add('instructionsTitle');
            instructionsH3.innerText = 'Instructions:';
            let instructionsUl = document.createElement('ul');
            instructionsUl.classList.add('instructions');
            for (const instruction of recipe.instructions) {
                let instructionLi = document.createElement('li');
                let instructionInfo = document.createElement('p');
                instructionInfo.innerText = instruction;
                instructionLi.appendChild(instructionInfo)
                instructionsUl.appendChild(instructionLi);
            }


            recipeDiv.append(recipeInfo, typeMealH3, typeMealUl, recipeImg, ingredientsH3, ingredientsOl, instructionsH3, instructionsUl);
            recipesDiv.appendChild(recipeDiv);
        }
    });

document.body.appendChild(recipesDiv);
