import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function BlogPost() {
  const { postId } = useParams();
  const { blogPosts } = useContext(PortfolioContext);
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </button>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">• {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {post.content}
          </p>
        </div>
      </article>
    </div>
  );
}
