# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
#### `Desktop` Design Preview
![](/screenshots/desktop-design-ratings.png)
![](/screenshots/desktop-design-thankyou.png)
###`Mobile` Design Preview
<p align="center">
<img height="667" width="375" src="/screenshots/mobile-design.png"/>
  </p>

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

While creating this project I learned how to center any object in CSS with the help of grid.

```css
body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: hsl(0, 0%, 0%);
}
```

I also learned how to apply grid to equally space the elements with in a parent.

```css
.ratings {
  display: grid;
  grid-template-columns: repeat(5, 7rem);
}
```

I also learned how to add media query for specific width.

```css
@media screen and (max-width: 375px) {
  /*content specific for this media query*/
}
```
