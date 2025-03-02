

// Function to open the side menu
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
    document.getElementById("menu").style.display = "none";
  }
  
  // Function to close the side menu
  function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("menu").style.display = "block";
  }
  
  // Function to close the side menu when clicking outside
  function closeMenuOnClickOutside(event) {
    const sideMenu = document.getElementById("sideMenu");
    const menuIcon = document.getElementById("menu");
  
    // Check if the click is outside the side menu and not on the menu icon
    if (!sideMenu.contains(event.target) && event.target !== menuIcon) {
      closeMenu();
    }
  }
  
  // Add event listener to close the side menu when clicking outside
  document.addEventListener("click", closeMenuOnClickOutside);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("spinner-container").style.display = "none";
});

document.addEventListener("readystatechange", function() {
    if (document.readyState !== "complete") {
        document.getElementById("spinner-container").style.display = "flex";
    }
});

window.addEventListener("beforeunload", function() {
    document.getElementById("spinner-container").style.display = "flex";
});