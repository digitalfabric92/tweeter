/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

    var data = [
        {
            "user": {
                "name": "Newton",
                "avatars": {
                    "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                    "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                    "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
                },
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": {
                    "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                    "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                    "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
                },
                "handle": "@rd" },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        },
        {
            "user": {
                "name": "Johann von Goethe",
                "avatars": {
                    "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                    "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                    "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
                },
                "handle": "@johann49"
            },
            "content": {
                "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
            },
            "created_at": 1461113796368
        }
    ];





// Create a function that creates the element
function createTweetElement(tweet) {

    // var date = new Date(tweet.created_at);

    var tweetElement =

    `
        <article>
          <!--Tweet header-->
          <header class="clearfix">
            <img src='${tweet.user.avatars.regular}' class="avatar">
            <h3 class="username">${tweet.user.name}</h3>
            <h4 class="handle">${tweet.user.handle}</h4>
          </header>

          <!--Tweet body-->
          <p>${tweet.content.text}</p>

          <!--Tweet footer-->
          <footer class="clearfix">
            <div class="date">10 days ago</div>
            <div class="icons">
              <img src="images/love.png" class="love">
              <img src="images/re.png" class="retweet">
              <img src="images/flag.png" class="flag">
            </div>
          </footer>
        </article>
      `;

        return tweetElement;
}

function renderTweets(tweets) {

    // loops through tweets
    for (let tweet in tweets) {
        // calls createTweetElement for each tweet
        var currTweet = createTweetElement(tweets[tweet]);
        // console.log(currTweet);
        // takes return value and appends it to the tweets container
        console.log($(".all-tweets"));
        $(".all-tweets").append(currTweet);

    }

}

// Render tweets data
// $(function() {

renderTweets(data);

// });




//
// function
//
//     $.ajax({


$('.new-tweet form').submit(function(event) {
        console.log("Event Submitted")
        event.preventDefault();

        $.ajax({
            url: '/tweets/',
            method: 'POST',
            data: $( this ).serialize(),
            success: function ($tweets) {

                $( this ).serialize();
             // this refers to the '.new-tweet form' selector
             console.log("Serialized");
            }

        })

})

function loadTweets(){
    $.ajax({
        url: '/tweets/',
        method: 'GET',
        success: function ($tweets) {
            $('.all-tweets').empty()
            renderTweets($tweets)
        }
    })
}

    // $( "form" ).submit(function( event ) {
    //
    //     console.log()


});


// Declare the different parts of HTML
// Class - More advanced way

// Hidden element
// Index -->

// Declare all the different parts before appending them.
// Avatar user name
// Append name to header

// jQuery create the article
// Nested them in



// ============
// Take the template and clone it and change all the text in the box