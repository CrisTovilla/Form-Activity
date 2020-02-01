updateList = function() {
    var input = document.getElementById('file-upload');
    var output = document.getElementById('file-list');

    output.innerHTML = '<div>';
    for (var i = 0; i < input.files.length; ++i) {

      if(input.files.item(i).name.split('.').pop()=="pdf"){
          output.innerHTML += 
                "<figure class='image is-128x128' >"+
                // "<a class='delete' id='file-"+i+"' onclick='javascript:deleteItem(this.id)'></a>"+
                  "<img src='/pdf-icon.png'>"+
                    "<p class='subtitle is-6'>"+
                      input.files.item(i).name+
                    "</p>"+  
                "</figure>"
      }else{  
        var reader = new FileReader();
        reader.fileName =  input.files.item(i).name
        reader.onload = function (e) {
          output.innerHTML += 
                "<figure class='image is-128x128'>"+
                // "<a class='delete' id='file-"+i+"' onclick='javascript:deleteItem(this.id)'></a>"+
                  "<img src='"+e.target.result+"'>"+
                    "<p class='subtitle is-6'>"+
                      e.target.fileName+
                      "</p>"+
                "</figure>"
        };
        reader.readAsDataURL(input.files[i]);
      }                  
    }
    output.innerHTML += '</div>';
  }

  // deleteItem = function(id){
  //   var elem = document.querySelector('#'+id); 
  //   var parent = elem.parentNode
  //   parent.parentNode.removeChild(parent);
  // }