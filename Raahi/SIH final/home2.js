function askLocationTracking() {
    // Check if the user has already been asked for location tracking
    var alreadyAsked = localStorage.getItem("locationTrackingAsked");

    if (!alreadyAsked) {
        var wantsTracking = confirm("Do you want us to track your location during your time with us?");
        if (wantsTracking) {
            alert("Thank you for granting permission. We are now fetching your current location during your travel with us.");
            // Store the user's preference in local storage
            localStorage.setItem("locationTrackingAsked", "yes");

            // Code to start location tracking
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                console.log("Latitude: " + latitude + ", Longitude: " + longitude);
                // Handle the location data as needed
            }, function(error) {
                console.error("Error occurred while fetching location: " + error.message);
            });
        } else {
            alert("We were unable to access your location as permission was not granted. For an optimal experience, we recommend enabling location services during your travel with us.");
            // Store the user's preference in local storage
            localStorage.setItem("locationTrackingAsked", "no");
            // Code for alternative actions can go here
        }
    }
}

// Call the askLocationTracking function when the page loads
window.onload = askLocationTracking;