// 6.	Company Users
// Write a function, which keeps the information about companies and their employees.
// You will receive an array of strings containing the company name and employee's id.
// Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by their name in ascending order.

// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}

// Input / Constraints
// •	The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// •	The input always will be valid.

function companyUsers(arr) {
  let companies = {};
  arr.forEach((element) => {
    let [company, employeeId] = element.split(" -> ");
    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    companies[company].push(employeeId);
  });
  Object.entries(companies)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((company) => {
      let companyName = company.shift();
      let employees = [...new Set(company[0])];
      console.log(companyName);
      for (const employee of employees) {
        console.log(`-- ${employee}`);
      }
    });
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
  "SoftUni -> AA12345",
]);
