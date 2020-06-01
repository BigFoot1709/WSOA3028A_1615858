const nav_section = document.getElementById("navbar_header");

nav_section.innerHTML = [
    "<div class=\"container\">",
    "<a href=\"./index.html\"><img src=\"./Images/StevenStatLogo.PNG\" alt=\"logo\" class=\"logo\" width=\"300\"></a>",
    "<nav>",
    "<li><a href=\"./index.html\">Home</a></li>",
    "<li><a href=\"./blogs/statStories\">StatStories</a></li>",
    "<li><a href=\"./steven-stat-about.html\">About</a></li>",
    "<li><a href=\"./steven-stat-contact.html\">Contact Me</a></li>",
    "<li><a href=\"./blogs/courseBlogs\">Course Blogs</a></li>",
    "<li><input type=\"button\" class=\"back_button\" value=\"Back\" onclick=\"history.back()\"></li>",
    "</ul>",
    "</nav>",
    "</div>"
].join("\n");