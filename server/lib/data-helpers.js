"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
    return {

        // Saves a tweet to `db`
        saveTweet: function(newTweet, callback) {
            db.collection("tweets").insertOne(newTweet, callback);
        },

        // Get all tweets in `db`, sorted by newest first
        getTweets: function(callback) {
            db.collection("tweets").find().toArray(callback);




        }
    };
}


//
// "use strict";
//
// // Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");
//
// // Defines helper functions for saving and getting tweets, using the database `db`
// module.exports = function makeDataHelpers(db) {
//     return {
//
//         // Saves a tweet to `db`
//         saveTweet: function(newTweet, callback) {
//             simulateDelay(() => {
//                 db.tweets.push(newTweet);
//                 callback(null, true);
//             });
//         },
//
//         // Get all tweets in `db`, sorted by newest first
//         getTweets: function(callback) {
//             simulateDelay(() => {
//                 const sortNewestFirst = (a, b) => a.created_at - b.created_at;
//                 callback(null, db.tweets.sort(sortNewestFirst));
//             });
//         }
//
//     };
// }

// "use strict"
//
// const ObjectId      = require("mongodb").ObjectId
//
// module.exports = function makeDataHelpers(db) {
//     return {
//
//         // Saves a tweet to `db`
//         saveTweet: function(newTweet, callback) {
//             db.collection('tweets').insertOne(newTweet, (err, result) => {
//                 if (err) {
//                     return callback(err)
//                 }
//
//                 callback(null, true)
//             })
//         },
//
//         // Get all tweets in `db`, sorted by newest first
//         getTweets: function(callback) {
//             const sortNewestFirst = (a, b) => b.created_at - a.created_at
//             db.collection('tweets').find().toArray((err, tweets) => {
//                 callback(null, tweets)
//             })
//         },
//
//         likeTweets: function(data, callback) {
//             // var doc = db.collection('tweets').find( { "_id" : data.id} )
//             console.log('Sending to DB: ', data)
//             db.collection('tweets').update( { "_id" : ObjectId(data.id) }, { $set: { liked: data.liked } }, (err, result) => {
//                 if (err) {
//                     return callback(err)
//                 }
//
//                 callback(null, true)
//             } )
//         }
//
//     }
// }