const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  
  // Store the event for later use
  const deferredPrompt = event;
  
  // Show the install button or UI element
  butInstall.style.display = 'block';
  
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Show the prompt to install the PWA
  deferredPrompt.prompt();
  
  // Wait for the user to respond to the prompt
  const result = await deferredPrompt.userChoice;
  
  // Check the user's choice
  if (result.outcome === 'accepted') {
    console.log('The PWA was installed successfully.');
  } else {
    console.log('The PWA installation was declined.');
  }
  
  // Reset the deferredPrompt variable
  deferredPrompt = null;
  
  // Hide the install button or UI element
  butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', (event) => {
  console.log('The PWA was installed.');
});
