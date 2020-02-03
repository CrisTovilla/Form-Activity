updateList = function() {
    document.getElementById("danger-size").style= 'visibility:hidden;'
    var input = document.getElementById('file-upload');
    var output = document.getElementById('file-list');

    output.innerHTML = '<div>';
    for (var i = 0; i < input.files.length; ++i) {
      if(input.files.item(i).size>5e6){
        document.getElementById("danger-size").style= 'visibility:visible;'
        break;
      }

      if(input.files.item(i).name.split('.').pop()=="pdf"){
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
      }else{  
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
