
let form = document.querySelector("#contact-form");

if (form) {

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let subject = document.querySelector("#subject");
    let message = document.querySelector("#message");
    let success = document.querySelector("#success-message");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (name.value === "" || email.value === "" ||
            subject.value === "" || message.value === "") {

            alert("Please fill all fields!");

        } else {

            success.textContent = "Your message has been sent successfully!";
            form.reset();

        }
    });
}
let files = document.querySelectorAll(".assignment-file");

files.forEach(function(file) {

    file.addEventListener("change", function() {

        let status = file.previousElementSibling;

        if (file.files.length > 0) {

            status.textContent = "Status: Completed";

            status.style.color = "green";

        }

    });

});

// SETTINGS PAGE

let settingsPage = document.querySelector("#settings");

if (settingsPage) {

    // Profile Settings

    let fullName = document.querySelector("#full-name");
    let userEmail = document.querySelector("#user-email");
    let username = document.querySelector("#username");
    let updateProfile = document.querySelector("#update-profile");

    updateProfile.addEventListener("click", function() {

        if (fullName.value === "" || userEmail.value === "" || username.value === "") {
            alert("Please fill all profile fields!");
        } else {

            localStorage.setItem("fullName", fullName.value);
            localStorage.setItem("userEmail", userEmail.value);
            localStorage.setItem("username", username.value);

            alert("Profile Updated Successfully!");
        }

    });


    // Change Password

    let currentPassword = document.querySelector("#current-password");
    let newPassword = document.querySelector("#new-password");
    let confirmPassword = document.querySelector("#confirm-password");
    let changePassword = document.querySelector("#change-password");

    changePassword.addEventListener("click", function() {

        if (currentPassword.value === "" || newPassword.value === "" || confirmPassword.value === "") {
            alert("Please fill all password fields!");
        }

        else if (newPassword.value !== confirmPassword.value) {
            alert("New Password and Confirm Password do not match!");
        }

        else {
            alert("Password Changed Successfully!");

            currentPassword.value = "";
            newPassword.value = "";
            confirmPassword.value = "";
        }

    });


    // Save Settings

    let theme = document.querySelector("#theme");
    let saveSettings = document.querySelector("#save-settings");

    let emailNotifications = document.querySelector("#email-notifications");
    let assignmentReminders = document.querySelector("#assignment-reminders");
    let courseUpdates = document.querySelector("#course-updates");

    saveSettings.addEventListener("click", function() {

        localStorage.setItem("theme", theme.value);

        localStorage.setItem("emailNotifications", emailNotifications.checked);
        localStorage.setItem("assignmentReminders", assignmentReminders.checked);
        localStorage.setItem("courseUpdates", courseUpdates.checked);

        document.body.classList.toggle("dark-mode", theme.value === "dark");

        alert("Settings Saved Successfully!");

    });


    // Load Saved Settings

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        theme.value = savedTheme;
    }

    document.body.classList.toggle("dark-mode", savedTheme === "dark");

    emailNotifications.checked = localStorage.getItem("emailNotifications") === "true";
    assignmentReminders.checked = localStorage.getItem("assignmentReminders") === "true";
    courseUpdates.checked = localStorage.getItem("courseUpdates") === "true";

}
let exploreBtn = document.querySelector("#explore");

if (exploreBtn) {

    exploreBtn.addEventListener("click", function() {

        window.location.href = "courses.html";

    });

}
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}