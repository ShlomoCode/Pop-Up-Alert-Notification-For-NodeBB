socket.on("event:new_notification", function(data) {
    function OpenNotfiPath() {
        window.open(data.path, "_blank"); //Replace "_blank" with "_ self" for the alert to open on the same tab.
    }
    app.alert({
        title: "[[notifications:new_notification]]",
        message: data.bodyShort,
        clickfn: OpenNotfiPath,
        alert_id: "new_notification",
        timeout: 3800,
        type: "info",
    });
    if (app.user.timeagoCode === "he") {
        $(".alert-window").css({ right: "auto", left: "20px" });
    }
});