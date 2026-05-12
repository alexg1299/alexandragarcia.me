import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Renders GitHub and/or Live-site icon buttons for a project.
 * Stops click propagation so parent card navigation is not triggered.
 *
 * Props:
 *   github  — GitHub repo URL (omit or null to hide)
 *   live    — Live site URL (omit or null to hide)
 */
export default function ProjectLinks({ github, live }) {
  if (!github && !live) return null;

  return (
    <div className="flex gap-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          title="View on GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/60 transition-colors"
          title="View live site"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}
