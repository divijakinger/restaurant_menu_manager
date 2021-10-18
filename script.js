function myFunction(clicked) {
    var category_name = prompt("Please enter the category name", "Snacks");
    var category_description = prompt("Please enter the category description", "Something about snacks");
    var ctg_name = "catname"+clicked
    var ctg_desc = "catdesc"+clicked 
    if (category_name != null) {
      document.getElementById(ctg_name).innerHTML = category_name;
      document.getElementById(ctg_desc).innerHTML = category_description;                                  
    }
  }
  function delFunction(whenclicked) {
    var deletediv = "cat_col"+whenclicked;
    var element = document.getElementById(deletediv); 
    element.remove();                              
  }