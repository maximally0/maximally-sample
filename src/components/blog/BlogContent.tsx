
import React from 'react';
import { BlogPost } from '@/types/blog';
import { ExternalLink } from 'lucide-react';

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
            
            {/* Content varies based on blog post category */}
            {post.category === "Gut Health" && (
              <>
                <h2>The Importance of Gut Health</h2>
                <p>
                  Your gut microbiome consists of trillions of bacteria, fungi, and other microbes that play crucial roles in digestion, immune function, and even mental health. Modern research has revealed that these tiny organisms have a profound impact on nearly every aspect of our health.
                </p>
                
                <p>
                  The <a href="https://www.nature.com/articles/s41575-020-0269-9" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline inline-flex items-center">Human Microbiome Project <ExternalLink className="ml-1 w-3 h-3" /></a> has been instrumental in helping us understand these complex relationships. When the balance of microbes in your gut becomes disrupted, a condition known as dysbiosis, it can lead to various health issues including:
                </p>
                
                <ul>
                  <li>Digestive problems (bloating, gas, diarrhea)</li>
                  <li>Weakened immune response</li>
                  <li>Chronic inflammation</li>
                  <li>Mood disorders</li>
                  <li>Skin conditions</li>
                </ul>
              </>
            )}

            {post.category === "Immunity" && (
              <>
                <h2>The Gut-Immunity Connection</h2>
                <p>
                  Did you know that approximately 70% of your immune system is located in your gut? The gut-associated lymphoid tissue (GALT) is the largest immune organ in the body, making the connection between gut health and immunity undeniable.
                </p>
                
                <p>
                  According to research published in the <a href="https://www.frontiersin.org/journals/immunology" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline inline-flex items-center">Frontiers in Immunology <ExternalLink className="ml-1 w-3 h-3" /></a>, probiotics can modulate immune responses through several mechanisms:
                </p>
                
                <ul>
                  <li>Enhancing the intestinal barrier function</li>
                  <li>Competing with pathogens for nutrients and binding sites</li>
                  <li>Producing antimicrobial substances</li>
                  <li>Regulating the production of cytokines</li>
                  <li>Activating immune cells like T-cells and natural killer cells</li>
                </ul>
              </>
            )}

            {post.category === "Mental Health" && (
              <>
                <h2>Understanding the Gut-Brain Axis</h2>
                <p>
                  The bidirectional communication pathway between your gut and brain, often called the gut-brain axis, is revolutionizing how we understand mental health. This complex network includes the central nervous system, enteric nervous system, and vagus nerve.
                </p>
                
                <p>
                  The <a href="https://www.sciencedirect.com/journal/cell" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline inline-flex items-center">journal Cell <ExternalLink className="ml-1 w-3 h-3" /></a> has published groundbreaking research showing that gut bacteria can produce neurotransmitters like serotonin, dopamine, and GABA — the same chemicals that regulate mood in the brain. This helps explain why:
                </p>
                
                <ul>
                  <li>Digestive disorders are often comorbid with anxiety and depression</li>
                  <li>Stress can trigger gastrointestinal symptoms</li>
                  <li>Probiotic interventions may improve some mental health conditions</li>
                  <li>Diet quality is increasingly linked to mental wellbeing</li>
                </ul>
              </>
            )}

            {post.category === "Performance" && (
              <>
                <h2>Probiotics for Athletic Performance</h2>
                <p>
                  Elite athletes and fitness enthusiasts are increasingly turning to probiotics to gain a competitive edge. The science behind this trend is compelling and multifaceted.
                </p>
                
                <p>
                  According to the <a href="https://jissn.biomedcentral.com/" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline inline-flex items-center">Journal of the International Society of Sports Nutrition <ExternalLink className="ml-1 w-3 h-3" /></a>, probiotics can benefit athletes in several ways:
                </p>
                
                <ul>
                  <li>Reducing the incidence and duration of respiratory tract infections</li>
                  <li>Enhancing recovery by reducing inflammation and oxidative stress</li>
                  <li>Improving nutrient absorption for better energy utilization</li>
                  <li>Maintaining gut barrier function during intense training</li>
                  <li>Supporting immune function during periods of high physical stress</li>
                </ul>
              </>
            )}

            {post.category === "Science" && (
              <>
                <h2>The Science Behind Probiotics</h2>
                <p>
                  The scientific understanding of probiotics has advanced significantly in recent years, with research moving beyond simply cataloging bacterial species to understanding their functional impacts on human health.
                </p>
                
                <p>
                  The <a href="https://www.nature.com/nature" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline inline-flex items-center">Nature journal <ExternalLink className="ml-1 w-3 h-3" /></a> has published numerous studies demonstrating that probiotic effects are often strain-specific, meaning that different bacterial strains within the same species can have vastly different effects on health.
                </p>
                
                <ul>
                  <li>Lactobacillus rhamnosus GG may reduce the risk of certain allergies</li>
                  <li>Bifidobacterium longum has shown promise for alleviating symptoms of depression</li>
                  <li>Lactobacillus plantarum 299v can help reduce IBS symptoms</li>
                  <li>Saccharomyces boulardii is effective against several types of diarrhea</li>
                </ul>
              </>
            )}

            {post.category === "Product Guide" && (
              <>
                <h2>Navigating Probiotic Products</h2>
                <p>
                  The probiotic supplement market has exploded in recent years, making it increasingly difficult for consumers to make informed choices. Understanding what to look for is essential for finding effective products.
                </p>
                
                <p>
                  Experts at the <a href="https://isappscience.org/" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline inline-flex items-center">International Scientific Association for Probiotics and Prebiotics <ExternalLink className="ml-1 w-3 h-3" /></a> recommend considering these factors when selecting probiotics:
                </p>
                
                <ul>
                  <li>Strain specificity - look for products that list specific strains, not just species</li>
                  <li>CFU count - ensure adequate amounts of live bacteria (typically billions)</li>
                  <li>Stability and shelf-life - many probiotics require refrigeration to remain viable</li>
                  <li>Evidence-based formulations - products backed by clinical research</li>
                  <li>Third-party testing - verification of potency and purity</li>
                </ul>
              </>
            )}
            
            <h2>Maximally's Approach to Probiotics</h2>
            <p>
              At Maximally, we believe in science-backed formulations. Our probiotic blends are developed based on the latest research and contain clinically studied strains at effective dosages. We prioritize quality, potency, and transparency in everything we do.
            </p>
            
            <p>
              For more information on probiotic research, we recommend visiting the <a href="https://www.ncbi.nlm.nih.gov/pmc/" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline inline-flex items-center">PubMed Central database <ExternalLink className="ml-1 w-3 h-3" /></a>, which contains thousands of peer-reviewed studies on probiotics and gut health.
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
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-950">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
