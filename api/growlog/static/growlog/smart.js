/**
 * Records the data onto the page.
 */
function recordData(content) {
    $("#smart").html(content);
}

function updateApiData() {
    console.log("Sending request...");

    $.get({
        url: "http://wateriot.co.uk/data.php",
        success: data => {
            console.log(data);
            recordData(data);
        },
        error: data => {
            console.log(data);
            recordData(data.statusText);
        }
    });
}

// setInterval(() => {
//     updateApiData();
// }, 1000);