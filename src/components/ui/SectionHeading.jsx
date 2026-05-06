import React from 'react';

/**
 * SectionHeading — a consistent page/section title used across all major sections.
 *
 * Props:
 *  - children  (node)    — heading text content
 *  - className (string)  — optional extra classes to override/extend defaults
 */
export default function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white ${className}`}
    >
      {children}
    </h2>
  );
}
