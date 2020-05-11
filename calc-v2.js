function createList(id) {
    for (var i = 0; i < 5; i++) {
        var operatorAdd = "+";
        var operatorSub = "-";
        var first = Math.floor(Math.random() * 90 + 10);     
        var second = Math.floor(Math.random() * 90 + 10);        
        if (id == "add") {
            var result = first + second;
            document.getElementById('addlist' + i).innerHTML =
                '<div>' + first + '</div>' + 
                '<div>' + operatorAdd + '</div>' +
                '<div>' + second + '</div>' +
                '<div> <input type="text" maxlength=' + result.toString().length + ' onkeyup="checkResult(' + result + ',this.value, this)" id="resInput" onkeydown="cursor(this)"></div>'
        }
        else if(id == "sub"){
            var a,b;
            if(first > second){
                a = first;
                b = second;
            }else{
                b = first;
                a = second;
            }
            var result = a - b;
            document.getElementById('addlist' + i).innerHTML =
            '<div>' + a + '</div>' +
            '<div>' + operatorSub + '</div>' +
            '<div>' + b + '</div>' +
            '<div> <input type="text" maxlength=' + result.toString().length + ' onkeyup="checkResult(' + result + ',this.value,this)" id="resInput"></div>'
        }
    }
}

function checkResult(result, value, id) {
    console.log(id)
    if (result == value) {
        id.style.background = "green";
    } else {
        id.style.background = "red";
    }
}

function cursor(e) {
    console.log(e)
    if (e.setSelectionRange) {
        e.setSelectionRange(0, 0);
    }
}