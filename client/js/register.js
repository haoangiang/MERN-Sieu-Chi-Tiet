handlerRegister = async () => {
    try {
        // 1. Lấy giá trị trên form register
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(`username: ${username}`);
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);


        // 2. Gửi giá trị từ client đến server
        const response = await axios.post('api/auth/register', {
            username: username,
            email: email,
            password: password
        })

        if (response.status == 200) {
            window.location.href = '/login.html';
        }
    } catch (error) {
        // log error
    }
}