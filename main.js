function readmore(){
    var dots = document.getElementById("dots");
    var moretext = document.getElementById("more");
    var btn = document.getElementById("btn");
    if(dots.styledisplay == "none"){
        dots.style.display = "inline ";
        btn.innerHTML = "read more";
        moretext.style.display = "none";
    }
    else{
        dots.style.display = "none";
        readmore.innerHTML ="Read";
        moretext.style.display = "inline";
    }
}
function adduser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "index.html"
}