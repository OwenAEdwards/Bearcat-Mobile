<script>
  import Dashboard from './Dashboard.svelte';
  import Navbar from './Navbar.svelte';
</script>

<div class="phone-container">
  <!-- Notch -->
  <div class="notch"></div>

  <!-- Status bar space -->
  <div class="status-bar-space"></div>

  <!-- Dashboard (scrollable content) -->
  <Dashboard />

  <!-- Navbar -->
  <Navbar />
</div>

<style>
  .phone-container {
    width: 100vw;
    height: 90vh;
    max-width: 375px;
    max-height: 812px;
    border-radius: 40px;
    border: 2px solid #000;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .notch {
    width: 30vw;
    max-width: 210px;
    height: 30px;
    background-color: #000;
    border-radius: 0 0 20px 20px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .status-bar-space {
    height: 44px;
    background-color: #fff;
  }
</style>
