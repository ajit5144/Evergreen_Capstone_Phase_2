# Risk Register

| # | Risk | Owner | Likelihood (L/M/H) | Impact (L/M/H) | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| R1 | There is no database or saved storage connected, so if a customer leaves or refreshes the website, their saved quote is lost and cannot be returned later. | Delivery Lead | M | M | Clearly state in demo notes, PR notes, and review comments that saved quotes only work during the current session and long-term storage is out of scope this week. | A reviewer or stakeholder expects a saved quote to still be available after refresh or returning to the site later. |


| R2 | There are no automated tests for this app, so a change could break live quote updates, save quote, or recent quotes and we may only notice during manual checking. | Frontend Engineer | M | M | Use a simple manual checklist after each major change to test live updates, save quote, loading state, error state, type-check, and build. | A feature that worked earlier stops working and we do not know when it broke because there are no automated tests. |


| R3 | Some links on the website are not available or not built this week, which could confuse reviewers during demo or make the app look incomplete. | Frontend Engineer | M | M | Review all visible links before demo and make sure each one either works, is removed, or is clearly called out as out of scope. | A reviewer clicks a link during demo and it does not work or leads nowhere. |

| R4 | Security testing has not been done for this app, so security issues would not be found during this phase. | Delivery Lead | H | H | Be clear that this phase focuses on build, CI, and core functionality only, and note security testing as follow-up work. Avoid adding unnecessary packages or risky code changes. | A reviewer assumes security testing was completed, or asks for security sign-off before the work is accepted. |

| R5 | The quote shown may be mistaken as a final or approved insurance price because there is no disclaimer on the website, and the current rates are placeholder values that were not provided by an actuary. | Delivery Lead | M | M | Add clear wording in the UI or review notes that the number shown is only an estimate based on placeholder rates for this phase. | A reviewer, stakeholder, or customer treats the displayed premium like a final approved price or asks who validated the rates. |

## How I'll use this register

I’ll review this register at the start of each work session, before team check-ins, and again before opening or merging the PR. It will stay visible in the `delivery-leadership-package` so teammates and reviewers can see current delivery risks, mitigations, and escalation triggers. I’ll update it whenever a risk changes materially or becomes active.

