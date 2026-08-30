# Delivery Goal: Evergreen Quote


## Goal

Produce a production-ready Phase 2 Evergreen Quote experience with live premium estimation, data-fed recent quotes, and a clean release path

## "Done" looks like

- A visitor can select auto, home, or life coverage and see the estimated monthly premium update instantly as they type, with no calculate button
- The Recent Quotes panel fetches from the data feed and clearly shows loading, error, and success states.
- Saving the current quote adds it to the top of the recent quotes list immediately.
- npm run type-check passes and the TypeScript contracts are clean across components, hook, context, and rate model.
- npm run build succeeds, CI is green on the merge commit, and the reviewed PR is merged with the branch deleted.

## Out of scope (this week)

- No real actuarial pricing or backend quote service
- No customer accounts, sign-in, email capture, or saved quotes
- No checkout, payment, or policy purchase flow
- No multi-page routing or major navigation changes
- No toolchain changes, big test additions, or deployments beyond a clean green build/CI
