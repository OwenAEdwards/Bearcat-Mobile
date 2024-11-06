<slot />

<style>
  div {
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 1.2rem;
    margin-bottom: 1rem;
    background-color: #ffffff;
    border: 1px solid #ddd; /* Light outline for general cards */
    transition: box-shadow 0.2s ease, transform 0.1s ease;
  }

  div:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
</style>
