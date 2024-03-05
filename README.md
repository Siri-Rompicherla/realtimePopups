incorporate popups on a Leaflet map in a React TypeScript application using JSON as input for real-time data

We import the necessary components from react-leaflet.
We define a functional component RealtimeMap.
Inside the component, we use the useState hook to manage the real-time data (data).
We use the useEffect hook to simulate real-time data updates every 5 seconds. The interval function generates random data and updates the data state.
We render a MapContainer with a tile layer from OpenStreetMap and a Marker with a Popup that displays the real-time data.
You can replace the random data generation with actual data fetching logic from an API or any other data source.
