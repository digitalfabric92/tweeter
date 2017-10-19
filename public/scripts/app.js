/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

// =================================================================================
// Create a function that creates the tweet element
// =================================================================================

    function createTweetElement(tweet) {

    // var date = new Date(tweet.created_at);

    var tweetElement =

    `
        <article>
          <!--Tweet header-->
          <header class="clearfix">
            <img src= ${tweet.user.avatars.regular} class="avatar">
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

// =================================================================================
// Render tweets
// =================================================================================

function renderTweets(tweets) {
    // Sort tweets
    // tweets.sort((a,b) => {
    //     return b.created_at - a.created_at
    // });

    // loops through tweets
    // for (let tweet of tweets) {
    //     // calls createTweetElement for each tweet
    //     var currTweet = createTweetElement(tweet);
    //     // takes return value and appends it to the tweets container
    //     console.log($(".all-tweets"));
    //     $(".all-tweets").prepend(currTweet);
    //
    // }

    tweets.forEach(function (tweet)
        {
        const currTweet = createTweetElement(tweet)
        $(".all-tweets").prepend(currTweet);
        })


}

// =================================================================================
// LOAD TWEETS
// =================================================================================

function loadTweets(){
    $.ajax({
        url: '/tweets',
        method: 'GET',
        // success: renderTweets(response);
        success: function ($tweets) {
            $('.all-tweets').empty()
            renderTweets($tweets);
        }
    })
}
loadTweets();

// =================================================================================
// POST TWEET
// =================================================================================
$('.new-tweet form').submit(function(event) {
        console.log("Event Submitted")
        event.preventDefault();

        $.ajax({
            url: '/tweets/',
            method: 'POST',
            // let serData = $( this ).serialize(),
            data: $( this ).serialize(),
            success: function (tweet) {
                // this refers to the '.new-tweet form' selector
             //console.log(tweet);
             renderTweets([tweet]);

            }

        })

})

// =================================================================================
// Form Validation
// =================================================================================

    // function valid() {
    //
    // if (more than 280 characters)
    //     return false
    // else if (not empty string)
    //     return false
    // else
    //     return true
    // }
    //
    //
    // if (valid()) {
    // else
    //     ()
    //
    // }

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

