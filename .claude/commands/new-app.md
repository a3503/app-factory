# /new-app

Launches Phase 2: Product conception for a chosen opportunity.

## Arguments
- `$ARGUMENTS`: `<slug> "<chosen opportunity description>"`
  - slug: lowercase, hyphens, e.g., "breath-calm"
  - description: the opportunity from shortlist

## Workflow

1. **Create app directory**
   ```
   apps/<slug>/
   ├── docs/
   ├── src/
   ├── e2e/
   └── store/
   ```

2. **Product Manager** (product-manager agent)
   - Create PRD with problem, persona, MVP scope
   - Propose app names
   - Output: `apps/<slug>/docs/PRD.md`

3. **Parallel work:**
   - **UX/UI Designer** → `apps/<slug>/docs/DESIGN.md`
   - **Monetization Engineer** → `apps/<slug>/docs/MONETIZATION.md`
   - **Compliance Pre-check** (store-compliance-officer) → Early risk identification

4. **Mobile Architect** (after above complete)
   - Define architecture
   - Scaffold the app
   - Output: `apps/<slug>/docs/ARCHITECTURE.md`

5. **Update PORTFOLIO.md** with new app entry (Phase: Conception)

6. **STOP** — Wait for human to validate PRD + design + monetization

## Execution

```
Parse arguments: slug = first word, description = rest in quotes

Example: /new-app breath-calm "Guided breathing app for stress relief"

Create apps/<slug>/ directory structure.

Run product-manager with the opportunity description.

Then run in parallel:
- ux-ui-designer
- monetization-engineer  
- store-compliance-officer (pre-check mode)

Wait for all to complete.

Run mobile-architect to create ARCHITECTURE.md and scaffold.

Update docs/PORTFOLIO.md.

End with STOP for human validation.
```
