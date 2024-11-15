<script>
  // Reactive variable to track which map to show
  let currentMap = 'buttons';

  // Map URLs for each campus location and the UC Transloc Shuttle Map
  const mapUrls = {
    uptownWest: "https://www.google.com/maps/d/embed?mid=1TjrgYqympQvIw1yXliRJPGXY2Mg&ehbc=2E312F",
    medical: "https://www.google.com/maps/d/embed?mid=1_kyClUo5j0vqqA7X5VWYATv32Yo&ehbc=2E312F",
    blueAsh: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3090.3971640299587!2d-84.398972!3d39.233855!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1731560286950!5m2!1sen!2sus",
    clermont: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1548.5758102515442!2d-84.195422!3d39.080244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884106bb08402a6d%3A0x9b6c92df0186361c!2sUC%20Clermont%20College!5e0!3m2!1sen!2sus!4v1731560184238!5m2!1sen!2sus",
    transloc: "https://uc.transloc.com/routes",
  };

  // Function to show a selected map
  function showMap(map) {
    currentMap = map;
  }
</script>

<style>
  .map-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 90vh;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    border-radius: 8px;
  }

  .map-wrapper {
    width: 100%;
    height: calc(100% - 60px); /* Reserve space for button */
    position: relative;
    margin-bottom: 15px; /* Add space between map and button */
  }

  .map-iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    position: relative;
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


  .back-button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    color: #fff;
    background-color: #555;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    z-index: 2;
  }

  .back-button:hover {
    background-color: #444;
    transform: scale(1.05);
  }
</style>

<div class="map-container">
  {#if currentMap !== 'buttons'}
    <div class="map-wrapper">
      <iframe
        class="map-iframe"
        src={mapUrls[currentMap]}
        title="UC Campus Map or UC Transloc"
      ></iframe>
    </div>
    <button class="back-button" on:click={() => showMap('buttons')}>
      Back
    </button>
  {:else}
    <div class="map-buttons">
      <button class="map-button" on:click={() => showMap('uptownWest')}>
        Uptown West Campus Map
      </button>
      <button class="map-button" on:click={() => showMap('medical')}>
        Uptown East/Medical Campus Map
      </button>
      <button class="map-button" on:click={() => showMap('blueAsh')}>
        UC Blue Ash Campus Map
      </button>
      <button class="map-button" on:click={() => showMap('clermont')}>
        UC Clermont Campus Map
      </button>
      <button class="map-button" on:click={() => showMap('transloc')}>
        UC Transloc Shuttle Map
      </button>
    </div>
  {/if}
</div>
