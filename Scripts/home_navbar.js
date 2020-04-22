const nav_section = document.getElementById("navbar_header");

nav_section.innerHTML = [
    "<section>",
    "<img src=\"Images/StevenStatLogo.PNG\" alt=\"Steven Stat Logo\" width=\"250\">",
    "</section>",
    "<br>",
    "<nav>",
    "<section>",
    "<form align=\"center\">",
    "<input type=\"button\" value=\"Back\" onclick=\"history.back()\">",
    "</form>",
    "<br>",
    "<a href=\"./index.html\">Home</a> |",
    "<a href=\"./blogs/statStories\">StatStories</a> |",
    "<a href=\"./steven-stat-about.html\">About</a> |",
    "<a href=\"./steven-stat-contact.html\">Contact</a> |",
    "<a href=\"./blogs/courseBlogs\">Course Blogs</a>",
    "</section>",
    "</nav>"
].join("\n");