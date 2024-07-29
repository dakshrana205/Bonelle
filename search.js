function myFunction() 
{
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "navbar";
    }
}

function dropFunction() 
{
    document.getElementById("myDropdown").classList.toggle("show");// toogle- ki agar uss icon pe click karu tu vo show hu jaye agar show hu raha he tu band hu jaye show hona
}

function filterFunction()
{
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");//ju ham type karre
    filter = input.value.toUpperCase();//for case insestive
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) 
    {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter)> -1) {
            a[i].style.display = "";
        } 
        else 
        {
            a[i].style.display = "none";
        } 
    }
}