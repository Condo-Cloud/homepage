/*** Art By : MBE  ****/
/*** Select full page View for better UX ****/

$(document).ready(function() {
    
    $(".icon a").click(function() {
        
        $(".container").slideUp("slow");
        $(".container").slideToggle("slow");
        
    });
    
});