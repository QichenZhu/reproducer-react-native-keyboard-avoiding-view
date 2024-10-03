# reproducer-react-native-keyboard-avoiding-view

![Build](https://github.com/QichenZhu/reproducer-react-native-keyboard-avoiding-view/workflows/Pre%20Merge%20Checks/badge.svg)

This is your new React Native Reproducer project.

## Reproduction steps

1. Build and run the iOS app with New Arch enabled.

```Bash
cd ReproducerApp
yarn
bundle install
cd ios
RCT_NEW_ARCH_ENABLED=1 pod install
cd ..
yarn ios
```

2. Click _Show Keyboard_, and ensure the soft keyboard is visible. If not, enable it in the simulator menu: _I/O_ -> _Keyboard_ -> _Toggle Software Keyboard_.

3. Click _Freeze_, _Hide Keyboard_, _Unfreeze_ buttons in sequence.

**Expected result:** No blank area under the grey section.

**Actual result:** A blank area appears under the grey section.

## Reproducer todo list

- [x] Create a new reproducer project.
- [x] Git clone your repository locally.
- [x] Edit the project to reproduce the failure you're seeing.
- [x] Push your changes, so that Github Actions can run the CI.
- [x] Make sure the repository is public and share the link with the issue you reported.
