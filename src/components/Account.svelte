<script>
  // Mock functions for connecting
  function connectCanvas() {
    console.log("Connecting to Canvas...");
  }

  function connectOutlook() {
    console.log("Connecting to Outlook...");
  }

  let showSignOutModal = false; // State to track if the modal is visible

  function openSignOutModal() {
    showSignOutModal = true;
  }

  function closeSignOutModal() {
    showSignOutModal = false;
  }

  function confirmSignOut() {
    console.log("Signed out!");
    closeSignOutModal();
    // Add any additional logic for signing out
  }

  // Toggle state
  let pushNotifications = false;

  // Toggle function
  function togglePushNotifications() {
    pushNotifications = !pushNotifications;
    console.log(`Push Notifications: ${pushNotifications}`);
  }

  let holdTimeout;

  // Emergency Button Logic
  function activateEmergency() {
    alert("Emergency Contact Activated!");
    // Replace with actual emergency logic
  }

  function onHoldStart() {
    holdTimeout = setTimeout(activateEmergency, 2000); // Hold for 2 seconds
  }

  function onHoldEnd() {
    clearTimeout(holdTimeout);
  }
</script>

<style>
  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    color: #000;
  }

  .user-info-card {
    position: relative;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: linear-gradient(145deg, #ffffff, #f7f7f7);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    overflow: hidden;
  }

  .user-info-header {
    margin-bottom: 1rem;
  }

  .user-info-details p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #555;
  }

  .barcode-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25px;
    height: 25px;
    opacity: 0.7;
    padding-right: 0.5rem;
  }

  .settings-button {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #fff;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background 0.3s ease;
  }

  .settings-button:hover {
    background-color: #f0f0f0;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .toggle.active {
    background-color: #e00122;
  }

  .toggle::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  .toggle.active::after {
    transform: translateX(20px);
  }

  .sign-out-button {
    margin-top: auto;
    background-color: #e00122;
    color: #fff;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .sign-out-button:hover {
    background-color: #c62828;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .emergency-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .emergency-icon-button {
    background-color: #e00122;
    color: #fff;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    outline: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .emergency-icon svg {
    width: 40px;
    height: 40px;
    fill: #fff;
  }

  .emergency-info {
    font-size: 0.9rem;
    color: #666;
    font-weight: bold;
    margin-right: auto;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  /* Modal Content */
  .modal-content {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 90%;
    max-width: 400px;
  }

  .modal-buttons {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .modal-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .modal-button.cancel {
    background-color: #ddd;
    color: #333;
  }

  .modal-button.cancel:hover {
    background-color: #bbb;
  }

  .modal-button.confirm {
    background-color: #e00122;
    color: #fff;
  }

  .modal-button.confirm:hover {
    background-color: #c62828;
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
</style>

<div class="settings-container">
  <!-- User Information Card -->
  <div class="user-info-card">
    <div class="user-info-details" style="display: flex; align-items: center; gap: 2rem;">
      <img src="cat.png" alt="Profile Picture" class="profile-image" />
      <div>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Year:</strong> Sophomore</p>
        <p><strong>Major:</strong> Computer Science</p>
        <p><strong>M Number:</strong> M12345678</p>
      </div>
    </div>
    <img src="barcode.png" alt="Barcode" class="barcode-icon" />
  </div>

  <!-- Connect to Canvas -->
  <button class="settings-button" type="button" on:click={connectCanvas} aria-label="Canvas">
    <img src="canvas-icon.png" alt="Canvas Logo" class="icon" /> Connect to Canvas
  </button>

  <!-- Connect to Outlook -->
  <button class="settings-button" type="button" on:click={connectOutlook} aria-label="Outlook">
    <img src="outlook-icon.png" alt="Outlook Logo" class="icon" /> Connect to Outlook
  </button>

  <!-- Push Notifications Toggle -->
  <div class="toggle-container">
    <span>Push Notifications</span>
    <div
      class="toggle {pushNotifications ? 'active' : ''}"
      on:click={togglePushNotifications}
      role="switch"
      aria-checked={pushNotifications}
    ></div>
  </div>

  <!-- Emergency Button -->
  <div class="emergency-button-container">
    <p class="emergency-info">Hold for 2 seconds to activate</p>
    <button
      class="emergency-icon-button"
      on:mousedown={onHoldStart}
      on:mouseup={onHoldEnd}
      on:mouseleave={onHoldEnd}
      on:touchstart={onHoldStart}
      on:touchend={onHoldEnd}
      aria-label="Activate Emergency Contact"
    >
      <div class="emergency-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 2C7.03 2 3 4.78 3 7.67c0 5.35 4.06 10.85 8.55 13.27a1.9 1.9 0 0 0 1.9 0C16.94 18.52 21 13.02 21 7.67 21 4.78 16.97 2 12 2zm0 19c-3.5-2-7-6.23-7-11.33C5 5.92 8.42 4 12 4s7 1.92 7 5.67c0 5.1-3.5 9.33-7 11.33zM12 6c-.83 0-1.5.67-1.5 1.5S11.17 9 12 9s1.5-.67 1.5-1.5S12.83 6 12 6zm0 3.5c-.28 0-.5.22-.5.5v4.25c0 .28.22.5.5.5s.5-.22.5-.5V10c0-.28-.22-.5-.5-.5z"
          />
        </svg>
      </div>
    </button>
  </div>

  <!-- Sign Out Button -->
  <button class="sign-out-button" on:click={openSignOutModal}>
    Sign Out
  </button>

  <!-- Sign Out Confirmation Modal -->
  {#if showSignOutModal}
    <div class="modal-overlay" role="dialog" aria-modal="true">
      <div class="modal-content">
        <p>Are you sure you want to sign out?</p>
        <div class="modal-buttons">
          <button class="modal-button cancel" on:click={closeSignOutModal}>
            Cancel
          </button>
          <button class="modal-button confirm" on:click={confirmSignOut}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>