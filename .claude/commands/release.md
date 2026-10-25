# /release

Launches submission to stores.

## Arguments
- `$ARGUMENTS`: `<slug> <platform>`
  - slug: app to release
  - platform: `android`, `ios`, or `all`

## Prerequisites
- Human has given explicit GO in chat
- Store package complete
- EAS secrets configured

## Workflow

### Android
1. Build production AAB:
   ```bash
   eas build --platform android --profile production
   ```
2. Wait for build completion
3. Submit to Google Play (internal track):
   ```bash
   eas submit --platform android --latest
   ```
4. Update RELEASE.md with build ID and status

### iOS
1. Build production IPA (cloud):
   ```bash
   eas build --platform ios --profile production
   ```
2. Wait for build completion
3. Submit to TestFlight:
   ```bash
   eas submit --platform ios --latest
   ```
4. Update RELEASE.md with build ID and status

### Post-Submission
- Monitor build status
- Track review status
- Handle any rejections per playbook

## Execution

```
⚠️ CONFIRM: Human has given GO in this chat session.

If no GO found, STOP and ask for confirmation.

If GO confirmed:

Parse platform from arguments.

For android:
1. eas build --platform android --profile production
2. Wait for completion
3. eas submit --platform android --latest
4. Update RELEASE.md

For ios:
1. eas build --platform ios --profile production
2. Wait for completion
3. eas submit --platform ios --latest
4. Update RELEASE.md

For all:
1. Run android steps
2. Run ios steps

Update PORTFOLIO.md phase to "Submitted"

Monitor for review results.
```

## ⚠️ Safety

This command executes `eas submit` which is IRREVERSIBLE.

Only proceed if:
1. Human explicitly said "GO" or equivalent
2. Compliance audit is GO
3. All prerequisites are met

If in doubt, STOP and ask.
