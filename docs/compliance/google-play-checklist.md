# Google Play Store Compliance Checklist

> **Last verified:** YYYY-MM-DD  
> **Policy version:** Check [Developer Policy Center](https://play.google.com/about/developer-content-policy/)

---

## Target SDK Requirements

- [ ] **targetSdkVersion 36** - Required for new apps and updates as of Aug 31, 2025
  - [Target API level requirements](https://support.google.com/googleplay/android-developer/answer/11926878)
- [ ] **compileSdkVersion ≥ 36** - Must match or exceed targetSdkVersion
- [ ] **minSdkVersion** - Set appropriately for device coverage (recommend 24+)
- [ ] All deprecated APIs replaced with modern alternatives
- [ ] Permissions model compliant with Android 14+ restrictions

---

## Closed Testing Requirements (Personal Developer Accounts)

> Required before production release for personal accounts since Nov 2023

- [ ] **Minimum 12 testers enrolled** (not just invited)
  - [Closed testing requirements](https://support.google.com/googleplay/android-developer/answer/14151465)
- [ ] **14 consecutive days of testing** completed
- [ ] Testers opted-in via Google Groups or email list
- [ ] Testing track created in Play Console (Internal → Closed → Open → Production)
- [ ] Collected and addressed tester feedback
- [ ] No policy violations flagged during testing period

---

## Data Safety Declaration

- [ ] **Data safety form completed** in Play Console
  - [Data safety help](https://support.google.com/googleplay/android-developer/answer/10787469)
- [ ] All data types collected/shared accurately declared
- [ ] Data handling practices (encryption, deletion) specified
- [ ] Third-party SDK data collection disclosed (AdMob, Firebase, etc.)
- [ ] Consistent with privacy policy statements
- [ ] Security practices section completed

### Common Data Types to Declare
- [ ] Device identifiers (Advertising ID, Android ID)
- [ ] Crash logs and diagnostics
- [ ] App interactions and analytics
- [ ] Approximate/precise location (if applicable)
- [ ] Personal info (name, email) if collected

---

## Privacy Policy

- [ ] **Privacy policy URL provided** in Play Console
  - [Privacy policy requirements](https://support.google.com/googleplay/android-developer/answer/9859455)
- [ ] Policy accessible without login/paywall
- [ ] Policy available in app's supported languages
- [ ] Clearly states what data is collected
- [ ] Explains how data is used and shared
- [ ] Includes data retention and deletion info
- [ ] Contact information provided
- [ ] Last updated date visible
- [ ] GDPR/CCPA compliance statements (if applicable)

---

## Advertising Declaration

- [ ] **Contains Ads** setting accurate in Play Console
- [ ] Ad networks declared in Data Safety
- [ ] Ads distinguishable from app content
- [ ] No deceptive ad placements
- [ ] Interstitial ads have clear close button
- [ ] No ads covering critical UI elements
- [ ] Child-directed apps use only certified ad SDKs

---

## IARC Age Rating

- [ ] **IARC questionnaire completed**
  - [Content ratings](https://support.google.com/googleplay/android-developer/answer/9859655)
- [ ] Rating reflects actual app content
- [ ] Violence, sexual content, gambling accurately reported
- [ ] User-generated content disclosed if applicable
- [ ] In-app purchases disclosed
- [ ] Ads presence disclosed
- [ ] Re-rate if content changes significantly

---

## Permissions

- [ ] **Only necessary permissions requested**
  - [Permissions policy](https://support.google.com/googleplay/android-developer/answer/9214102)
- [ ] Permissions declaration form completed for sensitive permissions
- [ ] Runtime permissions requested in context
- [ ] Permission rationale shown to users
- [ ] App functions gracefully if permissions denied

### Sensitive Permissions Requiring Declaration
- [ ] CAMERA / RECORD_AUDIO
- [ ] READ_CONTACTS / READ_CALL_LOG
- [ ] ACCESS_FINE_LOCATION / ACCESS_BACKGROUND_LOCATION
- [ ] READ_SMS / RECEIVE_SMS
- [ ] READ_EXTERNAL_STORAGE (legacy)
- [ ] QUERY_ALL_PACKAGES

---

## Spam & Minimum Functionality

- [ ] **App provides genuine utility** - not a thin wrapper
  - [Spam policy](https://support.google.com/googleplay/android-developer/answer/9898842)
- [ ] No duplicate apps with minimal differences
- [ ] No misleading metadata (title, description, screenshots)
- [ ] Keywords not stuffed in listing
- [ ] Screenshots accurately represent app
- [ ] No fake reviews or rating manipulation

---

## Store Listing Assets

- [ ] **App icon** - 512x512 PNG, no transparency
- [ ] **Feature graphic** - 1024x500 PNG/JPG
- [ ] **Screenshots** - Min 2, max 8 per device type
- [ ] **Short description** - Max 80 characters
- [ ] **Full description** - Max 4000 characters
- [ ] Category and tags selected appropriately
- [ ] Contact email valid and monitored

---

## Additional Policies

- [ ] **Families Policy** compliance (if targeting children)
- [ ] **Financial services** declarations (if applicable)
- [ ] **Health apps** disclosures (if applicable)
- [ ] **Gambling** content restricted by region (if applicable)
- [ ] No malware, spyware, or deceptive behavior
- [ ] Proper handling of user data deletion requests
- [ ] In-app purchases use Google Play Billing

---

## Pre-Submission Final Checks

- [ ] App tested on multiple device configurations
- [ ] No crashes or ANRs in recent testing
- [ ] ProGuard/R8 rules don't break functionality
- [ ] Release notes written for this version
- [ ] Version code incremented
- [ ] Signing key backed up securely
- [ ] App Bundle (.aab) generated, not APK

---

## Official Resources

- [Google Play Developer Policy Center](https://play.google.com/about/developer-content-policy/)
- [Play Console Help](https://support.google.com/googleplay/android-developer)
- [Android Developers Blog](https://android-developers.googleblog.com/) - Policy updates
- [Policy Status Dashboard](https://play.google.com/console) - Check for violations
