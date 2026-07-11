import { TAX_RATE, calculateTax } from "./utils/taxCalc.js";
import getEmployeeProfile from "./services/employee.js";
console.log(calculateTax(5000));
console.log(getEmployeeProfile("Tina", 50000));
