export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employeesList = [];

  for (const department in allEmployees) {
    employeesList.push(...allEmployees[department]);
  }

  return employeesList[Symbol.iterator]();
}
