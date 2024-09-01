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
  "red1": {
    "x": 1,
    "y": 1,
    "size": 0.5,
    "color": "red",
    "shape": "circle"
  },
  "red2": {
    "x": 3,
    "y": 1,
    "size": 0.5,
    "color": "red",
    "shape": "circle"
  },
  "red3": {
    "x": 5,
    "y": 1,
    "size": 0.5,
    "color": "red",
    "shape": "circle"
  },
  "yellow1": {
    "x": 2,
    "y": 3,
    "size": 0.75,
    "color": "yellow",
    "shape": "circle"
  },
  "yellow2": {
    "x": 4,
    "y": 3,
    "size": 0.75,
    "color": "yellow",
    "shape": "circle"
  },
  "green": {
    "x": 3,
    "y": 5.25,
    "size": 1,
    "color": "green",
    "shape": "circle"
  },
  "brown": {
    "x": 4,
    "y": 7.5,
    "size": 1,
    "color": "brown",
    "shape": "circle"
  },
  "blue": {
    "x": 2,
    "y": 9.25,
    "size": 1,
    "color": "blue",
    "shape": "circle"
  },
  "white": {
    "x": 4,
    "y": 11.5,
    "size": 1,
    "color": "white",
    "shape": "circle"
  },
  "trench": {
    "xmin": 1.2,
    "xmax": 4.8,
    "ymin": 13.5,
    "ymax": 14,
    "color": "gray",
    "shape": "square"
  }
};

export { golfClubs, targets };
