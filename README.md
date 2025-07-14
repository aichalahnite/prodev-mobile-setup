
# 📱 ProDev Mobile Development Project

Welcome to the **ProDev Mobile Development** repository. This project is part of the **ALX Software Engineering Mobile Development Curriculum**, focused on building cross-platform mobile apps using:

* **React Native**
* **TypeScript**
* **NativeWindCSS**
* **Expo Framework**

---

## 📚 Project Overview

This project introduces the foundational skills needed to build, style, and structure mobile applications using modern tools and frameworks. It is divided into progressive tasks across multiple directories, with each directory representing a milestone in your mobile development journey.

---

## 🛠️ Tech Stack

| Tech          | Purpose                                |
| ------------- | -------------------------------------- |
| React Native  | Mobile app development framework       |
| TypeScript    | Adds static typing to JavaScript       |
| Expo          | Rapid development + device testing     |
| NativeWindCSS | Utility-first styling for React Native |
| VS Code       | Recommended code editor                |
| Expo Go       | Mobile preview of development builds   |

---

## 📦 Repository Structure

```
prodev-mobile-setup/
├── mobile-development-setup/
│   └── README.md
├── prodev-mobile-app-0x00/
│   ├── README.md
│   └── app/(tabs)/index.tsx
├── prodev-mobile-app-0x01/
│   └── app/index.tsx
├── prodev-mobile-app-0x02/
│   └── app/index.tsx
├── prodev-mobile-app-0x03/
│   ├── app/index.tsx
│   ├── app/_layout.tsx
│   ├── styles/index.tsx
│   ├── app.json
│   └── assets/images/
```

---

## ✅ Task Breakdown

### 📌 0. Setting Up the Environment

**Directory:** `mobile-development-setup/`

* Installed Node.js LTS
* Installed Expo CLI globally (`npm install -g expo-cli`)
* Installed **Expo Go** on physical device via App Store / Play Store
* Connected devices to Expo Go using QR Code
* Documented setup challenges (if any)

---

### 📌 1. Create Your First App

**Directory:** `prodev-mobile-app-0x00/`

* Initialized app using:

  ```bash
  npx create-expo-app@latest .
  ```
* Modified `index.tsx`:

  ```tsx
  <Text>** First App Created**</Text>
  ```
* Ran and tested app using:

  ```bash
  npx expo start
  ```
* Observed and documented effects of:

  ```bash
  npm run reset-project
  ```

---

### 📌 2. Mobile Components and Styling

**Directory:** `prodev-mobile-app-0x01/`

* Cleared default template
* Updated `app/index.tsx` with new `<Text>` elements and custom styles via `StyleSheet`
* Practiced using:

  * `<View>`, `<Text>`, and custom styles (`largeText`, `mediumText`, `smallText`)
  * TypeScript for props and component structure

---

### 📌 3. Safe Areas, Images, and Touchables

**Directory:** `prodev-mobile-app-0x02/`

* Integrated:

  * `SafeAreaProvider`, `SafeAreaView` from `react-native-safe-area-context`
  * `Image`, `ImageBackground`, `TouchableOpacity`
* Implemented:

  * Background image with `Dimensions.get("window").height`
  * Company logo image
  * Call-to-action buttons: **Join here**, **Sign In**
  * Footer navigation text: **Continue to home**
* Verified layout on Expo Go using:

  ```bash
  npx expo start
  ```

---

### 📌 4. Exploring Core Components & Forms

**Directory:** `prodev-mobile-app-0x03/`

* Created new Expo project:

  ```bash
  npx create-expo-app@latest prodev-mobile-app-0x03
  npm run reset-project
  ```
* Created `styles/index.tsx` with custom component styles
* Designed login screen in `app/index.tsx` with:

  * Input fields
  * Password visibility toggle using icons
  * Social media login buttons
  * Divider lines
  * Footer with **Join now** CTA
* Configured `app/_layout.tsx` with:

  ```tsx
  <Stack screenOptions={{ headerShown: false }} />
  ```
* Tested on device with:

  ```bash
  npx expo start
  ```

---

## ✍️ Observations

* **Expo reset (`npm run reset-project`)**: Clears cache and rebuilds native dependencies. Useful for resolving strange runtime or dependency errors.
* **Expo Go** greatly simplifies the testing cycle compared to native emulators.
* **Styling with NativeWindCSS** provides a streamlined development experience similar to TailwindCSS.
* TypeScript helped avoid runtime issues and improved developer ergonomics via autocompletion and type-checking.

---

## 📲 Running Any App

To run any subproject (e.g., `prodev-mobile-app-0x03`), do the following:

```bash
cd prodev-mobile-app-0x03
npx expo start
```

Scan the QR code with **Expo Go** on your phone to test.

---

## 📌 Conclusion

This project offered hands-on exposure to core React Native concepts and tooling including:

* Setting up mobile dev environments
* Component-based UI creation
* Styling using NativeWindCSS and StyleSheet API
* Navigation layouts and safe areas
* Responsive design considerations

---

## 📁 Future Enhancements

* Add navigation using `expo-router`
* Implement persistent state with Redux or Zustand
* Integrate API fetching with Axios or React Query
* Add unit testing with Jest
* Polish UI with animations using Reanimated

---

## 🧠 Resources

* [React Native Docs](https://reactnative.dev/)
* [Expo Docs](https://docs.expo.dev/)
* [TypeScript Docs](https://www.typescriptlang.org/)
* [NativeWindCSS](https://www.nativewind.dev/)

---

**© 2025 ALX Africa. All rights reserved.**

---