document.addEventListener('DOMContentLoaded', function () {
  var banner = document.getElementById('cookieConsent');
  if (!banner) return;

  var gaId = banner.getAttribute('data-ga-id');
  var STORAGE_KEY = 'sentinel_consent';

  function loadGA() {
    if (!gaId || window.__sentinelGALoaded) return;
    window.__sentinelGALoaded = true;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, { anonymize_ip: true });
  }

  var stored;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    stored = null;
  }

  if (stored === 'accepted') {
    loadGA();
  } else if (stored !== 'declined') {
    banner.hidden = false;
  }

  var acceptBtn = document.getElementById('consentAccept');
  var declineBtn = document.getElementById('consentDecline');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      try { localStorage.setItem(STORAGE_KEY, 'accepted'); } catch (e) {}
      loadGA();
      banner.hidden = true;
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', function () {
      try { localStorage.setItem(STORAGE_KEY, 'declined'); } catch (e) {}
      banner.hidden = true;
    });
  }
});
