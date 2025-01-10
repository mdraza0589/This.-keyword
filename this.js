const user ={
    username:"raza",
    price:999,

    welcomeMassage: function(){
        console.log(this.username + " welcome to website");
        // console.log(this);
    }

}

user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()

// console.log(this);   // print global value (window)


function chai(){
    let username="raza"
    console.log(this.username); // this. contex only use in object not in function
}
chai()

