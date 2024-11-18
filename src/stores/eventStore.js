import { writable } from 'svelte/store';

// Initial events data
const initialEvents = [
  {
    date: '2024-11-04',
    events: [
      { time: '09:00', title: 'CS Meeting', location: 'Baldwin 761' },
      { time: '11:30', title: 'Study Group', location: 'Library Room 204' },
      { time: '14:00', title: 'Lab Session', location: 'Engineering Building 305' }
    ]
  },
  // ... other initial events
];

export const events = writable(initialEvents);

// Helper function to get today's events
export function getTodayEvents() {
  let currentEvents = [];
  events.subscribe(value => {
    currentEvents = value;
  })();
  
  const today = new Date();
  const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
  const todayEvents = currentEvents.find(event => event.date === dateString);
  return todayEvents ? todayEvents.events : [];
} 