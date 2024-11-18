<script>

  let currentDate = new Date();
  let selectedDate = null;
  let showEvents = false;
  let showNewEventModal = false;


  // Sample events data - replace with your actual events data
  const events = [
    {
      date: '2024-03-20',
      events: [
        { time: '09:00', title: 'CS Meeting', location: 'Baldwin 761' },
        { time: '11:30', title: 'Study Group', location: 'Library Room 204' },
        { time: '14:00', title: 'Lab Session', location: 'Engineering Building 305' }
      ]
    },
    {
      date: '2024-03-21',
      events: [
        { time: '10:00', title: 'Advisor Meeting', location: 'French Hall 219' },
        { time: '13:00', title: 'Group Project', location: 'CARE/Crawley Building' }
      ]
    },
    {
      date: '2024-11-04',
      events: [
        { time: '09:00', title: 'CS2021 Lecture', location: 'Baldwin 755' },
        { time: '11:00', title: 'Academic Advising', location: 'French Hall 211' },
        { time: '13:30', title: 'Study Group - Algorithms', location: 'Langsam Library 401' },
        { time: '15:00', title: 'CS Club Meeting', location: 'Rhodes 850' },
        { time: '16:30', title: 'Research Lab', location: 'Engineering Research Center 516' },
        { time: '18:00', title: 'Dinner with Study Group', location: 'CenterCourt' }
      ]
    }
  ];

  // New event form fields
  let newEvent = {
    date: "",
    time: "",
    title: "",
    location: ""
  };

  function addEvent() {
    if (!newEvent.date || !newEvent.time || !newEvent.title || !newEvent.location) {
      alert("Please fill out all fields.");
      return;
    }

    const eventDate = events.find(event => event.date === newEvent.date);

    if (eventDate) {
      eventDate.events.push({
        time: newEvent.time,
        title: newEvent.title,
        location: newEvent.location
      });
    } else {
      events.push({
        date: newEvent.date,
        events: [
          {
            time: newEvent.time,
            title: newEvent.title,
            location: newEvent.location
          }
        ]
      });
    }

    newEvent = { date: "", time: "", title: "", location: "" };
    showNewEventModal = false;
    calendarDays = generateCalendarDays(); // Refresh the calendar
  }

  function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  // Reactive variable for calendar days
  let calendarDays = [];
  $: calendarDays = generateCalendarDays();

  function generateCalendarDays() {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: '', empty: true });
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const hasEvents = events.some(event => event.date === dateString);
      days.push({ 
        day: i, 
        empty: false, 
        dateString,
        hasEvents 
      });
    }

    return days;
  }

  function previousMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    calendarDays = generateCalendarDays(); // Re-generate days for the new month
  }

  function nextMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    calendarDays = generateCalendarDays(); // Re-generate days for the new month
  }

  function goToToday() {
    currentDate = new Date();
    const today = new Date();
    const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    calendarDays = generateCalendarDays();
    selectDate(dateString);
  }

  function selectDate(dateString) {
    selectedDate = dateString;
    showEvents = true;
  }

  function getEventsForDate(dateString) {
    const dateEvents = events.find(event => event.date === dateString);
    return dateEvents ? dateEvents.events : [];
  }

  function closeEvents() {
    showEvents = false;
    selectedDate = null;
  }

  function formatSelectedDate(dateString) {
    const [year, month, day] = dateString.split('-').map(num => parseInt(num));
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }
</script>

<style>
  .calendar-container {
    padding: 1rem;
    max-width: 100%;
    background: white;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .month-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--uc-red);
  }

  .today-button {
    padding: 0.5rem 1rem;
    background: var(--uc-red);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .today-button:hover {
    background: #a00;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    background: #f0f0f0;
    padding: 2px;
    border-radius: 4px;
  }

  .weekday {
    text-align: center;
    padding: 0.5rem;
    font-weight: bold;
    background: white;
  }

  .day {
    aspect-ratio: 1;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    padding: 0.5rem;
  }

  .day:hover {
    background: #f8f8f8;
  }

  .empty {
    background: #f5f5f5;
    cursor: default;
  }

  .has-events::after {
    content: '';
    position: absolute;
    bottom: 4px;
    width: 4px;
    height: 4px;
    background: var(--uc-red);
    border-radius: 50%;
  }

  .events-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
    max-height: 60%;
    overflow-y: auto;
    z-index: 100;
    animation: slideUp 0.3s ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .events-header {
    position: sticky;
    top: 0;
    background: white;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }

  .events-header h3 {
    font-size: 1rem;
    margin: 0;
    color: var(--uc-red);
  }

  .events-list {
    padding: 0;
  }

  .event-item {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eee;
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 1rem;
    align-items: center;
  }

  .event-item:last-child {
    border-bottom: none;
  }

  .event-time {
    font-weight: 600;
    color: #333;
    font-size: 0.9rem;
  }

  .event-details {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .event-title {
    font-weight: 500;
    color: #333;
  }

  .event-location {
    font-size: 0.85rem;
    color: #666;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: #666;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .close-button:hover {
    background: #f5f5f5;
  }

  .no-events {
    padding: 1.5rem;
    text-align: center;
    color: #666;
    font-size: 0.9rem;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .modal h2 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .form-group {
    margin-bottom: 12px;
    width: 100%; /* Ensure it spans the container width */
    box-sizing: border-box; /* Include padding and borders in the total width */
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%; /* Make the input fill the container width */
    max-width: 100%; /* Prevent overflow by capping the width */
    padding: 6px; /* Adjust padding for consistency */
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box; /* Ensure padding and borders are included in the total width */
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
    background-color: #6c757d;
    color: white;
  }

  .btn-new-event {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--uc-red); /* Replace with your primary color */
    color: white;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .btn-new-event:active {
    background-color: #b71c1c; /* Even darker red for active click */
    transform: scale(0.98);
  }

  .btn-new-event:focus {
    outline: 2px solid #f44336; /* Focus ring for accessibility */
    outline-offset: 2px;
  }
  
</style>

<div class="calendar-container">
  <div class="calendar-header">
    <div class="month-nav">
      <button class="nav-button" on:click={previousMonth}>&lt;</button>
      <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <button class="nav-button" on:click={nextMonth}>&gt;</button>
    </div>
    <div class="button-group">
      <button class="today-button" on:click={goToToday}>Today</button>
      <button class="btn-new-event" on:click={() => (showNewEventModal = true)}>New Event</button>
    </div>
  </div>

  <div class="calendar-grid">
    {#each ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as day}
      <div class="weekday">{day}</div>
    {/each}
  
    {#each calendarDays as { day, empty, dateString, hasEvents }}
      <div 
        class="day {empty ? 'empty' : ''} {hasEvents ? 'has-events' : ''}"
        on:click={() => !empty && selectDate(dateString)}
      >
        {day}
      </div>
    {/each}
  </div>  
</div>

{#if showNewEventModal}
  <div class="modal-backdrop" on:click={() => (showNewEventModal = false)}>
    <div class="modal" on:click|stopPropagation>
      <h2>Add New Event</h2>
      <form on:submit|preventDefault={addEvent}>
        <div class="form-group">
          <label for="event-date">Event Date</label>
          <input
            type="date"
            id="event-date"
            bind:value={newEvent.date}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div class="form-group">
          <label for="event-time">Event Time</label>
          <input type="time" id="event-time" bind:value={newEvent.time} required />
        </div>

        <div class="form-group">
          <label for="event-title">Event Title</label>
          <input type="text" id="event-title" bind:value={newEvent.title} required />
        </div>

        <div class="form-group">
          <label for="event-location">Event Location</label>
          <input type="text" id="event-location" bind:value={newEvent.location} required />
        </div>

        <div class="button-group">
          <button type="button" class="btn btn-secondary" on:click={() => (showNewEventModal = false)}>
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Add Event</button>
        </div>
      </form>
    </div>
  </div>
{/if}


{#if showEvents}
  <div class="events-container">
    <div class="events-header">
      <h3>{formatSelectedDate(selectedDate)}</h3>
      <button class="close-button" on:click={closeEvents}>&times;</button>
    </div>
    <div class="events-list">
      {#if getEventsForDate(selectedDate).length > 0}
        {#each getEventsForDate(selectedDate) as event}
          <div class="event-item">
            <div class="event-time">{event.time}</div>
            <div class="event-details">
              <div class="event-title">{event.title}</div>
              <div class="event-location">{event.location}</div>
            </div>
          </div>
        {/each}
      {:else}
        <div class="no-events">No events scheduled for this day</div>
      {/if}
    </div>
  </div>
{/if}
