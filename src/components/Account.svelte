<script>
  // Mock functions for connecting
  function connectCanvas() {
    console.log("Connecting to Canvas...");
  }

  function connectOutlook() {
    console.log("Connecting to Outlook...");
  }

  function signOut() {
    console.log("Signing out...");
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
    gap: 1rem;
    padding: 1rem;
    color: #000;
    max-width: 600px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    overflow-y: scroll;
  }

  @media (max-width: 480px) {
    .settings-container {
      padding: 0.75rem;
      gap: 0.75rem;
    }
  }

  .user-info-card {
    position: relative;
    padding: 1.25rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: linear-gradient(145deg, #ffffff, #f7f7f7);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    box-sizing: border-box;
    width: 100%;
  }

  .user-info-header {
    margin-bottom: 1rem;
  }

  .user-info-details p {
    margin: 0.5rem 0;
    font-size: clamp(0.875rem, 2vw, 1rem);
    color: #555;
  }

  .barcode-icon {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    width: clamp(20px, 5vw, 25px);
    height: auto;
    opacity: 0.7;
  }

  .settings-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #fff;
    border: 1px solid #ddd;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-weight: bold;
    transition: background 0.3s ease;
    box-sizing: border-box;
    width: 100%;
  }

  .settings-button:hover {
    background-color: #f0f0f0;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    box-sizing: border-box;
    width: 100%;
  }

  .toggle {
    position: relative;
    width: clamp(36px, 8vw, 40px);
    height: clamp(18px, 4vw, 20px);
    background-color: #ddd;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex-shrink: 0;
  }

  .toggle.active {
    background-color: #f44336;
  }

  .toggle::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: calc(100% - 6px - 20px);
    height: calc(100% - 6px);
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  .toggle.active::after {
    transform: translateX(20px);
  }

  .sign-out-button {
    margin-top: auto;
    background-color: #f44336;
    color: #fff;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    font-size: clamp(0.875rem, 2vw, 1rem);
    transition: background-color 0.3s ease;
  }

  .sign-out-button:hover {
    background-color: #c62828;
  }

  .icon {
    width: clamp(20px, 5vw, 24px);
    height: auto;
    flex-shrink: 0;
  }

  .emergency-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
  }

  @media (max-width: 380px) {
    .emergency-button-container {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }
  }

  .emergency-icon-button {
    background-color: #f44336;
    color: #fff;
    border: none;
    width: clamp(50px, 12vw, 60px);
    height: clamp(50px, 12vw, 60px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    outline: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    flex-shrink: 0;
  }

  .emergency-icon svg {
    width: 70%;
    height: 70%;
    fill: #fff;
  }

  .emergency-info {
    font-size: clamp(0.75rem, 2vw, 0.9rem);
    color: #666;
    font-weight: bold;
    margin-right: auto;
  }

  @media (max-width: 380px) {
    .emergency-info {
      margin-right: 0;
    }
  }
</style>

<div class="settings-container">
  <!-- User Information Card -->
  <div class="user-info-card">
    <div class="user-info-details">
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Year:</strong> Sophomore</p>
      <p><strong>Major:</strong> Computer Science</p>
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
  <button class="sign-out-button" on:click={signOut}>
    Sign Out
  </button>
</div>
