



    const nav_section = document.getElementById("navbar_header");

    nav_section.innerHTML = [
        "<div class=\"container\">",
        "<img src=\"../../Images/StevenStatLogo.PNG\" alt=\"logo\" class=\"logo\" width=\"300\">",
        "<nav>",
        "<li><a href=\"../../index.html\">Home</a></li>",
        "<li><a href=\"../statStories\">StatStories</a></li>",
        "<li><a href=\"../../steven-stat-about.html\">About</a></li>",
        "<li><a href=\"../../steven-stat-contact.html\">Contact</a></li>",
        "<li><a href=\"./\">Course Blogs</a></li>",
        "<li><input type=\"button\" class=\"back_button\" value=\"Back\" onclick=\"history.back()\"></li>",
        "</ul>",
        "</nav>",
        "</div>"
    ].join("\n");




    