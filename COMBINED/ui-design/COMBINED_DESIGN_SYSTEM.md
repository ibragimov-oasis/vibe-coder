# COMBINED_DESIGN_SYSTEM.md — Vibe-Coder Arsenal UI/UX Reference

> **Master UI/UX Design System**
> This guide combines design resources from Galaxy, shadcn/ui, UI UX Pro Max, and Pretext.
> Last updated: 2026-04-01

---

## Overview

The Vibe-Coder Arsenal includes 4 powerful UI/UX resources:

| Resource | Best For | Key Feature |
|----------|----------|-------------|
| **Galaxy** | UI Elements | 3,000+ components from Uiverse.io |
| **shadcn/ui** | React Components | Customizable, accessible components |
| **UI UX Pro Max** | Design Rules | 161 reasoning rules + 67 styles |
| **Pretext** | Text Layout | Advanced text measurement & layout |

---

## 🌌 Galaxy — 3,000+ UI Elements

**Location:** `UI-UX/galaxy/`

### What It Is

Galaxy is a collection of over 3,000 unique UI elements from [Uiverse.io](https://uiverse.io/). Every element is sourced from the main platform and automatically curated.

### Available Components

| Category | Location | Description |
|----------|----------|-------------|
| Buttons | `Buttons/` | Various button styles and effects |
| Cards | `Cards/` | Card layouts and designs |
| Checkboxes | `Checkboxes/` | Custom checkbox styles |
| Forms | `Forms/` | Form layouts and inputs |
| Inputs | `Inputs/` | Text inputs and fields |
| Loaders | `loaders/` | Loading animations |
| Notifications | `Notifications/` | Alert and notification styles |
| Patterns | `Patterns/` | Background patterns |
| Radio Buttons | `Radio-buttons/` | Radio button styles |
| Toggle Switches | `Toggle-switches/` | Toggle and switch controls |
| Tooltips | `Tooltips/` | Tooltip designs |

### Usage

Browse components on [Uiverse.io](https://uiverse.io/) for visual preview, then find the code in the corresponding folder.

### License

All UI elements are available under the **MIT License**. Attribution appreciated but not required.

---

## 🎨 shadcn/ui — React Components

**Location:** `COMBINED/ui-design/ui-components-shadcn/`

### What It Is

A set of beautifully designed components that you can customize, extend, and build on. Start here, then make it your own. Open Source. Open Code.

### Philosophy

- **Not a component library** — It's a collection of re-usable components
- **Copy and paste** — Add components directly to your project
- **Customizable** — Use your own styling system
- **Accessible** — Built on Radix UI primitives

### Key Features

- Based on Radix UI primitives
- Styled with Tailwind CSS
- Full TypeScript support
- Dark mode out of the box
- Fully accessible

### Available Components

The component library includes:
- Accordion, Alert, Alert Dialog
- Avatar, Badge, Button
- Calendar, Card, Carousel
- Checkbox, Collapsible, Combobox
- Command, Context Menu, Data Table
- Dialog, Drawer, Dropdown Menu
- Form, Hover Card, Input
- Label, Menubar, Navigation Menu
- Popover, Progress, Radio Group
- Scroll Area, Select, Separator
- Sheet, Skeleton, Slider
- Switch, Table, Tabs
- Textarea, Toast, Toggle
- Tooltip, and more...

### Installation

Visit [ui.shadcn.com](https://ui.shadcn.com/) for installation instructions specific to your framework.

### Project Structure

```
ui/
├── apps/
│   └── v4/
│       └── registry/
│           └── bases/
│               ├── base/      # Base UI components
│               └── radix/     # Radix-based components
├── packages/                  # Shared packages
├── templates/                 # Starter templates
└── skills/                    # AI skills
```

---

## 🧠 UI UX Pro Max — Design Intelligence

**Location:** `UI-UX/ui-ux-pro-max-skill/`

### What It Is

A comprehensive skill for AI-powered UI/UX design with 161 reasoning rules and 67 styles. This skill enables AI to generate thoughtful, well-designed interfaces.

### Key Features

- **161 Reasoning Rules** — Guidelines for design decisions
- **67 Design Styles** — Various UI style patterns
- **Framework Agnostic** — Works with any UI framework
- **Accessibility Focus** — WCAG compliance built-in

### Design Principles

#### 1. Visual Hierarchy
- Use size, color, and spacing to guide attention
- Most important elements should be most prominent
- Create clear reading paths

#### 2. Consistency
- Reuse patterns across the application
- Maintain consistent spacing, colors, typography
- Follow established conventions

#### 3. Accessibility
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation support
- Screen reader compatibility
- Clear focus indicators

#### 4. Responsiveness
- Mobile-first approach
- Flexible layouts (flexbox, grid)
- Appropriate breakpoints
- Touch-friendly targets

#### 5. Feedback
- Clear loading states
- Error messages with solutions
- Success confirmations
- Progress indicators

### Style Categories

| Category | Examples |
|----------|----------|
| Minimalist | Clean, whitespace-heavy, simple |
| Material | Google Material Design patterns |
| Glassmorphism | Frosted glass effects |
| Neumorphism | Soft UI, extruded shapes |
| Dark Mode | Dark backgrounds, light text |
| Gradient | Color gradients, vibrant |
| Brutalist | Raw, unpolished aesthetic |

---

## 📝 Pretext — Text Layout Engine

**Location:** `COMBINED/mcp-servers/mcp-pretext/`

### What It Is

Pure JavaScript/TypeScript library for multiline text measurement & layout. Fast, accurate, and supports all languages. Allows rendering to DOM, Canvas, SVG, and soon server-side.

### Why Use It?

Pretext side-steps the need for DOM measurements (`getBoundingClientRect`, `offsetHeight`), which trigger layout reflow — one of the most expensive operations in the browser.

### Key Features

- **Fast** — Pure arithmetic after initial preparation
- **Accurate** — Uses browser's font engine as ground truth
- **Universal** — Supports all languages, including RTL and emojis
- **Flexible** — Works with DOM, Canvas, SVG

### API Overview

**Use Case 1: Measure paragraph height without DOM**

```typescript
import { prepare, layout } from '@chenglou/pretext'

const prepared = prepare('AGI 春天到了. بدأت الرحلة 🚀', '16px Inter')
const { height, lineCount } = layout(prepared, textWidth, 20)
```

**Use Case 2: Manual line layout**

```typescript
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext'

const prepared = prepareWithSegments('Text content', '18px Helvetica')
const { lines } = layoutWithLines(prepared, 320, 26)
for (let i = 0; i < lines.length; i++) {
  ctx.fillText(lines[i].text, 0, i * 26)
}
```

### Performance

On a 500-text batch:
- `prepare()`: ~19ms (one-time)
- `layout()`: ~0.09ms (hot path)

### Use Cases

- Virtualization without guesstimates
- Fancy layouts (masonry, flexbox-like)
- Dev-time overflow verification
- Preventing layout shift

---

## Design System Integration

### Combining Resources

#### For React Projects

1. **Start with shadcn/ui** as your base component library
2. **Use Galaxy elements** for inspiration and unique effects
3. **Apply UI UX Pro Max rules** for design decisions
4. **Use Pretext** for precise text layout calculations

#### For Any Framework

1. **Browse Galaxy** for visual inspiration
2. **Implement with UI UX Pro Max principles**
3. **Use Pretext** for text-heavy interfaces
4. **Reference shadcn/ui** for interaction patterns

### Color Systems

#### Light Mode Palette
```css
--background: 0 0% 100%;
--foreground: 222.2 47.4% 11.2%;
--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
--accent: 210 40% 96.1%;
--accent-foreground: 222.2 47.4% 11.2%;
```

#### Dark Mode Palette
```css
--background: 224 71% 4%;
--foreground: 213 31% 91%;
--muted: 223 47% 11%;
--muted-foreground: 215.4 16.3% 56.9%;
--accent: 216 34% 17%;
--accent-foreground: 210 40% 98%;
```

### Typography Scale

| Level | Size | Line Height | Weight | Use For |
|-------|------|-------------|--------|---------|
| h1 | 2.25rem | 2.5rem | Bold | Page titles |
| h2 | 1.875rem | 2.25rem | Semibold | Section headers |
| h3 | 1.5rem | 2rem | Semibold | Subsections |
| h4 | 1.25rem | 1.75rem | Medium | Cards |
| body | 1rem | 1.5rem | Normal | Paragraphs |
| small | 0.875rem | 1.25rem | Normal | Captions |

### Spacing System

| Token | Value | Use For |
|-------|-------|---------|
| space-1 | 0.25rem | Tight spacing |
| space-2 | 0.5rem | Element padding |
| space-4 | 1rem | Section padding |
| space-6 | 1.5rem | Component gaps |
| space-8 | 2rem | Section gaps |
| space-12 | 3rem | Page sections |

---

## Best Practices

### 1. Start with Components
- Use pre-built components when possible
- Customize through CSS variables
- Extend, don't rebuild

### 2. Maintain Consistency
- Use design tokens everywhere
- Follow the spacing system
- Stick to the type scale

### 3. Prioritize Accessibility
- Test with keyboard navigation
- Verify color contrast
- Add ARIA labels
- Support reduced motion

### 4. Optimize Performance
- Use Pretext for text-heavy UIs
- Lazy load components
- Minimize layout thrash
- Use CSS containment

### 5. Document Decisions
- Record why, not just what
- Keep a design changelog
- Create pattern documentation

---

## Quick Reference

### When to Use What

| Need | Use |
|------|-----|
| React components | shadcn/ui |
| Visual inspiration | Galaxy |
| Design rules | UI UX Pro Max |
| Text layout | Pretext |

### Resources

| Resource | Documentation |
|----------|---------------|
| Galaxy | [uiverse.io](https://uiverse.io/) |
| shadcn/ui | [ui.shadcn.com/docs](https://ui.shadcn.com/docs) |
| UI UX Pro Max | `UI-UX/ui-ux-pro-max-skill/README.md` |
| Pretext | `COMBINED/mcp-servers/mcp-pretext/README.md` |

---

*Combined from: galaxy, ui (shadcn), ui-ux-pro-max-skill, pretext*

**Last Updated:** 2026-04-01
