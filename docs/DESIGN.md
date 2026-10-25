# Design decisions

## Actual handoff and limitation

No Stitch tool is exposed in this Codex session. No Stitch project, export, screenshot, or link was supplied. The interface was therefore designed locally from the PRD. These screenshots document that local fallback; they are **not Stitch output**, and the required Stitch exercise has not been completed. See MCP.md. A later Stitch design can be compared with this working implementation.

## Selected direction

A restrained training journal: charcoal background (#111214), raised panels (#1b1c1f), warm white text (#f5f1e9), muted text (#b9b8b6), and coral red accent (#ec786c). No copyrighted character images or remote image services are used. Decorative marks are text glyphs hidden from assistive technology.

Typography: system Arial/Helvetica sans-serif, responsive 36–62px title, 19–26px section/task headings, 16px task descriptions. Small uppercase labels establish hierarchy. Spacing follows a roughly 4px scale, with 20–40px page gutters and 14–32px gaps.

Sections: Black Bulls masthead; Asta goal; compact Lucifero gravity threat; three training cards; completion summary; brief educational footer. Desktop uses a task column and progress sidebar. At 720px and below the layout becomes a single column and the decorative hero emblem is hidden. No navigation or pretend action buttons are present.

## Deliberate refinement

Before: `evidence/design-before.png` shows the first local design, with 14px task descriptions and status hidden on narrower screens.

After: `evidence/desktop.png` and `evidence/mobile.png` show 16px descriptions, larger supporting labels, and explicit Complete/Incomplete text on mobile. This makes instructions easier to read and removes dependence on checkbox appearance alone. The mobile status is placed below the action to avoid crowding task titles.

The screenshots were visually inspected. The 360px design has readable wrapping and no horizontal scrolling; the desktop separates progress from the main training flow. These are agent checks, not human pilot feedback.

## Evidence

- `evidence/poc.png`: plain interaction experiment, preserved in the POC commit.
- `evidence/design-before.png`: initial local design.
- `evidence/desktop.png`: refined desktop initial state.
- `evidence/mobile.png`: refined 360px initial state.
- `evidence/complete.png`: desktop 100% state.
- `evidence/mobile-complete.png`: mobile 33% state.
- `evidence/keyboard-focus.png`: keyboard focus and activated task.
