# /status

Shows current studio status.

## Arguments
None

## Output

1. **Portfolio Summary**
   - List all apps from docs/PORTFOLIO.md
   - Current phase for each
   - Store status if published

2. **Blockers**
   - Any Bloquant issues from recent audits
   - Missing prerequisites for next phase

3. **HUMAN_TODO**
   - Outstanding items from docs/HUMAN_TODO.md
   - Items blocking progress

## Execution

```
Read docs/PORTFOLIO.md
Read docs/HUMAN_TODO.md

For each app in portfolio:
- Check latest audit reports if exist
- Note any blockers

Output format:

## 📊 Portfolio Status

| App | Phase | Google Play | App Store | Blockers |
|-----|-------|-------------|-----------|----------|
| app1 | Development | — | — | 0 |
| app2 | Audit | — | — | 2 Bloquant |

## 🚧 Current Blockers

### app2
- [BUG-001] Crash on launch (QA_REPORT)
- [CR-003] Security: API key in code (CODE_REVIEW)

## 👤 Human Actions Needed

From HUMAN_TODO.md:
- [ ] Create Google Play Console account
- [ ] Set up EAS secrets for app2
- [ ] Recruit 12 testers for closed testing

## 📋 Next Steps

- app1: Continue /build
- app2: Fix blockers, then re-run /audit
```
