let userArr=[];
let customerArr=[];
class User {
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}
class Customer{
    constructor(name,address,salary,nic) {
        this.name=name;
        this.address=address;
        this.salary=salary;
        this.nic=nic;
    }
}



/*======User Management*/
const createUser=()=>{
    const fullName=$('#full-name').val();
    const email=$('#register-email').val();
    const password=$('#register-password').val();

    //const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    //console.log(hash)
    let createdUser=new User(fullName,email,password);
    let existsUserData=userArr.find(e=>e.email===email);
    if (existsUserData){
        alert('User email already exists!');
        return;
    }
    userArr.push(createdUser);
    console.log(userArr);
}

const login=()=>{
    const email=$('#email').val();
    const password=$('#password').val();

    let existsUserData=userArr.find(e=>e.email===email);

    if (existsUserData){
        if(existsUserData.password===password){
            //login=> dashboard
        }else{
            alert('password is wrong');
            return
        }
    }else{
        alert('User email not found');
    }
}

/*Customer*/

const createCustomer=()=>{}
const findCustomer=(id)=>{}
const updateCustomer=(id)=>{}
const deleteCustomer=(id)=>{}
const getAllCustomers=()=>{}

/*Customer*/


/**/

const clearAndLoad=(element)=>{
  // clear, toggle
}