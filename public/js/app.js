const deleteItem = async (id) => { 
        try {
            const res = await axios.delete('/api/v1/formposts/'+id)
            if(res.status == 200){
                var el =  document.getElementById(id);
                el.remove();
            }   
        } catch (e) {
            alert("Error durante la eliminación")
        }
}

modalOpenFiles = function(id){
    var el = document.getElementById('modal-'+id)
    el.classList.add("is-active");  
}


modalCloseFiles = function(id){
    var el = document.getElementById('modal-'+id)
    el.classList.remove("is-active"); 
}
