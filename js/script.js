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
  test4: "БВАДГ",
  test5: "ЗВДГЖЕАЁБ",
  test6: "4",
  test7: "1-2-3-4-6-8-10-11-16-17-18\n1-2-3-5-12-13-16-17-18\n1-2-3-4-6-7-16-17-18\n1-2-3-4-6-9-14-15-16-17-18",
  test8: "8,10",
  test9: "14 6 10",
  test10: "12",
  test11: "4",
  test12: "https:\/\/yupest2\.pythonanywhere\.com\/api\/v1\.0\/movies\/?(genre\=мелодрама\&country\=США|genre\=мелодрама\&country\=СССР|genre\=мелодрама\&country\=Италия|genre\=мелодрама\&country\=Мексика|genre\=мелодрама\&country\=Австралия|genre\=мелодрама\&country\=Канада|genre\=мелодрама\&country\=Новая Зеландия|genre\=мелодрама\&country\=Германия|genre\=мелодрама\&country\=Великобритания|genre\=мелодрама\&country\=Франция|genre\=мелодрама\&country\=Бельгия|genre\=мелодрама\&country\=Япония|genre\=мелодрама\&country\=Индия|genre\=мелодрама\&country\=Россия|genre\=история\&country\=США|genre\=история\&country\=СССР|genre\=история\&country\=Мексика|genre\=история\&country\=Австралия|genre\=история\&country\=Канада|genre\=история\&country\=Россия|genre\=история\&country\=Украина|genre\=драма\&country\=США|genre\=драма\&country\=СССР|genre\=драма\&country\=Италия|genre\=драма\&country\=Мексика|genre\=драма\&country\=Австралия|genre\=драма\&country\=Канада|genre\=драма\&country\=НоваяЗеландия|genre\=драма\&country\=Германия|genre\=драма\&country\=Великобритания|genre\=драма\&country\=Франция|genre\=драма\&country\=Бельгия|genre\=драма\&country\=Швейцария|genre\=драма\&country\=Япония|genre\=драма\&country\=Антарктида|genre\=драма\&country\=Индия|genre\=драма\&country\=Россия|genre\=драма\&country\=Китай|genre\=драма\&country\=Тайвань|genre\=драма\&country\=Испания|genre\=драма\&country\=Венгрия|genre\=драма\&country\=Ирландия|genre\=драма\&country\=Гонконг|genre\=драма\&country\=Украина|genre\=военный\&country\=США|genre\=военный\&country\=СССР|genre\=военный\&country\=Италия|genre\=военный\&country\=Россия|genre\=военный\&country\=Украина|genre\=комедия\&country\=США|genre\=комедия\&country\=СССР|genre\=комедия\&country\=Италия|genre\=комедия\&country\=Австралия|genre\=комедия\&country\=Канада|genre\=комедия\&country\=Германия|genre\=комедия\&country\=Великобритания|genre\=комедия\&country\=Франция|genre\=комедия\&country\=Чехия|genre\=комедия\&country\=Япония|genre\=комедия\&country\=Индия|genre\=комедия\&country\=Россия|genre\=комедия\&country\=Китай|genre\=криминал\&country\=США|genre\=криминал\&country\=СССР|genre\=криминал\&country\=Италия|genre\=криминал\&country\=Австралия|genre\=криминал\&country\=Канада|genre\=криминал\&country\=Германия|genre\=криминал\&country\=Великобритания|genre\=криминал\&country\=Франция|genre\=криминал\&country\=Япония|genre\=криминал\&country\=Индия|genre\=криминал\&country\=Россия|genre\=криминал\&country\=Китай|genre\=криминал\&country\=Испания|genre\=приключения\&country\=США|genre\=приключения\&country\=СССР|genre\=приключения\&country\=Италия|genre\=приключения\&country\=Австралия|genre\=приключения\&country\=Канада|genre\=приключения\&country\=НоваяЗеландия|genre\=приключения\&country\=Германия|genre\=приключения\&country\=Великобритания|genre\=приключения\&country\=Марокко|genre\=приключения\&country\=Франция|genre\=приключения\&country\=Чехия|genre\=приключения\&country\=Румыния|genre\=приключения\&country\=Япония|genre\=приключения\&country\=Антарктида|genre\=приключения\&country\=Индия|genre\=приключения\&country\=Польша|genre\=приключения\&country\=Словения|genre\=приключения\&country\=Россия|genre\=приключения\&country\=Китай|genre\=приключения\&country\=Тайвань|genre\=приключения\&country\=Испания|genre\=приключения\&country\=Гонконг|genre\=музыка\&country\=США|genre\=музыка\&country\=Германия|genre\=музыка\&country\=Франция|genre\=музыка\&country\=Швейцария|genre\=семейный\&country\=США|genre\=семейный\&country\=СССР|genre\=семейный\&country\=Австралия|genre\=семейный\&country\=Канада|genre\=семейный\&country\=Германия|genre\=семейный\&country\=Великобритания|genre\=семейный\&country\=Франция|genre\=семейный\&country\=Чехия|genre\=семейный\&country\=Япония|genre\=семейный\&country\=Антарктида|genre\=семейный\&country\=Индия|genre\=семейный\&country\=Польша|genre\=семейный\&country\=Словения|genre\=семейный\&country\=Россия|genre\=семейный\&country\=Китай|genre\=семейный\&country\=Гонконг|genre\=фэнтези\&country\=США|genre\=фэнтези\&country\=СССР|genre\=фэнтези\&country\=Австралия|genre\=фэнтези\&country\=Канада|genre\=фэнтези\&country\=НоваяЗеландия|genre\=фэнтези\&country\=Германия|genre\=фэнтези\&country\=Великобритания|genre\=фэнтези\&country\=Марокко|genre\=фэнтези\&country\=Чехия|genre\=фэнтези\&country\=Румыния|genre\=фэнтези\&country\=Япония|genre\=фэнтези\&country\=Индия|genre\=фэнтези\&country\=Польша|genre\=фэнтези\&country\=Словения|genre\=фэнтези\&country\=Россия|genre\=фэнтези\&country\=Китай|genre\=фэнтези\&country\=Тайвань|genre\=фэнтези\&country\=Испания|genre\=фэнтези\&country\=Венгрия|genre\=фэнтези\&country\=Ирландия|genre\=детский\&country\=СССР|genre\=мюзикл\&country\=США|genre\=мюзикл\&country\=СССР|genre\=мюзикл\&country\=Австралия|genre\=мюзикл\&country\=Великобритания|genre\=детектив\&country\=США|genre\=детектив\&country\=СССР|genre\=детектив\&country\=Италия|genre\=детектив\&country\=Австралия|genre\=детектив\&country\=Канада|genre\=детектив\&country\=Германия|genre\=детектив\&country\=Великобритания|genre\=детектив\&country\=Франция|genre\=детектив\&country\=Чехия|genre\=детектив\&country\=Япония|genre\=детектив\&country\=Мальта|genre\=детектив\&country\=Россия|genre\=фантастика\&country\=США|genre\=фантастика\&country\=СССР|genre\=фантастика\&country\=Италия|genre\=фантастика\&country\=Мексика|genre\=фантастика\&country\=Австралия|genre\=фантастика\&country\=Канада|genre\=фантастика\&country\=НоваяЗеландия|genre\=фантастика\&country\=Германия|genre\=фантастика\&country\=Великобритания|genre\=фантастика\&country\=Франция|genre\=фантастика\&country\=Япония|genre\=фантастика\&country\=Индия|genre\=фантастика\&country\=Россия|genre\=фантастика\&country\=Китай|genre\=фантастика\&country\=Испания|genre\=фантастика\&country\=Гонконг|genre\=боевик\&country\=США|genre\=боевик\&country\=Италия|genre\=боевик\&country\=Австралия|genre\=боевик\&country\=Канада|genre\=боевик\&country\=НоваяЗеландия|genre\=боевик\&country\=Германия|genre\=боевик\&country\=Великобритания|genre\=боевик\&country\=Марокко|genre\=боевик\&country\=Франция|genre\=боевик\&country\=Чехия|genre\=боевик\&country\=Румыния|genre\=боевик\&country\=Япония|genre\=боевик\&country\=Индия|genre\=боевик\&country\=Польша|genre\=боевик\&country\=Словения|genre\=боевик\&country\=Россия|genre\=боевик\&country\=Китай|genre\=боевик\&country\=Испания|genre\=боевик\&country\=Венгрия|genre\=боевик\&country\=Ирландия|genre\=боевик\&country\=Гонконг|genre\=боевик\&country\=Украина|genre\=биография\&country\=США|genre\=биография\&country\=Канада|genre\=биография\&country\=Россия|genre\=биография\&country\=Украина|genre\=вестерн\&country\=США|genre\=триллер\&country\=США|genre\=триллер\&country\=Италия|genre\=триллер\&country\=Мексика|genre\=триллер\&country\=Австралия|genre\=триллер\&country\=Канада|genre\=триллер\&country\=НоваяЗеландия|genre\=триллер\&country\=Германия|genre\=триллер\&country\=Великобритания|genre\=триллер\&country\=Франция|genre\=триллер\&country\=Чехия|genre\=триллер\&country\=Япония|genre\=триллер\&country\=Мальта|genre\=триллер\&country\=Индия|genre\=триллер\&country\=Россия|genre\=триллер\&country\=Китай|genre\=триллер\&country\=Испания|genre\=спорт\&country\=США|genre\=спорт\&country\=Россия|genre\=ужасы\&country\=США|genre\=ужасы\&country\=Канада|genre\=ужасы\&country\=Великобритания|genre\=ужасы\&country\=Чехия|genre\=ужасы\&country\=Ирландия)",
  test13: "98",
  test14: "0 12 24 43 63 81 112 129 162 179 194 212 229 245 253 270 291 301 333 343 379 384 394 410 443 455 471 491 507 528 539 552 560 578 586 616 635 680 704 737 758 779 794 Количество записей: 1261",
  test15: "2 3 5 8",
  test16: "Начало, Форрест Гамп",
  test17: "1990",
  test18: "Аватар",
  test19: "5 6",
  test20: "the мир",
  test21: "language, location",
  test22: "1 3 7 8",
  test23: "умник знаток дерево граф аналитика график разум python",

};


function checkInput(testId) {
  var userInput = document.getElementById(testId).value.trim();
  const correctAnswer = answers[testId];
  var cleanedUserInput = userInput.trim();
  var cleanedCorrectAnswer = correctAnswer.trim();

  if (cleanedUserInput.toLowerCase() === cleanedCorrectAnswer.toLowerCase()) {
    document.getElementById(testId + "-result").textContent = "Верно!";
  } else {
    document.getElementById(testId + "-result").textContent = "Попробуйте еще раз!";
  }
}

