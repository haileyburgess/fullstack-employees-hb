import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employeesList = [
    { name: "sally", birthday: "10-03-1978", salary: 80000 },
    { name: "brad", birthday: "11-04-1990", salary: 75000 },
    { name: "mark", birthday: "03-19-1989", salary: 85000 },
    { name: "grace", birthday: "12-23-2000", salary: 60000 },
    { name: "june", birthday: "06-15-1970", salary: 100000 },
    { name: "adam", birthday: "04-07-1992", salary: 80000 },
    { name: "rebeca", birthday: "02-21-1985", salary: 90000 },
    { name: "madison", birthday: "05-07-2001", salary: 65000 },
    { name: "merv", birthday: "01-02-1960", salary: 120000 },
    { name: "beth", birthday: "07-03-1983", salary: 100000 },
    { name: "jerry", birthday: "08-30-1987", salary: 80000 },
  ];

  for (const employee of employeesList) {
    await createEmployee(employee);
  }
  console.log("Database seeded successfully");
}
