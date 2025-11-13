//alert("테스트");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const body = document.querySelector("body");
const h3 = document.querySelector("h3");

//이벤트 색을 바꿨을때
color1.addEventListener("input", myColor);
color2.addEventListener("input", myColor);
color3.addEventListener("input", myColor);
//css 의 값을 화면에 보여주기

//실행함수
function myColor() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    "," +
    color2.value +
    "," +
    color3.value +
    ")";
  h3.textContent = body.style.background + " ";
}
