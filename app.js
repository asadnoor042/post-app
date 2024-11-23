// function submitPost(){
//     var userName = document.getElementById("enterName")
//     var title = document.getElementById("enterTitle")
//     var description = document.getElementById("enterDescription")
//     var date = new Date()

//     var listingContainer = document.getElementById("finalSubmit");

//     if(userName.value.trim() !== ""){
//         if(title.value.trim() !== ""){
//             if(description.value.trim() !== ""){
//                 listingContainer.innerHTML += `
//                  <div class="main-container">
//                 <div class="post  mt-4 p-3">
//                    <div class="head1  justify-content-between p-1 gap-0">
//                      <h5>${userName.value} </h5><span>${date}</span>
//                   </div>
//                      <div class="title-text row p-1" >
//                          <h4>${title.value}</h4>
//                          <p>${description.value}</p>
//                       </div>
//                  </div>
//              </div>
                
                
//                 `
         

//             }else{alert("description is required")}

//         }else{alert("title is required")}

//     } else{alert("user name is required")}
// }

function submitPost() {
    var userName = document.getElementById("enterName");
    var title = document.getElementById("enterTitle");
    var description = document.getElementById("enterDescription");
    var date = new Date().toLocaleString(); // Format date to a readable string

    var finalsubmition = document.getElementById("finalSubmit");

    if (userName.value.trim() !== "") {
        if (title.value.trim() !== "") {
            if (description.value.trim() !== "") {
                finalsubmition.innerHTML += `
                    <div class="main-container">
                        <div class="post mt-4 p-3">
                            <div class="head1 justify-content-between p-1 gap-0">
                                <h5>${userName.value}</h5><span>${date}</span>
                            </div>
                            <div class="title-text row p-1">
                                <h4>${title.value}</h4>
                                <p>${description.value}</p>
                            </div>
                        </div>
                    </div>
                `;
                userName.value = ''
                title.value = ''
                description.value = ''
            } else { alert("Description is required"); }
        } else { alert("Title is required"); }
    } else { alert("User  name is required"); }
}