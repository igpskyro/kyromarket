    window.onload = function () {
      const isTelegram = typeof window.Telegram !== 'undefined' && typeof window.Telegram.WebApp !== 'undefined';

      if (!isTelegram) {
        // Not inside Telegram WebApp → redirect to error
        window.location.href = "error.html";
      }
    };
