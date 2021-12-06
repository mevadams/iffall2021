
$( document ).ready(function() {			/* Here we're using JQuery to check that the DOM (the document) is ready */
                
    $(".dropdown").mouseover(function(){	/* This line says to listen for a "mouseover" event on something with with the class of "dropdown" */
        $(".dropdown").addClass("open");	/* A mouseover happened, so now we add the class "open" to the element with teh class of "dropdown" */
                    });
        
    $(".dropdown").mouseout(function(){		/* This line says to listen for a "mouseout" event on something with with the class of "dropdown" */
        $(".dropdown").removeClass("open");	/* A mouseout happened, so now we remove the class "open" from element with the class of "dropdown" */
        });
    $(".selected").click(function(){		/* This line says to listen for a "click" event on something with with the class of "selected" */
        $(".dropdown").removeClass("open");	/* A click happened, so now we remove the class "open" from the element with the class of "dropdown" */
                    });
        
});
$( document ).ready(function() {			/* Here we're using JQuery to check that the DOM (the document) is ready */

/* The .mouseover and .mouseout events below are what we'll be using on desktop computers where users have a mouse .*/

    $(".dropdown").mouseover(function(){	/* This line says to listen for a "mouseover" event on something with with the class of "dropdown" */
        $(".dropdown").addClass("open");	/* A mouseover happened, so now we add the class "open" to the element with teh class of "dropdown" */	
    });

    $(".dropdown").mouseout(function(){		/* This line says to listen for a "mouseout" event on something with with the class of "dropdown" */
        $(".dropdown").removeClass("open");	/* A mouseout happened, so now we remove the class "open" from element with the class of "dropdown" */
    });

/* The .on("touchstart") event is what we're using for touch enabled devices like phones and tablets.*/

    $(".dropdown").on("touchstart", function(){	/* This line says to listen for a "touchstart" event on something with with the class of "dropdown" */
        $(".dropdown").toggleClass("open");	/* A touch happened, so now we toggle the class "open" to the element with teh class of "dropdown". If it has the "open" class, remove it, and vice versa. */	
    });


    $(".dropdown").click(function(){		/* This line says to listen for a "click" event on something with with the class of "dropdown" */
        return false;						/* This line is basically saying "do nothing." We're just using this to ignore "click" events, since we're handling all of the showing and hiding using mouse and touch events. */
    });

    $(".selected").click(function(){		/* This line says to listen for a "click" event on something with with the class of "selected" */
        $(".dropdown").removeClass("open");	/* A click happened, so now we remove the class "open" from the element with the class of "dropdown" */
    });

});
