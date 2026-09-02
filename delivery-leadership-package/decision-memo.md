

**Date:** 01 SEP, 2026
**Author:** Ajit Ranjan Sahu
**Decision area:** Day 2 Inject: Add Zip code to the Quote form without changing delivery timelines. 

## Context

On Tuesday afternoon, the sponsor requested two changes. Marketing requires a ZIP-code field on the quote form by Thursday to support a regional pricing A/B test. Platform reported a moderate-severity alert in a pinned build-time dependency; the recommended upgrade is not available until next week and does not affect customer downloads. The delivery target remains unchanged: assemble the product, maintain type safety, ensure correct data loading, and merge with a green build.

## Options considered

Option A: Add the ZIP-code field this week and hold scope elsewhere.
Pros: Responds directly to Marketing’s ask and shows flexibility.
Cons: “Just add the box” is not actually small work. It likely means updating types, form state, validation, quote logic, hook/context behavior, QA coverage, and acceptance criteria. If we say yes this week, something else needs to come out, and the most likely cost is reduced confidence in the core delivery goal.

Option B: Do not add the ZIP-code field this week; keep Phase 2 scope intact.
Pros: Protects the committed delivery goal, keeps the team focused on the live estimate/data-loading/build path, and reduces the chance of destabilizing the app late in the week.
Cons: Marketing does not get the new field in this release and the regional pricing experiment waits until a later change.

Option C: Add only the visible ZIP-code input this week, without wiring it into pricing.
Pros: Gives the appearance of responding quickly.
Cons: High risk of confusion and weak product behavior. Customers would enter a ZIP code that does nothing, which is misleading, and reviewers are likely to treat it as incomplete or broken.


## Recommendation

Option B: Do not add the ZIP-code field this week; keep Phase 2 scope intact.

## Why

The main reason is to keep this week’s delivery on track. Adding the ZIP-code field now would take extra time across form changes, pricing logic, testing, and review, and would put the committed goal at risk. Shipping on the current toolchain is the lower-risk choice because the flagged issue is in a build-time dependency and the planned upgrade is already scheduled for next week.

## What would change my mind

If the schedule expands, we’ll look to include the ZIP‑code feature in a subsequent release. We’ll proceed only if the added form, pricing, and validation work won’t compromise the current target.
