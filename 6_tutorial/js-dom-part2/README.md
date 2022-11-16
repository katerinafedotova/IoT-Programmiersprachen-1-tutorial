# Toggle cards' CSS class on click
## Task overview
You need to create a function that will toggle CSS class ```card--dark``` and call it when you click on the ```Toggle class``` button.

## Time
25 minutes

## Preparation
1. Change your current styles.css with the updated ```styles.css``` inside this folder.

2. In your index.html create a button with ```id="toggle-btn"``` and text ```Toggle class``` (use 2 other buttons as examples).

3. DO NOT LOOK at index.js :D

## The built-in functions you will need:
```element.hasChildNodes```
```document.querySelectorAll```
```element.classList.toggle('some-class')```

<details>
<summary> HINTS </summary>
Inside the function:

- check if ```cardsContainer``` has child elements: use ```hasChildNodes``` function (example available in our ```removeCards``` function)

- create a variable ```cards``` and assign to it the value of all the elements with the class ```.card```. Use ```document.querySelectorAll```: https://www.w3schools.com/jsref/met_document_queryselectorall.asp. This built-in function will select all the elements on the web page with the provided class, it will return the array of HTML Elements(Nodes): ```console.log(cards)``` to see how it looks like. 

- Loop through your ```cards```, inside the loop use the function ```element.classList.toggle('some-class')``` where ```element``` is your ```cards[i]``` and ```some-class``` is ```card--dark```. 

Besides it: 
- Add event listener to your ```toggleBtn``` for the ```click``` event and use your ```toggleClass``` function as a 2nd argument.
</details>
