<script>
  let currentMap = null;

  // Paths to SVG map files (adjust paths as needed)
  const maps = {
    uptownWest: '../src/assets/uc-west-campus-map.svg',
    uptownEast: '../src/assets/uc-east-campus-map.svg',
    blueAsh: '../src/assets/uc-blue-ash-campus-map.svg',
    clermont: '../src/assets/uc-clermont-campus-map.svg'
  };

  function showMap(map) {
    currentMap = maps[map];
  }
</script>

<style>
  .map-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .map-image {
    width: 95%; /* Scale down SVG to fit better within the phone screen */
    height: auto;
    max-height: 80%; /* Ensure it doesn’t stretch vertically */
    object-fit: contain;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  .map-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  .map-button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    color: var(--uc-white);
    background-color: var(--uc-red);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  .map-button:hover {
    background-color: #b0001a; /* Darkened version of UC Red */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
</style>

<div class="map-container">
  {#if currentMap}
    <!-- Display the selected map SVG -->
    <img src={currentMap} alt="Campus Map" class="map-image" />
  {:else}
    <!-- Display map buttons -->
    <div class="map-buttons">
      <button class="map-button" on:click={() => showMap('uptownWest')}>
        Uptown West Campus Map
      </button>
      <button class="map-button" on:click={() => showMap('uptownEast')}>
        Uptown East/Medical Campus Map
      </button>
      <button class="map-button" on:click={() => showMap('blueAsh')}>
        UC Blue Ash Campus Map
      </button>
      <button class="map-button" on:click={() => showMap('clermont')}>
        UC Clermont Campus Map
      </button>
    </div>
  {/if}
</div>
