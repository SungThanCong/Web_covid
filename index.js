

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const register_icon = $('.menutren--dang_nhap');
const register_form = $('.register');
const form1 = $('.register-form');
const form2 = $('.register-form-2');
const trans = $$('.trans_register');
const submit1 = $('.submit-1');
const submit2 = $('.submit-2');
const user = $$('.username input');
const pass = $$('.password input');
const name_ = $('.name input');
const email = $('.email input');
const report_error = $$('.report_error');


var isOpenRegister = false;
var isRegister = false;


var accounts = [];

register_icon.onclick = () =>{
    if(isRegister == false){
        if(isOpenRegister == false){
            register_form.style.display = 'block';
            register_form.classList.remove("register-inactive");
            register_form.classList.add("register-active");
            report_error.innerHTML = `<br/>`;
            isOpenRegister = true;
        }
        else{
            register_form.classList.remove("register-active");
            register_form.classList.add("register-inactive");
            setTimeout(() => {
                register_form.style.display='none';
            }, 700);
            isOpenRegister = false;
        }
    }
    
}

trans[0].onclick = () =>{
    form1.classList.remove("register-active");
    form2.classList.add('register-active');
}
trans[1].onclick = ()=> {
    form2.classList.remove('register-active');
    form1.classList.add('register-active');
}   


submit1.onclick = () =>{
    let username = user[0].value;
    let password = pass[0].value;
    
    let check_username = accounts.findIndex((value)=>{return value.tai_khoan == username });
    let check_password = accounts.findIndex((value)=>{return value.mat_khau == password });
    console.log(check_username);
    if(check_username != -1 && check_password != -1){

        register_form.classList.remove("model-active");
        register_form.classList.add("model-inactive");
        setTimeout(() => {
             register_form.style.display='none';
        }, 700);
        isRegister = false;
    
        register_icon.innerHTML = 
        `<span class="dang_nhap--icon"><a>${username}</a></span>`;
        isRegister = true;
    }
    else{
        report_error[0].innerHTML = 'Tài khoản hoặc mật khẩu không chính xác';
    }
}
submit2.onclick = () =>{
    let username = user[1].value;
    let password = pass[1].value;
    let email_ = email.value;
    let name__ = name_.value;
    if(!username || !password || !email_ || !name__){
        report_error[1].innerHTML = 'Bạn điền thiếu thông tin hoặc thông tin không hợp lệ';
        console.log(username);
        console.log(password);
        console.log(email_);
        console.log(name__);
    }
    else{
        let obj = {
            tai_khoan : `${username}`,
            mat_khau : `${password}`,
            ten : `${name__}`,
            thu_dien_tu :`${email}`
        }
        accounts.push(obj);
        report_error[1].style.color ="green";
        report_error[1].innerHTML = 'Đăng kí thành công';
    }
}