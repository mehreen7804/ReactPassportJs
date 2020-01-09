const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const TwitchStrategy = require("passport-twitch").Strategy;
const keys = require("../config");
const chalk = require("chalk");
let user = {};
passport.serializeUser((user, cb) => {     // not understood
    cb(null, user);
});

passport.deserializeUser((user, cb) => {    //not understood
    cb(null, user);
});



//facebook
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));

//amazon strategy

passport.use(new AmazonStrategy({
    clientID: keys.AMAZON.clientID,
    clientSecret: keys.AMAZON.clientSecret,
    callbackURL: "/auth/amazon/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));

// GITHUB strategy
passport.use(new GithubStrategy({
    clientID: keys.GITHUB.clientID,
    clientSecret: keys.GITHUB.clientSecret,
    callbackURL: "/auth/github/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));

// google strategy
passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));

//Instagram strategy       

passport.use(new InstagramStrategy({
    clientID: keys.INSTAGRAM.clientID,
    clientSecret: keys.INSTAGRAM.clientSecret,
    callbackURL: "/auth/instagram/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));


//Spotify strategy       

passport.use(new SpotifyStrategy({
    clientID: keys.SPOTIFY.clientID,
    clientSecret: keys.SPOTIFY.clientSecret,
    callbackURL: "/auth/spotify/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));

//Twitch strategy       

passport.use(new TwitchStrategy({
    clientID: keys.TWITCH.clientID,
    clientSecret: keys.TWITCH.clientSecret,
    callbackURL: "/auth/twitch/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }));

const app = express();
app.use(cors());
app.use(passport.initialize());



app.get("/auth/facebook", passport.authenticate('facebook'));
app.get("/auth/facebook/callback",
    passport.authenticate('facebook'),
    (req, res) => {
        res.redirect("/profile");
    });




app.get("/auth/amazon", passport.authenticate("amazon", {
    scope: ["profile"]    //Amazon is done differently,, we need to tel scope i.e profile here
}));
app.get("/auth/amazon/callback",
    passport.authenticate("amazon"),
    (req, res) => {
        res.redirect("/profile");
    });


app.get("/auth/github", passport.authenticate("github"));
app.get("/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
        res.redirect("/profile");
    });


app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        res.redirect("/profile");
    });



app.get("/auth/instagram", passport.authenticate("instagram"));
app.get("/auth/instagram/callback",
    passport.authenticate("instagram"),
    (req, res) => {
        res.redirect("/profile");
    });


app.get("/auth/spotify", passport.authenticate("spotify"));
app.get("/auth/spotify/callback",
    passport.authenticate("spotify"),
    (req, res) => {
        res.redirect("/profile");
    });



app.get("/auth/twitch", passport.authenticate("twitch"));
app.get("/auth/twitch/callback",
    passport.authenticate("twitch"),
    (req, res) => {
        res.redirect("/profile");
    });


//api endpoints
app.get("/user", (req, res) => {     //sign in 
    console.log("geting user data");
    res.send(user);
});
// sign out

app.get("/auth/logout", (req, res) => {
    console.log("loggong out!");
    res.send("/")   // this will mimic
});

const PORT = 5000;
app.listen(PORT);