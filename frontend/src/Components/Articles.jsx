import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articlesData } from '../data/articlesData';


const Articles = () => {
  return (
    <section id="articles" className="articles">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articlesData.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-image">
              <img 
                src={article.image} 
                loading="lazy" 
                alt={article.imageAlt} 
              />
            </div>
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link to={`/article/${article.id}`} className="read-more">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;