setInterval(() => {
    console.log("Sending request...");

    $.get({
        url: "http://wateriot.co.uk/data.php",
        success: () => {
            console.log(result);
        },
        error: () => {
            console.error("Nooo!");
        }
    });
}, 1000);