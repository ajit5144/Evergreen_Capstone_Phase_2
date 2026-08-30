# Evergreen Quote: Vision Brief

> Copy this file into `delivery-leadership-package/vision-brief.md` in your repo and fill it in. Target length: 1 page (~300 words). Write for a Liberty Mutual VP who has 90 seconds.

## Product
**Name:** Evergreen Insurance Quote (Phase 2 React rebuild)
**Delivery week:** 2
**Delivery Lead:** Ajit Ranjan Sahu
**Engineering team (represented by):** https://github.com/ajit5144/Evergreen_Capstone_Phase_2.git
**GitHub Project board:** https://github.com/users/ajit5144/projects/4/views/1?system_template=kanban

## Who is the customer?
The customer is a first-time insurance shopper (new renter/homeowner or new to auto) who wants a quick, no-commitment price on their phone. They’re early in comparison shopping, not ready to create an account or talk to an agent, and will leave if too many fields are required.

## What pain does Evergreen Quote remove?
Ditch the long form. Evergreen Quote gives an instant, believable estimate that updates as you type, shows real examples for confidence, and lets you save on the spot—turning a clunky stop‑and‑start into a smooth, low‑commitment flow.

## What does "good" look like at end of the week?

- A reviewer can open the app, change coverage type, age, and coverage amount, and see the monthly premium update immediately without clicking Calculate.
- Stakeholder can verify that auto, home, and life each produce credible monthly estimates aligned with the sponsor’s rate decision.
- The Recent quotes panel loads and shows clear loading, error, and success states.
- npm run type-check and npm run build complete successfully, and CI passes on the committed code.

## What are we explicitly NOT doing this week?
- No real actuarial pricing engine or backend quote service; the premium model remains a placeholder.
- No customer accounts, login, email capture, or persistence of saved quotes beyond the current session/state.
- No checkout, payment, policy purchase, or bind flow.
- No routing, multi-page experience, or broader site navigation work.
- No test suite expansion or deployment work beyond achieving a green production build and CI workflow.

## How will we know if it worked?
- type checking (npm run type-check) and production build (npm run build) both succeed, and CI is green on main.
- in manual review, changing any input updates the estimate instantly (no button press)