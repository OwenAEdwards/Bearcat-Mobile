<script>
  let showAppointmentForm = false;
  let showConfirmation = false;
  let showLoadingModal = false;
  let loadingMessage = '';
  let appointmentPurpose = '';
  let appointmentDate = '';
  let selectedAdvisor = '';
  let confirmedAdvisorName = '';
  let currentModuleUrl = '';

  // Define an array with title, URL, and icon path for each card
  const modules = [
    { title: "Schedule Advisor Meeting", icon: "my-bearcat-network-icon.png", isAppointment: true },
    { title: "Canvas", url: "https://uc.instructure.com/", icon: "canvas-icon.png" },
    { title: "Catalyst", url: "https://www.catalyst.uc.edu/", icon: "catalyst-icon.png" },
    { title: "Outlook", url: "https://outlook.office365.com/mail/login.html?bO=1&authRedirect=true", icon: "outlook-icon.png" },
    { title: "One Stop", url: "https://onestop.uc.edu/", icon: "one-stop-icon.png" },
    { title: "CampusLink", url: "https://campuslink.uc.edu/", icon: "campuslink-icon.png" },
    { title: "UC Directory", url: "https://ucdirectory.uc.edu/", icon: "directory.png" },
    { title: "UCIT - Campus IT Support", url: "https://www.uc.edu/about/ucit/help.html", icon: "ucit-icon.png" }
  ];

  // Add advisor list
  const advisors = [
    { id: 'jsmith', name: 'John Smith', department: 'Computer Science' },
    { id: 'mjohnson', name: 'Mary Johnson', department: 'Computer Science' },
    { id: 'rwilliams', name: 'Robert Williams', department: 'Computer Engineering' },
    { id: 'lbrown', name: 'Lisa Brown', department: 'Information Technology' }
  ];

  function toggleAppointmentForm() {
    showAppointmentForm = !showAppointmentForm;
    if (showAppointmentForm) {
      // Set default date to next business day
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      // Format date for input field: YYYY-MM-DD
      appointmentDate = tomorrow.toISOString().split('T')[0];
    }
  }

  function handleAppointmentSubmit() {
    const advisor = advisors.find(a => a.id === selectedAdvisor);
    confirmedAdvisorName = advisor ? advisor.name : '';

    console.log('Appointment requested:', { 
      appointmentDate, 
      appointmentPurpose,
      advisor: selectedAdvisor 
    });
    
    showAppointmentForm = false;
    showConfirmation = true;
    
    setTimeout(() => {
      showConfirmation = false;
      confirmedAdvisorName = '';
    }, 3000);

    // Reset form
    appointmentPurpose = '';
    selectedAdvisor = '';
  }

  function handleModuleClick(module) {
    if (!module.isAppointment) {
      showLoadingModal = true;
      
      loadingMessage = `(Our goal was to load data from the API)`;
      
      currentModuleUrl = module.url;
    } 
  }

  function closeLoadingModal() {
    showLoadingModal = false;
  }
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

  .modal-backdrop {
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

  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 300px;
  }

  .loading-modal {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }

  .loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--uc-red);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto 15px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .form-group {
    margin-bottom: 12px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  select, input {
    width: 100%;
    padding: 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }

  .button-group {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .btn {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .btn-primary {
    background-color: var(--uc-red);
    color: white;
  }

  .btn-secondary {
    background-color: #a7a5aa;
    color: white;
  }

  .confirmation-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #4CAF50;
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .confirmation-content {
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap; /* Keeps text on one line */
  }

  .checkmark {
    font-size: 1.2em;
  }

  .advisor-info {
    font-size: 0.8rem;
    color: #666;
    margin-left: 0.5rem;
  }

  .modal h2 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .loading-modal a {
    color: var(--uc-red);
    text-decoration: none;
    cursor: pointer;
  }

  .loading-modal a:hover {
    text-decoration: underline;
  }

  .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 5px 10px;
    color: #666;
    transition: color 0.2s;
  }

  .close-button:hover {
    color: var(--uc-red);
  }
</style>

<div class="modules" style="margin-top: 10px;">
  {#each modules as module}
    {#if module.isAppointment}
      <div class="card" on:click={toggleAppointmentForm} style="cursor: pointer;">
        <img src={module.icon} alt="{module.title} icon" class="icon" />
        <span class="title">{module.title}</span>
      </div>
    {:else}
      <div class="card" on:click={() => handleModuleClick(module)} style="cursor: pointer;">
        <img src={module.icon} alt="{module.title} icon" class="icon" />
        <span class="title">{module.title}</span>
      </div>
    {/if}
  {/each}
</div>

{#if showAppointmentForm}
  <div class="modal-backdrop" on:click={toggleAppointmentForm}>
    <div class="modal" on:click|stopPropagation>
      <h2>Schedule Advisor Meeting</h2>
      <form on:submit|preventDefault={handleAppointmentSubmit}>
        <div class="form-group">
          <label for="advisor">Select Advisor</label>
          <select id="advisor" bind:value={selectedAdvisor} required>
            <option value="">Choose your advisor...</option>
            {#each advisors as advisor}
              <option value={advisor.id}>
                {advisor.name} - {advisor.department}
              </option>
            {/each}
          </select>
        </div>

        <div class="form-group">
          <label for="purpose">Purpose of Meeting</label>
          <select id="purpose" bind:value={appointmentPurpose} required>
            <option value="">Select a purpose...</option>
            <option value="academic-planning">Academic Planning</option>
            <option value="course-registration">Course Registration</option>
            <option value="graduation-check">Graduation Check</option>
            <option value="career-guidance">Career Guidance</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="date">Preferred Date</label>
          <input 
            type="date" 
            id="date" 
            bind:value={appointmentDate}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div class="button-group">
          <button type="button" class="btn btn-secondary" on:click={toggleAppointmentForm}>
            Cancel
          </button>
          <button type="submit" class="btn btn-primary" disabled={!selectedAdvisor}>
            Schedule Meeting
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

{#if showLoadingModal}
  <div class="modal-backdrop">
    <div class="loading-modal">
      <button class="close-button" on:click={closeLoadingModal}>&times;</button>
      <div class="loading-spinner"></div>
      <p>
        <a href={currentModuleUrl} target="_blank" rel="noopener noreferrer">
          {loadingMessage}
        </a>
      </p>
    </div>
  </div>
{/if}

{#if showConfirmation}
  <div class="confirmation-popup">
    <div class="confirmation-content">
      <span class="checkmark">✓</span>
      <span>Appointment scheduled with {confirmedAdvisorName}!</span>
    </div>
  </div>
{/if}
