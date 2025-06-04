    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(() => {
        // Telegram injects the WebApp object in the window.Telegram object
        if (
          typeof window.Telegram === 'undefined' ||
          typeof window.Telegram.WebApp === 'undefined'
        ) {
          // Not inside Telegram Mini App, redirect to error page
          window.location.href = "error.html";
        } else {
          // Optional: initialize or expand Telegram WebApp
          Telegram.WebApp.expand();
        }
      }, 100); // short delay to ensure Telegram.WebApp is ready
    });
