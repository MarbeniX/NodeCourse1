const { v4: uuidv4 } = require("uuid");
const getAge = require("get-age");

const personBuilder = ({ name, birthdate }) => {
    return {
        id: uuidv4(),
        name,
        birthdate,
        age: getAge(birthdate),
    };
};

const obj = { name: "John", birthdate: "1990-01-01" };
const jhon = personBuilder(obj);
console.log(jhon);

module.exports = { personBuilder };
