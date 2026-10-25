# AdMob Compliance Checklist

> **Last verified:** YYYY-MM-DD  
> **Policy version:** Check [AdMob Program Policies](https://support.google.com/admob/answer/6128543)

---

## Test Ad Units (Development)

- [ ] **Using test ad unit IDs in development** - Never real IDs in dev/debug builds
  - [Test ads](https://developers.google.com/admob/android/test-ads)

### Official Test Ad Unit IDs

**Android:**
```
Banner:       ca-app-pub-3940256099942544/6300978111
Interstitial: ca-app-pub-3940256099942544/1033173712
Rewarded:     ca-app-pub-3940256099942544/5224354917
Native:       ca-app-pub-3940256099942544/2247696110
App Open:     ca-app-pub-3940256099942544/9257395921
```

**iOS:**
```
Banner:       ca-app-pub-3940256099942544/2934735716
Interstitial: ca-app-pub-3940256099942544/4411468910
Rewarded:     ca-app-pub-3940256099942544/1712485313
Native:       ca-app-pub-3940256099942544/3986624511
App Open:     ca-app-pub-3940256099942544/5575463023
```

- [ ] Test device IDs registered for physical device testing
- [ ] Build variants/flavors configured (debug=test, release=production)
- [ ] No test ads in production builds
- [ ] No production ads in test/debug builds

---

## UMP SDK / GDPR Consent

- [ ] **User Messaging Platform (UMP) SDK integrated**
  - [UMP SDK](https://developers.google.com/admob/ump/android/quick-start)
- [ ] Consent form configured in AdMob dashboard
- [ ] GDPR consent collected before ad requests (EU users)
- [ ] Consent status checked at app launch
- [ ] Users can change consent preferences
- [ ] Consent persists across sessions
- [ ] Non-personalized ads served when consent denied

### Consent Implementation
- [ ] `ConsentInformation.requestConsentInfoUpdate()` called
- [ ] `ConsentForm.loadAndShowConsentFormIfRequired()` used
- [ ] Consent status passed to ad requests
- [ ] Under-age-of-consent handling implemented (`tagForUnderAgeOfConsent`)

### EU/EEA Requirements
- [ ] TCF 2.0 compliance if using IAB framework
- [ ] Consent string stored and passed to mediation partners
- [ ] Clear explanation of data usage purposes

---

## App Tracking Transparency (iOS)

- [ ] **ATT prompt implemented** for iOS 14.5+
  - [ATT Implementation](https://developers.google.com/admob/ios/privacy)
- [ ] `NSUserTrackingUsageDescription` in Info.plist
- [ ] ATT status checked before ad requests
- [ ] Descriptive explanation in permission string
- [ ] Works for users who deny tracking (contextual ads)
- [ ] SKAdNetwork configured for attribution

### ATT Flow
- [ ] Request ATT permission at appropriate time (not on launch)
- [ ] Handle all ATT statuses:
  - `authorized` - Full ad tracking
  - `denied` - Contextual ads only
  - `notDetermined` - Show prompt
  - `restricted` - Parental controls

---

## app-ads.txt

- [ ] **app-ads.txt hosted on developer website**
  - [app-ads.txt guide](https://support.google.com/admob/answer/9363762)
- [ ] File at `https://yourdomain.com/app-ads.txt`
- [ ] Contains Google Publisher ID line:
  ```
  google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
  ```
- [ ] Developer website URL set in store listings
- [ ] File accessible (no auth, redirects OK)
- [ ] Mediation partners added if using mediation
- [ ] File validates with Google's checker

---

## Ad Placement Rules

### Accidental Clicks Prevention
- [ ] **Ads not near interactive elements** (buttons, navigation)
- [ ] Sufficient spacing around ad units (recommend 32dp+)
- [ ] No ads covering game controls
- [ ] No ads appearing during transitions/animations
- [ ] No ads triggered by scrolling content
- [ ] Close button clearly visible on interstitials

### Interstitial Ads
- [ ] **Natural break points only** (level complete, article end)
- [ ] Not on app launch (use App Open ads instead)
- [ ] Not immediately after user action
- [ ] Frequency capped (recommend max 1 per 60-90 seconds)
- [ ] User can close after required time
- [ ] No stacked/repeated interstitials

### Rewarded Ads
- [ ] **User must opt-in** to watch (button tap)
- [ ] Clear value proposition shown before
- [ ] Reward delivered after completion
- [ ] "Watch ad" button not deceptive
- [ ] Alternative non-ad options available

### Banner Ads
- [ ] Not covering content or controls
- [ ] Not in scrollable content (use anchored)
- [ ] Not stacked or overlapping
- [ ] Proper size for screen/placement
- [ ] Refreshed at appropriate intervals (30-60s minimum)

### Native Ads
- [ ] Clearly distinguishable from content
- [ ] "Ad" or "Sponsored" badge visible
- [ ] Not mimicking system UI
- [ ] User can identify it's an advertisement

---

## Ad Content & Restrictions

- [ ] **No clicking own ads** (ever, including testing)
- [ ] No encouraging users to click ads
- [ ] No rewards for clicking ads (vs. watching rewarded)
- [ ] No misleading ad implementation
- [ ] Age-appropriate ads for app audience
- [ ] Sensitive categories blocked if needed

---

## Children & Family Apps

- [ ] **COPPA compliance** if targeting children
- [ ] `tagForChildDirectedTreatment(true)` set
- [ ] Only certified ad networks used
- [ ] No behavioral advertising to children
- [ ] Parental consent where required

---

## Technical Implementation

- [ ] Latest AdMob SDK version
- [ ] Proper initialization before ad requests
- [ ] Ad loading errors handled gracefully
- [ ] No ad requests when app backgrounded
- [ ] Memory management for ad objects
- [ ] Lifecycle methods properly implemented

### SDK Initialization
```kotlin
// Android
MobileAds.initialize(this) { status -> }

// iOS
GADMobileAds.sharedInstance().start { status in }
```

- [ ] Initialization called once at app start
- [ ] Ad requests made only after initialization callback

---

## Mediation (If Used)

- [ ] Mediation adapters properly integrated
- [ ] Network SDKs at compatible versions
- [ ] Test ads working for all networks
- [ ] app-ads.txt includes all mediation partners
- [ ] Privacy/consent passed to mediation networks

---

## Monitoring & Compliance

- [ ] AdMob account in good standing
- [ ] No policy violation emails/warnings
- [ ] Invalid traffic not significantly elevated
- [ ] eCPMs and fill rates monitored
- [ ] Policy center checked regularly

---

## Pre-Release Checklist

- [ ] Test ad IDs replaced with production IDs
- [ ] UMP consent flow tested end-to-end
- [ ] ATT prompt working (iOS)
- [ ] app-ads.txt live and valid
- [ ] All ad placements reviewed for policy
- [ ] No accidental click scenarios
- [ ] Tested on real devices (not just emulator)

---

## Official Resources

- [AdMob Program Policies](https://support.google.com/admob/answer/6128543)
- [AdMob Help Center](https://support.google.com/admob/)
- [Google Publisher Policies](https://support.google.com/publisherpolicies)
- [AdMob Android SDK](https://developers.google.com/admob/android/quick-start)
- [AdMob iOS SDK](https://developers.google.com/admob/ios/quick-start)
- [UMP SDK Documentation](https://developers.google.com/admob/ump/android/quick-start)
