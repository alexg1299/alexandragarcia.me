import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * BackButton — a consistent "back" navigation link used across detail pages.
 *
 * Props:
 *  - to   (string) — the route to navigate to (default: '/')
 *  - label (string) — button text (default: 'Back to Portfolio')
 */
export default function BackButton({ to = '/', label = 'Back to Portfolio' }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline mb-8"
    >
      <ArrowLeft className="w-5 h-5" />
      {label}
    </button>
  );
}
