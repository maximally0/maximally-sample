
import React from 'react';
import { BlogPost } from '@/types/blog';

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent = ({ post }: BlogContentProps) => {
  return (
    <section className="py-12">
      <div className="maximally-container">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-medium mb-8 text-gray-700 leading-relaxed">
              {post.excerpt}
            </p>
            
            <h2>The Importance of Gut Health</h2>
            <p>
              Your gut microbiome consists of trillions of bacteria, fungi, and other microbes that play crucial roles in digestion, immune function, and even mental health. Modern research has revealed that these tiny organisms have a profound impact on nearly every aspect of our health.
            </p>
            
            <p>
              When the balance of microbes in your gut becomes disrupted, a condition known as dysbiosis, it can lead to various health issues including:
            </p>
            
            <ul>
              <li>Digestive problems (bloating, gas, diarrhea)</li>
              <li>Weakened immune response</li>
              <li>Chronic inflammation</li>
              <li>Mood disorders</li>
              <li>Skin conditions</li>
            </ul>
            
            <h2>How Probiotics Make a Difference</h2>
            <p>
              Probiotics are live beneficial bacteria that, when consumed in adequate amounts, confer a health benefit. They work through several mechanisms:
            </p>
            
            <ul>
              <li>Competing with harmful bacteria for resources and attachment sites</li>
              <li>Producing substances that inhibit pathogen growth</li>
              <li>Strengthening the gut barrier function</li>
              <li>Modulating immune responses</li>
              <li>Producing beneficial metabolites like short-chain fatty acids</li>
            </ul>
            
            <h2>Choosing the Right Probiotic</h2>
            <p>
              Not all probiotics are created equal. Different strains have different effects, and the quality of probiotic supplements varies widely. When selecting a probiotic, consider:
            </p>
            
            <ul>
              <li>Specific strains included and their research backing</li>
              <li>Colony-forming units (CFUs) - a measure of viable bacteria</li>
              <li>Delivery method and shelf stability</li>
              <li>Quality control and third-party testing</li>
            </ul>
            
            <h2>Maximally's Approach to Probiotics</h2>
            <p>
              At Maximally, we believe in science-backed formulations. Our probiotic blends are developed based on the latest research and contain clinically studied strains at effective dosages. We prioritize quality, potency, and transparency in everything we do.
            </p>
            
            <p>
              Our commitment to gut health extends beyond supplements. We believe in a holistic approach that includes dietary considerations, lifestyle factors, and personalized solutions. We're dedicated to helping you achieve optimal gut health through evidence-based information and premium products.
            </p>
            
            <h2>Conclusion</h2>
            <p>
              Understanding the science behind gut health and probiotics empowers you to make informed decisions about your health. By nurturing your gut microbiome with the right probiotics and supportive lifestyle choices, you can support not just digestive health, but your overall wellbeing.
            </p>
          </div>
          
          {/* Share section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-medium text-lg mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </button>
              <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </button>
              <button className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-950">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
