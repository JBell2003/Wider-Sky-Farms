# Wider Sky Farms Website

A clean, professional website for Wider Sky Farms, showcasing their organic produce and farm information.

## Features

- Responsive design that works on desktop and mobile devices
- Modern, clean interface with a warm, natural color palette
- Easy navigation with smooth scrolling
- Product showcase section
- About section with farm information
- Customer reviews section with Google Reviews integration
- FAQ section
- Contact form and location information
- Google Maps integration

## Setup

1. Clone this repository to your local machine
2. Ensure you have the following images in the root directory:
   - `img.jpg` - Potato products image
   - `img2.jpg` - Beets and carrots image
   - `img3.jpg` - About section farm image
   - `img4.jpg` - Hero section background image

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript functionality
├── img.jpg         # Potato products image
├── img2.jpg        # Beets and carrots image
├── img3.jpg        # About section farm image
├── img4.jpg        # Hero section background image
└── README.md       # This file
```

## Usage

Simply open `index.html` in a web browser to view the website. For development:

1. Use a local development server (like Live Server in VS Code) to serve the files
2. Make changes to the HTML, CSS, or JavaScript files as needed
3. The page will automatically reload with your changes

## Customization

### Colors

The color scheme can be modified in the `styles.css` file by updating the CSS variables in the `:root` selector:

```css
:root {
    --color-primary: #4a6741;    /* Earthy green */
    --color-secondary: #8b5e3c;  /* Warm brown */
    --color-accent: #d4a373;     /* Golden wheat */
    --color-background: #fefae0; /* Light cream */
    --color-text: #2f3e46;       /* Dark slate */
}
```

### Content

Update the content in `index.html` to modify:
- Product information
- About section text
- FAQ questions and answers
- Contact information
- Review quotes

### Images

Replace the image files with your own while maintaining the same filenames:
- `img.jpg` - Potato products (recommended size: 800x600px)
- `img2.jpg` - Beets and carrots (recommended size: 800x600px)
- `img3.jpg` - About section (recommended size: 1200x800px)
- `img4.jpg` - Hero background (recommended size: 1920x1080px)

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Form

The contact form currently logs submissions to the console. To make it functional:
1. Set up a server to handle form submissions
2. Update the form submission code in `script.js`
3. Add proper form validation and error handling

## License

This project is licensed under the MIT License - see the LICENSE file for details. 