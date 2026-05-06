import React from 'react';

/**
 * TechBadge — displays a single technology/skill tag pill.
 *
 * Props:
 *  - label   (string)  — the technology name to display
 *  - variant (string)  — 'default' | 'gradient'
 *      'default'  → subtle gray/dark background (used on project cards and skill lists)
 *      'gradient' → purple-to-pink gradient (used on experience detail page)
 */
export default function TechBadge({ label, variant = 'default' }) {
  const styles = {
    default:
      'px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm',
    gradient:
      'px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold',
  };

  return <span className={styles[variant] ?? styles.default}>{label}</span>;
}
