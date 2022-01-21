function notfiLang() {
  switch (app.user.timeagoCode) {
    case "he":
      return "יש לך התראה חדשה";
      break;
    case "en":
      return "have a new notification";
      break;
    default:
      return "have a new notification";
      break;
  }
}
socket.on("event:new_notification", function (data) {
  function OpenNotfiPath() {
    window.open(data.path, "_blank"); //Replace "_blank" with "_ self" for the alert to open on the same tab.
  }
  app.alert({
    title: notfiLang(),
    message: data.bodyShort,
    clickfn: OpenNotfiPath,
    timeout: 3800,
    type: "info",
  });
});
