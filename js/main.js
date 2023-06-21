let userArr=[];
class User {
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}



/*======User Management*/
const createUser=()=>{

    const fullName=$('#full-name').val();
    const email=$('#register-email').val();
    const password=$('#register-password').val();

    let createdUser=new User(fullName,email,password);
    let existsUserData=userArr.find(e=>e.email===email);
    if (existsUserData){
        alert('User email already exists!');
        return;
    }
    userArr.push(createdUser);
    console.log(userArr);
}
/**/

const clearAndLoad=(element)=>{
  // clear, toggle
}