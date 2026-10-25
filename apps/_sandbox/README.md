# _sandbox

Internal test app for validating @factory/core modules.

## Purpose

This app is NOT for publication. It's used to:
- Test ads integration (using test IDs)
- Test IAP flow (sandbox mode)
- Test consent dialogs
- Validate the build chain on Android

## Running

```bash
# Install dependencies
pnpm install

# Start development
pnpm start

# Run on Android emulator
pnpm android
```

## Test IDs

This app uses AdMob test IDs by default. Real IDs are never used in this sandbox.
