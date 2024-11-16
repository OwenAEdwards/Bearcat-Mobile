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
  }
</script>

<style>
  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    color: var(--uc-black);
  }

  .settings-button {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--uc-white);
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background 0.3s;
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
    background: var(--uc-white);
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle.active {
    background-color: var(--uc-red);
  }

  .toggle::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    background: var(--uc-white);
    border-radius: 50%;
    transition: transform 0.3s;
  }

  .toggle.active::after {
    transform: translateX(20px);
  }

  .sign-out-button {
    margin-top: auto;
    background-color: var(--uc-red);
    color: var(--uc-white);
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    width: 100%;
  }

  .sign-out-button:hover {
    background-color: #b8001b;
  }

  /* Icons */
  .icon {
    width: 24px;
    height: 24px;
  }
</style>

<div class="settings-container">
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

  <!-- Sign Out Button -->
  <button class="sign-out-button" on:click={signOut}>
    Sign Out
  </button>
</div>
