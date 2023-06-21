let userArr = [];
let customerArr = [];

// json placeholder => GET,PUT,POST,(Delete)
class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}

class Customer {
    constructor(name, address, salary, nic) {
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.nic = nic;
    }
}


/*======User Management*/
const createUser = () => {
    const fullName = $('#full-name').val();
    const email = $('#register-email').val();
    const password = $('#register-password').val();

    //const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    //console.log(hash)
    let createdUser = new User(fullName, email, password);
    let existsUserData = userArr.find(e => e.email === email);
    if (existsUserData) {
        alert('User email already exists!');
        return;
    }
    userArr.push(createdUser);
    console.log(userArr);
}

const login = () => {
    const email = $('#email').val();
    const password = $('#password').val();

    let existsUserData = userArr.find(e => e.email === email);

    if (existsUserData) {
        if (existsUserData.password === password) {
            //login=> dashboard
        } else {
            alert('password is wrong');
            return
        }
    } else {
        alert('User email not found');
    }
}

/*Customer*/

const createCustomer = () => {
    const customer = new Customer(
        $('#name').val(),
        $('#address').val(),
        parseFloat($('#salary').val()),
        $('#nic').val()
    );
    let existsData = customerArr.find(el => el.nic === customer.nic);
    if (existsData) {
        alert('Customer Nic already exists!');
        return;
    }
    customerArr.push(customer);
}
const findCustomer = (id) => {
    // promise
    let selectedCustomer =
        customerArr.find(el => el.nic === customer.nic);
    if (selectedCustomer) {
        return selectedCustomer;
    }
    return null;
}
const updateCustomer = (id) => {
    let customer = findCustomer(id);
    if (customer){
          /*  $('#name').val(customer.name);
            $('#address').val(customer.address);
            $('#salary').val(customer.salary);
            $('#nic').val(customer.nic);*/
        // update
    }else{
        alert('Customer Not Found');
    }
}
const deleteCustomer = (id) => {
    for (let i = 0; i < customerArr.length; i++) {
        if (customerArr[i].nic===id){
            customerArr.splice(i,1);
            alert('deleted');
            return;
        }
    }
}
const getAllCustomers = () => {
    let tBody = $('#t-body');
    $.each(customerArr,function (i,item){
        let row = $('<tr>');
        let colName=$('<td>').text(item,name);
        let colAddress=$('<td>').text(item,address);
        let colSalary=$('<td>').text(item,salary);
        let colNic=$('<td>').text(item,nic);

        row.append(colName,colAddress,colSalary,colNic);
        tBody.append(row);
    })
}

/*Customer*/


/**/

const clearAndLoad = (element) => {
    // clear, toggle
}