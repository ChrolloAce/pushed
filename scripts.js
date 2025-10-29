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
                description: 'Discover why porcelain tiles are the perfect choice for Miami homes and how they withstand humidity and moisture better than other materials. Get expert installation tips from Miami\'s top flooring professionals.'
            },
            {
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop',
                title: 'Travertine Tile Installation Guide for Miami Pools',
                description: 'Everything you need to know about installing travertine tiles around your Miami pool area for that luxury resort feel. Learn about slip-resistance, durability, and maintenance.'
            },
            {
                image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=600&fit=crop',
                title: 'Luxury Vinyl Plank vs. Hardwood: Miami Edition',
                description: 'Compare LVP and hardwood flooring for South Florida homes. Learn which option offers better durability against humidity and salt air while maintaining stunning aesthetics.'
            },
            {
                image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=600&fit=crop',
                title: 'Marble Flooring Maintenance Tips for Miami Homes',
                description: 'Keep your marble floors looking pristine in Miami\'s tropical climate with these expert maintenance and cleaning tips from professional installers.'
            }
        ];
        
        this.init();
    }
    
    init() {
        const navArrow = document.querySelector('.hero-nav-arrow');
        if (navArrow) {
            navArrow.addEventListener('click', () => this.nextPost());
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
            const modalHandler = new BlogModalHandler();
            modalHandler.openModal(blogPosts[index]);
        }
    }
}

// ========================================
// Blog Modal Handler
// ========================================

class BlogModalHandler {
    constructor() {
        this.modal = document.getElementById('blog-modal');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalClose = document.getElementById('modal-close');
        this.modalTitle = document.getElementById('modal-title');
        this.modalImage = document.getElementById('modal-image');
        this.modalAuthor = document.getElementById('modal-author');
        this.modalAvatar = document.getElementById('modal-avatar');
        this.modalDate = document.getElementById('modal-date');
        this.modalBody = document.getElementById('modal-body');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Close button
        if (this.modalClose) {
            this.modalClose.addEventListener('click', () => this.closeModal());
        }
        
        // Overlay click
        if (this.modalOverlay) {
            this.modalOverlay.addEventListener('click', () => this.closeModal());
        }
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal(post) {
        if (!this.modal) return;
        
        // Populate modal content
        if (this.modalTitle) this.modalTitle.textContent = post.title;
        if (this.modalImage) {
            this.modalImage.src = post.image;
            this.modalImage.alt = post.title;
        }
        if (this.modalAuthor) this.modalAuthor.textContent = post.author;
        if (this.modalAvatar) {
            this.modalAvatar.src = post.avatar;
            this.modalAvatar.alt = post.author;
        }
        if (this.modalDate) this.modalDate.textContent = post.date;
        if (this.modalBody) {
            this.modalBody.innerHTML = post.content || '<p>Content coming soon...</p>';
        }
        
        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Scroll to top of modal
        this.modal.scrollTop = 0;
    }
    
    closeModal() {
        if (!this.modal) return;
        
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
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
        
        // Send initial height after a delay to ensure content is loaded
        setTimeout(sendHeight, 500);
        setTimeout(sendHeight, 1500);
        
        // Update on resize
        window.addEventListener('resize', sendHeight);
        
        // Update when content changes
        const observer = new MutationObserver(sendHeight);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false
        });
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
