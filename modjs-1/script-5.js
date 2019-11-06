const china = "Китай";
const chili = "Чили";
const australia = "Австралия";
const india = "Индия";
const yamaika = "Ямайка";

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceYamaika = 120;


let country = prompt("Укажите страну доставки");

switch (country !=null && country.toLowerCase()) {
  case china.toLowerCase():
    alert(`Доставка в ${china} будет стоить ${priceChina} кредитов`);
    break;

  case chili.toLowerCase():
    alert(`Доставка в ${chili}  будет стоить ${priceChili} кредитов`);
    break;

  case australia.toLowerCase():
    alert(`Доставка в ${australia} будет стоить ${priceAustralia} кредитов`);
    break;

  case india.toLowerCase():
    alert(`Доставка в ${india} будет стоить ${priceIndia} кредитов`);
    break;

  case yamaika.toLowerCase():
    alert(`Доставка в ${yamaika} будет стоить ${priceYamaika} кредитов`);
    break;

  default:
    alert("Нет таких значений");
}
