# Asta’s Preparation Dashboard

Status: Implementation baseline. User authorized the full lab and accepted the equal-weight clarification.

## Summary

A single-screen dashboard helps Asta follow three predefined training tasks while preparing for Lucifero. It shows what remains, what is complete, and how much of the training plan is complete.

## User and problem

Asta is the primary user. His training notes are scattered, so he cannot quickly identify unfinished tasks or track completed preparation. No anime knowledge is needed to understand the controls.

## First-version goal

Let Asta view his plan, mark tasks complete or incomplete, and immediately understand his current progress in one session.

## Exactly three core features

1. **View training tasks:** Show the three tasks below, including descriptions, priorities, and text status.
2. **Toggle completion:** Each task can be completed and undone using a keyboard-operable control.
3. **See calculated progress:** Show completed / total, a rounded percentage, and a progress indicator derived from the same task state.

## User stories

- As Asta, I want to see each task and its priority so I can choose what to practise next.
- As Asta, I want to complete and undo tasks so the plan reflects my current preparation.
- As Asta, I want a count and percentage so I can understand how much of my plan is complete.

## Sample data

| Task | Description | Priority | Initial status |
| --- | --- | --- | --- |
| Sword control | Practise precise anti-magic sword movements. | High | Incomplete |
| Physical endurance | Complete a focused strength and stamina session. | Medium | Incomplete |
| Team coordination | Review a preparation plan with the Black Bulls. | High | Incomplete |

These are fictional teaching examples, not official character statistics.

## Expected behaviour

- All tasks start incomplete on each page load.
- Store completion state for each task; derive the completed count and percentage rather than updating separate counters.
- Calculate `Math.round(completed / total * 100)` with a fixed total of three.
- Tasks have equal weight. Priority is informational and does not change the percentage.
- Completing a task updates its visible status, count, percentage, and progress indicator immediately. Undoing reverses that change.
- Progress measures training-plan completion, not combat readiness or a prediction of victory.
- **User-confirmed decision:** Progress resets after refresh. There is no persistent storage.

## Acceptance criteria

| Check | Expected result |
| --- | --- |
| Open the dashboard | A title, short preparation goal, and compact Lucifero gravity-magic threat brief are visible. |
| Inspect the plan | Exactly the three supplied tasks appear with their exact descriptions and priorities. |
| Start a session | All statuses are Incomplete; summary displays 0 / 3 and 0%. |
| Complete one task | Its status becomes Complete; summary displays 1 / 3 and 33%. |
| Complete a second task | Summary displays 2 / 3 and 67%. |
| Complete all tasks | Summary displays 3 / 3 and 100%. |
| Undo one task | Its status becomes Incomplete; summary displays 2 / 3 and 67%. |
| Undo all tasks | Summary returns to 0 / 3 and 0%. |
| Toggle a task repeatedly | Each activation flips only that task; count matches current completion states and remains between zero and three. |
| Read the progress explanation | Text explicitly identifies the percentage as training-plan completion. |
| Use only a keyboard | Tab reaches each completion control in logical order; Space or Enter, as appropriate to the chosen native control, toggles it; focus is visible. |
| Inspect accessible controls | Each control has a task-specific accessible name and exposes its checked or pressed state. Status is understandable without colour. |
| Inspect mobile and desktop | At approximately 360px and 1280px viewport widths, text is readable, controls remain reachable, and there is no horizontal page scrolling. |
| Refresh after completing tasks | All tasks reset to incomplete and progress returns to zero. A visible session-only note explains this behaviour. |
| Inspect actions and scope | No decorative action buttons or features outside this PRD appear. |
| Check repository and build | No credentials are committed; the available lint and production build scripts pass. |

## Design and accessibility

- One responsive dashboard screen with a clear title and introduction, compact threat brief, task list, and progress summary.
- Selected local fallback palette: dark charcoal, warm white, and restrained red. Maintain at least 4.5:1 contrast for normal text and 3:1 for large text and meaningful interface boundaries.
- Use readable typography, a minimum 16px body size, clear hierarchy, and sufficient spacing. Use a single-column task layout on narrow screens.
- Completion targets should be at least 44 × 44 CSS pixels with descriptive labels and a visible focus indicator.
- Use semantic headings and native controls. Give the progress indicator an accessible name and current value; announce summary changes politely to assistive technology.
- Do not rely on colour alone to communicate completion or priority.
- Character art is optional; it must not obscure text or controls. Decorative images use empty alternative text.

## Stack and implementation boundaries

Next.js, TypeScript, and Tailwind CSS. Keep stateful completion interaction inside a small Client Component. Keep one source of truth for task completion. No backend or external runtime services are required.

## Assumptions and limitations

- Three predefined tasks are sufficient to demonstrate the core flow.
- Session-only progress is an intentional limitation confirmed by the user.
- This is an educational scenario. No user research, product validation, or market demand has been established.
- A POC will test state and calculation consistency; it cannot establish whether people want this product.
- Stitch design and MCP access are development workflow steps. Any unavailable access must be documented honestly, using the assignment’s permitted manual handoff fallback where needed.

## Explicitly excluded

Login, accounts, database, payments, chatbot, combat simulation, multiplayer, live anime data, additional routes, task creation/editing/deletion, persistent storage, and optional extensions in the first version.

## Review gate

The user authorized proceeding and accepted the clarification that priority does not weight completion. The actual decision is recorded in `docs/REVIEW.md`. No other user-authored correction is claimed.

Review update: The user instructed the agent to proceed with the full lab and subsequently accepted equal weighting regardless of priority.


