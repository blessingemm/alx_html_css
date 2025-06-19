# Headphones Landing Page

This project is part of the **ALX HTML & CSS Curriculum**, aimed at practicing HTML, CSS, Accessibility, and Responsive Web Design without relying on any external libraries or JavaScript.

The goal is to **recreate a professional landing page design** using raw HTML and CSS to closely match the provided Figma design by UI/UX designer **Nicolas Philippot**.

---


## Project Structure
headphones/
├── index.html
├── styles.css
├── images/ # All images used in the design
└── README.md


---

## Objective

To implement a fully functional and responsive landing page that matches the provided Figma design, without the use of:
- External CSS libraries (e.g., Bootstrap)
- JavaScript

---

## What I Learned

- Building a layout entirely from scratch
- Implementing **responsive design** with media queries
- Respecting **accessibility** standards (alt tags, semantic HTML, color contrast)
- Using **custom fonts** and properly importing them with `@font-face`
- Working with **Figma** to extract design values like color, spacing, and typography

---

## Design Reference

- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)
- [Spin-Cycle-OT](https://www.fontsaddict.com/font/spin-cycle-ot.html)

---

## Features

- Fully responsive layout
  - Mobile version triggers at screen width ≤ **480px**
- Accessibility features:
  - Semantic tags (header, nav, main, section, footer)
  - Alt text for all images
- Interactive styles:
  - **Links**: `hover` and `active` color → `#FF6565`
  - **Buttons**: `hover` and `active` state → `opacity: 0.9`
- Content is constrained to a **max-width of 1000px** and centered

---

## Responsive Design

- Desktop layout follows grid and flexbox structure from the Figma file
- Mobile layout stacks and simplifies content for smaller screens (≤ 480px)

---

## Accessibility Considerations

- Proper heading hierarchy (`<h1>` → `<h3>`)
- Keyboard-focus styles where applicable
- Descriptive `alt` attributes for images
- Sufficient color contrast between background and text

---

## Restrictions

- ❌ No external CSS frameworks (Bootstrap, Tailwind, etc.)
- ❌ No JavaScript
- ✅ Pure HTML & CSS

---
## 🙏 Acknowledgements

- **Design** by Nicolas Philippot *(UI/UX Designer)*  
- **Project** provided by the **[ALX Software Engineering Program](https://www.alxafrica.com/)**  

---

## 📧 Contact

If you’d like to collaborate or provide feedback, feel free to reach out!
