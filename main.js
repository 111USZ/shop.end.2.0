document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const message = `
        Новая регистрация:
        Имя: ${firstName}
        Фамилия: ${lastName}
        Телефон: ${phone}
        Email: ${email}
    `;

    const token = '7211034304:AAGsBbkivdWmaY2HRlriBfAOj-iGIGV-pJk'; 
    const chatId = '980836947'; 

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
               
                window.location.href = "https://111usz.github.io/shoopppp/"; 
            } else {
                alert('Ошибка при отправке данных.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Произошла ошибка при отправке данных.');
        });
});

