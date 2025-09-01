const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength-text");

const weakPasswords = [
    "123456", "password", "12345678", "qwerty", "abc123", "letmein",
    "monkey", "football", "iloveyou", "admin"
];

passwordInput.addEventListener("input", () => {
    const pwd = passwordInput.value;
    const strength = analyzePassword(pwd);
    strengthText.textContent = `Strength: ${strength.label}`;
    strengthText.style.color = strength.color;
});

function analyzePassword(password) {
    let score = 0;

    if (weakPasswords.includes(password.toLowerCase())) {
        return { label: "Very Weak (Common Password)", color: "red" };
    }

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { label: "Weak", color: "orange" };
    if (score === 3) return { label: "Medium", color: "yellow" };
    if (score === 4) return { label: "Strong", color: "#7FFF00" };
    return { label: "Very Strong", color: "#00FF00" };
}