function nanMode() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        document.getElementById('bg').style.backgroundImage="url(nan_version.png)";
    } else {
        document.getElementById('bg').style.backgroundImage="url(normal_version.png)";
    }
  }