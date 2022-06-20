function onlynumber(element){
    element.value = element.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}

function value(element){
    let quantidade = element.parentNode.children[1]
    let alt = element.getAttribute("alt")

    if(alt == "mais"){
        quantidade.value =+ quantidade.value + 1
    }
    else if(alt == "menos"){
        quantidade.value =+ quantidade.value - 1
        if(quantidade.value == 0){
            quantidade.value = 1
        }
    }
    
}

function deletefood (id){
    fetch('/' + id ,{method: "DELETE"}).then(res=>{
        res.text().then(foodid=>{
            document.getElementById(foodid).remove()
        })
    })
}



