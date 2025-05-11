import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { articlesData } from '../data/articlesData';


const ArticleDetails = () => {
  const { id } = useParams();
  const article = articlesData.find(article => article.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (article) {
      document.title = `${article.title} - Article`;
    }
    
    return () => {
      document.title = 'Sehty';
    };
  }, [article]);

  if (!article) {
    return (
      <div className="article-detail">
        <div className="not-found">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/Awareness" className="back-link">
            <ArrowLeft size={16} />
            Back to Awareness
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <img 
          src={article.image} 
          alt={article.imageAlt} 
          className="hero-image"
        />
        <div className="hero-content">
          <div>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-metadata">
              <div className="metadata-item">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="metadata-item">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="metadata-item">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="article-body">
        <Link to="/Awareness" className="back-link">
          <ArrowLeft size={16} />
          Back to Awareness
        </Link>

        <div className="article-content">
          <p>
            {article.fullContent?.intro || article.excerpt}
          </p>

          <h2>The Importance of a Healthy Lifestyle</h2>
          <p>
            A healthy lifestyle is crucial for overall well-being. It encompasses various aspects, including proper nutrition, regular physical activity, adequate sleep, and stress management. By adopting healthy habits, individuals can improve their quality of life, prevent chronic diseases, and promote longevity.
          </p>

          <h2>Key Components</h2>
          <ul>
            <li>Balanced diet rich in fruits, vegetables, and whole grains</li>
            <li>Regular physical activity for at least 30 minutes a day</li>
            <li>Adequate sleep of 7-9 hours per night</li>
            <li>Stress management techniques such as meditation and deep breathing</li>
            <li>Avoiding harmful habits like smoking and excessive alcohol consumption</li>
          </ul>

          <h2>Benefits of a Healthy Lifestyle</h2>
          <p>
            Adopting a healthy lifestyle offers numerous benefits. It can help maintain a healthy weight, reduce the risk of chronic diseases such as heart disease, diabetes, and certain cancers, improve mental health, boost energy levels, and enhance overall quality of life.
          </p>

          <blockquote className="article-quote">
            "The greatest wealth is health." — Virgil
          </blockquote>

          <p>
            In conclusion, a healthy lifestyle is essential for physical, mental, and emotional well-being. By making conscious choices about diet, physical activity, sleep, and stress management, individuals can lead healthier, happier, and more fulfilling lives.
          </p>
        </div>
      </div>

      <div className="related-articles">
        <h2>Related Articles</h2>
        <div className="related-grid">
          {articlesData
            .filter(a => a.id !== id)
            .slice(0, 3)
            .map(article => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img 
                    src={article.image} 
                    alt={article.imageAlt} 
                  />
                </div>
                <div className="article-content">
                  <div className="article-metadata">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link to={`/article/${article.id}`} className="read-more">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;