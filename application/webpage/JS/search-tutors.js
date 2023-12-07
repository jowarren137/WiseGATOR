// Get all message buttons and popups
var messageButtons = document.querySelectorAll("[id^='messageBtn']");
var popups = document.querySelectorAll(".popup");
var closeButtons = document.querySelectorAll(".popup .close");
var sendButtons = document.querySelectorAll(".sendMsgBtn");

// Function to open the corresponding popup
function openPopup(index) {
    var popup = document.getElementById("messagePopup" + index);
    popup.style.display = "block";
}

// Add click event listeners to all message buttons
messageButtons.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        openPopup(index);
    });
});

// Add click event listeners to all send buttons
sendButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        var index = btn.getAttribute('data-index');
        handleSendMessage(index);
    });
});

// Function to handle send button click
function handleSendMessage(index) {
    var messageText = document.getElementById("messageText" + index);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var popup = document.getElementById("messagePopup" + index);
    popup.style.display = "none";
}

// Add click event listeners to all close buttons
closeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        var index = btn.getAttribute('data-index');
        var popup = document.getElementById("messagePopup" + index);
        popup.style.display = "none";
    });
});

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    popups.forEach(popup => {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
}