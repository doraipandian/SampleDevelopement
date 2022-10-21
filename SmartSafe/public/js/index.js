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

const getSession = async() => {
   
    await fetch('http://localhost:8080/session')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        //alert(data.id +' <=> ' + data.name);
        //document.getElementsByClassName("user-permission").innerHTML= data.name;
        
        //alert(data.name);
        var admin = document.getElementById("nav-admin-user");
        var user = document.getElementById("nav-user");
        if (data.type === 1){
            show(admin);
            hide(user);
        } else {
            var newEle = $('#nav-user a.user');
            if (newEle !== undefined){
               // alert('Hello');
                newEle.href = `/users/${data.id}`;
            }

            let auser = $('#nav-user a.user');
            let atask = user.getElementsByClassName('task');
           // alert(auser);
            //auser.href = `/users/${data.id}`;
            atask.href = `/tasks/user/${data.id}`;
            show(user);
            hide(admin);
        }
    })    
}

function show(ele){
        ele.style.display = 'block';
}
function hide(ele){
        ele.style.display = 'none';
}