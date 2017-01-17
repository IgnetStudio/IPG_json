(function() {
    
    function JSONP(url, callbackName) {
        
        var script = document.createElement("script");
        
        script.type = "text/javascript"; // old browsers fallback
        script.async = true; // optional
        script.src = url + "?callback=" + callbackName;
        
        // console.log(script); // show script
        
        document.head.appendChild(script);
        
        
    };
    
    function showData(data) {
        
        var pre = document.createElement("pre");
        
        pre.textContent = JSON.stringify(data);
        document.body.appendChild(pre);
        
    }
    
    document.querySelector("#loadData").onclick = function(e) {
        
        /*
        var data = {
            firstName: "Jan",
            lastName: "Nowak Jeziorański",
            age: 33
        };
        
        showData(data);
        */
        
        JSONP("get_data.php", "showData"); // alternative to object above; enter custom url for external resource
        
    };
    
    window.showData = showData;
    
})();