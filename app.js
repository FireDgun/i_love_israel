// Get references to HTML elements
const imageUrlInput = document.getElementById("imageUrl");
const applyFilterButton = document.getElementById("applyFilter");
const filteredImage = document.getElementById("filteredImage");
const MAX_DIMENSION = 800; // Define this as per your needs
const supportMessages = [
  "Thank you for standing with Israel. Your support means the world! ❤️",
  "Every bit of love and support for Israel counts. Grateful for your voice! 🙏",
  "Together, we make a difference. Thanks for being a beacon of hope for Israel. ✨",
  "Your unwavering support for Israel touches hearts. Blessings to you! 🌟",
  "Israel is stronger because of supporters like you. Heartfelt thanks! 💙",
  "In unity, we find strength. Grateful for your enduring support for Israel. 🕊️",
  "Love and peace from Israel. Thanks for being a part of this journey. 💕",
  "Israel thrives with love and support from wonderful people like you. Toda raba! (Thank you very much!) 🌹",
  "Your love for Israel shines brightly. May peace and blessings be upon you. 🌈",
  "In challenging times, your support for Israel stands out. Forever thankful. 🌿",
];

// Event listener for the "Apply Filter" button
applyFilterButton.addEventListener("click", () => {
  const imageUrl = imageUrlInput.value;
  let imageNumber = Math.floor(Math.random() * 4) + 1;
  // Create a new Image object for the filter image
  const filterImage = new Image();
  filterImage.src = `israel${imageNumber}.png`; // Replace with the path to your filter image
  const messageElement = document.getElementById("message");
  messageElement.textContent =
    supportMessages[Math.floor(Math.random() * supportMessages.length)];
  filterImage.onload = () => {
    // Create a new Image object for the user's input image
    const userImage = new Image();
    userImage.src = imageUrl;
    userImage.crossOrigin = "anonymous"; // Enable CORS for external images
    userImage.onload = () => {
      // Determine the dimensions for the canvas
      const maxWidth = Math.max(userImage.width, filterImage.width);
      const maxHeight = Math.max(userImage.height, filterImage.height);

      // Create a new canvas element with adjusted dimensions
      const canvas = document.createElement("canvas");
      canvas.width = maxWidth;
      canvas.height = maxHeight;

      const ctx = canvas.getContext("2d");

      // Scale and draw the user's image to match the canvas dimensions
      ctx.drawImage(userImage, 0, 0, maxWidth, maxHeight);

      // Apply the filter image with opacity
      ctx.globalAlpha = 1; // Adjust opacity as needed
      ctx.drawImage(filterImage, 0, 0, maxWidth, maxHeight);

      // Display the filtered image
      filteredImage.src = canvas.toDataURL("image/png");
    };
  };
});
