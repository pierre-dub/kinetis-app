# kinetis-app

Kinetis is a mobile app that was born to allow physicians to create a library of workouts and suggest it to their patients.
As it is, the app allows only a user to create an account and store/edit/remove workouts in a public library.
####The implementation is not over, many features and services should be added before any publication (services, tests, CI....).
 
This project has been developed to discover *react-native* and improve my skills in *typescript*. 
 
*kinetis_app* is linked with *kinetis-server* both are stored on my github : 
1. https://github.com/pierre-dub/kinetis-app
2. https://github.com/pierre-dub/kinetis-server

###See a preview video (state of the art) of the app here: https://www.youtube.com/watch?v=LOlKVDVUtZE
 
##Quick start:
1. Install *node.js* : https://nodejs.org/en/
2. Download dependencies : `npm install` 
3. Start app with *expo* : https://docs.expo.io/versions/v37.0.0/
    * `npm start`
    
###*Expo* description :

#####A web page is open on localhost in your web browser, you can choose to launch the app in different ways :
* In your web browser : "Run in web browser"
* On your phone (expo app needed) : "Run on Android device/emulator"
  * connected by USB : Connection "Local" or `expo start --localhost --android` in terminal
  * connected on the same wifi : Connection "LAN"
  * connected on the different access points : Connection "Tunnel"