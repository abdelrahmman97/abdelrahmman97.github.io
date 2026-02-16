---
title: Building Accessible Web Applications
slug: building-accessible-web-applications
description: Best practices for creating web apps that are usable by everyone, including proper ARIA attributes and keyboard navigation.
date: 2025-02-10
tags: [Accessibility, HTML]
readTime: 6 min read
---

Web accessibility (a11y) ensures that websites and applications are usable by everyone, including people with disabilities. It's not just a nice-to-have — it's essential for building inclusive products.

## Why Accessibility Matters

- **1 in 4 adults** in the US has some type of disability
- Accessible sites rank better in search engines
- It's a **legal requirement** in many countries
- Good accessibility is good UX for everyone

## Semantic HTML First

The foundation of accessibility is semantic HTML. Use the right elements for the right purpose:

```html
<!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
```

Semantic elements provide built-in keyboard support, screen reader announcements, and focus management for free.

## ARIA Attributes

When semantic HTML isn't enough, ARIA (Accessible Rich Internet Applications) attributes bridge the gap:

```html
<div role="alert" aria-live="polite">
  Your form has been submitted successfully.
</div>

<button aria-expanded="false" aria-controls="menu">
  Toggle Menu
</button>
```

### Key ARIA Rules

1. **Don't use ARIA if native HTML works** — a `<button>` is better than `<div role="button">`
2. **Don't change native semantics** — don't add `role="button"` to a `<h2>`
3. **All interactive ARIA elements must be keyboard accessible**
4. **Don't use `role="presentation"` or `aria-hidden="true"` on visible, focusable elements**

## Keyboard Navigation

Every interactive element must be reachable and operable via keyboard:

```css
/* Always provide visible focus styles */
:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

Test your app by navigating with **Tab**, **Shift+Tab**, **Enter**, and **Escape** keys.

## Color and Contrast

- Maintain a **minimum contrast ratio of 4.5:1** for normal text
- Use **3:1** for large text (18px+ or 14px+ bold)
- Never rely on color alone to convey information

## Testing Tools

- **axe DevTools** — browser extension for automated a11y audits
- **Lighthouse** — built into Chrome DevTools
- **NVDA / VoiceOver** — screen readers for manual testing
- **Keyboard-only testing** — navigate without a mouse

## Conclusion

Accessibility isn't an afterthought — it's a fundamental part of web development. By using semantic HTML, proper ARIA attributes, and keyboard navigation, you can build web applications that truly work for everyone.
