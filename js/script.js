document.getElementById("filter").addEventListener('keyup', function () {

  var filter, ul, li, a, i, txtValue;

  filter = this.value.toUpperCase();
  ul = document.querySelector("#list > ul");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {

    a = li[i].getElementsByTagName("a")[0];

    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {

      li[i].classList.remove("no");

      li[i].classList.add("yes");

    } else {

      li[i].classList.remove("yes");

      li[i].classList.add("no");
    }
  }
})

document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('aside').classList.remove('active')
  document.getElementById('nav').classList.toggle('active')
})

document.getElementById('show-lists-mobile').addEventListener('click', function () {
  document.getElementById('nav').classList.remove('active')
  document.querySelector('aside').classList.toggle('active')
})

document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('nav').classList.remove('active')
})

document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('nav').classList.remove('active')
})
document.getElementById('close-aside').addEventListener('click', function () {
  document.querySelector('aside').classList.remove('active')
})

var sliders = document.querySelectorAll('.slidr')
for (var i = 0; i < sliders.length; i++) {
  slidr.create(sliders[i].id).start();
}




const answers = {
  test1: "4,5,6,7,8,9,14,16",
  test2: "6",
  test3: "4",
  test4: "БВАДГ"
};


function checkInput(testId) {
  var userInput = document.getElementById(testId).value.trim(); 
  const correctAnswer = answers[testId]; 
 
  if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
    document.getElementById(testId + "-result").textContent = "Верно!"; 
  } else {
    document.getElementById(testId + "-result").textContent = "Попробуйте еще раз!"; 
  }
}

