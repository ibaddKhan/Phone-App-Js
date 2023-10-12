const mainDiv = document.getElementById("main-div");
const phones = [
  {
    img: "./assets/s20.png",
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 90000,
  },
  {
    img: "./assets/iphone.png",
    brand: "IPhone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: 255000,
  },
  {
    img: "./assets/pixel.png",
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 256,
    camera: "30 megapixel",
    price: 190000,
  },
  {
    img: "./assets/sony.jpg",
    brand: "Sony",
    model: "Xperia Xz3",
    ram: 4,
    rom: 128,
    camera: "19 megapixel",
    price: 35000,
  },
  {
    img: "./assets/note10.png",
    brand: "Xiaomi",
    model: "note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: 35000,
  },
  {
    img: "./assets/infi.png",
    brand: "Infinix",
    model: "Smart 7",
    ram: "6/8",
    rom: 256,
    camera: "5 megapixel",
    price: 25000,
  },
  {
    img: "./assets/spark.png",
    brand: "Tecno",
    model: "spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: 28000,
  },

  {
    img: "./assets/f11.png",
    brand: "Oppo",
    model: "Reno 6",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 18000,
  },
  {
    img: "./assets/y20.png",
    brand: "Vivo",
    model: "y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: 23000,
  },
];

// const pArray = [];

for (let i = 0; i < phones.length; i++) {
  mainDiv.innerHTML += `
  <div class="main"><div> 
  <h2 class=" padding:10px">${phones[i].brand}</h2>
  <img src="${phones[i].img}" class="image">
  <h3>Device : ${phones[i].model}</h3>
  <h3>Ram : ${phones[i].ram} Gb</h3>
  <h3>Rom : ${phones[i].rom}Gb</h3>
  <h3>Camera : ${phones[i].camera}</h3>
  <h3 style="Border:1px solid  ;border-radius: 15px 50px;    background-color: #e5f3ff; margin-top:6px ">Price : <span style= "color:red; font-weight:bolder; font-size:20px; "> ${phones[i].price}</span></h3>
  <div class= "button"><button onclick="cart(${i})" class="cart">Buy Now</button></div>
  </div>
   </div>`;
}

const sony = document.querySelectorAll(".image")[3];
const oppo = document.querySelectorAll(".image")[7];
if (sony) {
  sony.style.width = "126px";
}
if (oppo) {
  oppo.style.width = "110px";
}
const data = localStorage.getItem("pArray");
const arrayData = JSON.parse(data);
let pArray;
if (Array.isArray(arrayData)) {
  pArray = [...arrayData];
} else {
  pArray = [];
}
function cart(index) {
  if (pArray.includes(phones[index])) {
    for (let i = 0; i < pArray.length; i++) {
      if (pArray[i] == phones[index]) {
        pArray[i].Quantity += 1;
      }
    }
  } else {
    phones[index].Quantity = 1;
    pArray.push(phones[index]);
  }
  console.log(pArray);
}
// !Cartt button
function gotoCart() {
  const cartItems = JSON.stringify(pArray);
  localStorage.setItem("pArray", cartItems);
  window.location = "./cart.html";
}
// !Login button Rendering

const login = document.querySelector(".login");
const mainDiv2 = document.querySelector("#main-div2");

login.addEventListener("click", function () {
  setTimeout(clickingLogin, 330);
});

function clickingLogin() {
  console.log("Login Working");
  mainDiv2.innerHTML = `  <div class="center">
  <div class="container">
  <label style="display:flex; justify-content:end; cursor:pointer;" onclick="remove();" class="close-btn fas fa-times" title="close"></label>
  <div class="text">Login </div>
  <form action="#">
    <div class="data">
      <label>Username or Email  </label>
      <input  class="email" type="text"  required />
    </div>
    <div class="data">
      <label>Password</label>
      <input class="password" type="password" required />
    </div>
    <div class="forgot-pass">
      <a onclick="signing()">Create account?</a>
    </div>
    <div class="btn">
      <div class="inner"></div>
      <button type="submit">login</button>
    </div>

  </form>
</div>
</div>`;
  if (mainDiv2.innerHTML === "") {
    mainDiv.style.opacity = 10000000;
  } else {
    mainDiv.style.opacity = 0.2;
  }

  const form = document.querySelector("form");
  const email = document.querySelector(".email");
  const pass = document.querySelector(".password");
  // email.focus();
  let userD = JSON.parse(localStorage.getItem("userD"));
  form.addEventListener("submit", sub);

  function sub(e) {
    e.preventDefault();
    let found = false;
    for (let i = 0; i < userD.length; i++) {
      if (email.value == userD[i].email && pass.value == userD[i].Cpass) {
        found = true;
        break;
      }
    }

    if (found) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logging in",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        window.location = "index.html";
      }, 1500);
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Not an Account",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        signing();
      }, 1500);
    }
    form.reset();
  }
}
// !Signup button Rendering
const signup = document.querySelector(".signup");
signup.addEventListener("click", function () {
  setTimeout(signing, 330);
});

function signing() {
  console.log("Signup Working");
  mainDiv2.innerHTML = `  <div class="center con">
  <div class="container main-con">
  <label style="display:flex; justify-content:end; cursor:pointer;" onclick="remove();" class="close-btn fas fa-times" title="close"></label>
  <div class="text">Sign Up</div>
  <form action="#">
  <div class="data" id="less-h">
  <label>Username</label>
  <input class="username"  type="text" required />
  </div>
  <div class="data "  id="less-h" >
    <label>Email or Phone</label>
    <input class="phone " type="text" required />
  </div>
    <div class="data "  id="less-h" >
      <label>Password</label>
      <input class="pas " type="password" required />
    </div>
    <div class="data "  id="less-h" >
      <label>Confirm Password</label>
      <input class="Cpas" type="password" required />
    </div>
    <div class="forgot-pass">
      <a onclick="clickingLogin()">Already Have an Account</a>
    </div>
    <div class="btn">
      <div class="inner"></div>
      <button type="submit">Create</button>
    </div>

    </form>
   </div>
</div>`;
  if (mainDiv2.innerHTML === "") {
    mainDiv.style.opacity = 10000000;
  } else {
    mainDiv.style.opacity = 0.2;
  }
  const form = document.querySelector("form");
  form.addEventListener("submit", create);

  function create(e) {
    console.log("Working");
    e.preventDefault();
    const existingData = localStorage.getItem("userD");
    const signD = existingData ? JSON.parse(existingData) : [];
    const username = document.querySelector(".username");
    const email = document.querySelector(".phone");
    const pass = document.querySelector(".pas");
    const Cpass = document.querySelector(".Cpas");

    const userDetails = {
      username: username.value,
      email: email.value,
      pass: pass.value,
      Cpass: Cpass.value,
    };

    if (pass.value === Cpass.value) {
      signD.push(userDetails);
      localStorage.setItem("userD", JSON.stringify(signD));
      form.reset();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Account Created",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        window.location = "index.html";
      }, 1500);
    } else {
      console.log("Passwords are not the same");
      alert("Passwords are not the same");
    }
  }
}
function remove() {
  console.log("Remove Working");
  mainDiv2.remove();
  location.reload();
}
