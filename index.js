
//option-0
particlesJS("particle-container", {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffa97a"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4.869141813755329,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "top",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// option-1
const register_icon = $('.menutren--dang_nhap');
const register_form = $('.register');
const form1 = $('.register-form');
const form2 = $('.register-form-2');
const trans = $$('.trans_register');
const submit1 = $('.submit-1');
const submit_thoat = $$('.submit-thoat');
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
        $("body").style.overflowY = 'hidden';
        if(isOpenRegister == false){
            register_form.style.display = 'block';
            register_form.classList.remove("register-inactive");
            register_form.classList.add("register-active");
            report_error.innerHTML = `<br/>`;
            isOpenRegister = true;
        }
    }
}
submit_thoat.forEach(element => {
    element.onclick = ()=>{
    $("body").style.overflowY = 'scroll';
        register_form.classList.remove("register-active");
        register_form.classList.add("register-inactive");
        setTimeout(() => {
            register_form.style.display='none';
        }, 700);
        isOpenRegister = false;
    }
});
        

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
        $("body").style.overflow = 'scroll';
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

// option-2
const scroll_to_head = $('.scroll_to_head');

scroll_to_head.onclick = () =>{
     window.scrollTo({ top: 0, behavior: 'smooth' });
    
}

const menu = $('nav.menutren');

window.addEventListener("scroll",function(){
    var x = this.pageYOffset;
    if(x<(window.innerHeight - 100)){
        menu.style.top = `${window.innerHeight - x - 100}px`;
    }
    else{
        menu.style.top = `0px`;
    }
});
