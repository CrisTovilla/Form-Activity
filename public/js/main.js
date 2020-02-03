//Onchange of the InputFile
updateList = function() {
    //Change the visibility of the info file size 
    document.getElementById("danger-size").style= 'visibility:hidden;'
    //Retrieve the object from the InputFile an the Container HTML
    var input = document.getElementById('file-upload');
    var output = document.getElementById('file-list');

    //Insert a preview of the Files into the container
    output.innerHTML = '<div>';
    for (var i = 0; i < input.files.length; ++i) {
      let ext = input.files.item(i).name.split('.').pop()
      //Check the size limit for each file
      if(input.files.item(i).size>5e6 || (ext!='pdf' && ext!='jpg' && ext!='jpeg')){
        document.getElementById("danger-size").style= 'visibility:visible;'
        break;
      }

      //Insert into the container based on the extension file
      if(ext=="pdf"){
          output.innerHTML += 
                "<div class='card'  style='width:128px; height:128px; margin-left:10px; margin-top:10px;'>"+
                  "<header class='card-header header-file' >"+
                    "<p class='card-header-title'>"+
                      input.files.item(i).name+
                    "</p>"+
                  "</header>"+
                  "<div class='card-image' >"+
                    "<figure>"+
                      "<img src='/pdf-icon.png'  style='width:128px; height:128px; '>"+
                    "</figure>"+
                  "</div>"+
                "</div>"
      }else if(ext=="jpg" || ext=="jpeg"){  
        //Use of Reader to get The data from each file
        var reader = new FileReader();
        reader.fileName =  input.files.item(i).name
        reader.onload = function (e) {
          output.innerHTML += 
                "<div class='card'  style='width:128px; height:128px; margin-left:10px; margin-top:10px;'>"+
                  "<header class='card-header header-file' >"+
                    "<p class='card-header-title'>"+
                    e.target.fileName+
                    "</p>"+
                  "</header>"+
                  "<div class='card-image' >"+
                    "<figure>"+
                      "<img src='"+e.target.result+"'  style='width:128px; height:128px; '>"+
                    "</figure>"+
                  "</div>"+
                "</div>"

        };
        reader.readAsDataURL(input.files[i]);
      }                  
    }
    output.innerHTML += '</div>';
}
