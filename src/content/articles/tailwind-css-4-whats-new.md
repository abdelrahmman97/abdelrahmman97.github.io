---
title: "Tailwind CSS 4: What's New"
slug: tailwind-css-4-whats-new
description: Exploring the latest features in Tailwind CSS v4 including the new engine, custom variants, and performance improvements.
date: 2025-02-01
tags: [CSS, TailwindCSS]
readTime: 4 min read
---

Tailwind CSS v4 is a major leap forward, featuring a completely rewritten engine built in Rust for blazing-fast performance. Let's explore what's new.

## The New Oxide Engine

Tailwind CSS v4 introduces the **Oxide engine**, rewritten from the ground up in Rust. The result? Build times that are up to **10x faster** than v3.

## CSS-First Configuration

Gone is the `tailwind.config.js` file. In v4, you configure everything directly in CSS:

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --breakpoint-3xl: 1920px;
}
```

## New `@custom-variant` Directive

Define your own variants right in CSS:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Automatic Content Detection

Tailwind v4 automatically detects your template files — no more configuring `content` paths manually.

## Improved Performance

The new engine delivers:

- **10x faster** full builds
- **100x faster** incremental builds
- Smaller output CSS files
- Better tree-shaking

## Migration from v3

The migration is straightforward for most projects:

1. Update the package to v4
2. Replace `tailwind.config.js` with CSS-based configuration
3. Update any deprecated utilities
4. Test and verify

## Conclusion

Tailwind CSS v4 is a massive upgrade in both performance and developer experience. The CSS-first approach feels more natural, and the speed improvements make the development workflow even smoother.
