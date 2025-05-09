# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Desktop version

![](solutions/desktop_version.png)

#### Mobile version

![](solutions/mobile_version.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/news-homepage-DJPHHsOZPs)
- Live Site URL: [GitHub Page](https://anhvu1012.github.io/News-Homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS](https://sass-lang.com/)

### What I learned

I once again learned how to work with CSS Grid :D

```css
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  #hero-section {
    grid-area: 1 / 1 / 2 / 3;
  }

  #news-container {
    grid-area: 1 / 3 / 2 / 4;
  }

  #article-container {
    grid-area: 2 / 1 / 4 / 4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0;
    column-gap: 25px;
  }
}
```

## Author

- Frontend Mentor - [@anhvu1012](https://www.frontendmentor.io/profile/anhvu1012)
