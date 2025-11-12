# Responsive Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases skills, projects, qualifications, and services in an elegant and professional layout.

# Live Dome

link - https://project-netfilxclone-e2750d.netlify.app/

## Table of Contents

- [Project Overview](#project-overview)
- [Business Problem](#business-problem)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Research Questions and Key Findings](#research-questions-and-key-findings)
- [Screenshots](#screenshots)
- [How to Run the Project](#how-to-run-the-project)
- [Customization](#customization)
- [Contact](#contact)

## Project Overview

This is a fully responsive portfolio website designed to showcase professional skills, projects, and experience. Built with modern web technologies, it features a clean design with smooth animations, dark/light theme toggle, and interactive elements that provide an engaging user experience.

## Business Problem

In today's digital age, professionals need an effective online presence to showcase their work and skills. This portfolio website solves the following challenges:

- **Professional Presentation**: Creates a polished, professional image for potential employers or clients
- **Accessibility**: Ensures content is accessible across all devices and screen sizes
- **User Engagement**: Provides interactive features and smooth animations to keep visitors engaged
- **Easy Contact**: Simplifies the process for potential clients or employers to get in touch
- **Portfolio Showcase**: Effectively displays projects and achievements in an organized manner

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **JavaScript** - Interactivity and dynamic content
- **SwiperJS** - Carousel/slider functionality
- **ScrollReveal** - Animation library for scroll effects
- **EmailJS** - Contact form handling
- **Remix Icons** - Icon library
- **Google Fonts** - Custom typography

## 📁 Project Structure

```
Responsive_Portfolio/
│
├── index.html
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── swiper-bundle.min.css
│   ├── js/
│   │   ├── main.js
│   │   ├── scrollreveal.min.js
│   │   └── swiper-bundle.min.js
│   └── img/
│       ├── profile.png
│       ├── project images
│       ├── skill icons
│       └── shape images
└── README.md
```

## 🌟 Key Features

- **Fully Responsive Design** - Works on all devices from mobile to desktop
- **Dark/Light Theme Toggle** - Switch between color modes
- **Smooth Scrolling Navigation** - Enhanced user experience
- **Animated Sections** - Reveal animations on scroll
- **Project Showcase** - Interactive carousel for projects
- **Testimonials Slider** - Client feedback display
- **Contact Form** - EmailJS integration for message sending
- **Skills Display** - Visual representation of technical abilities
- **Qualification Timeline** - Education and work experience
- **Service Offerings** - Highlighted professional services

## Research Questions and Key Findings

During the development of this portfolio website, several key research areas were explored:

### Research Questions

1. **How can we create a truly responsive design that works across all device sizes?**
   - Finding: Utilizing CSS Grid and Flexbox with mobile-first approach ensures optimal display on all screen sizes
   - Implementation: Media queries at strategic breakpoints (1024px) for seamless transitions

2. **What enhances user engagement on portfolio websites?**
   - Finding: Smooth scroll animations and interactive elements significantly improve user retention
   - Implementation: ScrollReveal.js for progressive content reveal and Swiper.js for interactive project showcases

3. **How important is dark mode for modern websites?**
   - Finding: Users increasingly prefer dark mode options for reduced eye strain and battery saving
   - Implementation: LocalStorage-based theme persistence with smooth CSS transitions

4. **What's the best way to handle contact forms without a backend?**
   - Finding: Third-party services like EmailJS provide reliable form handling without server requirements
   - Implementation: Client-side email service integration with form validation

### Key Findings

- **Performance**: Minimizing external dependencies and using minified libraries improves load times
- **Accessibility**: Semantic HTML and proper ARIA labels enhance usability for all users
- **User Experience**: Progressive disclosure of content through scroll animations creates engaging narratives
- **Maintenance**: Well-organized CSS variables make theme customization and updates straightforward

## 📷 Screenshots

![Portfolio Home Section](screenshot/Screenshot%202025-10-02%20192003.png)
*Home section with profile and introduction*

![Skills and Qualification Sections](screenshot/Screenshot%202025-10-02%20192024.png)
*Skills and qualification timeline*

![Projects and Contact Sections](screenshot/Screenshot%202025-10-02%20192043.png)
*Project showcase and contact form*

## ▶️ How to Run the Project

1. **Open the project directly**
   - Double-click on `index.html` to open in your default browser

2. **Alternative method using Live Server**
   - If you're using VS Code, install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## 🎨 Customization

To customize this portfolio for your own use:

1. **Replace personal information**
   - Edit the name, bio, and contact information in `index.html`
   - Update social media links in the header and footer

2. **Update images**
   - Replace profile picture in `assets/img/profile.png`
   - Add your own project images in the projects section

3. **Modify skills**
   - Update the skills section with your own expertise
   - Replace skill icons with your relevant technologies

4. **Customize colors**
   - Modify color variables in `assets/css/styles.css`
   - Look for the `:root` section to change the color scheme

## 📞 Contact

For any inquiries or feedback, please reach out through the contact form on the website or connect via social media.

---

© 2025 Vedant Ligade. All rights reserved.
