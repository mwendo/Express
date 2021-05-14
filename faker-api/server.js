const express = require("express");
const app = express();
const port = 8000;

var faker = require('faker');

app.use( express.json());
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phonenUmber = faker.phone.phoneNumber();
        this.email - faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
console.log(new Company());

app.get("/api", (req, res) => {
    console.log(new User());
    res.json({ message: "Hello World!"});
});

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({user: new User(), company: new Company()});
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );