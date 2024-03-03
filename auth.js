document.getElementById('LoginFrom').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('users.json');
        const data = await response.json();

        const checkUser = data.find(user => user.Username === username && user.Password === password);

        if (checkUser) {
            console.log('Login seccessful!')
            setTimeout(() => {
                window.location.href = checkUser.Website
            }, 1000);
        } else {
            console.log('Invalid username or password. Please try again.')
        }
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
});