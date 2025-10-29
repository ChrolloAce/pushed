/**
 * Blog Post Data
 * 70 blog posts about flooring and tile installation in Miami
 */

const blogPosts = [
    // March 2025 - 10 posts
    {
        title: "Best Porcelain Tiles for Miami's Humid Climate",
        description: "Discover why porcelain tiles are the perfect choice for Miami homes and how they withstand humidity and moisture better than other materials.",
        author: "Carlos Rodriguez",
        date: "28 Mar 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=11"
    },
    {
        title: "Luxury Vinyl Plank vs. Hardwood: Miami Edition",
        description: "Compare LVP and hardwood flooring for South Florida homes. Learn which option offers better durability against humidity and salt air.",
        author: "Maria Gonzalez",
        date: "25 Mar 2025",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=5"
    },
    {
        title: "Travertine Tile Installation Guide for Miami Pools",
        description: "Everything you need to know about installing travertine tiles around your Miami pool area for that luxury resort feel.",
        author: "David Martinez",
        date: "22 Mar 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
        title: "How to Choose Slip-Resistant Tiles for Miami Bathrooms",
        description: "Safety first! Learn about slip-resistant tile options perfect for Miami's high-humidity bathrooms and shower areas.",
        author: "Jennifer Lee",
        date: "19 Mar 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=9"
    },
    {
        title: "Cost Guide: Tile Installation Prices in Miami 2025",
        description: "A comprehensive breakdown of tile installation costs in Miami, including materials, labor, and factors that affect pricing.",
        author: "Robert Chen",
        date: "16 Mar 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=7"
    },
    {
        title: "Marble Flooring Maintenance Tips for Miami Homes",
        description: "Keep your marble floors looking pristine in Miami's tropical climate with these expert maintenance and cleaning tips.",
        author: "Sofia Ramirez",
        date: "13 Mar 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=10"
    },
    {
        title: "Top 5 Kitchen Tile Trends in Miami for 2025",
        description: "Explore the hottest kitchen tile trends taking over Miami homes, from bold patterns to coastal-inspired designs.",
        author: "Michael Torres",
        date: "10 Mar 2025",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
        title: "Hurricane-Proof Flooring Options for Miami Residents",
        description: "Protect your investment with flooring that can withstand Miami's hurricane season and potential flooding.",
        author: "Elena Vasquez",
        date: "7 Mar 2025",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=6"
    },
    {
        title: "Ceramic vs. Porcelain: Which Tile is Right for You?",
        description: "Understand the key differences between ceramic and porcelain tiles to make the best choice for your Miami home.",
        author: "James Wilson",
        date: "4 Mar 2025",
        image: "https://images.unsplash.com/photo-1615875474908-f403e4f0946f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=8"
    },
    {
        title: "Installing Heated Floors in Miami: Is It Worth It?",
        description: "While Miami stays warm, discover scenarios where heated flooring makes sense and adds luxury to your home.",
        author: "Amanda Foster",
        date: "1 Mar 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=4"
    },

    // February 2025 - 10 posts
    {
        title: "Best Grout Colors to Match Miami's Coastal Aesthetic",
        description: "Choose the perfect grout color to complement your tiles and create that breezy, beachy Miami vibe.",
        author: "Carlos Rodriguez",
        date: "26 Feb 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=11"
    },
    {
        title: "Saltillo Tile Installation: A Miami Homeowner's Guide",
        description: "Bring rustic charm to your Miami home with authentic Saltillo tiles. Learn proper installation and sealing techniques.",
        author: "Diego Morales",
        date: "23 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=12"
    },
    {
        title: "How to Prepare Concrete Subfloors for Tile in Miami",
        description: "Essential steps for preparing concrete subfloors in Miami's climate to ensure long-lasting tile installation.",
        author: "Maria Gonzalez",
        date: "20 Feb 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=5"
    },
    {
        title: "Mosaic Tile Designs for Miami Accent Walls",
        description: "Transform your space with stunning mosaic tile accent walls. Design ideas and installation tips for Miami homes.",
        author: "Isabella Santos",
        date: "17 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
        title: "Waterproof Flooring Solutions for Miami Basements",
        description: "Keep your basement dry with the best waterproof flooring options designed for Miami's water table challenges.",
        author: "David Martinez",
        date: "14 Feb 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
        title: "Granite Tiles vs. Granite Slabs: Miami Installation Guide",
        description: "Weighing the pros and cons of granite tiles versus slabs for your Miami kitchen or bathroom renovation.",
        author: "Robert Chen",
        date: "11 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=7"
    },
    {
        title: "Eco-Friendly Flooring Options for Sustainable Miami Homes",
        description: "Go green with sustainable flooring choices that are perfect for environmentally conscious Miami homeowners.",
        author: "Emma Green",
        date: "8 Feb 2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=13"
    },
    {
        title: "Installing Large Format Tiles in Miami: Tips and Tricks",
        description: "Master the art of installing large format tiles with these professional techniques for Miami installations.",
        author: "Michael Torres",
        date: "5 Feb 2025",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
        title: "Terracotta Flooring: Perfect for Miami's Mediterranean Style",
        description: "Embrace Mediterranean elegance with terracotta flooring that complements Miami's architectural style.",
        author: "Sofia Ramirez",
        date: "2 Feb 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=10"
    },

    // January 2025 - 10 posts
    {
        title: "How to Fix Cracked Tiles in Miami's Heat",
        description: "Learn why tiles crack in Miami's extreme temperatures and how to repair them properly for lasting results.",
        author: "James Wilson",
        date: "30 Jan 2025",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=8"
    },
    {
        title: "Luxury Vinyl Tile: The Perfect Miami Condo Solution",
        description: "Discover why LVT is becoming the top choice for Miami condos, offering style, durability, and easy maintenance.",
        author: "Carlos Rodriguez",
        date: "27 Jan 2025",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=11"
    },
    {
        title: "Best Tile Sealers for Miami's Outdoor Patios",
        description: "Protect your outdoor tiles from Miami's sun, rain, and salt air with the right sealer products.",
        author: "Jennifer Lee",
        date: "24 Jan 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=9"
    },
    {
        title: "Wood-Look Tile vs. Real Hardwood in Miami",
        description: "Get the look of hardwood without the humidity concerns. Compare wood-look tiles to real hardwood for Miami homes.",
        author: "Elena Vasquez",
        date: "21 Jan 2025",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=6"
    },
    {
        title: "How to Choose the Right Tile Size for Small Miami Spaces",
        description: "Maximize your small Miami apartment or condo with smart tile sizing choices that create the illusion of space.",
        author: "Maria Gonzalez",
        date: "18 Jan 2025",
        image: "https://images.unsplash.com/photo-1615875474908-f403e4f0946f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=5"
    },
    {
        title: "Slate Flooring for Miami: Pros, Cons, and Installation",
        description: "Explore the natural beauty of slate flooring and whether it's the right choice for your Miami home.",
        author: "David Martinez",
        date: "15 Jan 2025",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
        title: "Radiant Floor Heating with Tile in Miami",
        description: "Add luxury and comfort to your Miami home with radiant heated floors beneath your tile installation.",
        author: "Amanda Foster",
        date: "12 Jan 2025",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=4"
    },
    {
        title: "Penny Tiles: A Trendy Choice for Miami Bathrooms",
        description: "Discover why penny tiles are making a comeback in Miami bathrooms and how to install them for maximum impact.",
        author: "Isabella Santos",
        date: "9 Jan 2025",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
        title: "Bamboo Flooring in Miami: What You Need to Know",
        description: "Can bamboo flooring survive Miami's humidity? Get the facts about this eco-friendly flooring option.",
        author: "Robert Chen",
        date: "6 Jan 2025",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=7"
    },
    {
        title: "How to Clean and Maintain Grout in Miami's Climate",
        description: "Keep your grout looking fresh with these cleaning and maintenance tips specifically for Miami's humid environment.",
        author: "Michael Torres",
        date: "3 Jan 2025",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=2"
    },

    // December 2024 - 10 posts
    {
        title: "Limestone Flooring: Elegance for Miami Beach Homes",
        description: "Bring timeless elegance to your Miami Beach property with beautiful limestone flooring and proper installation.",
        author: "Sofia Ramirez",
        date: "29 Dec 2024",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=10"
    },
    {
        title: "Cork Flooring: Is It Suitable for Miami Homes?",
        description: "Explore the benefits and challenges of installing cork flooring in Miami's humid subtropical climate.",
        author: "Carlos Rodriguez",
        date: "26 Dec 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=11"
    },
    {
        title: "Subway Tile Patterns for Miami Kitchen Backsplashes",
        description: "Transform your Miami kitchen with creative subway tile patterns that go beyond the traditional layout.",
        author: "Emma Green",
        date: "23 Dec 2024",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=13"
    },
    {
        title: "Best Underlayment for Tile Floors in Miami",
        description: "Choose the right underlayment to ensure your Miami tile installation is waterproof and long-lasting.",
        author: "David Martinez",
        date: "20 Dec 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
        title: "Geometric Tile Designs Taking Over Miami Homes",
        description: "Get inspired by bold geometric tile patterns that are trending in Miami's most stylish homes.",
        author: "Jennifer Lee",
        date: "17 Dec 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=9"
    },
    {
        title: "Engineered Hardwood vs. Solid Hardwood in Miami",
        description: "Learn which hardwood option performs better in Miami's challenging climate and humidity levels.",
        author: "James Wilson",
        date: "14 Dec 2024",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=8"
    },
    {
        title: "How to Install Tile on Miami Exterior Walls",
        description: "Master the techniques for installing exterior tiles that can withstand Miami's tropical weather conditions.",
        author: "Maria Gonzalez",
        date: "11 Dec 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=5"
    },
    {
        title: "Terrazzo Flooring: Miami's Classic Comeback",
        description: "Terrazzo is back! Discover why this classic Miami flooring is experiencing a major revival in modern homes.",
        author: "Diego Morales",
        date: "8 Dec 2024",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=12"
    },
    {
        title: "Laminate Flooring: Budget-Friendly Option for Miami",
        description: "Explore affordable laminate flooring options that can work in Miami homes with proper installation and care.",
        author: "Robert Chen",
        date: "5 Dec 2024",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=7"
    },
    {
        title: "Blue and White Tile Combinations for Miami Homes",
        description: "Create a fresh coastal look with stunning blue and white tile combinations perfect for Miami's beach vibe.",
        author: "Elena Vasquez",
        date: "2 Dec 2024",
        image: "https://images.unsplash.com/photo-1615875474908-f403e4f0946f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=6"
    },

    // November 2024 - 10 posts
    {
        title: "Epoxy Flooring for Miami Garages: Complete Guide",
        description: "Transform your Miami garage with durable, attractive epoxy flooring that resists stains and moisture.",
        author: "Michael Torres",
        date: "28 Nov 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
        title: "Hexagon Tiles: Modern Design for Miami Bathrooms",
        description: "Add contemporary flair to your Miami bathroom with trendy hexagon tiles in various sizes and colors.",
        author: "Isabella Santos",
        date: "25 Nov 2024",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
        title: "Polished Concrete Floors: Industrial Chic in Miami",
        description: "Embrace the industrial trend with polished concrete floors perfect for Miami lofts and modern homes.",
        author: "Amanda Foster",
        date: "22 Nov 2024",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=4"
    },
    {
        title: "How to Choose Tile for Miami Outdoor Kitchens",
        description: "Select the perfect tiles for your Miami outdoor kitchen that can handle heat, moisture, and frequent use.",
        author: "Carlos Rodriguez",
        date: "19 Nov 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=11"
    },
    {
        title: "Acrylic vs. Epoxy Grout for Miami Tile Installations",
        description: "Compare grout types to find the best option for Miami's humidity and prevent mold and mildew growth.",
        author: "Sofia Ramirez",
        date: "16 Nov 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=10"
    },
    {
        title: "Herringbone Pattern: Classic Flooring for Miami Homes",
        description: "Install timeless herringbone pattern flooring that adds sophistication to any Miami interior.",
        author: "David Martinez",
        date: "13 Nov 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
        title: "Matte vs. Glossy Tiles: Which is Better for Miami?",
        description: "Understand the pros and cons of matte and glossy tile finishes for different areas of your Miami home.",
        author: "Jennifer Lee",
        date: "10 Nov 2024",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=9"
    },
    {
        title: "Natural Stone Tile Care in Miami's Salty Air",
        description: "Protect and maintain your natural stone tiles from damage caused by Miami's coastal salt air exposure.",
        author: "Emma Green",
        date: "7 Nov 2024",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=13"
    },
    {
        title: "Commercial Tile Installation for Miami Businesses",
        description: "Heavy-duty tile solutions for Miami commercial spaces that handle high traffic and look professional.",
        author: "Robert Chen",
        date: "4 Nov 2024",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=7"
    },
    {
        title: "Chevron vs. Herringbone: Miami Floor Pattern Guide",
        description: "Learn the difference between chevron and herringbone patterns and which works best for Miami interiors.",
        author: "Maria Gonzalez",
        date: "1 Nov 2024",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=5"
    },

    // October 2024 - 10 posts
    {
        title: "Onyx Tiles: Luxury Statement for Miami Properties",
        description: "Create stunning focal points with translucent onyx tiles perfect for high-end Miami residences.",
        author: "James Wilson",
        date: "29 Oct 2024",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=8"
    },
    {
        title: "How to Remove Old Tile Flooring in Miami Homes",
        description: "Step-by-step guide to safely removing old tiles and preparing for new flooring installation in Miami.",
        author: "Diego Morales",
        date: "26 Oct 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=12"
    },
    {
        title: "Pebble Tile Showers: Spa-Like Bathrooms in Miami",
        description: "Transform your Miami bathroom into a relaxing spa retreat with natural pebble tile shower floors.",
        author: "Elena Vasquez",
        date: "23 Oct 2024",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=6"
    },
    {
        title: "Waterproof Vinyl Plank for Miami Laundry Rooms",
        description: "The best waterproof vinyl plank options for Miami laundry rooms prone to spills and moisture.",
        author: "Michael Torres",
        date: "20 Oct 2024",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
        title: "Encaustic Cement Tiles: Artistic Flooring for Miami",
        description: "Add vibrant patterns and personality to your Miami home with handmade encaustic cement tiles.",
        author: "Isabella Santos",
        date: "17 Oct 2024",
        image: "https://images.unsplash.com/photo-1615875474908-f403e4f0946f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
        title: "Best Transition Strips for Miami Tile Installations",
        description: "Create seamless transitions between different flooring types in your Miami home with the right strips.",
        author: "Carlos Rodriguez",
        date: "14 Oct 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=11"
    },
    {
        title: "Glass Tile Backsplashes for Modern Miami Kitchens",
        description: "Illuminate your Miami kitchen with reflective glass tile backsplashes in stunning colors and patterns.",
        author: "Amanda Foster",
        date: "11 Oct 2024",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=4"
    },
    {
        title: "Preventing Mold on Tile and Grout in Miami",
        description: "Essential prevention strategies to keep your Miami tile and grout mold-free in humid conditions.",
        author: "Sofia Ramirez",
        date: "8 Oct 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=10"
    },
    {
        title: "Quarry Tiles: Durable Flooring for Miami Patios",
        description: "Discover the benefits of quarry tiles for outdoor Miami spaces that need durability and style.",
        author: "David Martinez",
        date: "5 Oct 2024",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
        title: "DIY Tile Installation vs. Hiring Miami Professionals",
        description: "Weigh the pros and cons of DIY tile installation versus hiring experienced Miami tile contractors.",
        author: "Robert Chen",
        date: "2 Oct 2024",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=7"
    },

    // September 2024 - 10 posts
    {
        title: "Rectified vs. Non-Rectified Tiles for Miami Homes",
        description: "Understand the difference between rectified and non-rectified tiles and which suits Miami installations better.",
        author: "Jennifer Lee",
        date: "28 Sep 2024",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=9"
    },
    {
        title: "Colored Grout Trends in Miami Interior Design",
        description: "Make a statement with colored grout! Explore trending grout colors transforming Miami tile installations.",
        author: "Emma Green",
        date: "25 Sep 2024",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=13"
    },
    {
        title: "Acid-Washed Concrete Floors for Miami Art Studios",
        description: "Create unique, artistic flooring with acid-washed concrete perfect for Miami's creative spaces.",
        author: "Maria Gonzalez",
        date: "22 Sep 2024",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=5"
    },
    {
        title: "Floor Leveling Before Tile Installation in Miami",
        description: "Why floor leveling is crucial for Miami tile installations and how to do it correctly.",
        author: "James Wilson",
        date: "19 Sep 2024",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=8"
    },
    {
        title: "Zellige Tiles: Moroccan Style for Miami Interiors",
        description: "Bring handcrafted Moroccan zellige tiles to your Miami home for an exotic, artisanal touch.",
        author: "Diego Morales",
        date: "16 Sep 2024",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=12"
    },
    {
        title: "Best Floor Tiles for Miami Pet Owners",
        description: "Scratch-resistant, easy-to-clean tile options perfect for Miami homes with dogs and cats.",
        author: "Michael Torres",
        date: "13 Sep 2024",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
        title: "Arabesque Tile Patterns for Miami Backsplashes",
        description: "Add elegant curves and sophistication with arabesque tile patterns in your Miami kitchen or bath.",
        author: "Elena Vasquez",
        date: "10 Sep 2024",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=6"
    },
    {
        title: "Rubber Flooring for Miami Home Gyms",
        description: "Choose the right rubber flooring for your Miami home gym that handles equipment and moisture.",
        author: "Carlos Rodriguez",
        date: "7 Sep 2024",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=11"
    },
    {
        title: "Porcelain Pavers for Miami Pool Decks",
        description: "Install slip-resistant porcelain pavers around your Miami pool for safety and stunning aesthetics.",
        author: "Isabella Santos",
        date: "4 Sep 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
        title: "How to Match Tile Colors to Miami's Natural Light",
        description: "Select tile colors that complement Miami's abundant natural sunlight for perfect ambiance.",
        author: "Amanda Foster",
        date: "1 Sep 2024",
        image: "https://images.unsplash.com/photo-1615875474908-f403e4f0946f?w=400&h=250&fit=crop",
        avatar: "https://i.pravatar.cc/40?img=4"
    }
];

