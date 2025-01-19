function initMap() {
  let center = [17.204888, 50.230121];
  maptilersdk.config.apiKey = 'G2BcJ3X6QCNAYylpOlNW';
  let style = '14b57dde-0f1d-4755-a8f5-e85b7f9e2fc6';

  const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: style,
    center: center, 
    zoom: 12,
  });

  const marker = new maptilersdk.Marker({
    color: '#1683A6'
  })
  .setLngLat(center)
  .addTo(map);
}
