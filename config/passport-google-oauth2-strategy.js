const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


//Tell the passport to use the new library
passport.use(new googleStrategy({
    clientID: "37258179448-86lepei0i2n73ni1a5j2730pt0d0445t.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/user/auth/google/callback",
    },

    function(accessToken,refreshToken, profile,done){
        //Find a user
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if(err){console.log("Error in google strategy passport",err);return;}

            console.log(profile);

            if(user){
                //If found set this user as req.user
                return done(null,user);
            }else{
               //IF not found then create that user and se it as req.user
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                },function(err,user){
                    if(err){console.log("Error in  creating user",err);return;}
                    return done(null,user);
                });
            }
        });
    }

));

module.exxports = passport;