
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { CalendarDays, User, ArrowRight, Clock, Tag } from 'lucide-react';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Science of Gut Health: Why Probiotics Matter",
    excerpt: "New research shows the profound impact of gut bacteria on overall health and wellbeing. Discover how probiotics help maintain this delicate ecosystem.",
    author: "Dr. Sarah Johnson",
    date: "May 15, 2023",
    readTime: "7 min read",
    category: "Gut Health",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
  },
  {
    id: 2,
    title: "Probiotics and Immunity: The Surprising Connection",
    excerpt: "Did you know that 70% of your immune system resides in your gut? Learn how the right probiotics can enhance your body's natural defenses.",
    author: "Dr. Michael Chen",
    date: "June 2, 2023",
    readTime: "5 min read",
    category: "Immunity",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "The Gut-Brain Axis: How Your Microbiome Affects Your Mood",
    excerpt: "Emerging research reveals the fascinating connection between gut bacteria and mental health. Explore how probiotics might influence mood and cognitive function.",
    author: "Dr. Emily Rodriguez",
    date: "July 10, 2023",
    readTime: "8 min read",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1559757175-7cb056fba93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1541&q=80"
  },
  {
    id: 4,
    title: "Probiotics for Athletes: Enhancing Performance and Recovery",
    excerpt: "How top athletes are incorporating probiotics into their training regimen to improve performance, reduce recovery time, and maintain peak condition.",
    author: "Mark Thompson",
    date: "August 5, 2023",
    readTime: "6 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Choosing the Right Probiotic: What Science Says",
    excerpt: "Not all probiotics are created equal. Learn how to decode labels, understand strain specificity, and select the right product for your health goals.",
    author: "Dr. Sarah Johnson",
    date: "September 12, 2023",
    readTime: "9 min read",
    category: "Product Guide",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    id: 6,
    title: "The Truth About Probiotic Supplements: Separating Fact from Fiction",
    excerpt: "With so many claims in the marketplace, it's hard to know what's real. We break down the research to help you make informed decisions about probiotic supplements.",
    author: "Dr. Michael Chen",
    date: "October 3, 2023",
    readTime: "7 min read",
    category: "Science",
    image: "https://images.unsplash.com/photo-1581595219315-a2f6c9a528fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Featured categories
const categories = ["Gut Health", "Immunity", "Mental Health", "Performance", "Science", "Product Guide"];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f3f3]">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#00E5FF]/10 to-[#4ADE80]/10">
          <div className="maximally-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-maximally-900">
                Maximally Blog
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Transparent science, honest information, and actionable insights for your gut health journey.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href={`#${category.toLowerCase().replace(' ', '-')}`}
                    className="px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-gray-700 hover:bg-[#00E5FF]/10 transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <h2 className="font-serif text-3xl font-bold mb-10 text-maximally-900">Featured Article</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-lg aspect-video shadow-lg">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-maximally-900">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-700 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-[#4ADE80]/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-[#4ADE80]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{blogPosts[0].author}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                </div>
                
                <CTAButton 
                  text="Read Full Article" 
                  href="#" 
                  variant="outline" 
                  size="md" 
                  withArrow
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Articles */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="maximally-container">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-maximally-900">Recent Articles</h2>
              <a href="#" className="flex items-center text-[#00E5FF] font-medium hover:underline">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-102">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarDays className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2 text-maximally-900">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#4ADE80]/10 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-[#4ADE80]" />
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      
                      <a href="#" className="text-[#00E5FF] font-medium text-sm hover:underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Topics Section */}
        <section className="py-16 bg-white">
          <div className="maximally-container">
            <h2 className="font-serif text-3xl font-bold mb-10 text-maximally-900">Browse by Topic</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="group bg-[#F9FAFB] hover:bg-[#00E5FF]/10 p-6 rounded-lg text-center transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-4 shadow-sm group-hover:bg-white">
                    <Tag className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <h3 className="font-medium">{category}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {Math.floor(Math.random() * 20) + 5} Articles
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-[#00E5FF] to-[#4ADE80] text-white">
          <div className="maximally-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold mb-6">Stay Up to Date</h2>
              <p className="text-lg mb-8">
                Subscribe to our newsletter for the latest articles, health tips, and product updates. We respect your privacy and will never share your information.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg focus:outline-none text-gray-800 flex-grow"
                />
                <button className="px-6 py-3 bg-[#FF4D4D] text-white rounded-lg font-medium hover:bg-[#FF4D4D]/90 transition-colors sharp-border-red">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
