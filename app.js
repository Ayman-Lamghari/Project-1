alert('hello!');

//hour display 
function displayCurrentTime() {
    // Get the current date and time
    var currentDate = new Date();

    // Extract hours, minutes, and seconds
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Format the time with leading zeros
    hours = formatTimeComponent(hours);
    minutes = formatTimeComponent(minutes);
    seconds = formatTimeComponent(seconds);

    // Display the current time
    console.log(hours + ":" + minutes + ":" + seconds);
}

function formatTimeComponent(component) {
    // Add leading zero if the component is less than 10
    return component < 10 ? "0" + component : component;
}

// Call the function to display the current time
displayCurrentTime();
