requi
function first(f){
    f();
}
first(function(){
    console.log("callback");
});


