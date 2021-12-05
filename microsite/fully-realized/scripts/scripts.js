
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