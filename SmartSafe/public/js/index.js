
function initFunction() {
    $ondelete = $("a.delete");
    $ondelete.click(function(){        
        //alert('button is clicked');
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/tasks/${id}`,
            "method" : "DELETE"
        }
        if(confirm("Do you want to delete this record?")) {
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}