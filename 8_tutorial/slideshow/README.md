# Slideshow exercise

## Goal
Practice DOM manipulation, event listeners, conditionals and functions.

## Time
40 minutes

## Preparation
Copy this folder to your local PC.

## Description
You are going to implement a slideshow. You are given 6 images (check the ```assets``` folder), ```index.html``` with the basic structure of the web page, ```styles.css``` with necessary styles and ```index.js``` where you'll write your code.

The slideshow should work as follows: when you click on the ```Next``` button, the next image appears. When you click on the ```Prev``` button, the previous image shows up. The slideshow should be endless: as soon as you reach the last image, you should go to the first one and vice versa.

## Algorithm
1. Create an array of the paths to your images.
2. Select ```Prev``` and ```Next``` buttons with ```document.getElementById``` and the image with ```document.querySelector```.
3. You need to keep track of the current image: create a global variable ```currentImage``` for it and assign to it the initial value of ```0```. The value of this variable is going to change, so be careful when choosing between ```const``` and ```let```. 
4. Please create 2 functions (for now without any content): 
- the one to go to the next image (further (1))
- the second one is to go to the prev image (further (2))
5. In the function (1) you need to update the source of the image to the next one in your array: use ``++`` operator with ```currentImage```. To do this assign the new value to the ```src``` of the image (example available here: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_src2). 
6. In the function (2) you need to update the source of the image to the previous one in your array: use ``--`` operator  with ```currentImage```. To do this also assign the new value to the ```src``` of the image (example available here: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_src2). 
7. Add event listeners to ```Prev``` and ```Next``` buttons and pass to them the functions you just created.
8. Go to the browser and test the application. You will see that when you reach the last image and press ```Next``` button in the ```Console``` you'll get a ```404 error - Not found```, as you reached the end of the array. The same will happen if you reach the first image and press ```Prev``` button. 
9. To solve these problems you need to add conditionals to:
- function (1): if the ```currentImage``` equals to the length of images paths array - 1, assign to it the initial value of ```currentImage```: ```-1```.
- function (2): if the ```currentImage``` equals to 0, assign to it the value of ```currentImage```.
