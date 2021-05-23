class User{
    constructor(username,password,confirm_password,phone_number,email){
        this.username=username;
        this.password=password;
        this.confirm_password=confirm_password;
        this.phone_number=phone_number;
        this.email=email;
    }
}
module.exports=User;