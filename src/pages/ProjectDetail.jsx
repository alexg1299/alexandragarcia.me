import React, { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Code, Github, ExternalLink, ChevronLeft, ChevronRight, Play, X, Expand } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';
import BackButton from '../components/ui/BackButton';
import TechBadge from '../components/ui/TechBadge';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { projectsData } = useContext(PortfolioContext);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
          <BackButton />
        </div>
      </div>
    );
  }

  const images = project.images || [];
  const videos = project.videos || [];

  const prevImage = useCallback(() => setActiveImage(i => (i - 1 + images.length) % images.length), [images.length]);
  const nextImage = useCallback(() => setActiveImage(i => (i + 1) % images.length), [images.length]);

  // Auto-cycle every 4 seconds, pause when lightbox is open or user hovers
  useEffect(() => {
    if (images.length <= 1 || isPaused || lightboxOpen) return;
    intervalRef.current = setInterval(nextImage, 4000);
    return () => clearInterval(intervalRef.current);
  }, [images.length, isPaused, lightboxOpen, nextImage]);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e) => { if (e.key === 'Escape') setLightboxOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      {/* Back navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-4">
        <BackButton />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Hero image or gradient banner */}
        {images.length > 0 ? (
          <div
            className="relative rounded-2xl overflow-hidden mb-8 bg-black group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Clickable image */}
            <button
              className="w-full focus:outline-none"
              onClick={() => setLightboxOpen(true)}
              title="Click to expand"
            >
              <img
                src={images[activeImage].src}
                alt={images[activeImage].caption}
                className="w-full h-80 object-contain transition-opacity duration-500"
              />
            </button>

            {/* Expand hint */}
            <div className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity pointer-events-none">
              <Expand className="w-4 h-4" />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeImage ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            {images[activeImage].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-10 pt-6 pointer-events-none">
                <p className="text-white text-sm">{images[activeImage].caption}</p>
              </div>
            )}
          </div>
        ) : (
          <div className={`h-64 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-8`}>
            <Code className="w-24 h-24 text-white opacity-50" />
          </div>
        )}

        {/* Lightbox modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={images[activeImage].src}
              alt={images[activeImage].caption}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            {images[activeImage].caption && (
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center px-4">
                {images[activeImage].caption}
              </p>
            )}
          </div>
        )}

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  i === activeImage
                    ? 'border-purple-500 opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-90'
                }`}
              >
                <img src={img.src} alt={img.caption} className="w-24 h-16 object-cover" />
              </button>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>

        {/* Tech stack pills — gradient variant */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <TechBadge key={i} label={tech} variant="gradient" />
          ))}
        </div>

        <div className="space-y-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
            <p>{project.fullDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Challenges</h2>
            <p>{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results & Impact</h2>
            <p>{project.results}</p>
          </div>

          {/* Voiceover / Demo Videos */}
          {videos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Play className="w-6 h-6 text-purple-500" />
                {project.videoTitle || 'Demo Videos'}
              </h2>
              {project.videoDescription && (
                <p className="text-gray-500 dark:text-gray-400 text-base mb-6">{project.videoDescription}</p>
              )}
              <div className="space-y-6">
                {videos.map((video, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden bg-black">
                    <p className="text-sm font-semibold text-white bg-gray-800 px-4 py-2">{video.title}</p>
                    <video
                      controls
                      preload="metadata"
                      className="w-full max-h-[480px]"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {project.github && (
              <a href={project.github} className="flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-800 transition-all">
                <Github className="w-5 h-5" /> View Code
              </a>
            )}
            {project.live && (
              <a href={project.live} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
