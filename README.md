# ReactPassportJs

In this app we are building a login system that uses passport.js library to make a user to login through other sites like facebook, insta gram etc

first of all run this command in your VSCode Terminal to create a react app.

>npm install -g create-react-app

using this commnd create some starter code and default node modules for you to kick start.

by default it will have





//config folder we have index.js that contains all the important credentials from different providers (like facebook, instagram, spotify etc)

these credentials come in a pair of 'client id' and 'client secret'.... these values are saved i n a const by the name of provider.

these are important to get the login authetication from the provider.at the end we export these keys in ordinary object . we will use these in authentication.





we will start coding by making the server side first (where we need to make passport strategies for different sites. Lets start by making a new file named "index.js" under server directory. Then install some more packages needed fro passport like

cors
express
passport
passport-facebook
passport-instgram
passport github
passport-google
passport-spotify
passport-twitch
passport-amazon
Run the following command in terminal

>npm install express cors passport passport-facebook passport-amazon

Now start coding in the index by requiring the following

lets start by making facebook stretagy

In the code we use "passport.use" method and gave it the "FcebookStrategy ", that we defined at the top of page, now we pass an object as parameter that contains the "ClientID" , "ClientSecret" and “callbackURL”. If u notice there is key.FACEBOOK.clientSecret , in here we are referring to the keys of different providers saved in index.js from config folder. As a second parameter we are passing a call back function which has the parameters of access token, refresh token, profile and cb. This call back function will run right after the request to facebook and will show us the profile info of the user in console log. We used chalk to hoghlight the result in terminal to make it more visible. The return of this function will put the profile info, that we got as a result of request, into the empty “user” object that we defined at the top.

We make other stretegies on the same pattern just making slight changes as u can see below for Amazon stretegy.
