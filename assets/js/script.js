const inputPasswordId = document.getElementById("inputPassword");
const togglePasswordId = document.getElementById("togglePassword");
//const iconEyeId = document.getElementById("iconEye");

togglePasswordId.addEventListener("click", () => {
    const isPassword = inputPasswordId.type === "password";
    inputPasswordId.type = isPassword ? "text" : "password";
    iconEye.classList.toggle("bi-eye");
    iconEye.classList.toggle("bi-eye-slash");
});