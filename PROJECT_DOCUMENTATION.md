# Portfolio Project Documentation

## Project Overview
This project is a modern, responsive personal portfolio website built to showcase my skills, projects, and professional background. It is designed with a focus on clean aesthetics, interactivity, and mobile responsiveness.

---

## Technical Stack
- **HTML5**: Semantic structure for accessibility and SEO.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling.
- **Custom CSS**: For specialized animations (hover effects, scroll reveal) and glassmorphism effects.
- **JavaScript (ES6+)**: Vanilla JS for interactivity (mobile menu, custom cursor, smooth scrolling) without external heavy libraries.

---

## File Structure Explanation
When explaining the project to a recruiter, reference these three core files:

### 1. `portfolio.html` (The Structure)
- This is the backbone of the website.
- It uses **Semantic HTML tags** (`<header>`, `<main>`, `<section>`, `<footer>`) which is important for accessibility and search engine optimization (SEO).
- The layout is divided into clear sections:
  - **Header**: Navigation bar with a mobile-responsive menu.
  - **Hero**: Introduction area with a call-to-action button.
  - **About**: Personal introduction with a unique layout.
  - **Skills**: A grid layout displaying technical competencies.
  - **Projects**: Showcase of work with descriptions and links.
  - **Contact**: Form and social media links.

### 2. `portfolie.css` (The Styling)
- While Tailwind CSS handles 90% of the styling, this custom file handles the unique "wow" factors.
- **Glassmorphism**: The `.glass-effect` class creates a modern, frosted-glass look used on cards.
- **Animations**: Contains keyframes for the scroll reveal effect (`.reveal`) and custom cursor animations.
- **Custom Cursor**: Hides the default mouse cursor and styles the custom dot/ring follower.

### 3. `portfolie.js` (The Logic)
- This file handles all user interactions.
- **Mobile Menu**: Toggles the visibility of the navigation menu on small screens.
- **Scroll Reveal**: Uses the `IntersectionObserver` API (a modern browser feature) to detect when elements enter the screen and trigger the fade-in animation. This is better for performance than listening to scroll events directly.
- **Custom Cursor**: Tracks mouse movement (`mousemove` event) and updates the position of the custom cursor element smoothly using `requestAnimationFrame` for high performance.
- **Active Link Highlighting**: Highlights the current section in the navigation bar as the user scrolls.

---

## Implementation Steps (How I Built It)

### Step 1: Planning and Structure (HTML)
I started by outlining the content. I used semantic tags to ensure the code is meaningful.
- **Why?** Semantic HTML improves accessibility for screen readers and helps search engines understand the content.

### Step 2: Styling with Tailwind (CSS)
I chose Tailwind CSS to speed up development and ensure consistency.
- **Responsive Design**: I used Tailwind's responsive prefixes (e.g., `md:flex`, `lg:grid-cols-4`) to ensure the site looks great on mobile, tablet, and desktop.
- **Theme Configuration**: I customized the colors (Brand Blue, Accent Violet) in the Tailwind config script to maintain a consistent visual identity.

### Step 3: Adding Advanced Visuals (Custom CSS)
To make the site stand out, I added custom touches.
- **Glassmorphism**: Added a backdrop-filter blur to create depth.
- **Animations**: Created smooth transitions for hover states on buttons and cards.

### Step 4: Adding Interactivity (JavaScript)
I implemented functionality using pure JavaScript (Vanilla JS) to keep the site lightweight and fast.
- **Performance**: I used `requestAnimationFrame` for the cursor and `IntersectionObserver` for scroll animations to ensure the site runs at 60fps without lag.

---


