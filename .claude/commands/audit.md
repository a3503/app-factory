# /audit

Launches Phase 4: Quality and compliance audit.

## Arguments
- `$ARGUMENTS`: `<slug>` — the app to audit

## Prerequisites
- Development complete
- Tests passing

## Workflow

Run these agents in parallel:

1. **QA Engineer** (qa-engineer)
   - Create test plan
   - Write Maestro E2E flows
   - Run tests, document bugs
   - Output: `apps/<slug>/docs/QA_REPORT.md`

2. **Code Reviewer** (code-reviewer)
   - Review code quality, security, performance
   - Run automated checks
   - Output: `apps/<slug>/docs/CODE_REVIEW.md`

3. **Compliance Officer** (store-compliance-officer)
   - Update checklists from official sources
   - Full compliance audit
   - Prepare store declarations
   - Output: `apps/<slug>/docs/COMPLIANCE_AUDIT.md`

## After Audit

If any Bloquant or Majeur issues:
1. mobile-developer fixes issues
2. Re-run affected audits
3. Repeat until clean

## Completion Criteria

- QA_REPORT: 0 Bloquant, 0 Majeur
- CODE_REVIEW: 0 Bloquant, 0 Majeur
- COMPLIANCE_AUDIT: GO on both stores

## Execution

```
Read apps/<slug>/ for context.

Run in parallel:
- qa-engineer
- code-reviewer
- store-compliance-officer

Collect results.

If issues found:
- List all Bloquant and Majeur issues
- Developer fixes them
- Re-audit only affected areas

Loop until:
- 0 Bloquant across all reports
- 0 Majeur across all reports
- Compliance is GO for Google Play and App Store

Update PORTFOLIO.md phase to "Audit Passed"
```
