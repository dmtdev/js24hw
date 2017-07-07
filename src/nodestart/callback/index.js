requi
function first(f){
    f();
}
first(function(){
    console.log("callback");
});


function fc(callback){
    if(typeof callback == "function")
    {

    }
}

