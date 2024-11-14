<script>
  let currentMap = 'buttons'; // Start with showing buttons

  // Function to switch views and set the map source
  function showMap(map) {
    currentMap = map;
  }

  // Map URLs for each campus location
  const mapUrls = {
    uptownWest: "https://www.google.com/maps/d/embed?mid=1TjrgYqympQvIw1yXliRJPGXY2Mg&ehbc=2E312F",
    uptownEast: "https://www.google.com/maps/d/embed?mid=YOUR_UPTOWN_EAST_MAP_ID",
    blueAsh: "https://www.google.com/maps/d/embed?mid=YOUR_BLUE_ASH_MAP_ID",
    clermont: "https://www.google.com/maps/d/embed?mid=YOUR_CLERMONT_MAP_ID",
  };
</script>

<style>
  .map-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 80vh;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    border-radius: 8px;
  }

  .map-iframe {
    width: 100%;
    height: calc(100% + 65px);
    border: none;
    border-radius: 8px;
    position: absolute;
    top: -65px;
  }

  .map-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  .map-button, .back-button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    color: #fff;
    background-color: #cc0000;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  .map-button:hover, .back-button:hover {
    background-color: #b0001a;
    transform: scale(1.05);
  }

  .back-button {
    margin-top: 1rem;
    background-color: #555;
  }
</style>

<div class="map-container">
  {#if currentMap !== 'buttons'}
    <!-- Map iframe based on selected map -->
    <iframe
      class="map-iframe"
      src={mapUrls[currentMap]}
      title="UC Campus Map"
    ></iframe>
    <!-- Back button -->
    <button class="back-button" on:click={() => showMap('buttons')}>
      Back
    </button>
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
