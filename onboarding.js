document.getElementById("submitBtn").addEventListener("click", () => {
    const fileInput = document.getElementById("photoInput");
    const file = fileInput.files[0];
  
    if (!file) {
      document.getElementById("status").textContent = "Please upload a photo.";
      return;
    }
  
    // Placeholder — in the future, send to a model
    const dummySeason = "Soft Autumn";
  
    chrome.storage.local.set({ seasonalType: dummySeason }, () => {
      document.getElementById("status").textContent =
        `You're a ${dummySeason}! You're all set.`;
    });
  });
  