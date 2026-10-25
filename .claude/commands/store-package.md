# /store-package

Launches Phase 5: Store preparation.

## Arguments
- `$ARGUMENTS`: `<slug>` — the app to prepare

## Prerequisites
- Audit passed (COMPLIANCE_AUDIT shows GO)

## Workflow

1. **ASO Specialist** (aso-specialist)
   - Keyword research
   - Write store listings (EN + FR)
   - Create screenshot brief
   - Output:
     - `apps/<slug>/store/listing.en.md`
     - `apps/<slug>/store/listing.fr.md`
     - `apps/<slug>/store/screenshots-brief.md`

2. **Release Manager** (release-manager)
   - Configure eas.json
   - Set up versioning
   - Prepare build commands
   - Output: `apps/<slug>/docs/RELEASE.md`

3. **Publish Privacy Policy**
   - Generate from DATA_INVENTORY.md
   - Place in `legal/<slug>/privacy-policy.html`
   - Verify app-ads.txt exists in `legal/app-ads.txt`

4. **Final Checklist**
   - [ ] Store listings complete (EN + FR)
   - [ ] Screenshot brief ready
   - [ ] Privacy policy published
   - [ ] app-ads.txt published
   - [ ] eas.json configured
   - [ ] EAS secrets set (by human)
   - [ ] RELEASE.md created

5. **STOP** — Wait for human GO to submit

## Execution

```
Verify COMPLIANCE_AUDIT.md shows GO.

Run aso-specialist.
Run release-manager.

Generate privacy policy in legal/<slug>/.

Verify all assets exist:
- Store listings
- Screenshot brief
- Privacy policy
- app-ads.txt
- eas.json

Present final checklist.

STOP and wait for human to:
1. Create screenshots from brief
2. Set EAS secrets
3. Give GO for submission

Update PORTFOLIO.md phase to "Ready for Submission"
```
