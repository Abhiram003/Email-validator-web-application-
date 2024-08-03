document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitBtn');
  const resultCont = document.getElementById('resultCont');
  const emailForm = document.getElementById('emailForm');

  submitBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      resultCont.innerHTML = `<img width="55px" src="img/loading.svg" alt="loading">`;

      let key = "ema_live_h4z7lBIulDFFLh0SSDg55crKAruELEqHcQfjuN6P";
      let email = document.getElementById('emailId').value;
      let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

      try {
          let res = await fetch(url);
          if (!res.ok) throw new Error('Network response was not ok');
          let result = await res.json();
          let str = '';
          for (let key in result) {
              str += `<div>${key}: ${result[key]}</div>`;
          }
          resultCont.innerHTML = str;
      } catch (error) {
          resultCont.innerHTML = `<div>Error: ${error.message}</div>`;
      } finally {
          emailForm.reset();
      }
  });
});

