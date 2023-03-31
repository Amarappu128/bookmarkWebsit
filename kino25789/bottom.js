    /* ブラウザ判別 */
    var ie = document.all ? 1 : 0;
    var ns6 = document.getElementById && !document.all ? 1 : 0;
    var opera = window.opera ? 1 : 0;

    /* 子メニューの表示・非表示切替 */
    function openFolder(childObj, parentObj) {
        var child = "";
        var parent = "";
        if (ie || ns6 || opera) {
            child = ns6 ? document.getElementById(childObj).style : document.all(childObj).style;
            parent = ns6 ? document.getElementById(parentObj) : document.all(parentObj);
            if (child.display == "none") {
                child.display = "block";
                //parent.src = sw;
            } else {
                child.display = "none";
                //parent.src = hd;
            }
        }
    }