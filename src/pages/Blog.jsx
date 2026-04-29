import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Blog() {
  const { blogPosts } = useContext(PortfolioContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts on web development, coding, and tech
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-2xl font-semibold text-gray-400 dark:text-gray-500">Coming soon</p>
            </div>
          ) : (
            blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => window.open(`/blog/${post.id}`, '_blank')}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">• {post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <span className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                Read more →
              </span>
            </article>
          ))
          )}
        </div>
      </div>
    </div>
  );
}
