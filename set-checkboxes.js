//set all checkboxes to true using JavaScript?
function SelectAll() {
  var checkboxes = document.getElementsByTagName("input");
  var i;
  var clength = checkboxes.length;
  for(i=0; i < c.length; i++) 
  {
    if(checkboxes.item(i).attributes["type"].value == "checkbox") 
    {
       checkboxes.item(i).checked = true;
    }
  }
}
