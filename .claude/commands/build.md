# /build

Launches Phase 3: Development iteration.

## Arguments
- `$ARGUMENTS`: `<slug>` — the app to build

## Prerequisites
- PRD, DESIGN, ARCHITECTURE, MONETIZATION docs exist
- Human has validated Phase 2

## Workflow

Development proceeds in iterations:

### Iteration 1: Core Feature
1. mobile-architect scaffolds if not done
2. mobile-developer implements core feature from PRD
3. Tests written alongside code
4. Verify: `pnpm lint && pnpm typecheck && pnpm test`

### Iteration 2: Onboarding
1. mobile-developer implements onboarding screens
2. Follow DESIGN.md specs

### Iteration 3: Monetization
1. monetization-engineer integrates @factory/core
2. Implement consent flow, ads, paywall
3. Use TEST IDs only

### Iteration 4: Polish
1. mobile-developer adds settings, i18n, dark mode
2. Accessibility pass
3. Final UI polish

### After Each Iteration
- All checks must pass
- Dev build tested on Android emulator
- Commit changes

## Execution

```
Read apps/<slug>/docs/ for context.

Check what's already implemented.

Continue from where we left off:
1. Core feature (if not done)
2. Onboarding (if not done)
3. Monetization (if not done)
4. Polish (if not done)

After each iteration:
pnpm lint
pnpm typecheck  
pnpm test

If all pass, commit with conventional commit message.

When all iterations complete:
- Build dev APK and test
- Confirm ready for audit

Update PORTFOLIO.md phase to "Development Complete"
```
