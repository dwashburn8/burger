$(document).ready(()=>{

    $(".devouredButton").on("click", function(event){
        let id = $(this).data("id");
        let devouredData = $(this).data("devoureddata");

        let devouredObj = {
            devoured: devouredData
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredObj
        }).then(
            ()=>{
                console.log("it worked");
                location.reload();
                
            }
        )
    });

    $("#form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#newBurger").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("the create worked!!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})