# /policy-check

Updates compliance checklists from official sources.

## Arguments
None

## Purpose

Store policies change frequently. This command:
1. Fetches latest policy pages
2. Compares with current checklists
3. Updates checklists if needed
4. Logs verification in policy-watch.md

## Sources to Check

| Policy | URL |
|--------|-----|
| Google Play Developer Policy | https://play.google.com/about/developer-content-policy/ |
| Target API Requirements | https://support.google.com/googleplay/android-developer/answer/11926878 |
| Closed Testing Requirements | https://support.google.com/googleplay/android-developer/answer/14151465 |
| App Store Review Guidelines | https://developer.apple.com/app-store/review/guidelines/ |
| Apple Upcoming Requirements | https://developer.apple.com/news/upcoming-requirements/ |
| AdMob Program Policies | https://support.google.com/admob/answer/6128543 |

## Execution

```
For each source URL:
1. Fetch current content
2. Compare key requirements with our checklists
3. Note any changes

If changes found:
- Update docs/compliance/google-play-checklist.md
- Update docs/compliance/app-store-checklist.md
- Update docs/compliance/admob-checklist.md

Always update docs/compliance/policy-watch.md:
- Add entry with today's date
- Note what was checked
- Note any changes found

Output format:

## Policy Check — YYYY-MM-DD

### Google Play
- ✓ Checked: Developer Policy Center
- ✓ Checked: Target API requirements (still API 36)
- ⚠️ Change detected: [description]

### App Store
- ✓ Checked: Review Guidelines
- ✓ Checked: Upcoming Requirements
- No changes

### AdMob
- ✓ Checked: Program Policies
- No changes

### Updates Made
- Updated google-play-checklist.md: [change]

### Next Check
Recommend re-checking before next submission.
```
