function btnclick(val){
    document.getElementById("output-screen").value+=val
}
function clr(){
    document.getElementById("output-screen").value=""
}
function eqlclick(){
    var text=document.getElementById("output-screen").value
    var result=eval(text)
    document.getElementById('output-screen').value=result
}
