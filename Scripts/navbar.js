const header_section = document.getElementById("navbar_header");

if (header_section.textContent == "home") {
    header_section.innerHTML = [
        "<h1 class=\"logo\">StevenStat</h1>",
        "<input type=\"checkbox\" id=\"nav-toggle\" class=\"nav-toggle\">",
        "<nav>",
        "<ul>",
        "<li><a href=\"./index.html\">Home</a></li>",
        "<li><a href=\"./blogs/statStories\">StatStories</a></li>",
        "<li><a href=\"./steven-stat-about.html\">About</a></li>",
        "<li><a href=\"./steven-stat-contact.html\">Contact</a></li>",
        "<li><a href=\"./blogs/courseBlogs\">Blogs</a></li>",
        "</ul>",
        "</nav>",
        "<label for=\"nav-toggle\" class=\"nav-toggle-label\">",
        "<span></span>",
        "</label>"
    ].join("\n");
}

if (header_section.textContent == "statstories") {
    header_section.innerHTML = [
        "<h1 class=\"logo\">StevenStat</h1>",
        "<input type=\"checkbox\" id=\"nav-toggle\" class=\"nav-toggle\">",
        "<nav>",
        "<ul>",
        "<li><a href=\"../../index.html\">Home</a></li>",
        "<li><a href=\"./index.html\">StatStories</a></li>",
        "<li><a href=\"../../steven-stat-about.html\">About</a></li>",
        "<li><a href=\"../../steven-stat-contact.html\">Contact</a></li>",
        "<li><a href=\"../courseBlogs\">Blogs</a></li>",
        "</ul>",
        "</nav>",
        "<label for=\"nav-toggle\" class=\"nav-toggle-label\">",
        "<span></span>",
        "</label>"
    ].join("\n");
}

if (header_section.textContent == "blogs") {
    header_section.innerHTML = [
        "<h1 class=\"logo\">StevenStat</h1>",
        "<input type=\"checkbox\" id=\"nav-toggle\" class=\"nav-toggle\">",
        "<nav>",
        "<ul>",
        "<li><a href=\"../../index.html\">Home</a></li>",
        "<li><a href=\"../statStories\">StatStories</a></li>",
        "<li><a href=\"../../steven-stat-about.html\">About</a></li>",
        "<li><a href=\"../../steven-stat-contact.html\">Contact</a></li>",
        "<li><a href=\"./index.html\">Blogs</a></li>",
        "</ul>",
        "</nav>",
        "<label for=\"nav-toggle\" class=\"nav-toggle-label\">",
        "<span></span>",
        "</label>"
    ].join("\n");
}