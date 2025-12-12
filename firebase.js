const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// SIGNUP FUNCTION
function signup() {
    const email = document.getElementById("signupEmail").value;
    const pass = document.getElementById("signupPassword").value;

    // password rules
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!strong.test(pass)) {
        alert("Password must contain uppercase, lowercase, number, and be 8+ chars.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, pass)
        .then(() => window.location.href = "home.html")
        .catch(err => alert(err.message));
}

// LOGIN FUNCTION
function login() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, pass)
        .then(() => window.location.href = "home.html")
        .catch(err => alert(err.message));
}

// LOGOUT
function logout() {
    auth.signOut().then(() => window.location.href = "login.html");
}
function toggleTheme() {
    if (!document.body.classList.contains("light")) {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
}

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}
auth.currentUser.sendEmailVerification();
alert("Verification email sent!");
auth.currentUser.updateProfile({
    photoURL: "images/default-pfp.png"
});
