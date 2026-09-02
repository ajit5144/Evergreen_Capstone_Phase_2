
**Date:** 02 SEP, 2026
**Author:** Ajit Ranjan Sahu
**Decision area:** Day 3 Inject 2: An Incident related to premium discrepancy was raised

## Context

On Wednesday afternoon, two issues surfaced at the same time. Support reported that a customer was quoted $3,120 per month for $180,000 of home coverage, which appears clearly wrong and is reproducible. Separately, a recent rate hotfix pushed to master has left CI red because the type-check step is failing in src/baserates.ts, where a string is being used where a number is expected. The two issues may be related, but that has not been confirmed.

## Options considered

Option A: Continue as GO because my branch is green.
Pros: Keeps the current delivery moving and avoids blocking on a hotfix that may not be in my branch.
Cons: Risks merging into a broken master while there is still an unresolved customer-facing pricing issue and no confirmation whether the two problems are connected.

Option B: Make a NO-GO call until the issue is routed and master is green again.
Pros: Protects the branch we would merge into, avoids adding more change on top of uncertainty, and gives engineering time to confirm whether the bad premium and failed hotfix are the same issue or two separate issues.
Cons: May delay the delivery slightly while the issue is triaged and resolved.

Option C: Pause only the premium-related work but continue all other delivery activity as normal.
Pros: Keeps some momentum while engineering investigates.
Cons: Still leaves the merge decision unclear because the target branch is red, and may create confusion if teams keep moving while the customer-impact question is unresolved.


## Recommendation

Option B: Make a NO-GO call until the issue is routed and master is green again.

## Why

We’re prioritizing this week’s delivery above new scope. A failed hotfix on master branch puts the current work at risk, and fixing the rate change right now would create more churn when the team should be focused on getting the committed work merged cleanly.

## What would change my mind

The primary reason is to avoid merging into an unstable master branch in while a customer-facing pricing issue is active. Even with a green branch, the safer choice is to pause until we know if it’s one issue or two and the target branch is stable.