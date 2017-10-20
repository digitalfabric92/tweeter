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
            <div class="date">${moment(moment(tweet.created_at).format()).fromNow()}</div>
            <!--moment("20111031", "YYYYMMDD").fromNow()-->
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
            // Clears the all tweets array file
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
        // if
        // else if
        // else
        let tweetContent = $(this).find("textarea").val();
        if (tweetContent === "") {
            let $emptyTweetErr = $("<p>").text("Write something!").css("color", "red");
            $("#errors").append($emptyTweetErr);
        } else if ($(".counter").text() < 0){
            let $counterTweetErr = $("<p>").text("Less than 280 characters!").css("color", "red");
            $("#errors").append($counterTweetErr);
        } else {
            $("#errors").empty();
            $.ajax({
                url: '/tweets/',
                method: 'POST',
                // let serData = $( this ).serialize(),
                data: $(this).serialize(),
                success: function (tweet) {
                    // this refers to the '.new-tweet form' selector
                    //console.log(tweet);
                    renderTweets([tweet]);

                }

            })

        }


})

// =================================================================================
// Compose button toggle
// =================================================================================

    $("#compose").on("click", function(){
        var $textarea = $("#user-form").find("textarea");
        $(".new-tweet").slideToggle("fast");
        $textarea.select();
    });

// =================================================================================
// ESCAPE XSS
// =================================================================================

    var escapeXSS = function (str) {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

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
