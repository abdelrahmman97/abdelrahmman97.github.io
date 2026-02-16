---
title: Getting Started with Angular Signals
slug: getting-started-with-angular-signals
description: An introduction to Angular's reactive primitive, signals, and how they simplify state management in modern Angular applications.
date: 2025-01-15
tags: [Angular, TypeScript]
readTime: 5 min read
---

Angular Signals represent a fundamental shift in how we handle reactivity in Angular applications. Introduced as a developer preview in Angular 16 and stabilized in Angular 17, signals provide a simpler, more predictable way to manage state.

## What Are Signals?

A signal is a wrapper around a value that notifies interested consumers when that value changes. Unlike RxJS observables, signals are **synchronous** and always have a current value.

```typescript
import { signal, computed, effect } from '@angular/core';

// Create a writable signal
const count = signal(0);

// Read the value
console.log(count()); // 0

// Update the value
count.set(5);
count.update(v => v + 1);
```

## Computed Signals

Computed signals derive their value from other signals. They're lazy — they only recalculate when read, and they cache their result.

```typescript
const firstName = signal('John');
const lastName = signal('Doe');

const fullName = computed(() => `${firstName()} ${lastName()}`);

console.log(fullName()); // "John Doe"
```

## Effects

Effects are operations that run whenever one or more signal values change. They're useful for side effects like logging or syncing with external systems.

```typescript
effect(() => {
  console.log(`Count changed to: ${count()}`);
});
```

## Using Signals in Components

Signals integrate naturally with Angular's template system:

```typescript
@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
  `,
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }
}
```

## Why Signals Over RxJS?

| Feature | Signals | RxJS |
|---------|---------|------|
| Synchronous | Yes | No |
| Always has value | Yes | No |
| Learning curve | Low | High |
| Use case | UI state | Async streams |

Signals don't replace RxJS — they complement it. Use signals for synchronous UI state and RxJS for complex async operations like HTTP requests.

## Conclusion

Angular Signals simplify reactive programming in Angular. They're easy to learn, integrate well with templates, and provide excellent performance through fine-grained reactivity. Start using them today in your Angular 17+ projects!
