// ZADANIE 1

// String.prototype.reverse = function() {
//   let reversed = this.split("")
//     .reverse()
//     .join("");
//   console.log(reversed);
// };
// "Karol".reverse();

// ZADANIE 2

// Number.prototype.reverse = function() {
//   // let reversed = this * -1;
//   // console.log(reversed);
//   console.log(this * -1);
// };

// (53456789).reverse();

// ZADANIE 3

//a
const json = require("./Data.json");
// const parsedJson = JSON.stringify(json);

//b
function DetailsOfPayent(dOFa, dOFb, dOFc) {
  (this.Type = dOFa), (this.company = dOFb), (this.date = dOFc);
}
function CompanyData(index, _id, cost, dOFa, dOFb, dOFc) {
  (this.index = index),
    (this._id = _id),
    (this.cost = cost),
    (this.detailsOfPayent = new DetailsOfPayent(dOFa, dOFb, dOFc));
}

//c
let data = json.map(
  item =>
    new CompanyData(
      item.index,
      item._id,
      item.cost,
      item.detailsOfPayent.Type,
      item.detailsOfPayent.company,
      item.detailsOfPayent.date
    )
);

console.log(data[0]);

//d i

let date2014 = data
  .filter(year => {
    if (year.detailsOfPayent.date.includes("2014")) return year;
  })
  .map(year => parseFloat(year.cost))
  .reduce((returnedSum, nextCost) => returnedSum + nextCost);

console.log(date2014);

// d ii

let listOfCompanies = [...new Set(data.map(el => el.detailsOfPayent.company))];

let spendingOfCompany1 = data.filter(spend => {
  if (spend.detailsOfPayent.company.includes(listOfCompanies[0])) return spend;
});
let spendingOfCompany2 = data.filter(spend => {
  if (spend.detailsOfPayent.company.includes(listOfCompanies[1])) return spend;
});
let spendingOfCompany3 = data.filter(spend => {
  if (spend.detailsOfPayent.company.includes(listOfCompanies[2])) return spend;
});

// .map(year => parseFloat(year.cost))
// .reduce((returnedSum, nextCost) => returnedSum + nextCost);

console.log(spendingOfCompany1, spendingOfCompany2, spendingOfCompany3);

let costsOf1 = spendingOfCompany1
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => (sum += plus));

console.log(costsOf1);

// let two = spending => {
//   spending
//     .map(earn => parseFloat(earn.cost))
//     .reduce((sum, plus) => (sum += plus));
// };
// console.log(two(spendingOfCompany1));

let costsOf2 = spendingOfCompany2
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => (sum += plus));

console.log(costsOf2);

let costsOf3 = spendingOfCompany3
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => (sum += plus));

console.log(costsOf3);

// d iii
let listOfTypes = [...new Set(data.map(t => t.detailsOfPayent.Type))];
// let listOfTypes = [];
// let type = () => {
//   for (let i = 0; i < data.length; i++) {
//     if (listOfTypes.indexOf(data[i].detailsOfPayent.Type) == -1) {
//       listOfTypes.push(data[i].detailsOfPayent.Type);
//     }
//   }
// };
// type();

console.log(listOfTypes);

function TypeOfTransaction(Type, cost) {
  (this.Type = Type), (this.cost = cost);
}

let types = data.map(
  el => new TypeOfTransaction(el.detailsOfPayent.Type, parseFloat(el.cost))
);

console.log(types);

let firstType = types
  .filter(detailsType => detailsType.Type == listOfTypes[0])
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => sum + plus);

let secondType = types
  .filter(detailsType => detailsType.Type == listOfTypes[1])
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => sum + plus);
let thirdType = types
  .filter(detailsType => detailsType.Type == listOfTypes[2])
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => sum + plus);
let fourthType = types
  .filter(detailsType => detailsType.Type == listOfTypes[3])
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => sum + plus);
let fifthType = types
  .filter(detailsType => detailsType.Type == listOfTypes[4])
  .map(earn => parseFloat(earn.cost))
  .reduce((sum, plus) => sum + plus);

console.log(
  `Transakcja numer ${listOfTypes[0]} ma łączną wartość ${firstType}`,
  `Transakcja numer ${listOfTypes[1]} ma łączną wartość ${secondType}`,
  `Transakcja numer ${listOfTypes[2]} ma łączną wartość ${thirdType}`,
  `Transakcja numer ${listOfTypes[3]} ma łączną wartość ${fourthType}`,
  `Transakcja numer ${listOfTypes[4]} ma łączną wartość ${fifthType}`
);

// d iv

const months = [
  ...new Set(data.map(el => el.detailsOfPayent.date.slice(3, 5)))
];
console.log(months);

// let one1 = data.map(month => {
//   if (month.detailsOfPayent.date.includes(months[0])) return month;
// });

// console.log(one1);

function MonthExpenses(cost, date) {
  (this.cost = cost), (this.date = date);
} // struktura do przechowywania danych o kosztach i datach transakcji

const showMonthExpenses = () => {
  const monthName = month => {
    switch (month) {
      case "01":
        return "Styczeń";
      case "02":
        return "Luty";
      case "03":
        return "Marzec";
      case "04":
        return "Kwiecień";
      case "05":
        return "Maj";
      case "06":
        return "Czerwiec";
      case "07":
        return "Lipiec";
      case "08":
        return "Sierpień";
      case "09":
        return "Wrzesień";
      case "10":
        return "Październik";
      case "11":
        return "Listopad";
      case "12":
        return "Grudzień";
    }
  };

  const showMonthExpenses = months.map(
    elem =>
      new MonthExpenses(
        data
          .map(item =>
            item.detailsOfPayent.date.includes(elem)
              ? parseFloat(item.cost)
              : null
          )
          .filter(el => (el = !null ? el : null))
          .reduce((previous, current) => previous + current),
        monthName(elem)
      )
  );
  return showMonthExpenses;
};

console.log(showMonthExpenses()[7]);
