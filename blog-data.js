/**
 * Blog Post Data
 * 90 blog posts about flooring and tile installation in Miami
 * Sorted in chronological descending order (newest first)
 */

const blogPosts = [
    // December 2025
    {
        title: "Limestone Flooring: Elegance for Miami Beach Homes",
        description: "Bring timeless elegance to your Miami Beach property with beautiful limestone flooring and proper installation.",
        author: "Miami Flooring and Tile",
        date: "29 Dec 2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Cork Flooring: Is It Suitable for Miami Homes?",
        description: "Explore the benefits and challenges of installing cork flooring in Miami's humid subtropical climate.",
        author: "Miami Flooring and Tile",
        date: "26 Dec 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Subway Tile Patterns for Miami Kitchen Backsplashes",
        description: "Transform your Miami kitchen with creative subway tile patterns that go beyond the traditional layout.",
        author: "Miami Flooring and Tile",
        date: "23 Dec 2025",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Best Underlayment for Tile Floors in Miami",
        description: "Choose the right underlayment to ensure your Miami tile installation is waterproof and long-lasting.",
        author: "Miami Flooring and Tile",
        date: "20 Dec 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Geometric Tile Designs Taking Over Miami Homes",
        description: "Get inspired by bold geometric tile patterns that are trending in Miami's most stylish homes.",
        author: "Miami Flooring and Tile",
        date: "17 Dec 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Smart Tile Layouts for Open-Concept Miami Living Spaces",
        description: "Learn how to create visual flow with strategic tile layouts in open-concept Miami homes for a cohesive, modern look.",
        author: "Miami Flooring and Tile",
        date: "16 Dec 2025",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Anti-Slip Pool Deck Tiles: Safety Meets Style in Miami",
        description: "Discover the best anti-slip tile options for Miami pool decks that keep your family safe without sacrificing aesthetics.",
        author: "Miami Flooring and Tile",
        date: "15 Dec 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Engineered Hardwood vs. Solid Hardwood in Miami",
        description: "Learn which hardwood option performs better in Miami's challenging climate and humidity levels.",
        author: "Miami Flooring and Tile",
        date: "14 Dec 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Sustainable Flooring Choices for Eco-Minded Miami Homeowners",
        description: "Explore environmentally friendly flooring options that perform well in Miami's climate while reducing your carbon footprint.",
        author: "Miami Flooring and Tile",
        date: "13 Dec 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Entryway Tile Ideas That Make a Statement in Miami Homes",
        description: "Create stunning first impressions with eye-catching entryway tile designs perfect for Miami's tropical architecture.",
        author: "Miami Flooring and Tile",
        date: "12 Dec 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Install Tile on Miami Exterior Walls",
        description: "Master the techniques for installing exterior tiles that can withstand Miami's tropical weather conditions.",
        author: "Miami Flooring and Tile",
        date: "11 Dec 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Choose the Right Tile Adhesive for Miami Installations",
        description: "Navigate the world of tile adhesives and find the perfect product for Miami's humidity and temperature fluctuations.",
        author: "Miami Flooring and Tile",
        date: "10 Dec 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Outdoor Living Room Tiles for Miami Lanais and Patios",
        description: "Transform your Miami outdoor living space with durable, weather-resistant tiles that bring indoor comfort outside.",
        author: "Miami Flooring and Tile",
        date: "9 Dec 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Terrazzo Flooring: Miami's Classic Comeback",
        description: "Terrazzo is back! Discover why this classic Miami flooring is experiencing a major revival in modern homes.",
        author: "Miami Flooring and Tile",
        date: "8 Dec 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Bold Color Tile Trends Taking Over Miami Bathrooms",
        description: "Step away from neutral tones and embrace bold, colorful tiles transforming Miami bathroom designs in 2025.",
        author: "Miami Flooring and Tile",
        date: "7 Dec 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Luxury Flooring Options for Miami Penthouse Living",
        description: "Elevate your Miami penthouse with premium flooring materials that match the sophistication of high-rise living.",
        author: "Miami Flooring and Tile",
        date: "6 Dec 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Laminate Flooring: Budget-Friendly Option for Miami",
        description: "Explore affordable laminate flooring options that can work in Miami homes with proper installation and care.",
        author: "Miami Flooring and Tile",
        date: "5 Dec 2025",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Tile Repair vs. Full Replacement: Making the Right Choice in Miami",
        description: "Assess whether your Miami tile floors need minor repairs or complete replacement with this comprehensive guide.",
        author: "Miami Flooring and Tile",
        date: "4 Dec 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Coastal-Inspired Flooring for Miami Waterfront Properties",
        description: "Bring the beach inside with coastal-themed flooring options designed for Miami's stunning waterfront homes.",
        author: "Miami Flooring and Tile",
        date: "3 Dec 2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Blue and White Tile Combinations for Miami Homes",
        description: "Create a fresh coastal look with stunning blue and white tile combinations perfect for Miami's beach vibe.",
        author: "Miami Flooring and Tile",
        date: "2 Dec 2025",
        image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // November 2025
    {
        title: "Year-End Flooring Sales: Best Deals in Miami for 2025",
        description: "Take advantage of seasonal discounts on premium flooring materials from Miami's top suppliers this holiday season.",
        author: "Miami Flooring and Tile",
        date: "30 Nov 2025",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Tile Patterns for Miami Art Deco Renovation Projects",
        description: "Preserve historic charm while modernizing with tile patterns perfect for Miami's iconic Art Deco architecture.",
        author: "Miami Flooring and Tile",
        date: "29 Nov 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Epoxy Flooring for Miami Garages: Complete Guide",
        description: "Transform your Miami garage with durable, attractive epoxy flooring that resists stains and moisture.",
        author: "Miami Flooring and Tile",
        date: "28 Nov 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Porcelain Wood Planks: The Ultimate Miami Flooring Solution",
        description: "Get the warmth of wood with the durability of porcelain in planks designed for Miami's demanding climate.",
        author: "Miami Flooring and Tile",
        date: "27 Nov 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Shower Niche Tile Installation Tips for Miami Bathrooms",
        description: "Master the art of tiling shower niches with waterproof techniques essential for Miami's humidity.",
        author: "Miami Flooring and Tile",
        date: "26 Nov 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Hexagon Tiles: Modern Design for Miami Bathrooms",
        description: "Add contemporary flair to your Miami bathroom with trendy hexagon tiles in various sizes and colors.",
        author: "Miami Flooring and Tile",
        date: "25 Nov 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Miami Kitchen Flooring That Handles Heat and Spills",
        description: "Choose kitchen flooring that withstands cooking mishaps while staying cool in Miami's warm temperatures.",
        author: "Miami Flooring and Tile",
        date: "24 Nov 2025",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Matching Interior and Exterior Tiles for Seamless Miami Designs",
        description: "Create visual continuity between indoor and outdoor spaces with matching tile selections for Miami homes.",
        author: "Miami Flooring and Tile",
        date: "23 Nov 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Polished Concrete Floors: Industrial Chic in Miami",
        description: "Embrace the industrial trend with polished concrete floors perfect for Miami lofts and modern homes.",
        author: "Miami Flooring and Tile",
        date: "22 Nov 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Guest Bathroom Tile Ideas for Miami Vacation Rentals",
        description: "Design impressive guest bathrooms that attract renters with durable, easy-to-maintain tile choices.",
        author: "Miami Flooring and Tile",
        date: "21 Nov 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Curbless Shower Tile Installation for Accessible Miami Homes",
        description: "Create barrier-free bathrooms with proper slope and waterproofing for safe, stylish Miami shower designs.",
        author: "Miami Flooring and Tile",
        date: "20 Nov 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Choose Tile for Miami Outdoor Kitchens",
        description: "Select the perfect tiles for your Miami outdoor kitchen that can handle heat, moisture, and frequent use.",
        author: "Miami Flooring and Tile",
        date: "19 Nov 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Neutral Tone Tile Palettes for Minimalist Miami Interiors",
        description: "Embrace minimalist design with sophisticated neutral tile palettes that complement Miami's natural light.",
        author: "Miami Flooring and Tile",
        date: "18 Nov 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Fireplace Surround Tile Ideas for Miami Living Rooms",
        description: "Transform your Miami fireplace into a stunning focal point with creative tile surround designs.",
        author: "Miami Flooring and Tile",
        date: "17 Nov 2025",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Acrylic vs. Epoxy Grout for Miami Tile Installations",
        description: "Compare grout types to find the best option for Miami's humidity and prevent mold and mildew growth.",
        author: "Miami Flooring and Tile",
        date: "16 Nov 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Herringbone Pattern: Classic Flooring for Miami Homes",
        description: "Install timeless herringbone pattern flooring that adds sophistication to any Miami interior.",
        author: "Miami Flooring and Tile",
        date: "13 Nov 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Matte vs. Glossy Tiles: Which is Better for Miami?",
        description: "Understand the pros and cons of matte and glossy tile finishes for different areas of your Miami home.",
        author: "Miami Flooring and Tile",
        date: "10 Nov 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Natural Stone Tile Care in Miami's Salty Air",
        description: "Protect and maintain your natural stone tiles from damage caused by Miami's coastal salt air exposure.",
        author: "Miami Flooring and Tile",
        date: "7 Nov 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Commercial Tile Installation for Miami Businesses",
        description: "Heavy-duty tile solutions for Miami commercial spaces that handle high traffic and look professional.",
        author: "Miami Flooring and Tile",
        date: "4 Nov 2025",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Chevron vs. Herringbone: Miami Floor Pattern Guide",
        description: "Learn the difference between chevron and herringbone patterns and which works best for Miami interiors.",
        author: "Miami Flooring and Tile",
        date: "1 Nov 2025",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // October 2025
    {
        title: "Onyx Tiles: Luxury Statement for Miami Properties",
        description: "Create stunning focal points with translucent onyx tiles perfect for high-end Miami residences.",
        author: "Miami Flooring and Tile",
        date: "29 Oct 2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Remove Old Tile Flooring in Miami Homes",
        description: "Step-by-step guide to safely removing old tiles and preparing for new flooring installation in Miami.",
        author: "Miami Flooring and Tile",
        date: "26 Oct 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Pebble Tile Showers: Spa-Like Bathrooms in Miami",
        description: "Transform your Miami bathroom into a relaxing spa retreat with natural pebble tile shower floors.",
        author: "Miami Flooring and Tile",
        date: "23 Oct 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Waterproof Vinyl Plank for Miami Laundry Rooms",
        description: "The best waterproof vinyl plank options for Miami laundry rooms prone to spills and moisture.",
        author: "Miami Flooring and Tile",
        date: "20 Oct 2025",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Encaustic Cement Tiles: Artistic Flooring for Miami",
        description: "Add vibrant patterns and personality to your Miami home with handmade encaustic cement tiles.",
        author: "Miami Flooring and Tile",
        date: "17 Oct 2025",
        image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Best Transition Strips for Miami Tile Installations",
        description: "Create seamless transitions between different flooring types in your Miami home with the right strips.",
        author: "Miami Flooring and Tile",
        date: "14 Oct 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Glass Tile Backsplashes for Modern Miami Kitchens",
        description: "Illuminate your Miami kitchen with reflective glass tile backsplashes in stunning colors and patterns.",
        author: "Miami Flooring and Tile",
        date: "11 Oct 2025",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Preventing Mold on Tile and Grout in Miami",
        description: "Essential prevention strategies to keep your Miami tile and grout mold-free in humid conditions.",
        author: "Miami Flooring and Tile",
        date: "8 Oct 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Quarry Tiles: Durable Flooring for Miami Patios",
        description: "Discover the benefits of quarry tiles for outdoor Miami spaces that need durability and style.",
        author: "Miami Flooring and Tile",
        date: "5 Oct 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "DIY Tile Installation vs. Hiring Miami Professionals",
        description: "Weigh the pros and cons of DIY tile installation versus hiring experienced Miami tile contractors.",
        author: "Miami Flooring and Tile",
        date: "2 Oct 2025",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // March 2025
    {
        title: "Best Porcelain Tiles for Miami's Humid Climate",
        description: "Discover why porcelain tiles are the perfect choice for Miami homes and how they withstand humidity and moisture better than other materials.",
        author: "Miami Flooring and Tile",
        date: "28 Mar 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Luxury Vinyl Plank vs. Hardwood: Miami Edition",
        description: "Compare LVP and hardwood flooring for South Florida homes. Learn which option offers better durability against humidity and salt air.",
        author: "Miami Flooring and Tile",
        date: "25 Mar 2025",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Travertine Tile Installation Guide for Miami Pools",
        description: "Everything you need to know about installing travertine tiles around your Miami pool area for that luxury resort feel.",
        author: "Miami Flooring and Tile",
        date: "22 Mar 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Choose Slip-Resistant Tiles for Miami Bathrooms",
        description: "Safety first! Learn about slip-resistant tile options perfect for Miami's high-humidity bathrooms and shower areas.",
        author: "Miami Flooring and Tile",
        date: "19 Mar 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Cost Guide: Tile Installation Prices in Miami 2025",
        description: "A comprehensive breakdown of tile installation costs in Miami, including materials, labor, and factors that affect pricing.",
        author: "Miami Flooring and Tile",
        date: "16 Mar 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Marble Flooring Maintenance Tips for Miami Homes",
        description: "Keep your marble floors looking pristine in Miami's tropical climate with these expert maintenance and cleaning tips.",
        author: "Miami Flooring and Tile",
        date: "13 Mar 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Top 5 Kitchen Tile Trends in Miami for 2025",
        description: "Explore the hottest kitchen tile trends taking over Miami homes, from bold patterns to coastal-inspired designs.",
        author: "Miami Flooring and Tile",
        date: "10 Mar 2025",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Hurricane-Proof Flooring Options for Miami Residents",
        description: "Protect your investment with flooring that can withstand Miami's hurricane season and potential flooding.",
        author: "Miami Flooring and Tile",
        date: "7 Mar 2025",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Ceramic vs. Porcelain: Which Tile is Right for You?",
        description: "Understand the key differences between ceramic and porcelain tiles to make the best choice for your Miami home.",
        author: "Miami Flooring and Tile",
        date: "4 Mar 2025",
        image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Installing Heated Floors in Miami: Is It Worth It?",
        description: "While Miami stays warm, discover scenarios where heated flooring makes sense and adds luxury to your home.",
        author: "Miami Flooring and Tile",
        date: "1 Mar 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // February 2025
    {
        title: "Best Grout Colors to Match Miami's Coastal Aesthetic",
        description: "Choose the perfect grout color to complement your tiles and create that breezy, beachy Miami vibe.",
        author: "Miami Flooring and Tile",
        date: "26 Feb 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Saltillo Tile Installation: A Miami Homeowner's Guide",
        description: "Bring rustic charm to your Miami home with authentic Saltillo tiles. Learn proper installation and sealing techniques.",
        author: "Miami Flooring and Tile",
        date: "23 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Prepare Concrete Subfloors for Tile in Miami",
        description: "Essential steps for preparing concrete subfloors in Miami's climate to ensure long-lasting tile installation.",
        author: "Miami Flooring and Tile",
        date: "20 Feb 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Mosaic Tile Designs for Miami Accent Walls",
        description: "Transform your space with stunning mosaic tile accent walls. Design ideas and installation tips for Miami homes.",
        author: "Miami Flooring and Tile",
        date: "17 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Waterproof Flooring Solutions for Miami Basements",
        description: "Keep your basement dry with the best waterproof flooring options designed for Miami's water table challenges.",
        author: "Miami Flooring and Tile",
        date: "14 Feb 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Granite Tiles vs. Granite Slabs: Miami Installation Guide",
        description: "Weighing the pros and cons of granite tiles versus slabs for your Miami kitchen or bathroom renovation.",
        author: "Miami Flooring and Tile",
        date: "11 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Eco-Friendly Flooring Options for Sustainable Miami Homes",
        description: "Go green with sustainable flooring choices that are perfect for environmentally conscious Miami homeowners.",
        author: "Miami Flooring and Tile",
        date: "8 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Installing Large Format Tiles in Miami: Tips and Tricks",
        description: "Master the art of installing large format tiles with these professional techniques for Miami installations.",
        author: "Miami Flooring and Tile",
        date: "5 Feb 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Terracotta Flooring: Perfect for Miami's Mediterranean Style",
        description: "Embrace Mediterranean elegance with terracotta flooring that complements Miami's architectural style.",
        author: "Miami Flooring and Tile",
        date: "2 Feb 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // January 2025
    {
        title: "How to Fix Cracked Tiles in Miami's Heat",
        description: "Learn why tiles crack in Miami's extreme temperatures and how to repair them properly for lasting results.",
        author: "Miami Flooring and Tile",
        date: "30 Jan 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Luxury Vinyl Tile: The Perfect Miami Condo Solution",
        description: "Discover why LVT is becoming the top choice for Miami condos, offering style, durability, and easy maintenance.",
        author: "Miami Flooring and Tile",
        date: "27 Jan 2025",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Best Tile Sealers for Miami's Outdoor Patios",
        description: "Protect your outdoor tiles from Miami's sun, rain, and salt air with the right sealer products.",
        author: "Miami Flooring and Tile",
        date: "24 Jan 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Wood-Look Tile vs. Real Hardwood in Miami",
        description: "Get the look of hardwood without the humidity concerns. Compare wood-look tiles to real hardwood for Miami homes.",
        author: "Miami Flooring and Tile",
        date: "21 Jan 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Choose the Right Tile Size for Small Miami Spaces",
        description: "Maximize your small Miami apartment or condo with smart tile sizing choices that create the illusion of space.",
        author: "Miami Flooring and Tile",
        date: "18 Jan 2025",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Slate Flooring for Miami: Pros, Cons, and Installation",
        description: "Explore the natural beauty of slate flooring and whether it's the right choice for your Miami home.",
        author: "Miami Flooring and Tile",
        date: "15 Jan 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Radiant Floor Heating with Tile in Miami",
        description: "Add luxury and comfort to your Miami home with radiant heated floors beneath your tile installation.",
        author: "Miami Flooring and Tile",
        date: "12 Jan 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Penny Tiles: A Trendy Choice for Miami Bathrooms",
        description: "Discover why penny tiles are making a comeback in Miami bathrooms and how to install them for maximum impact.",
        author: "Miami Flooring and Tile",
        date: "9 Jan 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Bamboo Flooring in Miami: What You Need to Know",
        description: "Can bamboo flooring survive Miami's humidity? Get the facts about this eco-friendly flooring option.",
        author: "Miami Flooring and Tile",
        date: "6 Jan 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Clean and Maintain Grout in Miami's Climate",
        description: "Keep your grout looking fresh with these cleaning and maintenance tips specifically for Miami's humid environment.",
        author: "Miami Flooring and Tile",
        date: "3 Jan 2025",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // September 2024
    {
        title: "Rectified vs. Non-Rectified Tiles for Miami Homes",
        description: "Understand the difference between rectified and non-rectified tiles and which suits Miami installations better.",
        author: "Miami Flooring and Tile",
        date: "28 Sep 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Colored Grout Trends in Miami Interior Design",
        description: "Make a statement with colored grout! Explore trending grout colors transforming Miami tile installations.",
        author: "Miami Flooring and Tile",
        date: "25 Sep 2024",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Acid-Washed Concrete Floors for Miami Art Studios",
        description: "Create unique, artistic flooring with acid-washed concrete perfect for Miami's creative spaces.",
        author: "Miami Flooring and Tile",
        date: "22 Sep 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Floor Leveling Before Tile Installation in Miami",
        description: "Why floor leveling is crucial for Miami tile installations and how to do it correctly.",
        author: "Miami Flooring and Tile",
        date: "19 Sep 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Zellige Tiles: Moroccan Style for Miami Interiors",
        description: "Bring handcrafted Moroccan zellige tiles to your Miami home for an exotic, artisanal touch.",
        author: "Miami Flooring and Tile",
        date: "16 Sep 2024",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Best Floor Tiles for Miami Pet Owners",
        description: "Scratch-resistant, easy-to-clean tile options perfect for Miami homes with dogs and cats.",
        author: "Miami Flooring and Tile",
        date: "13 Sep 2024",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Arabesque Tile Patterns for Miami Backsplashes",
        description: "Add elegant curves and sophistication with arabesque tile patterns in your Miami kitchen or bath.",
        author: "Miami Flooring and Tile",
        date: "10 Sep 2024",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Rubber Flooring for Miami Home Gyms",
        description: "Choose the right rubber flooring for your Miami home gym that handles equipment and moisture.",
        author: "Miami Flooring and Tile",
        date: "7 Sep 2024",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Porcelain Pavers for Miami Pool Decks",
        description: "Install slip-resistant porcelain pavers around your Miami pool for safety and stunning aesthetics.",
        author: "Miami Flooring and Tile",
        date: "4 Sep 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "How to Match Tile Colors to Miami's Natural Light",
        description: "Select tile colors that complement Miami's abundant natural sunlight for perfect ambiance.",
        author: "Miami Flooring and Tile",
        date: "1 Sep 2024",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // August 2024
    {
        title: "Stain-Resistant Flooring Solutions for Miami Kitchens",
        description: "Discover flooring options that resist spills, stains, and moisture in busy Miami kitchens.",
        author: "Miami Flooring and Tile",
        date: "29 Aug 2024",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Installing Tile Backsplash Behind Miami Stoves",
        description: "Learn proper techniques for heat-resistant tile installation behind stoves in Miami homes.",
        author: "Miami Flooring and Tile",
        date: "26 Aug 2024",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Luxury Tile Borders and Medallions for Miami Homes",
        description: "Add elegant focal points with custom tile borders and medallions in your Miami residence.",
        author: "Miami Flooring and Tile",
        date: "23 Aug 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Cork Tile Flooring: Eco-Friendly Option for Miami",
        description: "Explore sustainable cork tile flooring and its performance in Miami's humid environment.",
        author: "Miami Flooring and Tile",
        date: "20 Aug 2024",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Bathroom Floor Heating Systems for Miami Luxury Homes",
        description: "Add spa-like comfort with radiant floor heating systems in Miami luxury bathrooms.",
        author: "Miami Flooring and Tile",
        date: "17 Aug 2024",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Reclaimed Wood Look Tiles for Miami Beach Houses",
        description: "Get the rustic charm of reclaimed wood with durable, moisture-resistant tile alternatives.",
        author: "Miami Flooring and Tile",
        date: "14 Aug 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Fixing Hollow-Sounding Tiles in Miami Installations",
        description: "Identify and repair hollow tiles before they crack in Miami's climate conditions.",
        author: "Miami Flooring and Tile",
        date: "11 Aug 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Metallic Tile Accents for Modern Miami Interiors",
        description: "Create stunning visual impact with metallic and iridescent tile accents in contemporary Miami homes.",
        author: "Miami Flooring and Tile",
        date: "8 Aug 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Antique Brick Flooring: Old World Charm in Miami",
        description: "Bring timeless European elegance to your Miami home with authentic antique brick flooring.",
        author: "Miami Flooring and Tile",
        date: "5 Aug 2024",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Wide Plank Luxury Vinyl for Miami Open Concepts",
        description: "Maximize visual flow in open concept Miami homes with wide plank luxury vinyl flooring.",
        author: "Miami Flooring and Tile",
        date: "2 Aug 2024",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // July 2024
    {
        title: "Cementitious Backer Board Installation in Miami",
        description: "Proper backer board installation techniques for moisture-prone areas in South Florida.",
        author: "Miami Flooring and Tile",
        date: "30 Jul 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Arabesque Tiles: Moroccan Flair for Miami Homes",
        description: "Add exotic elegance with arabesque-shaped tiles perfect for Miami's eclectic style.",
        author: "Miami Flooring and Tile",
        date: "27 Jul 2024",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Soundproofing Floors in Miami Condos and Apartments",
        description: "Reduce noise transmission with proper underlayment and flooring choices for Miami multi-family buildings.",
        author: "Miami Flooring and Tile",
        date: "24 Jul 2024",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Porcelain Tile Thickness: What Miami Needs",
        description: "Choose the right tile thickness for different applications in Miami residential and commercial spaces.",
        author: "Miami Flooring and Tile",
        date: "21 Jul 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Installing Tile on Miami Wooden Subfloors",
        description: "Essential preparation steps for successful tile installation over wood subfloors in humid climates.",
        author: "Miami Flooring and Tile",
        date: "18 Jul 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Glass Tile Pool Waterlines for Miami Pools",
        description: "Choose and install stunning glass tile waterlines that withstand Miami's pool chemicals and sun.",
        author: "Miami Flooring and Tile",
        date: "15 Jul 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Vintage Cement Tile Patterns for Miami Bungalows",
        description: "Restore authentic character with vintage-inspired cement tile patterns in historic Miami homes.",
        author: "Miami Flooring and Tile",
        date: "12 Jul 2024",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Waterproofing Membranes for Miami Shower Installations",
        description: "Critical waterproofing techniques to prevent water damage in Miami bathroom renovations.",
        author: "Miami Flooring and Tile",
        date: "9 Jul 2024",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Concrete Overlay Flooring for Miami Homes",
        description: "Transform existing floors with decorative concrete overlays perfect for Miami's modern aesthetic.",
        author: "Miami Flooring and Tile",
        date: "6 Jul 2024",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Large Format Slab Tiles: Modern Miami Luxury",
        description: "Create seamless, contemporary spaces with oversized porcelain slab tiles in Miami installations.",
        author: "Miami Flooring and Tile",
        date: "3 Jul 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },

    // June 2024
    {
        title: "Preventing Efflorescence on Miami Tile Installations",
        description: "Understand and prevent white salt deposits on tiles in Miami's moisture-rich environment.",
        author: "Miami Flooring and Tile",
        date: "28 Jun 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Luxury Marble Mosaics for Miami Bathrooms",
        description: "Design stunning feature walls and floors with premium marble mosaic tiles in Miami bathrooms.",
        author: "Miami Flooring and Tile",
        date: "25 Jun 2024",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Commercial Grade Flooring for Miami Retail Spaces",
        description: "Heavy-duty flooring solutions that withstand high traffic in Miami commercial environments.",
        author: "Miami Flooring and Tile",
        date: "22 Jun 2024",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Quartz Tile vs. Granite Tile for Miami Counters",
        description: "Compare engineered quartz and natural granite tiles for Miami kitchen and bathroom surfaces.",
        author: "Miami Flooring and Tile",
        date: "19 Jun 2024",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Textured Non-Slip Tiles for Miami Elderly Care",
        description: "Safety-focused tile selections with texture and grip for senior-friendly Miami homes.",
        author: "Miami Flooring and Tile",
        date: "16 Jun 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Installing Outdoor Tile on Miami Balconies",
        description: "Weather-resistant tile installation techniques for Miami high-rise balconies and terraces.",
        author: "Miami Flooring and Tile",
        date: "13 Jun 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Rectified Tile Edge Options for Modern Miami Homes",
        description: "Achieve ultra-thin grout lines with precisely cut rectified tiles in contemporary Miami spaces.",
        author: "Miami Flooring and Tile",
        date: "10 Jun 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Refinishing vs. Replacing Terrazzo in Miami",
        description: "Decide whether to restore or replace vintage terrazzo floors in historic Miami properties.",
        author: "Miami Flooring and Tile",
        date: "7 Jun 2024",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Antimicrobial Tile Coatings for Miami Healthcare",
        description: "Hygienic flooring solutions with antimicrobial properties for Miami medical facilities.",
        author: "Miami Flooring and Tile",
        date: "4 Jun 2024",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    },
    {
        title: "Mixed Material Flooring Transitions in Miami Homes",
        description: "Create seamless transitions between tile, wood, and carpet in open-plan Miami residences.",
        author: "Miami Flooring and Tile",
        date: "1 Jun 2024",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://ui-avatars.com/api/?name=Miami+Flooring&background=1a1a1a&color=fff&size=40&bold=true"
    }
];
