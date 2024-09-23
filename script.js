function data(){

    let age = document.getElementById("age").value
    let name = document.getElementById("name").value

   // console.log(name,age)
   if(age == "" || name == ""){
    alert('Please enter valid details')
    return
   }

   let myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(age >= 18){
            resolve("1")
        }
        else{
            reject("0")
        }

    }, 4000);
   })

   myPromise.then((res)=>{
    if(res==="1"){
        alert(`Welcome, ${name}. You can vote.`)
    }
   }).catch((e)=>{
    if(e==="0"){
        alert(`Oh sorry ${name}. You aren't old enough.`)
    }
   })
}
