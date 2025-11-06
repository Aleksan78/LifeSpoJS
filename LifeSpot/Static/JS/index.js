let userName = prompt("Привет, как тебя зовут");
alert(`Приветствуем, ${userName}. В твоём имени ${userName.length} символов`)

let age = prompt("Введите ваш возраст");

if (age >= 18) {
    alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
}
else {
    alert("Данный сайт имеет возрастные ограничения, до свидания");
    //window.location.href = "http://www.google.com"
    window.location.href = "https://youtu.be/1X2dUnEp5Ag?si=67FHpItpHS0JLM0a"/*Так прикольнее*/
}
