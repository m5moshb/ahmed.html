// script.js

// JavaScript for interactive features

function displayDateTime() {
    const now = new Date();
    const utcDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', utcDateTime);
}

displayDateTime();