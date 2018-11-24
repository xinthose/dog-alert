# Installation

## Linux Setup
- Tutorial: https://docs.nativescript.org/start/ns-setup-linux
- `npm install -g nativescript --unsafe-perm`
- `tns extension install nativescript-cloud`

## Nativescript bluetooth
- Github: https://github.com/eddyverbruggen/nativescript-bluetooth
- `tns plugin add nativescript-bluetooth`
    - `npm i nativescript-bluetooth --save-dev`

## App creation
- `tns create dog-alert --template tns-template-blank-ng`

### Android phone
- Enable USB Debugging
    - Tutorial: https://developer.android.com/studio/debug/dev-options 
- Download bluetooth log file
    - Tutorial: http://www.fte.com/WebHelp/BPA600/Content/Documentation/WhitePapers/BPA600/Encryption/GettingAndroidLinkKey/RetrievingHCIlog.htm
    - `adb pull /sdcard/btsnoop_hci.log bluetooth_logs`
    - open file with wireshark
        - `apt-get install wireshark`
    - Shutterbug uses protocol: `L2CAP`
# Commands

## Telerik Nativescript (tns)
- `tns login`
- `tns cloud build`
- `tns run`   // run the app
- `tns preview` // preview the app using playground
- `tns doctor`    // check for any issues
- `tns build android`   // build app for Android
    - `tns run android` // run app on connected Android device

## Node package manager (npm)
- `npm update`  // update all packages

## Github
- git config user.email "adamdunsmoor@pm.me"  // set email address
- git config user.username "xinthose"  // set user name
- git config user.email  // check email address
- git config user.username  // check user name