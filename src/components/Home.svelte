<script>
  import { getTodayEvents } from '../stores/eventStore';
  
  let date = new Date();
  let todayEvents;
  $: todayEvents = getTodayEvents();
  let diningBalances = {
    mealSwipes: 100,
    guestSwipes: 100,
    bearcatBucks: 100.0,
  };

  let restaurants = [
    {
      name: "Starbucks",
      distance: "0.5 miles",
      logo: "starbucks.png",
    },
    {
      name: "Cincy Grill",
      distance: "1 mile",
      logo: "newcincygrill.png",
    },
    {
      name: "Chick-fil-A",
      distance: "1 mile",
      logo: "chickfila.jpeg",
    },
  ];
</script>

<style>
  :root {
    --uc-black: #000000;
    --uc-white: #ffffff;
    --uc-red: #e00122;
    --uc-gray: #f3f3f3;
    --shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .dashboard {
    height: calc(100%px);
    overflow-y: auto;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .date-card {
    margin-top: 0;
    text-align: center;
    padding: 1rem;
    background: linear-gradient(135deg, var(--uc-red), var(--uc-black));
    color: var(--uc-white);
    border-radius: 8px;
  }

  .date-card h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  .balances-card {
    padding: 1.5rem;
    background-color: var(--uc-white);
    border-radius: 8px;
    box-shadow: var(--shadow);
  }

  .balances-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .balance-item {
    text-align: center;
    padding: 0.5rem;
    position: relative;
  }

  .balance-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -0.75rem;
    top: 10%;
    height: 80%;
    width: 1px;
    background-color: #e0e0e0;
  }

  .balance-item p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .balance-item strong {
    display: block;
    font-size: 1.3rem;
    color: var(--uc-red);
    margin-top: 0.25rem;
  }

  .restaurant-images {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e0e0e0;
  }

  .restaurant-item {
    text-align: center;
  }

  .restaurant-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: var(--shadow);
    object-fit: cover;
    margin-bottom: 0.25rem;
  }

  .restaurant-distance {
    font-size: 0.8rem;
    color: #666;
  }

  .events-list {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
  
  .events-list p {
    margin: 0.25rem 0;
  }

</style>

<div class="dashboard">
  <!-- Mini Calendar -->
  <div class="date-card">
    <h2>
      {date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })}
    </h2>
    {#if todayEvents.length > 0}
      <div class="events-list">
        {#each todayEvents as event}
          <p>
            {new Date(`2000-01-01T${event.time}`).toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})}: {event.title} at {event.location}
          </p>
        {/each}
      </div>
    {:else}
      <p>No more events today</p>
    {/if}
  </div>

  <!-- Combined Balances and Restaurants Card -->
  <div class="balances-card">
    <h3 style="text-align: center; margin: 0;">Dining Balances & Restaurants</h3>
    <div class="balances-grid">
      <div class="balance-item">
        <p>Meal Swipes</p>
        <strong>{diningBalances.mealSwipes}</strong>
      </div>
      <div class="balance-item">
        <p>Guest Swipes</p>
        <strong>{diningBalances.guestSwipes}</strong>
      </div>
      <div class="balance-item">
        <p>Bearcat Bucks</p>
        <strong>${diningBalances.bearcatBucks.toFixed(2)}</strong>
      </div>
    </div>
    <div class="restaurant-images">
      {#each restaurants as restaurant}
        <div class="restaurant-item">
          <img src={restaurant.logo} alt="{restaurant.name}" class="restaurant-logo" />
          <div class="restaurant-distance">{restaurant.distance}</div>
        </div>
      {/each}
    </div>
  </div>
</div>
