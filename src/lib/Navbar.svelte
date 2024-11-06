<script>
  function navigate(section) {
    console.log(`Navigating to ${section}`);
  }
</script>

<div class="navbar">
  <div class="nav-item" on:click={() => navigate('Map')}>
    <!-- Map Icon Image -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>    <span>Map</span>
  </div>
  <div class="nav-item" on:click={() => navigate('Calendar')}>
    <!-- Calendar Icon Image -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    <span>Calendar</span>
  </div>
  <div class="nav-item" on:click={() => navigate('Home')}>
    <!-- Home Icon Image -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>    <span>Home</span>
  </div>
  <div class="nav-item" on:click={() => navigate('Modules')}>
    <!-- Modules Icon Image -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>    <span>Modules</span>
  </div>
  <div class="nav-item" on:click={() => navigate('Account')}>
    <!-- Account Icon Image -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>    <span>Account</span>
  </div>
</div>

<style>
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    padding-top: 0.5rem;
    position: sticky;
    bottom: 0;
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    color: #000;
    cursor: pointer;
  }
  .nav-icon {
    fill: currentColor;
    width: 24px;
    height: 24px;
  }
</style>
