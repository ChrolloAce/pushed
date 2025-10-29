/**
 * Blog Page Interactive Features
 * Handles navigation, hero carousel, and dynamic content loading
 */

// ========================================
// Hero Carousel Manager
// ========================================

class HeroCarouselManager {
    constructor() {
        this.currentIndex = 0;
        this.featuredPosts = [
            {
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop',
                title: 'Breaking Into Product Design: Advice from Untitled Founder, Frankie',
                description: 'Discover the journey of our founder and learn valuable insights about breaking into the competitive world of product design. From first principles to advanced techniques.'
            },
            {
                image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=600&fit=crop',
                title: 'The Future of Remote Work: Strategies for Success',
                description: 'Explore how companies are adapting to the new normal and learn best practices for building strong remote teams that thrive in distributed environments.'
            },
            {
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
                title: 'Building Scalable Systems: Lessons from the Trenches',
                description: 'Learn from real-world experiences about architecting systems that can handle millions of users while maintaining performance and reliability.'
            }
        ];
        
        this.init();
    }
    
    init() {
        const navArrow = document.querySelector('.hero-nav-arrow');
        if (navArrow) {
            navArrow.addEventListener('click', () => this.nextPost());
        }
        
        // Auto-rotate every 5 seconds
        this.startAutoRotate();
    }
    
    nextPost() {
        this.currentIndex = (this.currentIndex + 1) % this.featuredPosts.length;
        this.updateHero();
    }
    
    updateHero() {
        const post = this.featuredPosts[this.currentIndex];
        const heroCard = document.querySelector('.hero-card');
        
        if (!heroCard) return;
        
        // Add fade transition
        heroCard.style.opacity = '0';
        
        setTimeout(() => {
            const heroImage = document.querySelector('.hero-image');
            const heroTitle = document.querySelector('.hero-title');
            const heroDescription = document.querySelector('.hero-description');
            
            if (heroImage) heroImage.src = post.image;
            if (heroTitle) heroTitle.textContent = post.title;
            if (heroDescription) heroDescription.textContent = post.description;
            
            heroCard.style.opacity = '1';
        }, 300);
    }
    
    startAutoRotate() {
        setInterval(() => this.nextPost(), 5000);
    }
}

// ========================================
// Blog Content Loader
// ========================================

class BlogContentLoader {
    constructor() {
        this.loadMoreBtn = document.querySelector('.btn-load-more');
        this.blogGrid = document.querySelector('.blog-grid');
        this.isLoading = false;
        
        this.init();
    }
    
    init() {
        if (this.loadMoreBtn) {
            this.loadMoreBtn.addEventListener('click', () => this.loadMorePosts());
        }
    }
    
    async loadMorePosts() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.loadMoreBtn.textContent = 'Loading...';
        this.loadMoreBtn.disabled = true;
        
        // Simulate API call
        await this.simulateLoading(1500);
        
        this.addNewPosts();
        
        this.loadMoreBtn.textContent = 'Loading more...';
        this.loadMoreBtn.disabled = false;
        this.isLoading = false;
    }
    
    simulateLoading(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    addNewPosts() {
        const newPosts = this.generateMockPosts(3);
        
        newPosts.forEach(post => {
            const card = this.createBlogCard(post);
            this.blogGrid.appendChild(card);
        });
    }
    
    generateMockPosts(count) {
        const mockTitles = [
            'Advanced CSS Techniques for Modern Web',
            'Understanding Machine Learning Basics',
            'The Art of Code Review',
            'Mobile-First Design Principles',
            'Security Best Practices for Developers',
            'GraphQL vs REST: Which to Choose?'
        ];
        
        const mockDescriptions = [
            'Dive deep into modern CSS features and learn how to create stunning layouts.',
            'A comprehensive guide to getting started with machine learning.',
            'Learn how to conduct effective code reviews that improve team productivity.',
            'Master the principles of designing for mobile devices first.',
            'Essential security practices every developer should know.',
            'Compare two popular API architectures and make informed decisions.'
        ];
        
        const posts = [];
        
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * mockTitles.length);
            posts.push({
                title: mockTitles[randomIndex],
                description: mockDescriptions[randomIndex],
                author: this.getRandomAuthor(),
                date: this.getRandomDate(),
                image: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000000)}?w=400&h=250&fit=crop`
            });
        }
        
        return posts;
    }
    
    createBlogCard(post) {
        const article = document.createElement('article');
        article.className = 'blog-card';
        
        article.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <p class="card-description">${post.description}</p>
                <div class="card-meta">
                    <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar">
                    <div class="author-info">
                        <span class="author-name">${post.author.name}</span>
                        <span class="post-date">${post.date}</span>
                    </div>
                </div>
            </div>
        `;
        
        return article;
    }
    
    getRandomAuthor() {
        const authors = [
            { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/40?img=10' },
            { name: 'John Doe', avatar: 'https://i.pravatar.cc/40?img=11' },
            { name: 'Alice Brown', avatar: 'https://i.pravatar.cc/40?img=12' },
            { name: 'Bob Wilson', avatar: 'https://i.pravatar.cc/40?img=13' }
        ];
        
        return authors[Math.floor(Math.random() * authors.length)];
    }
    
    getRandomDate() {
        const dates = ['10 Jan 2022', '9 Jan 2022', '8 Jan 2022', '7 Jan 2022'];
        return dates[Math.floor(Math.random() * dates.length)];
    }
}

// ========================================
// Scroll Handler
// ========================================

class ScrollHandler {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScrollTop = 0;
        
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow to header when scrolling
        if (scrollTop > 10) {
            this.header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        } else {
            this.header.style.boxShadow = 'none';
        }
        
        this.lastScrollTop = scrollTop;
    }
}

// ========================================
// Mobile Navigation Handler
// ========================================

class MobileNavigationHandler {
    constructor() {
        this.dropdowns = document.querySelectorAll('.nav-dropdown');
        
        this.init();
    }
    
    init() {
        this.dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            
            if (link) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        this.toggleDropdown(dropdown);
                    }
                });
            }
        });
    }
    
    toggleDropdown(dropdown) {
        const content = dropdown.querySelector('.dropdown-content');
        
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            // Close other dropdowns
            this.dropdowns.forEach(d => {
                const c = d.querySelector('.dropdown-content');
                if (c !== content) c.style.display = 'none';
            });
            
            content.style.display = 'block';
        }
    }
}

// ========================================
// Embed Handler
// ========================================

class EmbedHandler {
    constructor() {
        this.init();
    }
    
    init() {
        // Check if page is embedded in iframe
        if (window.self !== window.top) {
            document.body.classList.add('embedded');
            this.setupEmbedCommunication();
        }
    }
    
    setupEmbedCommunication() {
        // Send height updates to parent window
        const sendHeight = () => {
            const height = document.documentElement.scrollHeight;
            window.parent.postMessage({
                type: 'blogHeightUpdate',
                height: height
            }, '*');
        };
        
        // Send initial height
        sendHeight();
        
        // Update on resize
        window.addEventListener('resize', sendHeight);
        
        // Update when content changes
        const observer = new MutationObserver(sendHeight);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    }
}

// ========================================
// Initialize Application
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    new HeroCarouselManager();
    new BlogContentLoader();
    new ScrollHandler();
    new MobileNavigationHandler();
    new EmbedHandler();
});

