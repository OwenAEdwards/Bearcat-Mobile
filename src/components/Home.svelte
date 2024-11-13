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
</script>

<style>
  .dashboard {
    font-family: Arial, sans-serif;
    color: var(--uc-black);
    padding: 1rem;
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
</style>

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