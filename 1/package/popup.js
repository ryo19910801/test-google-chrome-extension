var req = new XMLHttpRequest();
req.open(
    "GET",
    "https://dev.classmethod.jp/feed/",
    true);

req.onload = showArticles;
req.send(null);

function showArticles() {
    var ul = document.createElement("ul");
    var items = req.responseXML.getElementsByTagName("item");
    
    for (var i = 0, item; item = items[i]; i++) {
        var li = document.createElement("li");
    
        var anchor = document.createElement("a");
    
        anchor.href = item.getElementsByTagName("link")[0].firstChild.nodeValue;
    
        var title = document.createTextNode(item.getElementsByTagName("title")[0].firstChild.nodeValue);
        
        anchor.appendChild(title)
        
        li.appendChild(anchor)
        ul.appendChild(li);
    }
    
    document.body.appendChild(ul);
}
