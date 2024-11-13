<script>
  // Define an array with title, URL, and icon path for each card
  const modules = [
    { title: "Canvas", url: "https://uc.instructure.com/", icon: "../src/assets/canvas-icon.png" },
    { title: "Catalyst", url: "https://www.catalyst.uc.edu/", icon: "../src/assets/catalyst-icon.png" },
    { title: "Outlook", url: "https://outlook.office365.com/mail/login.html?bO=1&authRedirect=true", icon: "../src/assets/outlook-icon.png" },
    { title: "My Bearcat Network", url: "https://www.uc.edu/aas/mybearcatnetwork.html", icon: "../src/assets/my-bearcat-network-icon.png" },
    { title: "One Stop", url: "https://onestop.uc.edu/", icon: "../src/assets/one-stop-icon.png" },
    { title: "UCIT - Campus IT Support", url: "https://www.uc.edu/about/ucit/help.html", icon: "../src/assets/ucit-icon.png" }
  ];
</script>

<style>
  /* Module card styling */
  .card {
    display: flex;
    align-items: center;
    padding: 0.8rem;  /* Reduced padding */
    margin: 0.4rem 0;  /* Reduced margin */
    border: 1px solid #ddd;
    border-radius: 8px;
    text-decoration: none;
    color: var(--uc-black);
    transition: background-color 0.2s, transform 0.2s;
    max-width: 320px;  /* Set a max-width to prevent stretching */
    width: 100%;  /* Full width but no overflow */
    box-sizing: border-box;  /* Ensures padding and border are included in the total width */
    margin-left: auto;  /* Center the card */
    margin-right: auto;  /* Center the card */
  }

  /* Hover effect for card */
  .card:hover {
    background-color: #f7f7f7;
    transform: scale(1.02);
  }

  /* Icon styling */
  .icon {
    width: 30px;  /* Reduced icon size */
    height: 30px; /* Reduced icon size */
    margin-right: 0.8rem;  /* Reduced margin */
  }

  /* Title styling */
  .title {
    font-size: 0.9rem; /* Smaller font size */
    font-weight: bold;
  }
</style>

<div class="modules">
  {#each modules as module}
    <a href={module.url} target="_blank" rel="noopener noreferrer" class="card">
      <!-- Display the local icon -->
      <img src={module.icon} alt="{module.title} icon" class="icon" />
      <span class="title">{module.title}</span>
    </a>
  {/each}
</div>
