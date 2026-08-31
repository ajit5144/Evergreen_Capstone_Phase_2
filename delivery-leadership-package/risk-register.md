# Risk Register

| # | Risk | Owner | Likelihood (L/M/H) | Impact (L/M/H) | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| R1 | The app appears to work in the Vite dev server, but TypeScript or production build fails, leaving CI red late in the week. | Delivery Lead | M | H | Run `npm run type-check` after each major assembly step instead of waiting until PR time. | Type-check or build is still failing after the current story is marked done, or still red by afternoon checkpoint. |

| R2| The hook/context refactor changes customer-visible behavior, especially live estimate updates or “Save this quote,” even though the goal is a non-breaking refactor. | Frontend Engineer | M | H | Capture expected behavior before refactor and run a manual regression check after introducing the hook and context provider. | Saving a quote no longer puts it at the top, or premium updates stop reacting immediately to input changes. |

| R3 | QA validation is not completed before merge, so issues in core flows or acceptance criteria may be discovered only after the build is already considered done. | QA / Delivery Lead | M | M | Schedule a dedicated QA validation pass before final merge and use the acceptance criteria as the walkthrough checklist. | QA review has not happened by the final pre-merge checkpoint, or defects are still being found in core quote flows late in the cycle. |

| R4 | Save Quote works locally with in-memory state, but team members assume it should persist after refresh, creating misalignment in review expectations. | Delivery Lead | L | M | State clearly in demo notes and review comments that saved quotes are session-only and persistence is out of scope this week. | Reviewer treats loss of saved quotes after refresh as a bug rather than an out-of-scope behavior. |

| R5 | Some links on the website are unavailable, broken, or intentionally not implemented this week, which may create stakeholder confusion during review or demo. | Frontend Engineer | M | M | Identify which links are in scope, verify they behave correctly in deployed Pages, and clearly call out any placeholders or out-of-scope links before demo. | A reviewer clicks a link during demo and it fails, routes nowhere, or creates uncertainty about product completeness. |

| R6 | Final work is technically complete, but the PR, branch cleanup, and delivery artifacts are unfinished, leaving delivery incomplete by the stated definition of done. | Delivery Lead | M | H | Reserve explicit time for PR creation, review, merge, branch deletion, and documentation/package completion rather than treating them as admin afterthoughts. | Code is ready but PR is not open, review is blocked, or leadership package remains incomplete near end-of-week handoff. |

## How I'll use this register

I’ll review this register at the start of each work session, before team check-ins, and again before opening or merging the PR. It will stay visible in the `delivery-leadership-package` so teammates and reviewers can see current delivery risks, mitigations, and escalation triggers. I’ll update it whenever a risk changes materially or becomes active.

