<script>
    // You can define the balances here or pass them as props if dynamic data is required
    let balances = {
      bigRed: 0.00,
      diningDollars: 0.00,
      mpFlex: 1.01,
      mealPlan: 0.00,
      bonusMeals: 0,
      meals: 0
    };
  </script>
  
  <div class="dining-card">
    <h3 class="card-title">Dining</h3>
    <div class="balances-grid">
      <div class="balance-item">
        <p>Big Red</p>
        <strong>${balances.bigRed.toFixed(2)}</strong>
      </div>
      <div class="balance-item">
        <p>Dining Dollars</p>
        <strong>${balances.diningDollars.toFixed(2)}</strong>
      </div>
      <div class="balance-item">
        <p>MP Flex</p>
        <strong>${balances.mpFlex.toFixed(2)}</strong>
      </div>
      <div class="balance-item">
        <p>Meal Plan</p>
        <strong>${balances.mealPlan.toFixed(2)}</strong>
      </div>
      <div class="balance-item">
        <p>Bonus Meals</p>
        <strong>{balances.bonusMeals}</strong>
      </div>
      <div class="balance-item">
        <p>Meals</p>
        <strong>{balances.meals}</strong>
      </div>
    </div>
  </div>
  
  <style>
    .dining-card {
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      padding: 1.2rem;
      margin-bottom: 1rem;
      background-color: #ffffff;
      border: 2px solid #e00122; /* Bold red outline for dining card */
    }
  
    .card-title {
      color: #e00122;
      font-size: 1.1rem;
      margin: 0;
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
  </style>
  