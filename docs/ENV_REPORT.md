# Environment Report

**Generated:** 2026-10-25  
**Platform:** Omarchy (Arch Linux), Kernel 7.2.8-9, Wayland/Hyprland

## Status Overview

| Tool | Required Version | Status |
|------|-----------------|--------|
| OS | Arch Linux | ✅ OK |
| Kernel | 7.x | ✅ OK (7.2.8-9) |
| Node.js | ≥20 | ✅ OK (v26.7.0) |
| git | ≥2.x | ✅ OK (2.56.0) |
| mise | any | ✅ OK (2026.10.18) |
| KVM | accessible | ✅ OK |
| pnpm | ≥9 | ❌ MISSING |
| JDK | 17 | ❌ MISSING |
| Android SDK | latest | ❌ MISSING |
| adb/platform-tools | latest | ❌ MISSING |
| Android Emulator | latest | ❌ MISSING |
| eas-cli | latest | ❌ MISSING |
| Maestro | latest | ❌ MISSING |

---

## Installation Commands

### 1. pnpm (via mise)

```bash
mise use -g pnpm@latest
```

### 2. JDK 17 (via pacman)

```bash
sudo pacman -S jdk17-openjdk
```

Set as default if multiple JDKs installed:
```bash
sudo archlinux-java set java-17-openjdk
```

### 3. Android SDK (via yay)

```bash
yay -S android-sdk android-sdk-platform-tools android-sdk-build-tools android-sdk-cmdline-tools-latest
```

Set environment variables (add to `~/.bashrc` or `~/.zshrc`):
```bash
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$ANDROID_HOME/cmdline-tools/latest/bin"
```

Accept licenses:
```bash
yes | sdkmanager --licenses
```

### 4. Android Emulator

```bash
yay -S android-emulator
```

Or via sdkmanager:
```bash
sdkmanager "emulator" "system-images;android-34;google_apis;x86_64"
```

Create an AVD:
```bash
avdmanager create avd -n app_factory_avd -k "system-images;android-34;google_apis;x86_64" --device "pixel_6"
```

### 5. eas-cli (via mise)

```bash
mise use -g eas-cli@latest
```

### 6. Maestro

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

Add to PATH (add to shell rc file):
```bash
export PATH="$PATH:$HOME/.maestro/bin"
```

---

## Post-Install Verification

Run these commands to verify installation:

```bash
# pnpm
pnpm --version

# JDK 17
java -version
echo $JAVA_HOME

# Android SDK
echo $ANDROID_HOME
adb --version
sdkmanager --version

# Android Emulator
emulator -list-avds

# eas-cli
eas --version

# Maestro
maestro --version

# KVM (already OK, but verify)
ls -la /dev/kvm
groups | grep kvm
```

---

## Wayland/Emulator Workaround

The Android Emulator may have issues on Wayland. Use the XCB workaround:

```bash
# Run emulator with X11 backend
QT_QPA_PLATFORM=xcb emulator -avd app_factory_avd
```

For persistent fix, add to your shell rc file or create an alias:
```bash
alias emulator='QT_QPA_PLATFORM=xcb emulator'
```

Or set globally for the session:
```bash
export QT_QPA_PLATFORM=xcb
```

---

## Quick Install Script

Run all missing tool installations in sequence:

```bash
# Node tools via mise
mise use -g pnpm@latest
mise use -g eas-cli@latest

# JDK 17
sudo pacman -S jdk17-openjdk

# Android SDK + Emulator
yay -S android-sdk android-sdk-platform-tools android-sdk-build-tools android-sdk-cmdline-tools-latest android-emulator

# Maestro
curl -Ls "https://get.maestro.mobile.dev" | bash

# Reload shell
source ~/.bashrc  # or ~/.zshrc
```

---

## Notes

- **KVM**: Already accessible. User is in `kvm` group, which enables hardware-accelerated Android emulation.
- **mise**: Used for Node.js toolchain management (pnpm, eas-cli). Preferred over npm global installs.
- **yay**: AUR helper for Android SDK packages not in official repos.
- **Environment variables**: Remember to source your shell rc file or restart terminal after adding exports.
