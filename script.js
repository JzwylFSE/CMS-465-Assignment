// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // --- LOGIN LOGIC ---
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) { 
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from refreshing the page

            const userid = document.getElementById('userid').value;
            const password = document.getElementById('password').value;
            const errorMsg = document.getElementById('error-msg');

            // Hardcoded credentials for the assignment demonstration
            // User: admin, Password: 12345
            if (userid === "Jzwyl" && password === "12345") {
                // Save user name to local storage to display on the next page
                localStorage.setItem('hospitalUser', userid);
                
                // Redirect to the dashboard
                window.location.href = "dashboard.html";
            } else {
                errorMsg.textContent = "Invalid ID or Password. Try 'admin' and '12345'";
            }
        });
    }

    // --- DASHBOARD LOGIC ---
    const userDisplay = document.getElementById('user-display');
    const logoutBtn = document.getElementById('logoutBtn');

    // Display the logged-in user's name
    if (userDisplay) {
        const storedUser = localStorage.getItem('hospitalUser');
        if (storedUser) {
            userDisplay.textContent = storedUser;
        } else {
            // If no user is found (they tried to skip login), send them back
            window.location.href = "index.html";
        }
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('hospitalUser'); // Clear session
            window.location.href = "index.html"; // Go back to login
        });
    }
});