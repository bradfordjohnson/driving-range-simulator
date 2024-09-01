const golfClubs = {
  "clubs": {
    "Driver": { "min_yards": 230, "max_yards": 290 },
    "3-Wood": { "min_yards": 210, "max_yards": 240 },
    "5-Wood": { "min_yards": 195, "max_yards": 225 },
    "3-Hybrid": { "min_yards": 180, "max_yards": 200 },
    "4-Hybrid": { "min_yards": 170, "max_yards": 190 },
    "5-Hybrid": { "min_yards": 160, "max_yards": 180 },
    "6-Iron": { "min_yards": 150, "max_yards": 165 },
    "7-Iron": { "min_yards": 140, "max_yards": 155 },
    "8-Iron": { "min_yards": 130, "max_yards": 145 },
    "9-Iron": { "min_yards": 120, "max_yards": 135 },
    "Pitching Wedge": { "min_yards": 110, "max_yards": 125 },
    "Sand Wedge": { "min_yards": 80, "max_yards": 105 },
    "Lob Wedge": { "min_yards": 60, "max_yards": 90 }
  }
};

const targets = {
  "Red 1": {
    "distance": 50,
    "diameter": 15,
    "radius": 7.5,
    "color": "red",
    "shape": "circle"
  },
  "Red 2": {
    "distance": 60,
    "diameter": 15,
    "radius": 7.5,
    "color": "red",
    "shape": "circle"
  },
  "Red 3": {
    "distance": 70,
    "diameter": 15,
    "radius": 7.5,
    "color": "red",
    "shape": "circle"
  },
  "Yellow 1": {
    "distance": 90,
    "diameter": 20,
    "radius": 10,
    "color": "yellow",
    "shape": "circle"
  },
  "Yellow 2": {
    "distance": 100,
    "diameter": 20,
    "radius": 10,
    "color": "yellow",
    "shape": "circle"
  },
  "Green": {
    "distance": 120,
    "diameter": 25,
    "radius": 12.5,
    "color": "green",
    "shape": "circle"
  },
  "Orange": {
    "distance": 150,
    "diameter": 30,
    "radius": 15,
    "color": "orange",
    "shape": "circle"
  },
  "Blue": {
    "distance": 180,
    "diameter": 35,
    "radius": 17.5,
    "color": "blue",
    "shape": "circle"
  },
  "White": {
    "distance": 200,
    "diameter": 40,
    "radius": 20,
    "color": "white",
    "shape": "circle"
  },
  "Trench": {
    "distance": 250,
    "width": 50,
    "height": 10,
    "color": "gray",
    "shape": "rectangle"
  }
};

export { golfClubs, targets };