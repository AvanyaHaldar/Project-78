var name_Array=["Me",
                "My Mother",
                "My Father",
                "My Grandmother",
            "My Aunt & Uncle"];

var imagesArray=["Tia (4).jpg", "Parent (10).jpg", "Parent (7).jpg", "Parent (8).jpg", "Parent (6).jpg"]
var i=0;
function flipImg(){
document.getElementById("name").innerHTML=name_Array[i];
document.getElementById("img").src=imagesArray[i];
i++;
if (i==5) {
 i=0;
   
}
}
