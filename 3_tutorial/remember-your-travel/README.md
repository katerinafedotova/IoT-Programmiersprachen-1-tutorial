# Remember Your Travel. Task description.

Create a website using HTML and CSS. Use [this version](https://remeber-your-travel-kmeq6ptqq-katerinafedotova.vercel.app/) as an example of how your webpage is supposed to look in terms of structure and content. You are free to be creative and come up with a different website idea, try different fonts, colors, images.

## Important / Best practices
Please do development in the **separate branch** (e.g., ```develop```). If you would like to get code review, as soon as you are finished, create a Pull Request to ```main``` branch and add me ([katerinafedotova](https://github.com/katerinafedotova)) as your reviewer. DO NOT merge the Pull Request.

Make commits for **each particular feature/ fix** added (e.g. "Add HTML structure", "Add styling for header", "Fix display of background image") and NOT one final commit when everything is ready.

## Deadline
Wednesday 9.11.2022 EOD

## Useful
Format your code using:

- on Windows: ```Shift + Alt + F```
- on macOS: ```Shift + Option + F```
- on Linux: ```Ctrl + Shift + I```

## Website structure

Use semantic tags (```<header>, <main>, <section>, <footer>, <nav>```)

### SPOILERS BELOW!!! 
Below you will find the guideline about which HTML tags or CSS properties you're supposed to use. Feel free to first start coding on your own and then check it on the way/ at the end. 

<details>
  <summary>Click to see the guideline</summary>

### **Header**
Includes logo or ```<h1>```(e.g., Remember your travel) and ```<button>```(e.g., Add new destination)

*CSS properties to use*: <br>
```<header>```: padding, display (flex), justify-content, align-items 
```<h1>```: font-family (if needed) <br>
```<button>```: padding, backgound-color, border, border-radius, box-shadow, cursor

### **Main - Section**
**Intro text** consists of ```<p>``` and ```<h3>```. <br>
Then comes a **container** for 4 cards in form of a ```div```. <br>
Each **card** is also a ```div``` which includes an image ```<img>```, a title in form of ```<h3>```, additional info(in the example, "period of visit") in form of ```<small>``` and a description which is a simple ```<p>```.

*CSS properties to use*: <br>
```<section>```: margin, padding, text-align <br>
```<div class="travel-cards>```: display (flex), justify-content, flex-wrap, gap <br>
```<div class="travel-cards__card>```: max-width, display (flex), flex-direction align-items, background, box-shadow, color <br>
```<img class="card__image">```: width, height <br>
```<p class="card__description">```: margin, padding, text-align

### **Footer**
Includes **link to your github** and **year** on the left. <br>
Includes ```<nav>``` with  **2 links** (they do not bring anywhere) on the right.<br>
Has a background different from the image set in ```<body>```.

*CSS properties to use*: <br>
```<footer>```: display (flex), justify-content, align-items, padding, background-color, color <br>
```<ul>```: display (flex), gap, list-style-type <br>
```<a>```: text-decoration, color

### **Body styling**
Background should be set with ```background-image``` CSS property. Please also define here the prevailing font-family (use [google fonts](https://fonts.google.com/)) and color through your website. You can use some other font-families/ colors to special elements but most of them should use the one defined here.
 
*CSS properties to use*: <br>
margin, display (flex), flex-direction, justify-content, background-image, font-family, color

### **Hover**
All the interactions are done with [pseudo-class ```:hover```](https://www.w3schools.com/cssref/sel_hover.asp) and CSS properties ```transform```, ```background-color``` and ```text-shadow```.

</details>
