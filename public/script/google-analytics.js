window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', getMeasurementId());

function getMeasurementId() {
  const allowedPattern = /^G[A-Z0-9-]+$/gi;
  const measurementId = document.currentScript.dataset.measurementId;
  return measurementId && allowedPattern.test(measurementId) ? measurementId : "INVALID_ID";
}
