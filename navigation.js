function setupNavigation() {
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Logging out...');
      firebase.auth().signOut().then(() => {
        console.log('Signed out');
        window.location.href = 'index.html';
      }).catch((error) => {
        console.error('Error signing out:', error);
      });
    });
  }
}
