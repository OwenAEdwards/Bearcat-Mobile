<script>
  import Home from '../src/components/Home.svelte';
  import Map from '../src/components/Map.svelte';
  import Modules from '../src/components/Modules.svelte';
  import Account from '../src/components/Account.svelte';

  let currentPage = 'Home';

  function navigate(page) {
    currentPage = page;
  }

  // Add time functionality
  let time = new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit'
  }).replace(/\s[AP]M/, '');

  // Update time every second
  setInterval(() => {
    time = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit'
    }).replace(/\s[AP]M/, '');
  }, 1000);
</script>

<style>
  :root {
    --uc-red: #e00122;
    --uc-black: #000000;
    --uc-white: #ffffff;
  }

  .phone-container {
    width: 100vw;
    height: 90vh;
    max-width: 375px;
    max-height: 812px;
    border-radius: 40px;
    border: 2px solid var(--uc-black);
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: var(--uc-white);
    display: flex;
    flex-direction: column;
  }

  /* iPhone Styled Top Bar */
  .iphone-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding: 0 16px;
    font-size: 0.85rem;
    color: #333;
    background-color: #f8f8f8;
    position: relative;
    z-index: 1;
  }

  .time {
    padding-left: 15px;
    font-weight: 600;
    font-size: 1rem;
  }

  /* Correctly oriented notch */
  .notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 210px;
    height: 30px;
    background-color: #333;
    border-radius: 0 0 20px 20px; /* Inverted for the correct orientation */
    z-index: 2;
  }

  /* Icons (battery, wifi, signal) */
  .status-icons {
    display: flex;
    gap: 8px;
  }

  .status-icon {
    width: 16px;
    height: 16px;
  }

  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: var(--uc-white);
    border-top: 1px solid #ddd;
    padding-top: 0.5rem;
    position: sticky;
    bottom: 0;
    margin-top: auto;
  }

  .nav-item {
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    color: var(--uc-black);
    cursor: pointer;
  }

  .nav-item:hover {
    color: var(--uc-red);
  }

  .nav-icon {
    fill: currentColor;
    width: 24px;
    height: 24px;
  }
</style>

<div class="phone-container">
  <!-- iPhone styled top bar -->
  <div class="iphone-top-bar">
    <span class="time">{time}</span>
    <div class="notch"></div>
    <div class="status-icons">
      <!-- Signal Icon -->
      <svg class="status-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="2" y1="20" x2="2" y2="20"/><line x1="7" y1="16" x2="7" y2="20"/><line x1="12" y1="12" x2="12" y2="20"/><line x1="17" y1="8" x2="17" y2="20"/><line x1="22" y1="4" x2="22" y2="20"/></svg>
      
      <!-- Wi-Fi Icon -->
      <svg class="status-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
      <br>
      <!-- Battery Icon -->
      <svg class="status-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline></svg>
      <br>
    </div>
  </div>

  <!-- Conditionally render the current page component -->
  {#if currentPage === 'Home'}
    <Home />
  {:else if currentPage === 'Map'}
    <Map />
  {:else if currentPage === 'Modules'}
    <Modules />
  {:else if currentPage === 'Account'}
    <Account />
  {/if}

  <!-- Bottom Navbar -->

<div class="navbar">
  <!-- Map Icon -->
  <button class="nav-item" type="button" on:click={() => navigate('Map')} aria-label="Map">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>    <span>Map</span>
  </button>
  <!-- Calendar Icon -->
  <button class="nav-item" type="button" on:click={() => navigate('Calendar')} aria-label="Calendar">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    <span>Calendar</span>
  </button>
  <!-- Home Icon -->
  <button class="nav-item" type="button" on:click={() => navigate('Home')} aria-label="Home">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>    <span>Home</span>
  </button>
  <!-- Modules Icon -->
  <button class="nav-item" type="button" on:click={() => navigate('Modules')} aria-label="Modules">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>    <span>Modules</span>
  </button>
  <!-- Account Icon -->
  <button class="nav-item" type="button" on:click={() => navigate('Account')} aria-label="Account">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>    <span>Account</span>
  </button>
</div>
</div>
