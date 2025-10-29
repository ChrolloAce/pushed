# Miami Flooring & Tile Installation Blog

A modern, responsive blog page featuring 70 expert articles about flooring and tile installation in Miami. Designed to be embeddable on any website with a sticky navigation header, hero section with featured posts carousel, and a responsive blog grid layout.

## Features

### 🎯 Core Features
- **Sticky Navigation Header** - Always accessible navigation bar with dropdown menus
- **Hero Section** - Auto-rotating featured posts carousel with manual navigation
- **Responsive Blog Grid** - 3-column layout that adapts to mobile devices
- **Load More Functionality** - Dynamic content loading with smooth animations
- **Fully Embeddable** - Can be embedded as an iframe with responsive height

### 🎨 Design Highlights
- Clean, modern UI with professional typography
- Smooth hover effects and transitions
- Mobile-first responsive design
- Optimized for readability and user experience

## Project Structure

```
bloggged/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── scripts.js      # Interactive functionality (OOP approach)
└── README.md       # Documentation
```

## Quick Start

### Option 1: Open Locally
1. Open `index.html` in your web browser
2. No build process or dependencies required!

### Option 2: Local Server
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (with npx)
npx serve

# Then visit: http://localhost:8000
```

## Embedding Instructions

### Basic Iframe Embed

Add this code to any webpage where you want to embed the blog:

```html
<iframe 
    id="blog-embed"
    src="path/to/index.html" 
    width="100%" 
    style="border: none; min-height: 800px;"
    title="Blog">
</iframe>
```

### Responsive Iframe with Auto Height (Recommended)

For a truly responsive embed that adjusts height automatically and eliminates double scrollbars:

```html
<!-- Add this iframe to your page -->
<iframe 
    id="blog-embed"
    src="path/to/index.html" 
    width="100%" 
    scrolling="no"
    style="border: none; min-height: 800px; overflow: hidden;"
    title="Blog">
</iframe>

<!-- Add this script to handle height updates -->
<script>
    window.addEventListener('message', function(event) {
        if (event.data.type === 'blogHeightUpdate') {
            const iframe = document.getElementById('blog-embed');
            if (iframe) {
                iframe.style.height = event.data.height + 'px';
            }
        }
    });
</script>
```

**Note:** This solution eliminates the double scrollbar issue. The iframe will automatically expand to fit all content, and only your parent page will have a scrollbar.

### WordPress Embed

1. Go to your WordPress page/post editor
2. Add a "Custom HTML" block
3. Paste the iframe code above
4. Adjust the `src` path to your hosted blog location

### Webflow Embed

1. Drag an "Embed" element onto your page
2. Paste the iframe code
3. Set the embed to "Full Width" for best results

### React/Next.js Integration

```jsx
import React, { useEffect, useRef } from 'react';

const BlogEmbed = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'blogHeightUpdate') {
                if (iframeRef.current) {
                    iframeRef.current.style.height = event.data.height + 'px';
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <iframe
            ref={iframeRef}
            src="/path/to/index.html"
            width="100%"
            style={{ border: 'none', minHeight: '800px' }}
            title="Blog"
        />
    );
};

export default BlogEmbed;
```

## Customization Guide

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #1a1a1a;      /* Main brand color */
    --color-text: #333333;          /* Body text */
    --color-text-light: #666666;    /* Lighter text */
    --color-bg: #ffffff;            /* Background */
    --color-border: #e5e5e5;        /* Borders */
}
```

### Typography

Change the font family in `styles.css`:

```css
:root {
    --font-sans: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Don't forget to import your font in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Blog Posts

Edit the blog cards directly in `index.html` or modify the `generateMockPosts()` method in `scripts.js` for dynamic content.

### Featured Posts Carousel

Modify the `featuredPosts` array in the `HeroCarouselManager` class in `scripts.js`:

```javascript
this.featuredPosts = [
    {
        image: 'your-image-url.jpg',
        title: 'Your Title',
        description: 'Your description'
    },
    // Add more featured posts...
];
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: 1025px and above (3-column grid)
- **Tablet**: 769px - 1024px (2-column grid)
- **Mobile**: 768px and below (1-column grid)
- **Small Mobile**: 480px and below (optimized spacing)

## JavaScript Classes

The project uses object-oriented JavaScript with the following classes:

### `HeroCarouselManager`
- Manages featured posts rotation
- Auto-rotates every 5 seconds
- Handles manual navigation

### `BlogContentLoader`
- Handles "Load More" functionality
- Dynamically generates and adds blog cards
- Simulates API loading states

### `ScrollHandler`
- Adds shadow to header on scroll
- Improves visual depth and hierarchy

### `MobileNavigationHandler`
- Manages dropdown menus on mobile devices
- Prevents conflicts between dropdowns

### `EmbedHandler`
- Detects iframe embedding
- Sends height updates to parent window
- Ensures responsive behavior when embedded

## Performance Considerations

- ✅ No external dependencies (vanilla JavaScript)
- ✅ Optimized images from Unsplash CDN
- ✅ Minimal CSS with no preprocessor overhead
- ✅ Efficient DOM manipulation
- ✅ Lazy loading ready (add `loading="lazy"` to images)

## Hosting Recommendations

### Free Options
- **GitHub Pages** - Perfect for static hosting
- **Netlify** - Drag and drop deployment
- **Vercel** - One-click deployment

### Paid Options
- **AWS S3 + CloudFront** - Scalable and fast
- **DigitalOcean Spaces** - Simple object storage
- **Your existing web host** - Upload via FTP

## SEO Optimization

The blog is SEO-friendly with:
- Semantic HTML5 elements (`<header>`, `<article>`, `<section>`)
- Proper heading hierarchy
- Alt text for all images
- Meta tags ready for customization

Add these meta tags to `<head>` in `index.html`:

```html
<meta name="description" content="Your blog description">
<meta property="og:title" content="Your Blog Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-social-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

## Accessibility

- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Sufficient color contrast ratios
- ✅ Responsive text sizing
- ✅ Screen reader friendly

## Future Enhancements

Potential features to add:
- Search functionality
- Category filtering
- Dark mode toggle
- Reading time estimates
- Social sharing buttons
- Comments section
- RSS feed

## Support

For questions or issues:
1. Check the code comments in each file
2. Review the browser console for errors
3. Test in different browsers
4. Verify all file paths are correct

## License

This project is provided as-is for your use. Modify and customize as needed!

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**

