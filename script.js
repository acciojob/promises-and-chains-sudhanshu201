//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function (e){
        //prevent form default behaviour
        e.preventDefault();

        //get the input values
        let age = document.getElementById("age").value 
        let name = document.getElementById("name").value 

        //ensure fields are not empty

        if(age === "" || name === ""){
            alert("please enter both your name and age")
            return
        }
        
        // Convert age to a number for comparison
            age = Number(age);


        //create a promise

       let myPromise =  new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(age>=18){
                    resolve("eligible")
                } else {
                    reject("not eligible")
                }
            }, 4000);
        })

        myPromise.then((res)=>{
            if(res==="eligible") {
                alert(`Welcome ${name}. You can vote`)
            
            }

        }).catch((e)=>{
            if(e==="not eligible"){
                alert(`Oh sorry, ${name}. You aren't old enough `)
              
            }
        })
}
)