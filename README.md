## Client side code for the music library application.
I have used Vue.js for the same. 

### Getting started:

Clone the folder.
```
git clone https://github.com/shahvicky/music-library-client.git
```

Install dependencies.
```
cd music-library-client
npm install
```
Create a file in the root folder called .env
Add the API server location. The variable for the same in VUE_APP_API_LOCATION.
```
VUE_APP_API_LOCATION=http://localhost:4040
```
To run in development.
```
npm run serve
```
To create static files for production
```
npm run build
```
The static files will be created in the dist folder

For more reference on the directory structure, please refer to:
https://github.com/petervmeijgaard/vue-2-boilerplate

The corresponding backend for this client side is: https://github.com/shahvicky/music-library-server

The flow of the application is as follows:

#### Login/Register
App starts with a Login form. If you are already a user, just login or else you can register a new user from the Register link.
##### Password must have: upper case, lower case, numeric, minimum length 6. 
If the password requirement is not met, the registration will not happen (without any error message, its a TODO item). Similarly in the Login screen if a wrong password is entered, you will not see any error message. 

#### Home
After login, you land on the dashboard, which is the Home tab on the navigation bar. 
Initially, this page will be empty and you can add tracks from the Add Music tab from the nav bar.
This is where you see all your added tracks. Currenly, the details on this page are the track name, album, artist and link to the track.
The search bar can be used to search any specific track from your library.
You can also use the top heading like Album, Name, and Artist to sort in ascending or descending on the respective fields. 

#### Add Music
If you want to add music to your library (dashboard), you can type in the search keyword (it can be track, artist, album, etc). and it show the results from the last.fm music library. When you click on the Add to Library, it will be added to your home screen. (Currently, you won't notice any changes when you click the Add to Library, it;s still in development, but the track will be added to your home screen). You can go back to Home to see your added tracks. 

#### TODO
1. Validations on the Login and Registration screens
2. Confirmations on success or failures of any event
