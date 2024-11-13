<script>
  let date = new Date();
  let diningBalances = {
    bigRed: 0.00,
    diningDollars: 0.00,
    mpFlex: 1.01,
    mealPlan: 0.00,
    bonusMeals: 0,
    meals: 0,
  };
  let nearestRestaurant = {
    name: "Starbucks Coffee",
    distance: 866,
    logo: "path/to/starbucks-logo.png" // Replace with actual image path
  };
  let nearestLab = {
    name: "Cravens Library 4th Floor",
    distance: 1580,
    appleIcon: true,
    windowsIcon: true
  };

  let additionalItems = [
    { id: 1, title: "Item 1", description: "Additional content example 1" },
    { id: 2, title: "Item 2", description: "Additional content example 2" },
    { id: 3, title: "Item 3", description: "Additional content example 3" },
  ];

  // Navigation function (replace with actual logic if needed)
  function navigate(section) {
    console.log(`Navigating to ${section}`);
  }
</script>

<style>
  /* UC Colors */
  :root {
    --uc-red: #e00122;
    --uc-black: #000000;
    --uc-white: #ffffff;
  }

  /* Phone Container - Fit to Viewport */
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

  /* Notch */
  .notch {
    width: 30vw;
    max-width: 210px;
    height: 30px;
    background-color: var(--uc-black);
    border-radius: 0 0 20px 20px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  /* Status bar space */
  .status-bar-space {
    height: 44px;
    background-color: var(--uc-white);
  }

  /* Scrollable content area */
  .scrollable-content {
    overflow-y: auto;
    flex: 1;
    padding: 1rem;
  }

  .dashboard {
    font-family: Arial, sans-serif;
    color: var(--uc-black);
  }

  .date-card, .balances-card, .labs-card, .additional-item {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: var(--uc-white);
  }

  .date-card h2 {
    font-size: 1.2rem;
    margin: 0;
    color: var(--uc-red);
  }

  .balances-card h3, .labs-card h3 {
    color: var(--uc-red);
    margin: 0;
    font-size: 1.1rem;
  }

  .balances-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .balance-item {
    text-align: center;
  }

  .restaurant, .lab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .refresh-button {
    cursor: pointer;
    color: var(--uc-red);
    font-size: 0.9rem;
    text-align: right;
    margin-top: 0.5rem;
  }

  /* Navbar at the bottom */
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
  <!-- Notch at the top -->
  <div class="notch"></div>

  <!-- Status bar space below notch -->
  <div class="status-bar-space"></div>

  <!-- Scrollable content -->
  <div class="scrollable-content">
    <div class="dashboard">
      <!-- Date Card -->
      <div class="date-card">
        <h2>{date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h2>
        <p>No more events today</p>
      </div>

      <!-- Dining Balances -->
      <div class="balances-card">
        <h3>Dining</h3>
        <div class="balances-grid">
          <div class="balance-item">
            <p>Big Red</p>
            <strong>${diningBalances.bigRed.toFixed(2)}</strong>
          </div>
          <div class="balance-item">
            <p>Dining Dollars</p>
            <strong>${diningBalances.diningDollars.toFixed(2)}</strong>
          </div>
          <div class="balance-item">
            <p>MP Flex</p>
            <strong>${diningBalances.mpFlex.toFixed(2)}</strong>
          </div>
          <div class="balance-item">
            <p>Meal Plan</p>
            <strong>${diningBalances.mealPlan.toFixed(2)}</strong>
          </div>
          <div class="balance-item">
            <p>Bonus Meals</p>
            <strong>{diningBalances.bonusMeals}</strong>
          </div>
          <div class="balance-item">
            <p>Meals</p>
            <strong>{diningBalances.meals}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>

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
