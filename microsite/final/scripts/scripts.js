// $( document ).ready(function() {			/* Here we're using JQuery to check that the DOM (the document) is ready */

// /* The .mouseover and .mouseout events below are what we'll be using on desktop computers where users have a mouse .*/

//     $(".dropdown").mouseover(function(){	/* This line says to listen for a "mouseover" event on something with with the class of "dropdown" */
//         $(".dropdown").addClass("open");	/* A mouseover happened, so now we add the class "open" to the element with teh class of "dropdown" */	
//     });

//     $(".dropdown").mouseout(function(){		/* This line says to listen for a "mouseout" event on something with with the class of "dropdown" */
//         $(".dropdown").removeClass("open");	/* A mouseout happened, so now we remove the class "open" from element with the class of "dropdown" */
//     });

// /* The .on("touchstart") event is what we're using for touch enabled devices like phones and tablets.*/

//     $(".dropdown").on("touchstart", function(){	/* This line says to listen for a "touchstart" event on something with with the class of "dropdown" */
//         $(".dropdown").toggleClass("open");		/* A touch happened, so now we toggle the class "open" to the element with teh class of "dropdown". If it has the "open" class, remove it, and vice versa. */	
//     });


//     $(".dropdown").click(function(){			/* This line says to listen for a "click" event on something with with the class of "dropdown" */
//         console.log("Prevented a link click");	/* Writing a log entry to the console, so we can see what events are firing and in what order. */
//         return false;							/* This line is basically saying "do nothing." We're just using this to ignore "click" events, since we're handling all of the showing and hiding using mouse and touch events. */
//     });

//     $(".selected").click(function(){		/* This line says to listen for a "click" event on something with with the class of "selected" */
//         console.log("Clicked a link");		/* Writing a log entry to the console, so we can see what events are firing and in what order. */
//         event.stopPropagation();			/* Prevent this event from propagating up through other elements, e.g. prevent it from passing through these buttons to the parent elements. */
//         $(".dropdown").removeClass("open");	/* A click happened, so now we remove the class "open" from the element with the class of "dropdown" */
//     });

// });



$( document ).ready(function() {			/* Here we're using JQuery to check that the DOM (the document) is ready */

/* The .mouseover and .mouseout events below are what we'll be using on desktop computers where users have a mouse .*/

    $(".dropdown").mouseover(function(){	/* This line says to listen for a "mouseover" event on something with with the class of "dropdown" */
        $(".dropdown").addClass("open");	/* A mouseover happened, so now we add the class "open" to the element with teh class of "dropdown" */	
    });

    $(".dropdown").mouseout(function(){		/* This line says to listen for a "mouseout" event on something with with the class of "dropdown" */
        $(".dropdown").removeClass("open");	/* A mouseout happened, so now we remove the class "open" from element with the class of "dropdown" */
    });

/* The .on("touchstart") event is what we're using for touch enabled devices like phones and tablets.*/

    $(".dropbtn").on("touchstart", function(){	/* This line says to listen for a "touchstart" event on the menu button, and not the whole menu, so we avoid conflicts when users touch main nav links */
        //alert("on touchstart event fired");
        $(".dropdown").toggleClass("open");		/* A touch happened, so now we toggle the class "open" to the element with the class of "dropdown". If it has the "open" class, remove it, and vice versa. */	
    });


    $(".dropdown").click(function(){			/* This line says to listen for a "click" event on something with with the class of "dropdown" */
        //console.log("Prevented a link click");	/* Writing a log entry to the console, so we can see what events are firing and in what order. */
        //alert("Prevented a link click");
        return false;							/* This line is basically saying "do nothing." We're just using this to ignore "click" events, since we're handling all of the showing and hiding using mouse and touch events. */
    });

    $(".selected").click(function(){		/* This line says to listen for a "click" event on something with with the class of "selected" */
        //console.log("Clicked a link");		/* Writing a log entry to the console, so we can see what events are firing and in what order. */
        //alert("Clicked a link");
        $(".dropdown").removeClass("open");	/* A click happened, so now we remove the class "open" from the element with the class of "dropdown" */
        event.stopImmediatePropagation();			/* Prevent this event from propagating up through other elements, e.g. prevent it from passing through these buttons to the parent elements. */
    });

});





