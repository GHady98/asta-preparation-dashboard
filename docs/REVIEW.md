# Engineering review

## Human review decisions

- User confirmed session-only progress, which resets after refresh.
- User authorized continuing the full lab and accepted the clarification that all tasks contribute equally regardless of priority. This removes ambiguity about weighted progress and preserves the required 33%, 67%, and 100% values. This is an accepted clarification, not a fabricated complaint about an earlier suggestion.
- The user supplied `GHady98` as their name/identifier. The user later supplied the full name Ghady Nazha and authorized publication under GHady98.

## Actual verification — 25 October 2026

- `npm run lint`: passed after replacing the temporary CommonJS screenshot helper with the final ESM browser test.
- `npm run build`: passed, including TypeScript and static page generation.
- `node --experimental-strip-types scripts/progress-test.mjs`: passed required sequence, 100 repeated toggles, all eight completion combinations, and immutability of initial state.
- `BROWSER_CHANNEL=msedge node scripts/browser-test.mjs` (environment variable set using PowerShell syntax): passed against a running production server on port 3001. Checked three accessible checkboxes; initial 0%, 33%, 67%, 100%, undo, 20 repeated toggles, reload reset, keyboard Tab/Space, visible focus outline, minimum 44px label hit areas, and absence of page JavaScript errors.
- Browser checks found no horizontal overflow at 360px or 1280px. Desktop and mobile screenshots were visually inspected.
- Static inspection confirms exact supplied tasks/descriptions/priorities, brief goal and threat, progress explanation, session-only notice, and no pretend action buttons or extra routes/features.
- Credential-pattern scan of tracked and new source/document files returned no matches. No external authentication was added. This is a targeted scan, not a security audit.

## Meaningful design correction

The initial implementation used small task descriptions and hid explicit status on narrow screens. The refinement raised task descriptions to 16px and restored visible mobile status. See DESIGN.md and before/after evidence. This is a local design review; there was no Stitch design to compare against.

## Human pilot — not yet conducted

No classmate or friend was available to the agent. Do not present automated checks as feedback from a person. Ask one person to find the tasks, complete one, and explain the percentage. Record their actual words/actions, confusion, and an improvement here.

- Participant/date: pending
- Actual actions/words: pending
- Confusion: pending
- Improvement made or proposed from their feedback: pending

## Explanation notes for the student

These are factual study notes. Rewrite the reflections in your own words before submission.

1. The PRD limits the product to three fixed tasks and excludes task creation, accounts, and persistence, preventing extra features from distracting from completion tracking.
2. The POC tests state/calculation consistency. It does not establish usability, market demand, or battle readiness.
3. The MVP supports a complete useful flow: see the plan, complete or undo a task, and understand progress.
4. No Stitch MCP access was available. The agent used the written requirements and a local design; actual Stitch evidence remains missing.
5. The accepted clarification makes progress equal-weighted. The agent also corrected small supporting text and missing mobile status in its first design.
6. Completion is a record of booleans keyed by task ID. A functional state update copies that record and flips one value. The summary counts true values and rounds completed / 3 × 100. This avoids duplicate counts and stale counter updates.
7. The human still owns scope, honest evidence, design review, understanding the code, checking real behaviour, gathering pilot feedback, and deciding whether the result is ready to submit.

## Remaining limitations

No screen-reader user test or comprehensive accessibility audit was conducted. No real human pilot, Stitch design, or successful Stitch MCP interaction is claimed. The GitHub remote and public publication are now complete. Email status is recorded in SUBMISSION.md. No live deployment was created. Session progress intentionally resets.

