// Add Event Button Click Handler
document.getElementById("add-event").addEventListener("click", function () {
    // Get input values
    const eventName = document.getElementById("event-name").value;
    const eventStart = document.getElementById("event-start").value;
    const eventEnd = document.getElementById("event-end").value;
    const eventLocation = document.getElementById("event-location").value;
    const eventCategory = document.getElementById("event-category").value;
    const eventDescription = document.getElementById("event-description").value;

    // Create an event object
    const event = {
        name: eventName,
        start: eventStart,
        end: eventEnd,
        location: eventLocation,
        category: eventCategory,
        description: eventDescription,
    };

    // Store the event in local storage or send to the backend

    // Clear input fields
    document.getElementById("event-name").value = "";
    document.getElementById("event-start").value = "";
    document.getElementById("event-end").value = "";
    document.getElementById("event-location").value = "";
    document.getElementById("event-category").value = "";
    document.getElementById("event-description").value = "";
});

// Calendar functionality will be implemented here
