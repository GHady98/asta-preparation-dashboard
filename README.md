# Asta’s Preparation Dashboard

Author identifier supplied by user: **GHady98**. Replace with your full name if required by the instructor.

A responsive educational dashboard built with Next.js, TypeScript, and Tailwind CSS. Asta can view three predefined training tasks, complete/undo them, and see calculated preparation-plan completion. All tasks start incomplete. **Progress resets after refresh**; no storage, backend, accounts, or runtime external services are used.

## Run locally

Use Node.js 22.18+ or Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm run start
```

## Verify

```sh
npm run lint
npm run build
npm test
```

The focused state test uses Node's TypeScript stripping. Its module-type warning is informational. Browser checks use Playwright. Install its Chromium browser once with `npx playwright install chromium`, start the production server on port 3001 (`npm run start -- --port 3001`), and run `npm run test:browser`. Alternatively, use an installed Edge browser in PowerShell:

```powershell
$env:BROWSER_CHANNEL = 'msedge'
npm run test:browser
```

Set `BASE_URL` to test another local port. The browser test regenerates evidence screenshots. Actual completed checks and limitations are documented in docs/REVIEW.md.

## Documents

- [PRD](docs/PRD.md): scope, sample data, behaviour, acceptance criteria.
- [Design](docs/DESIGN.md): visual decisions, actual refinement, screenshots.
- [POC](docs/POC.md): experiment and actual results. Git commit `9be59b2` preserves the plain experiment.
- [MCP](docs/MCP.md): unavailable Stitch tool access and honest local fallback.
- [Review](docs/REVIEW.md): verification, accepted clarification, reflection notes, outstanding human pilot.
- [Evidence](docs/evidence/): actual browser screenshots.
- [Submission draft](docs/SUBMISSION.md): email template and outstanding steps.

## Structure and state

`app/page.tsx` provides static framing. `app/training-plan.tsx` is the small Client Component because checkboxes need React state and events. `app/training.ts` contains fixed tasks, immutable toggling, and derived progress. Each task contributes equally; priority is informational. One task displays 33%, two 67%, three 100%.

## Submission status and limitations

Branch: `assignment-2-asta-mvp`. Local implementation and verification are complete. The lab still needs genuine Stitch work or an instructor-accepted fallback, a real classmate/friend pilot, personal reflections, full name, and public GitHub publication. No Stitch connection, user research, or pilot feedback is fabricated. There is no Git remote configured in this workspace. No credentials were introduced.

This is a fictional teaching scenario inspired by Black Clover by Yuki Tabata. Decorative symbols are text glyphs; no character artwork is included. A live deployment is optional.
