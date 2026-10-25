# App Store (iOS/iPadOS) Compliance Checklist

> **Last verified:** YYYY-MM-DD  
> **Guidelines version:** Check [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

---

## SDK & Xcode Requirements

- [ ] **Built with Xcode 26** (or latest required version)
  - [Upcoming requirements](https://developer.apple.com/news/upcoming-requirements/)
- [ ] **iOS 26 SDK** used for compilation
- [ ] Minimum deployment target set appropriately (recommend iOS 15+)
- [ ] All deprecated APIs replaced
- [ ] App runs correctly on latest iOS versions
- [ ] Universal binary includes arm64 architecture
- [ ] No private API usage

---

## Guideline 2.1 - App Completeness

- [ ] **App is complete and functional** - no placeholder content
- [ ] No "coming soon" features prominently displayed
- [ ] All buttons and links functional
- [ ] No debug/test code in release build
- [ ] No expired content (dates, promotions)
- [ ] Demo accounts provided if login required (in reviewer notes)

---

## Guideline 2.3 - Accurate Metadata

- [ ] **App name matches functionality** - no misleading names
- [ ] Screenshots show actual app UI
- [ ] Description accurately represents features
- [ ] No references to competing platforms in metadata
- [ ] Preview videos show actual app experience
- [ ] Keywords relevant and not stuffed
- [ ] Category selection accurate
- [ ] What's New describes actual changes

---

## Guideline 3.1.1 - In-App Purchase

- [ ] **All digital goods/services use IAP** (not third-party payment)
- [ ] IAP items properly configured in App Store Connect
- [ ] Prices set in all territories
- [ ] Subscription terms clearly displayed before purchase
- [ ] Auto-renewal terms visible
- [ ] Free trial terms clearly stated

---

## Guideline 3.1.2 - Subscriptions

- [ ] **Subscription purpose clearly explained**
- [ ] What's included vs. free tier clearly differentiated
- [ ] Subscription management link accessible in app
- [ ] No misleading "free" claims for paid subscriptions
- [ ] Grace period handling implemented
- [ ] Downgrades/upgrades handled correctly

---

## Guideline 4.2 - Minimum Functionality

- [ ] **App provides lasting value** - not a thin wrapper
- [ ] More than just a website in an app shell
- [ ] Native iOS features utilized appropriately
- [ ] Sufficient functionality to justify existence
- [ ] Not just marketing material or a catalog

---

## Guideline 4.3 - Spam / App Similarity

- [ ] **App is unique** - not a duplicate with minor changes
- [ ] Not a template app with minimal customization
- [ ] Distinct from other apps by same developer
- [ ] If using templates, sufficient differentiation added

---

## Guideline 5.1.1 - Data Collection and Storage

- [ ] **Purpose strings for all permissions** in Info.plist
  - NSCameraUsageDescription
  - NSPhotoLibraryUsageDescription
  - NSLocationWhenInUseUsageDescription
  - NSMicrophoneUsageDescription
  - etc.
- [ ] Permission requests contextual and explained
- [ ] Data collection minimized to what's necessary
- [ ] User consent obtained before collection
- [ ] Secure data transmission (HTTPS/TLS)

---

## Guideline 5.1.2 - Data Use and Sharing

- [ ] **Clear disclosure of data use** in app and policy
- [ ] Third-party data sharing disclosed
- [ ] User can opt out of non-essential data collection
- [ ] GDPR/CCPA rights supported
- [ ] Data not used beyond stated purposes

---

## Restore Purchases

- [ ] **"Restore Purchases" button visible** and functional
  - Required location: Settings, paywall, or purchase screen
- [ ] Works for all IAP types (consumables excluded)
- [ ] Handles multiple Apple IDs gracefully
- [ ] Shows confirmation when restore completes
- [ ] Handles "nothing to restore" case gracefully

---

## App Privacy (Nutrition Labels)

- [ ] **App Privacy questions answered** in App Store Connect
  - [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- [ ] All data types collected declared
- [ ] Third-party SDK data collection included
- [ ] Linked to user vs. not linked disclosed
- [ ] Tracking usage declared honestly
- [ ] Consistent with privacy policy

### Common Data Types to Declare
- [ ] Identifiers (Device ID, Advertising ID)
- [ ] Usage Data (product interaction, advertising data)
- [ ] Diagnostics (crash data, performance data)
- [ ] Location (if applicable)
- [ ] Contact Info (if collected)

---

## Privacy Manifest (Required for certain APIs)

- [ ] **PrivacyInfo.xcprivacy file included** if using required reason APIs
  - [Privacy manifest files](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files)
- [ ] Required reasons declared for:
  - File timestamp APIs
  - System boot time APIs
  - Disk space APIs
  - User defaults APIs
  - Active keyboard APIs
- [ ] Third-party SDK privacy manifests included
- [ ] Signature validation for SDKs if required

---

## Age Rating (Content Descriptors)

- [ ] **Age rating questionnaire completed accurately**
- [ ] Violence, mature content properly rated
- [ ] Gambling simulation disclosed
- [ ] User-generated content flagged if present
- [ ] Medical/health content disclosed
- [ ] Horror/fear themes noted
- [ ] Re-rate if content changes

---

## App Review Preparation

### Reviewer Notes
- [ ] **Demo account credentials provided** (if login required)
- [ ] Special setup instructions included
- [ ] Feature explanations for non-obvious functionality
- [ ] Hardware requirements noted
- [ ] Backend dependencies explained
- [ ] Test environment info if needed

### Test Account Requirements
- [ ] Account credentials work
- [ ] Account has full access to features
- [ ] Account won't expire during review
- [ ] In-app purchases can be tested

---

## Technical Requirements

- [ ] **App launches correctly** on all supported devices
- [ ] No crashes during normal use
- [ ] Handles network errors gracefully
- [ ] Supports all screen sizes declared
- [ ] iPad multitasking works (if iPad supported)
- [ ] Dynamic Type supported
- [ ] VoiceOver accessible
- [ ] Dark Mode supported (recommended)
- [ ] App Tracking Transparency implemented (if tracking)

---

## Store Listing Assets

- [ ] **App icon** - 1024x1024 PNG, no alpha
- [ ] **Screenshots** - Required sizes for each device
- [ ] **App Preview videos** - Optional, must show actual app
- [ ] **Description** - No HTML, accurately describes app
- [ ] **Promotional text** - Can be updated without review
- [ ] **Keywords** - 100 character limit, comma separated
- [ ] **Support URL** - Valid and accessible
- [ ] **Privacy Policy URL** - Required, accessible

---

## Pre-Submission Final Checks

- [ ] No placeholder/test content
- [ ] No competitor platform references
- [ ] Build validated with no errors/warnings
- [ ] TestFlight testing completed
- [ ] Version and build numbers incremented
- [ ] Export compliance answered
- [ ] Content rights documented
- [ ] Advertising identifier usage declared

---

## Official Resources

- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [App Store Connect Help](https://developer.apple.com/help/app-store-connect/)
- [Apple Developer News](https://developer.apple.com/news/) - Requirement updates
- [Common App Rejections](https://developer.apple.com/app-store/review/rejections/)
