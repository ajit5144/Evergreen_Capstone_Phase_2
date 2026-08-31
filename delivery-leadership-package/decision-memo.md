# Decision Memo: Inject 1 : Implement new base rates

**Date:** 01 SEP, 2026
**Author:** Ajit Ranjan Sahu
**Decision area:** Day 2 Inject: Implement new base rate

## Context

The team received a new requirement to update the placeholder base rates used to calculate quote estimates for auto, home, and life coverage. Because these rates directly affect the numbers shown to first-time shoppers, we need to choose how to implement the change in a way that is fast, safe, and easy to adjust again if sponsor guidance changes.

## Options considered

Option A: Update the values directly in the existing premium calculation file.
Pros: Fastest change, minimal file movement, lowest short-term effort.
Cons: Keeps rate values mixed into calculation logic, makes future updates harder to find, and increases the chance of changing logic accidentally when only configuration should change.

Option B: Move base rates into a separate TypeScript config file and import them into the premium logic.
Pros: Creates a single, clear place to update sponsor rates, keeps business configuration separate from calculation code, and reduces risk when rates change again.
Cons: Slightly more refactoring effort now, and requires updating imports in the existing calculation file.

Option C: Store the rates in environment variables.
Pros: Makes rate values configurable without touching application code and could help across environments later.
Cons: Adds unnecessary complexity for a small front-end capstone, makes related values harder to read together, and is less transparent for reviewers trying to validate the rate model.


## Recommendation

Option B: Move base rates into a separate TypeScript config file and import them into the premium logic. This gives the team a clean, low-risk way to respond to the requirement change without scattering sponsor pricing decisions through the codebase. It also keeps the implementation simple enough for the current project while making later rate updates faster and safer.

## Why

If rates need to change, we need to update them quickly and accurately so the estimate remains believable and aligned with sponsor expectations, without introducing avoidable mistakes into the customer-facing premium calculation.

## What would change my mind

If the sponsor said by the end of this phase that rates must vary by environment, change frequently without code changes, or be managed outside the app, I would revisit Option C and consider moving the rate values into configuration outside the source file.
