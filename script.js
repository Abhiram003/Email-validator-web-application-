document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const resultCont = document.getElementById('resultCont');
    const emailForm = document.getElementById('emailForm');

    emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        resultCont.innerHTML = `<img width="55px" src="img/loading.svg" alt="Loading">`;

        const key = "ema_live_h4z7lBIulDFFLh0SSDg55crKAruELEqHcQfjuN6P";
        const email = document.getElementById('emailId').value;
        const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('Network response was not ok');
            const result = await res.json();
            let str = '';
            for (const key in result) {
                str += `<div><strong>${key}:</strong> ${result[key]}</div>`;
            }
            resultCont.innerHTML = str;
        } catch (error) {
            resultCont.innerHTML = `<div>Error: ${error.message}</div>`;
        } finally {
            emailForm.reset();
        }
    });
});
