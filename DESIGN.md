---
name: Nexura RF Spectrum & Telecom Telemetry Analyzer
description: High-precision instrumentation design system for autonomous cloud stream processing
colors:
  primary: "#00f0ff"
  secondary: "#10b981"
  alert-amber: "#f59e0b"
  neutral-bg: "#06080c"
  panel-bg: "#0b0f17"
  panel-elevated: "#111724"
  panel-bezel: "#1b2333"
  border-chassis: "rgba(255, 255, 255, 0.12)"
  text-primary: "#f0f6fc"
  text-secondary: "#9cb2cd"
  text-muted: "#6b829e"
typography:
  display:
    fontFamily: "'Chakra Petch', sans-serif"
    fontSize: "3.25rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Red Hat Display', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  mono:
    fontFamily: "'Share Tech Mono', monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#03070d"
    rounded: "{rounded.xs}"
    padding: "9px 18px"
  button-secondary:
    backgroundColor: "{colors.panel-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xs}"
    padding: "9px 18px"
---

## Overview

The Nexura design system rejects conventional AI/cloud SaaS tropes — near-black cards with generic purple/cyan blur halos, gradient text, and decorative icons. Instead, it grounds the product in the physical reality of high-frequency telecommunications routing hubs, microwave spectrum analyzers, and avionics flight instrumentation.

Every surface is treated as an active test bench: data streams are rendered as physical vector waveforms across 10x10 graticule grids, numeric measurements use strict seven-segment LED typography with unlit ghost cells, and architectural stages are separated by ruled structural dividers rather than nested cards.

## Colors

The palette is derived from CRT phosphor vector scopes and precision laboratory chassis finishes.

### Primary
- **Phosphor Cyan** (`#00f0ff`): The primary trace color representing active stream ingestion, Anycast routing vectors, and focused interactive controls.

### Secondary
- **Phosphor Emerald** (`#10b981`): Status operational indicator, verified zero-cold-start execution, and sub-12ms latency confirmation.

### Tertiary
- **Alert Amber** (`#f59e0b`): Warning states, replication checkpoints, and Anycast state synchronization tags.

### Neutral
- **Chassis Black** (`#06080c`): Deep instrument background representing non-reflective anti-glare CRT instrument glass.
- **Panel Steel** (`#0b0f17`): Machine-turned dark anodized aluminum equipment bays and test bench enclosures.
- **Bezel Gray** (`#1b2333`): Top window bars, channel selectors, and tactile toggle housings.
- **Graticule Cyan** (`rgba(0, 240, 255, 0.08)`): Calibrated 10x10 division grid lines for timing and amplitude inspection.
- **Text Primary** (`#f0f6fc`): High-contrast instrument white ensuring >= 4.5:1 accessible readability across all dark surfaces.
- **Text Secondary** (`#9cb2cd`): Sub-readouts, descriptions, and architectural technical specifications.

### Named Rules
**The No-Halo Rule.** Colored glow shadows (zero-offset colored halo boxes or diffuse text-shadows) are strictly prohibited. Signal traces derive their prominence from sharp vector contrast, exact line weights, and calibrated background separation.

## Typography

**Display Font:** Chakra Petch (angular, high-precision technical grotesk)  
**Body Font:** Red Hat Display (clean, balanced, authoritative engineering grotesk)  
**Label/Mono Font:** Share Tech Mono (authentic telecommunications and aerospace instrumentation monospace)

### Character
The combination of Chakra Petch and Red Hat Display establishes technical authority without feeling antiquated, while Share Tech Mono provides authentic telemetry and code inspection fidelity.

### Hierarchy
- **Display** (Chakra Petch 700, 3.25rem, line-height 1.12): First viewport hero headlines.
- **Headline** (Chakra Petch 700, 2.35rem, line-height 1.2): Section titles.
- **Title** (Chakra Petch 600, 1.35rem - 1.5rem, line-height 1.3): Architecture stage titles and pricing tier names.
- **Body** (Red Hat Display 400, 1rem - 1.12rem, line-height 1.65, max-width 65ch): Technical descriptions, architectural breakdowns, and FAQ explanations.
- **Label / Telemetry** (Share Tech Mono 400/700, 0.82rem - 0.88rem, tabular-nums): System status ribbons, latency metrics, code playground, and interactive controls.

### Named Rules
**The Strict Tabular Rule.** All numbers, latency readings, timestamps, and currency amounts must specify `font-variant-numeric: tabular-nums` to eliminate layout jitter during live telemetry updates.

## Layout

- **Container Constraint:** Maximum width 1280px with 1.5rem horizontal padding rails.
- **Global Status Ribbon:** 34px fixed height at the extreme top edge providing live Anycast mesh state.
- **Sticky Navigation:** 64px header height with 12px backdrop blur.
- **Section Spacing:** Generous 5.5rem vertical padding between major architectural sections.
- **Grid Models:**
  - Hero: Asymmetric 1.15fr : 0.85fr grid balancing high-density technical copy with the live RF vector console.
  - Architecture & Pricing: 3-column symmetric grid with 1.5rem gutters.
  - Topology & Test Bench: 1.2fr : 0.8fr split view.

## Elevation & Depth

Nexura uses flat, tonal layering combined with crisp hairline borders rather than diffuse drop shadows.

### Shadow Vocabulary
- **Chassis Elevation** (`box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6)`): Grounded elevation for the primary instrument console and code test bench.
- **Dropdown Elevation** (`box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7)`): Directional shadow for floating menus and modals.

### Named Rules
**The Physical Frame Rule.** Depth is created through mechanical chassis borders (`1px solid rgba(255, 255, 255, 0.12)`) and inset background shades (`#030508` vs `#0b0f17`) rather than soft ambient blur.

## Shapes

- **Corner Language:** Sharp, precision-machined corners. Standard elements use `2px` (micro-radius) or `4px` (small radius). Massive pills or heavy rounded corners are prohibited.
- **Graticule Frames:** Internal viewports feature 10x10 graticule coordinate lines simulating oscilloscope CRT displays.
- **Bezel Screws:** Console headers feature authentic four-corner chassis mounting screw dots.

## Components

### Buttons
- **Shape:** 2px corner radius (`var(--radius-xs)`).
- **Primary:** Phosphor Cyan fill (`#00f0ff`) with dark ink (`#03070d`), uppercase mono weight 600, 9px 18px padding. Hover: `#3df3ff`.
- **Secondary:** Dark panel fill (`#111724`) with 1px chassis border and cyan hover shift.
- **Ghost:** Transparent background with subtle hover tint.

### Seven-Segment LED Display
- **Container:** Dark inset housing (`#030508`) with 1px border.
- **Structure:** Background unlit ghost layer (`88,888` at 6% opacity) with active live cyan/emerald foreground digits.

### Oscilloscope Vector Scope
- **Screen:** Dark cathode ground (`#020407`) overlaid with cyan graticule divisions.
- **Waveform:** 1.8px crisp HTML5 canvas stroke with interactive channel routing (CH1 Ingestion, CH2 MicroVM, CH3 Anycast) and cursor coordinate readouts.

### Test Bench Code Window
- **Layout:** Dual-pane layout: multi-language tabbed editor on left, live JSON runtime response on right.
- **Syntax:** Share Tech Mono 0.88rem with execution triggers and instant clipboard feedback.

## Do's and Don'ts

### Do:
- **Do** use Share Tech Mono with `tabular-nums` for all metrics, latencies, and telemetry.
- **Do** separate content regions with 1px hairline rules (`rgba(255, 255, 255, 0.07)`).
- **Do** draw custom, precise SVG icons with consistent 2px strokes.
- **Do** ground every claim with verifiable technical details (<0.42ms snapshot restore, Anycast BGP, V8 MicroVM).

### Don't:
- **Don't** use gradient text under any circumstances.
- **Don't** add colored zero-offset glow halos around buttons, cards, or text.
- **Don't** nest cards inside cards; use flat key-value rows and dividers instead.
- **Don't** place kickers or eyebrows above section headings.
- **Don't** animate height or max-height; use CSS `grid-template-rows: 0fr -> 1fr` for zero-thrash accordion transitions.
