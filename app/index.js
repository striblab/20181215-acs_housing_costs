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

// import ScrollyGraphic from './scroller.js';

// (function(){
//     let s = new ScrollyGraphic();
//     s.init();
// })();

// Dependencies
// import Chart from './chart.js';

// const chart = new Chart('#chart');

// $.urlParam = function(name) {
//     var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
//     if (results != null) {
//         return results[1] || 0;
//     } else {
//         return null;
//     }
// }

// var selected = $.urlParam('chart');

// if (selected != null) {
//     $(".slide").hide();
//     $("#" + selected).show();
// }
// if (selected == "all") {
//     $(".slide").show();
// }

// chart.render();

import ScrollyGraphic from './scroller.js';

(function(){
    let s = new ScrollyGraphic();
    s.init();
})();

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

var dzoom = 8;
var mzoom = 8;
var centerpoint = [-93.29089, 45.01476];

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.264313, 44.973269], 
    // center: [-93.29089, 45.01476], 
    zoom: dzoom,
    minZoom: 10
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
map.doubleClickZoom.disable();


map.on('load', function() {
    
   //AREAS
//    var createGeoJSONCircle = function(center, radiusInKm, points) {
//     if (!points) points = 64;

//     var coords = {
//         latitude: center[1],
//         longitude: center[0]
//     };

//     var km = radiusInKm;

//     var ret = [];
//     var distanceX = km / (111.320 * Math.cos(coords.latitude * Math.PI / 180));
//     var distanceY = km / 110.574;

//     var theta, x, y;
//     for (var i = 0; i < points; i++) {
//         theta = (i / points) * (2 * Math.PI);
//         x = distanceX * Math.cos(theta);
//         y = distanceY * Math.sin(theta);

//         ret.push([coords.longitude + x, coords.latitude + y]);
//     }
//     ret.push(ret[0]);

//     return {
//         "type": "geojson",
//         "data": {
//             "type": "FeatureCollection",
//             "features": [{
//                 "type": "Feature",
//                 "geometry": {
//                     "type": "Polygon",
//                     "coordinates": [ret]
//                 }
//             }]
//         }
//     };
// };

// for (var i = 0; i < locations.length; i++) {
//   if (locations[i].type != "stripclub" && locations[i].type != "sexshop" && locations[i].type != "club" && locations[i].type != "childcare" && locations[i].hide != "y") {
//       map.addSource("polygon" + i, createGeoJSONCircle([locations[i].longitude, locations[i].latitude], 0.804672));

//       map.addLayer({
//           "id": "polygon-layer" + i,
//           "type": "fill",
//           "source": "polygon" + i,
//           "layout": {},
//           "paint": {
//               "fill-color": "#aaaaaa",
//               "fill-opacity": 1
//           }
//       }, 'road-street');
//   }
// }

// map.addSource('locationmarks', {
//     type: 'geojson',
//     data: './shapefiles/locations.geojson'
//   });
 
//           map.addLayer({
//                    "id": "locations-layer",
//                    "type": "circle",
//                    "source": "locationmarks",
//                    "paint": {
//                       "circle-radius": 3,
//                       "circle-color": '#000000',
//                       "circle-opacity": 1
//                    }
//          }, 'place-neighbourhood');

//CITY
// map.addSource('mpls', {
//     type: 'geojson',
//     data: './shapefiles/minneapolis_nb.json'
//   });
 
//    map.addLayer({
//         'id': 'mpls-layer',
//         'interactive': true,
//         'source': 'mpls',
//         'layout': {},
//         'type': 'fill',
//              'paint': {
//             'fill-antialias' : true,
//             'fill-opacity': 1,
//             'fill-color': 'rgba(255, 255, 255, 0)',
//             'fill-outline-color': '#888888'
//       }
//     }, 'road-primary');

// function addGrid() {
// //NEIGHBORHOODS
//  map.addSource('nb', {
//    type: 'geojson',
//    data: './shapefiles/hex.json'
//  });

//   map.addLayer({
//        'id': 'nb-layer',
//        'interactive': true,
//        'source': 'nb',
//        'layout': {},
//        'type': 'fill',
//             'paint': {
//            'fill-antialias' : true,
//            'fill-opacity': 0.7,
//            'fill-color': {
//             "property": "NUMPOINTS",
//             "stops": [
//               [0, "rgba(255, 255, 255, 0)"],
//               [1, "rgba(255, 245, 240, 0.5)"],
//               [20, "#FFB89D"],
//               [40, "#E28765"],
//               [60, "#BF5F3C"],
//               [80, "#9F421F"],
//               [100, "#752304"]
//            ]
//         },
//            'fill-outline-color': {
//             "property": "NUMPOINTS",
//             "stops": [
//               [0, "rgba(255, 255, 255, 0)"],
//               [1, "#888888"],
//               [20, "#888888"],
//               [40, "#888888"],
//               [60, "#888888"],
//               [80, "#888888"],
//               [100, "#888888"]
//            ]
//         }
//      }
//    }, 'road-street');
// }

//     map.addSource('shootings', {
//       type: 'geojson',
//       data: './shapefiles/incidents.json'
//     });

    // map.addLayer({
    //   "id": "shootings-layer-confirmed",
    //   "type": "circle",
    //   "source": "shootings",
    //   "paint": {
    //     "circle-radius": 1.2,
    //     "circle-color": '#E07242',
    //     "circle-opacity": 1
    //   },
    // }, 'place-neighbourhood');

// var i = 0, howManyTimes = 3695;
// function loadDots() {

//     map.addLayer({
//         "id": "shots-layer-" + i,
//         "type": "circle",
//         "source": "shootings",
//         "paint": {
//            "circle-radius": 2,
//            "circle-color": '#BF603C',
//            "circle-opacity": 0.7
//         },
//         "filter": ["<", "index", i]
// }, 'place-neighbourhood');

//     i = i + 50;
//     if( i < howManyTimes ){
//         setTimeout( loadDots, 5 );
//     } else {
        
//     }
// }
// loadDots();

// var j = 0;

// function hideDots(){
//     j = j + 50;
//     if( j < howManyTimes ){
//     map.setLayoutProperty('shots-layer-' + j, 'visibility', 'none');
//     hideDots();
//     } else {
//         map.flyTo({
//             center: centerpoint,  
//             zoom: 12,
//             minZoom: 10
//           });     
//     }
// }

// setTimeout( addGrid, 5000 );
// setTimeout( hideDots, 8000 );



});

$(document).ready(function() {
  if ($("#wrapper").width() < 600) {
      map.flyTo({
        center: [-93.264313, 44.973269], 
        zoom: mzoom,
        minZoom: 10
      });
  } else {
      map.flyTo({
        center: [-93.264313, 44.973269],  
        zoom: dzoom,
        minZoom: 10
      });
  }
  $(window).resize(function() {
      if ($("#wrapper").width() < 600) {
          map.flyTo({
            center: [-93.264313, 44.973269],  
            zoom: mzoom,
            minZoom: 10
          });
      } else {
          map.flyTo({
            center: [-93.264313, 44.973269],  
            zoom: dzoom,
            minZoom: 10
          });
      }
  });
});