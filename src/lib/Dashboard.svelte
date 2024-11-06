<script>
  import Card from './Card.svelte';
  import Dining from './Dining.svelte';
</script>

<div class="dashboard">
  <!-- Date Card -->
  <Card>
    <h2 class="date-title">Wednesday, November 6</h2>
    <p>No more events today</p>
  </Card>

  <!-- Dining Information -->
  <Dining />
</div>

<style>
  .dashboard {
    overflow-y: auto;
    flex: 1;
    padding: 1rem;
  }

  .date-title {
    font-size: 1.2rem;
    color: #e00122;
    margin: 0;
  }
</style>
