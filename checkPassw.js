import bcrypt from 'bcrypt';

const hashedPassword = "$2a$10$Mdab6.0BSfzCYZ/JVXcAeeHDXlFGX6n0ZtxT930HrErpXuWdmbB9u";
const plainPassword = "user1234";

bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
    if (result) {
        console.log("Пароль совпадает!");
    } else {
        console.log("Пароль неверный.");
    }
});