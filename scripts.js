/**
 * Miami Flooring Blog - Interactive Features
 * Handles navigation, hero carousel, and dynamic blog content loading
 */

// ========================================
// Hero Carousel Manager
// ========================================

class HeroCarouselManager {
    constructor() {
        this.currentIndex = 0;
        this.featuredPosts = [
            {
                image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1200&h=600&fit=crop',
                title: 'Best Porcelain Tiles for Miami\'s Humid Climate',
                description: 'Discover why porcelain tiles are the perfect choice for Miami homes and how they withstand humidity and moisture better than other materials. Get expert installation tips from Miami\'s top flooring professionals.',
                postIndex: 0 // Links to first blog post
            },
            {
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop',
                title: 'Travertine Tile Installation Guide for Miami Pools',
                description: 'Everything you need to know about installing travertine tiles around your Miami pool area for that luxury resort feel. Learn about slip-resistance, durability, and maintenance.',
                postIndex: 2 // Links to third blog post
            },
            {
                image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=600&fit=crop',
                title: 'Luxury Vinyl Plank vs. Hardwood: Miami Edition',
                description: 'Compare LVP and hardwood flooring for South Florida homes. Learn which option offers better durability against humidity and salt air while maintaining stunning aesthetics.',
                postIndex: 1 // Links to second blog post
            },
            {
                image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=600&fit=crop',
                title: 'Marble Flooring Maintenance Tips for Miami Homes',
                description: 'Keep your marble floors looking pristine in Miami\'s tropical climate with these expert maintenance and cleaning tips from professional installers.',
                postIndex: 5 // Links to sixth blog post
            }
        ];
        
        this.init();
    }
    
    init() {
        const navArrow = document.querySelector('.hero-nav-arrow');
        const heroCard = document.getElementById('hero-card');
        
        if (navArrow) {
            navArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                this.nextPost();
            });
        }
        
        // Make hero card clickable
        if (heroCard) {
            heroCard.addEventListener('click', () => {
                const currentPost = this.featuredPosts[this.currentIndex];
                this.openFeaturedPost(currentPost.postIndex);
            });
        }
        
        // Auto-rotate every 6 seconds
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
        heroCard.style.transition = 'opacity 0.3s ease';
        
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
    
    openFeaturedPost(postIndex) {
        if (typeof blogPosts !== 'undefined' && blogPosts[postIndex]) {
            const pageNavigator = new BlogPageNavigator();
            pageNavigator.openPost(blogPosts[postIndex]);
        }
    }
    
    startAutoRotate() {
        setInterval(() => this.nextPost(), 6000);
    }
}

// ========================================
// Blog Post Renderer
// ========================================

class BlogPostRenderer {
    constructor() {
        this.blogGrid = document.getElementById('blog-grid');
        this.postsPerPage = 70; // Show all 70 posts
        this.currentPage = 1;
        
        this.init();
    }
    
    init() {
        if (typeof blogPosts !== 'undefined') {
            this.renderPosts(blogPosts);
        } else {
            console.error('Blog posts data not found. Make sure blog-data.js is loaded.');
        }
    }
    
    renderPosts(posts) {
        if (!this.blogGrid) return;
        
        // Clear existing content
        this.blogGrid.innerHTML = '';
        
        // Render all posts
        posts.forEach((post, index) => {
            const card = this.createBlogCard(post, index);
            this.blogGrid.appendChild(card);
        });
    }
    
    createBlogCard(post, index) {
        const article = document.createElement('article');
        article.className = 'blog-card';
        article.style.cursor = 'pointer';
        article.setAttribute('data-post-index', index);
        
        article.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="card-image" loading="lazy">
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <p class="card-description">${post.description}</p>
                <div class="card-meta">
                    <img src="${post.avatar}" alt="${post.author}" class="author-avatar" loading="lazy">
                    <div class="author-info">
                        <span class="author-name">${post.author}</span>
                        <span class="post-date">${post.date}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event to open modal
        article.addEventListener('click', () => {
            this.openBlogPost(index);
        });
        
        return article;
    }
    
    openBlogPost(index) {
        if (typeof blogPosts !== 'undefined' && blogPosts[index]) {
            const pageNavigator = new BlogPageNavigator();
            pageNavigator.openPost(blogPosts[index]);
        }
    }
}

// ========================================
// Blog Page Navigator
// ========================================

class BlogPageNavigator {
    constructor() {
        this.mainView = document.getElementById('main-view');
        this.postView = document.getElementById('blog-post-view');
        this.backButton = document.getElementById('back-button');
        this.postTitle = document.getElementById('post-title');
        this.postImage = document.getElementById('post-image');
        this.postAuthor = document.getElementById('post-author');
        this.postAvatar = document.getElementById('post-avatar');
        this.postDate = document.getElementById('post-date');
        this.postBody = document.getElementById('post-body');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Back button
        if (this.backButton) {
            this.backButton.addEventListener('click', () => this.closePost());
        }
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.postView && this.postView.classList.contains('active')) {
                this.closePost();
            }
        });
    }
    
    openPost(post) {
        if (!this.postView || !this.mainView) return;
        
        // Populate post content
        if (this.postTitle) this.postTitle.textContent = post.title;
        if (this.postImage) {
            this.postImage.src = post.image;
            this.postImage.alt = post.title;
        }
        if (this.postAuthor) this.postAuthor.textContent = post.author;
        if (this.postAvatar) {
            this.postAvatar.src = post.avatar;
            this.postAvatar.alt = post.author;
        }
        if (this.postDate) this.postDate.textContent = post.date;
        if (this.postBody) {
            this.postBody.innerHTML = post.content || '<p>Content coming soon...</p>';
        }
        
        // Hide main view and show post view
        this.mainView.classList.add('hidden');
        this.postView.classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Send height update if embedded
        this.notifyHeightChange();
    }
    
    closePost() {
        if (!this.postView || !this.mainView) return;
        
        // Hide post view and show main view
        this.postView.classList.remove('active');
        this.mainView.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Send height update if embedded
        this.notifyHeightChange();
    }
    
    notifyHeightChange() {
        // If embedded, notify parent of height change
        if (window.self !== window.top) {
            setTimeout(() => {
                const height = Math.max(
                    document.documentElement.scrollHeight,
                    document.documentElement.offsetHeight,
                    document.body.scrollHeight,
                    document.body.offsetHeight
                );
                
                window.parent.postMessage({
                    type: 'blogHeightUpdate',
                    height: height
                }, '*');
            }, 100);
        }
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
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                this.dropdowns.forEach(dropdown => {
                    const content = dropdown.querySelector('.dropdown-content');
                    if (content) content.style.display = 'none';
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
// Search and Filter Handler (Future Enhancement)
// ========================================

class SearchFilterHandler {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.allPosts = typeof blogPosts !== 'undefined' ? blogPosts : [];
        
        this.init();
    }
    
    init() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }
    }
    
    handleSearch(query) {
        const filtered = this.allPosts.filter(post => {
            return post.title.toLowerCase().includes(query.toLowerCase()) ||
                   post.description.toLowerCase().includes(query.toLowerCase());
        });
        
        const renderer = new BlogPostRenderer();
        renderer.renderPosts(filtered);
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
            document.documentElement.classList.add('embedded');
            document.body.classList.add('embedded');
            this.setupEmbedCommunication();
        }
    }
    
    setupEmbedCommunication() {
        // Send height updates to parent window
        const sendHeight = () => {
            const height = Math.max(
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight,
                document.body.scrollHeight,
                document.body.offsetHeight
            );
            
            window.parent.postMessage({
                type: 'blogHeightUpdate',
                height: height
            }, '*');
        };
        
        // Send initial height multiple times to ensure it's received
        setTimeout(sendHeight, 100);
        setTimeout(sendHeight, 300);
        setTimeout(sendHeight, 500);
        setTimeout(sendHeight, 1000);
        setTimeout(sendHeight, 2000);
        
        // Update on resize
        window.addEventListener('resize', sendHeight);
        
        // Update when content changes (with debouncing)
        let timeoutId;
        const debouncedSendHeight = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(sendHeight, 100);
        };
        
        const observer = new MutationObserver(debouncedSendHeight);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true
        });
        
        // Send height when images load
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', sendHeight);
        });
        
        // Send height when view changes (blog post opened/closed)
        const mainView = document.getElementById('main-view');
        const postView = document.getElementById('blog-post-view');
        
        if (mainView && postView) {
            const viewObserver = new MutationObserver(sendHeight);
            viewObserver.observe(mainView, { attributes: true, attributeFilter: ['class'] });
            viewObserver.observe(postView, { attributes: true, attributeFilter: ['class'] });
        }
    }
}

// ========================================
// Blog Post Counter
// ========================================

class BlogPostCounter {
    constructor() {
        this.init();
    }
    
    init() {
        if (typeof blogPosts !== 'undefined') {
            const sectionTitle = document.querySelector('.section-title');
            if (sectionTitle) {
                const count = blogPosts.length;
                sectionTitle.textContent = `Recent blog posts (${count} articles)`;
            }
        }
    }
}

// ========================================
// Initialize Application
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    new HeroCarouselManager();
    new BlogPostRenderer();
    new BlogPostCounter();
    new ScrollHandler();
    new MobileNavigationHandler();
    new EmbedHandler();
});

// Optional: Expose for debugging
window.MiamiFlooringBlog = {
    version: '1.0.0',
    postCount: typeof blogPosts !== 'undefined' ? blogPosts.length : 0
};
