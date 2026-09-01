
**Date:** 02 SEP, 2026
**Author:** Ajit Ranjan Sahu
**Decision area:** Day 3 Inject 1: Ci is failing because of a Hot fix 

## Context

A hotfix was pushed directly to master branch to adjust the home rate per sponsor note, but the CI run failed during type-check. The error shows that src/baserates.ts now has a type mismatch where a string is being assigned to a number variable. The rate change was delivered in a hurry without doing type validation and that caused the issue.

## Options considered

Option A: Patch the value directly on Master and push again immediately.
Pros: Fastest path if the issue is only a simple value-format mistake.
Cons: Encourages more direct changes on master, increases the chance of another rushed break, and does not address the process problem that caused the failed hotfix.

Option B: Revert the hotfix, wait until delivery is merged, and then plan the rate change separately.
Pros: Restores stability on master branch, protects the current delivery goal, and avoids introducing more change risk while the team is still trying to complete the committed work.
Cons: The sponsor-requested home rate update is delayed until after delivery is complete.

Option C: Leave the failed hotfix in place temporarily and defer the home-rate change until later.
Pros: Avoids more immediate churn while the team is busy.
Cons: Leaves master branch in red, blocks confidence in the branch, and delays a sponsor-requested pricing correction.


## Recommendation

Option B: Revert the hotfix, wait until delivery is merged, and then plan the rate change separately.

## Why

We’re prioritizing this week’s delivery above new scope. A failed hotfix on master branch puts the current work at risk, and fixing the rate change right now would create more churn when the team should be focused on getting the committed work merged cleanly.

## What would change my mind

If the delivery timeline changed and the team had extra time before merge, I would revisit whether the rate change could safely be done now. If there were enough time to make the change, validate it, and still keep master branch green without affecting the current commitment, the decision could be reopened.
