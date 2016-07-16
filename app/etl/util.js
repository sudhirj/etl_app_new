
document.getElementById("uploadBtn").onchange = function () {
document.getElementById("uploadFile").value = this.value;
};

function sample(){
console.log('test');
}

function clearFileInput(id1,id2) 
{ 
    var oldInput1 = document.getElementById(id1); 
	var oldInput2 = document.getElementById(id2); 

    var newInput = document.createElement("input"); 

   newInput.type = "file"; 
    newInput.id = oldInput1.id; 
	newInput.class = oldInput1.class; 
    oldInput1.parentNode.replaceChild(newInput, oldInput1); 
	
	
	newInput.type = "file"; 
    newInput.id = oldInput2.id;  
    newInput.class = oldInput2.class; 
    oldInput2.parentNode.replaceChild(newInput, oldInput2); 
   
   
	
}
