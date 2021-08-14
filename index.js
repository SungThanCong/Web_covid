

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//option-1 - cuộn trang của menu
const subjects = $$('.menutren ul li');

var isClick = false;
subjects[0].onclick = ()=>{
  window.scrollTo({ top: 690, behavior: 'smooth' });
  if(!isClick){
    updateSoLieu();
    isClick = true;
  }
}
subjects[1].onclick = ()=>{
  window.scrollTo({ top: 1400, behavior: 'smooth' });
}
subjects[2].onclick = ()=>{
  window.scrollTo({ top: 2100, behavior: 'smooth' });
}
subjects[3].onclick = ()=>{
  window.scrollTo({ top: 2900, behavior: 'smooth' });
}
subjects[4].onclick = ()=>{
  window.scrollTo({ top: 3650, behavior: 'smooth' });
}
subjects[5].onclick = ()=>{
  window.scrollTo({ top: 4470, behavior: 'smooth' });
}
// option-2 - đăng nhập - đăng kí
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
        `<span class="dang_nhap--icon" style="padding-top:10px;"><a>${username}</a></span>`;
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

// option-3- cuộn lên đầu trang
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

//hiệu ứng đổi bản tin part-1
const part_1_next = $('.main--part_1 .main--part--content--button_next');
const part_1_pre = $('.main--part_1 .main--part--content--button_pre');

part_1_next.onclick = () =>{
  const part_1_hienthi = $('.main--part_1 .main--part--content .active');
  if(part_1_hienthi.nextElementSibling)
  {
    part_1_hienthi.nextElementSibling.classList.add('active');
    part_1_hienthi.classList.remove('active');
  }
}

part_1_pre.onclick = () =>{
  const part_1_hienthi = $('.main--part_1 .main--part--content .active');
  if(part_1_hienthi.previousElementSibling)
  {
    part_1_hienthi.previousElementSibling.classList.add('active');
    part_1_hienthi.classList.remove('active');
  }
}

const tin_tuc_khac_tieu_de = $$('.main--part_1 .main--part--content--tin_tuc_khac--noi_dung h1');
const xem_them = $$('.main--part_1 .main--part--content--tin_tuc_khac--noi_dung .xem-them');
tin_tuc_khac_tieu_de[0].onclick = ()=>{
    window.open('https://ncov.moh.gov.vn/vi/web/guest/-/6847426-6841');
}
xem_them[0].onclick = ()=>{
  window.open('https://ncov.moh.gov.vn/vi/web/guest/-/6847426-6841');
}
tin_tuc_khac_tieu_de[1].onclick = ()=>{
  window.open('https://ncov.moh.gov.vn/web/guest/-/6847426-6842');
}
xem_them[1].onclick = ()=>{
window.open('https://ncov.moh.gov.vn/web/guest/-/6847426-6842');
}
tin_tuc_khac_tieu_de[2].onclick = ()=>{
  window.open('https://ncov.moh.gov.vn/web/guest/-/6847426-6843');
}
xem_them[2].onclick = ()=>{
window.open('https://ncov.moh.gov.vn/web/guest/-/6847426-6843');
}

//hiệu ứng chuyển hình part-5
const chuyen_1 = $$('.main--part_5 .main--part--content--cau_chuyen_1 .hinh');
const chuyen_list_btn = $$('.main--part_5  .main--part--content--button ul');
const chuyen_btn = $$('.main--part_5  .main--part--content--button ul li');

chuyen_btn.forEach(function(value,index){
  value.onclick = () =>{
    chuyen_1.forEach(function(value2){
      value2.classList.remove('cau_chuyen--active');
    });
    chuyen_btn.forEach(function(value3){
      value3.classList.remove('cau_chuyen--active');
    })
    chuyen_1[index].classList.add('cau_chuyen--active');
    value.classList.add('cau_chuyen--active');
  }
})


const cau_chuyen_next = $('.main--part_5 .main--part--content--button_next');
const cau_chuyen_pre = $('.main--part_5 .main--part--content--button_pre');

cau_chuyen_next.onclick = () =>{
  var cau_chuyen_active = $('.hinh.cau_chuyen--active');
  var chuyen_btn_active =$('.btn.cau_chuyen--active');
  if(cau_chuyen_active.nextElementSibling)
  {

    cau_chuyen_active.classList.remove('di-vao-ben-phai');
    cau_chuyen_active.classList.remove('di-vao-ben-trai');
    cau_chuyen_active.classList.remove('cau_chuyen--active');
    chuyen_btn_active.classList.remove('cau_chuyen--active');

    
    cau_chuyen_active.nextElementSibling.classList.add('di-vao-ben-phai');
    cau_chuyen_active.nextElementSibling.classList.add('cau_chuyen--active');
    chuyen_btn_active.nextElementSibling.classList.add('cau_chuyen--active');
 


  }
}
cau_chuyen_pre.onclick = () =>{
  var cau_chuyen_active = $('.hinh.cau_chuyen--active');
  var chuyen_btn_active =$('.btn.cau_chuyen--active');
  if(cau_chuyen_active.previousElementSibling)
  {
    cau_chuyen_active.classList.remove('di-vao-ben-phai');
    cau_chuyen_active.classList.remove('di-vao-ben-trai');
    cau_chuyen_active.classList.remove('cau_chuyen--active');
    chuyen_btn_active.classList.remove('cau_chuyen--active');


    cau_chuyen_active.previousElementSibling.classList.add('di-vao-ben-trai');
    cau_chuyen_active.previousElementSibling.classList.add('cau_chuyen--active');
    chuyen_btn_active.previousElementSibling.classList.add('cau_chuyen--active');
  }
}


// hieu ung mở từng mục chi tiết -- part_2
const ky_nang_p2 =$$('.main--part_2 .main--part--content ul div');
const chi_tiet_ky_nang_p2_s = $('.main--part--content--parts_2--detail');
const chi_tiet_ky_nang_p2 = $$('.main--part--content--part_2--detail');

var isPart2_active = false;

ky_nang_p2.forEach((value,key) => {
  value.onclick = ()=>{
    chi_tiet_ky_nang_p2.forEach((value)=>{value.classList.remove('active')});
    chi_tiet_ky_nang_p2[key].classList.add('active');
    chi_tiet_ky_nang_p2_s.classList.add('active');
    isPart2_active=true;

  }
});
chi_tiet_ky_nang_p2_s.onclick = ()=>{if(isPart2_active == true){
  chi_tiet_ky_nang_p2_s.classList.remove('active');
  isPart2_active = false;

} }

//hieu ung mở từng mục chi tiết part_4

const ky_nang_p4 =$$('.main--part_4 .main--part--content ul div');
const chi_tiet_ky_nang_p4_s = $('.main--part--content--parts_4--detail');
const chi_tiet_ky_nang_p4 = $$('.main--part--content--part_4--detail');

var isPart4_active = false;

ky_nang_p4.forEach((value,key) => {
  value.onclick = ()=>{
    chi_tiet_ky_nang_p4.forEach((value)=>{value.classList.remove('active')});
    chi_tiet_ky_nang_p4[key].classList.add('active');
    chi_tiet_ky_nang_p4_s.classList.add('active');
    isPart4_active=true;

  }
});

chi_tiet_ky_nang_p4_s.onclick = ()=>{if(isPart4_active == true){
  chi_tiet_ky_nang_p4_s.classList.remove('active');
  isPart4_active = false;

} }


//game__ part-6
const man_hinh_game = $('.main--part--content--man_hinh');
const bat_dau = $('.main--part--content--man_hinh-giao-dien');
const diem_so = $('.main--part--content--man_hinh-game--chi_so');
const audio_tieng_no = $('#tieng_no');


var game_bat_dau = false;

bat_dau.onclick = ()=>{
  let diem_hien_tai =0;
  let so_luong_virut=0;
  bat_dau.classList.add('bat-dau');
  game_bat_dau=true;
  diem_so.innerHTML = `<h2>Virut đã hạ: 0</h2><h2>Số lượng virut: 0</h2>`;

  var interval = setInterval(() => {
    var virut = document.createElement("div");
    virut.classList.add('main--part--content--game--con_virut');

    virut.style.top = Math.floor(Math.random() * (550 - (-50) + 1) + -50)+ 'px';
    virut.style.left = Math.floor(Math.random() * (550 - (-50) + 1) + -50)+ 'px';
    rad = Math.floor(Math.random()*9);
    virut.style.animation = `chuyen-dong-${rad} 5s infinite`;
    so_luong_virut++;

    virut.onclick = () => { diem_hien_tai++;
      so_luong_virut--;
      diem_so.innerHTML = `<h2>Virut đã hạ: ${diem_hien_tai}</h2><h2>Số lượng virut: ${so_luong_virut}</h2>`;
     virut.style.backgroundImage = `url('img/p6/no-unscreen.gif')`;
     setTimeout(() => {
      virut.remove();
     }, 300);
     audio_tieng_no.play();
    };
     
    man_hinh_game.appendChild(virut);
 
    diem_so.innerHTML = `<h2>Virut đã hạ: ${diem_hien_tai}</h2><h2>Số lượng virut: ${so_luong_virut}</h2>`;

    if(man_hinh_game.childNodes.length == 100+3){
      clearInterval(interval);
      man_hinh_game.innerHTML = `<gameover class="gameover">GAME OVER</gameover>`;
    }
  }, 300);
}
// Hiệu ứng nền cho game part_6 dùng thư viện
particlesJS("particle-container--game", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
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
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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

/////////////////////////////// lam-hieu-ung-phu
// HIeu ung nhay so part-1
function NhaySo (soCuoi,thoiGian,soBatDau,callBack){
  let soHienTai = soBatDau;
  
  function CapNhat(){
    let soThem = Math.floor(soCuoi / (thoiGian/16.6666667));
    soHienTai += soThem;
    if (soHienTai >= soCuoi){
      soHienTai = soCuoi;
      callBack(soHienTai);
    }
    else{
      callBack(soHienTai)
      requestAnimationFrame(CapNhat);
    }
  }
  requestAnimationFrame(CapNhat);
}

function updateSoLieu () {

  NhaySo(255748,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_so_ca_nhiem_trong_nuoc').innerText = format_number;
  })
  NhaySo(157918,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_dang_dieu_tri_trong_nuoc').innerText = format_number;
  })
  NhaySo(92738,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_khoi_trong_nuoc').innerText = format_number;
  })
  NhaySo(5088,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_tu_vong_trong_nuoc').innerText = format_number;
  })
  NhaySo(206987517,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_so_ca_nhiem_the_gioi').innerText = format_number;
  })
  NhaySo(17023179,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_dang_dang_nhiem_the_gioi').innerText = format_number;
  })
  NhaySo(185605709,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_khoi_the_gioi').innerText = format_number;
  })
  NhaySo(4358629,3000,0,function(soHienTai){
    const format_number = soHienTai.toLocaleString();
    $('.covid_tu_vong_the_gioi').innerText = format_number;
  })
}
document.addEventListener('DOMContentLoaded',
  updateSoLieu
);

//hieu--ung_call

$('.call--icon').onmouseover = () =>{
    $('.call--phone--number').style.display = `block`;
    $('.call--phone--number').style.animation = `phone_number_ani 1s`;
}
$('.call--icon').onmouseout = ()=>{
  $('.call--phone--number').style.display = `none`;

}

// part--3
