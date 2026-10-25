# New App Scaffold Playbook

Step-by-step process to scaffold a new app in the factory.

## Prerequisites

- PRD approved (`apps/<slug>/docs/PRD.md`)
- DESIGN complete (`apps/<slug>/docs/DESIGN.md`)
- ARCHITECTURE defined (`apps/<slug>/docs/ARCHITECTURE.md`)

## Steps

### 1. Create Directory Structure

```bash
mkdir -p apps/<slug>/{src/app,e2e,store,docs}
```

### 2. Initialize package.json

```json
{
  "name": "<slug>",
  "version": "1.0.0",
  "private": true,
  "main": "src/index.ts",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "lint": "eslint src/",
    "typecheck": "tsc --noEmit",
    "test": "jest"
  },
  "dependencies": {
    "@factory/core": "workspace:*",
    "expo": "~52.0.0",
    "expo-router": "~4.0.0",
    "react": "18.3.1",
    "react-native": "0.76.0",
    "zustand": "^5.0.0",
    "react-native-mmkv": "^3.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "typescript": "^5.3.0",
    "jest": "^29.0.0",
    "@testing-library/react-native": "^12.0.0"
  }
}
```

### 3. Create app.config.ts

Copy from `apps/_sandbox/app.config.ts` and update:
- `name`: App display name
- `slug`: URL-safe name
- `ios.bundleIdentifier`: `com.a3503.<slug>`
- `android.package`: `com.a3503.<slug>`

### 4. Create eas.json

Copy from `apps/_sandbox/eas.json`. No changes needed for initial setup.

### 5. Create Root Layout

`src/app/_layout.tsx`:
- Import providers from @factory/core
- Set up navigation structure per DESIGN.md
- Configure translations

### 6. Create Screens

Per DESIGN.md:
- `src/app/index.tsx` - Home/main screen
- `src/app/(tabs)/*.tsx` - Tab screens if needed
- `src/app/settings.tsx` - Settings screen
- `src/app/paywall.tsx` - Paywall modal

### 7. Create i18n Files

`src/i18n/en.json` and `src/i18n/fr.json` with all user-facing strings.

### 8. Create DATA_INVENTORY.md

Document all data collection:

```markdown
# Data Inventory — <App Name>

## First-Party Data

| Data Type | Purpose | Stored | Shared |
|-----------|---------|--------|--------|
| User preferences | App functionality | Local only | No |

## Third-Party SDKs

### Google AdMob
- Advertising ID: Personalized ads (with consent)
- IP address: Fraud prevention

### RevenueCat
- Purchase history: Entitlement management
- Anonymous user ID: Subscription tracking
```

### 9. Verify Build

```bash
cd apps/<slug>
pnpm install
pnpm typecheck
pnpm lint
expo start --android
```

### 10. Update Portfolio

Add entry to `docs/PORTFOLIO.md`:

```markdown
| <slug> | <core function> | Development | — | — | — |
```

## Checklist

- [ ] Directory structure created
- [ ] package.json configured
- [ ] app.config.ts with correct IDs
- [ ] eas.json in place
- [ ] Root layout with providers
- [ ] Basic screens created
- [ ] i18n files in place
- [ ] DATA_INVENTORY.md created
- [ ] Build verified on Android
- [ ] Portfolio updated
