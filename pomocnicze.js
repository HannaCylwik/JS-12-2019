let listOfCompanies = [];
let list = () => {
  for (let i = 0; i < data.length; i++) {
    if (listOfCompanies.indexOf(data[i].detailsOfPayent.company) == -1) {
      listOfCompanies.push(data[i].detailsOfPayent.company);
    }
  }
  return listOfCompanies;
};

let spendingOfCompanies = data.filter(spend => {
  if (spend.detailsOfPayent.company.includes(listOfCompanies[0])) return spend;
});
// .map(year => parseFloat(year.cost))
// .reduce((returnedSum, nextCost) => returnedSum + nextCost);
console.log(list());
// console.log(listOfCompanies);
console.log(spendingOfCompanies);

// let x = () => {
//   for (let i = 0; i < data.length; i++) {
//     data.filter((spend, i) => {
//       if (spend.detailsOfPayent.company.includes(listOfCompanies[i]))
//         return spend;
//     });
//   }
// };
// console.log(x());

//////////////////////

let spendingOfCompany1 = data.filter(spend => {
  switch (spend) {
    case listOfCompanies[0]:
      return spend;
  }
});
