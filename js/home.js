function copyURL () {
    // creates variable called copytext that points to an id that is linked to the little url box
    var copyText = document.getElementById("littleurlbox");
    //select the text in the little url box
    copyText.select();
    //copy the selected text
    document.execCommand("copy")
    //browser alert that it has been copied 
    alert("Copied URL: " + copyText.value);
}