    function isTelegramWebView() {
      const ua = navigator.userAgent.toLowerCase();
      return ua.includes("telegram");
    }

    window.onload = function () {
      if (!isTelegramWebView()) {
        window.location.href = "error.html"; // Redirect to error page
      }
    };