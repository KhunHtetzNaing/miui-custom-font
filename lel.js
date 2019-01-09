var sign = '#KhunHtetzNaing#';

function encode(text) {
    var result = "";
    text.split("").map(function(bin) {
        result += bin.charCodeAt(0).toString(2) + ' ';;
    });
    return sign + window.btoa(result);
}

function decode(text) {
    text = window.atob(text);
    var temp = "";
    text.split(" ").map(function(bin) {
        temp += String.fromCharCode(parseInt(bin, 2));
    });
    return temp.substring(0, temp.length - 1);
}

function findElements(tag) {
    var elements = document.getElementsByTagName(tag);
    for (var i = 0; i < elements.length; i++) {
        var found = elements[i].innerHTML;
        found = found.replace(' ','');
		    found = found.replace('\n','');
        var id = elements[i].id;
        if (found.startsWith(sign)) {
            found = found.replace(sign, '');
            elements[i].innerHTML = decode(found);
            var input = document.createElement("input");
            input.id = "z" + id;
            input.style.display = "none";
            input.value = "";
            elements[i].append(input);
        }
    }
}
var changeElements = ['a', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5'];
for (var i = 0; i < changeElements.length; i++) {
    findElements(changeElements[i]);
}
