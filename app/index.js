/**
 * Main JS file for project.
 */

// Define globals that are added through the js.globals in
// the config.json file, here, mostly so linting won't get triggered
// and its a good queue of what is available:
// /* global _ */

// Dependencies
import utils from './shared/utils.js';

// Mark page with note about development or staging
utils.environmentNoting();



// Adding dependencies
// ---------------------------------
// Import local ES6 or CommonJS modules like this:
// import utilsFn from './shared/utils.js';
//
// Or import libraries installed with npm like this:
// import module from 'module';

// Adding Svelte templates in the client
// ---------------------------------
// We can bring in the same Svelte templates that we use
// to render the HTML into the client for interactivity.  The key
// part is that we need to have similar data.
//
// First, import the template.  This is the main one, and will
// include any other templates used in the project.
// import Content from '../templates/_index-content.svelte.html';
//
// Get the data parts that are needed.  There are two ways to do this.
// If you are using the buildData function to get data, then ?
//
// 1. For smaller datasets, just import them like other files.
// import content from '../assets/data/content.json';
//
// 2. For larger data points, utilize window.fetch.
// let content = await (await window.fetch('../assets/data/content.json')).json();
//
// Once you have your data, use it like a Svelte component:
//
// const app = new Content({
//   target: document.querySelector('.article-lcd-body-content'),
//   data: {
//     content
//   }
// });


/**
 * Main JS file for project.
 */

// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';


import Chart from './chart.js';
import Chart2 from './barchart.js';
import burden from '../sources/burdened.json';
import mpls from '../sources/minneapolis.json';
import stp from '../sources/stpaul.json';

const chart1 = new Chart('#chart');
const chart2 = new Chart2('#bars');

chart1.render();
chart2.render();

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

var dzoom = 8;
var mzoom = 8;

var centerpoint = [-93.264313, 44.973269];

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: centerpoint, 
    zoom: dzoom,
    minZoom: mzoom
});

//north minneapolis suburbs
var centerpoint1 = [-93.350517, 45.119514];

var map1 = new mapboxgl.Map({
  container: 'map1', // container id
  style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
  center: centerpoint1, 
  zoom: 9.5,
  minZoom: 9.5
});

//central minneapolis
var centerpoint2 = [-93.259557, 44.955509];

var map2 = new mapboxgl.Map({
  container: 'map2', // container id
  style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
  center: centerpoint2, 
  zoom: 10.1,
  minZoom: 10.1
});

//east st. paul
var centerpoint3 = [-93.081341, 44.950941];

var map3 = new mapboxgl.Map({
  container: 'map3', // container id
  style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
  center: centerpoint3, 
  zoom: 9.5,
  minZoom: 9.5
});

function genMap(map,nav,centerpoint,target) {

if (nav) {
  map.addControl(new mapboxgl.NavigationControl());
}

map.dragRotate.disable();
map.touchZoomRotate.disableRotation();
map.scrollZoom.disable();
// map.doubleClickZoom.disable();


map.on('load', function() {

 map.addSource('metro', {
   type: 'geojson',
   data: burden
 });

  map.addLayer({
       'id': 'metro_no',
       'interactive': true,
       'source': 'metro',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.7,
           'fill-color': '#AFA8C9',
           'fill-outline-color': '#555555'
     },
     'filter': ['==', 'renter_c_1', 0]
   }, 'road-primary');

   map.addLayer({
    'id': 'metro_yes',
    'interactive': true,
    'source': 'metro',
    'layout': {},
    'type': 'fill',
         'paint': {
        'fill-antialias' : true,
        'fill-opacity': 0.7,
        'fill-color': '#E07242',
        'fill-outline-color': '#555555'
  },
  'filter': ['==', 'renter_c_1', 1]
}, 'road-primary');

map.addLayer({
    'id': 'metro_x',
    'interactive': true,
    'source': 'metro',
    'layout': {},
    'type': 'fill',
         'paint': {
        'fill-antialias' : true,
        'fill-opacity': 0.7,
        'fill-color': '#DDDDDD',
        'fill-outline-color': '#555555'
  },
  'filter': ['==', 'renter_c_1', 2]
}, 'road-primary');

if (nav) {
map.addSource('mpls', {
  type: 'geojson',
  data: mpls
});

map.addLayer({
  'id': 'mpls',
  'interactive': true,
  'source': 'mpls',
  'layout': {},
  'type': 'line',
    'paint': {
      'line-color': 'rgba(0,0,0,1)',
      'line-width': 1.2
    }
}, 'place-town');


map.addSource('stp', {
  type: 'geojson',
  data: stp
});

map.addLayer({
  'id': 'stp',
  'interactive': true,
  'source': 'stp',
  'layout': {},
  'type': 'line',
    'paint': {
      'line-color': 'rgba(0,0,0,1)',
      'line-width': 1.5
    }
}, 'place-town');
} else {

  map.addLayer({
    'id': 'metro_3',
    'interactive': true,
    'source': 'metro',
    'layout': {},
    'type': 'line',
    'paint': {
      'line-color': 'rgba(0,0,0,1)',
      'line-width': 1.7
    },
  'filter': ['==', 'target', target]
  }, 'place-town');

}

});


$(document).ready(function() {
  if ($("#wrapper").width() < 600) {
      map.flyTo({
        center: centerpoint, 
        zoom: mzoom,
        minZoom: mzoom
      });
  } 
  $(window).resize(function() {
      if ($("#wrapper").width() < 600) {
          map.flyTo({
            center: centerpoint,  
            zoom: mzoom,
            minZoom: mzoom
          });
      } else {
          map.flyTo({
            center: centerpoint,  
            zoom: dzoom,
            minZoom: mzoom
          });
      }
  });
});

}

genMap(map,true,centerpoint,0);
genMap(map1,false,centerpoint1,1);
genMap(map2,false,centerpoint2,2);
genMap(map3,false,centerpoint3,3);