const plantData = [
  {
    "id": 1,
    "name": "Succulent",
    "water": "2-3 weeks",
    "light": "6 hours direct sunlight",
    "warning": {
      "title": "",
      "message": ""
    },
    "seasonalInsight": "With drier conditions for the next two weeks, increase watering frequency to 2-3 times per week",
    "description": "Succulents are water-retaining plants adapted to arid climates or soil conditions. They store water in their leaves, stems, and roots, making them well-suited for environments with limited water availability. Popular for their unique shapes and easy care.",
    "image": "images/succulent.png",
    "neighborComments": [
      { name: "Ales", comment: "Great for beginners growing here in Arlington." },
      { name: "Bob", comment: "I've been growing every year and I love it." }
    ]
  },
  {
    "id": 2,
    "name": "Lantana",
    "water": "2-3 days",
    "light": "6-8 hours direct sunlight",
    "warning": {
      "type": "heat-warning",
      "title": "Cover this plant",
      "message": "Above 85°F. Cover with shade cloth to prevent heat stress."
    },
    "seasonalInsight": "With windy conditions next week, consider staking taller Black Eyed Susans to prevent bending.",
    "description": "Colorful perennial shrub, 1-2 meters height. Loved for vibrant flowers attracting butterflies.",
    "image": "images/lantana.png",
    "neighborComments": [
      { name: "Alice", comment: "Colorful flowers attract butterflies." },
      { name: "Tom", comment: "Needs some protection in extreme heat." }
    ]
  },
  {
    "id": 3,
    "name": "Dwarf Yaupon",
    "water": "Regular",
    "light": "Full sun to partial shade",
    "warning": {
      "title": "",
      "message": ""
    },
    "description": "Compact evergreen shrub with small, glossy leaves. Drought-tolerant and suitable for landscaping.",
    "image": "images/dwarfYaupon.png",
    "neighborComments": [
      { name: "Charlie", comment: "Great for creating a low-maintenance landscape." },
      { name: "Diana", comment: "Survived the summer heat well in my garden." }
    ]
  },
  {
    "id": 4,
    "name": "Black-Eyed Susan",
    "water": "Regular",
    "light": "Full sun",
    "warning": {
      "title": "",
      "message": ""
    },
    "description": "Perennial with striking yellow flowers and dark centers. Attracts pollinators and adds vibrant color to gardens.",
    "image": "images/BEyedSusan.png",
    "neighborComments": [
      { name: "Frank", comment: "Adds vibrant color to the garden." },
      { name: "Grace", comment: "Attracts pollinators." }
    ]
  },
  {
    "id": 5,
    "name": "Cilantro",
    "water": "Regular",
    "light": "Partial to full sun",
    "warning": {
      "title": "",
      "message": ""
    },
    "description": "Herb with fragrant leaves commonly used in cooking. Prefers well-drained soil.",
    "image": "images/cilantro.png",
    "neighborComments": [
      { name: "Eva", comment: "Great for cooking!" },
      { name: "John", comment: "Thrives in well-drained soil." }
    ]
  },
  {
    "id": 6,
    "name": "Citronella Grass",
    "water": "Regular",
    "light": "Full sun",
    "warning": {
      "title": "",
      "message": ""
    },
    "description": "Grass with a strong citrus scent. Often used for its mosquito-repelling properties.",
    "image": "images/citronellaGrass.png",
    "neighborComments": [
      { name: "Mia", comment: "Effective mosquito repellent." },
      { name: "Oliver", comment: "Grows well in full sun." }
    ]
  },
  {
    "id": 7,
    "name": "Citrus Tree",
    "water": "Regular",
    "light": "Full sun",
    "warning": {
      "type": "frost-warning",
      "title": "Protect from frost",
      "message": "Sensitive to frost. Protect during cold temperatures."
    },
    "description": "Fruit-bearing tree producing citrus fruits like oranges, lemons, or limes.",
    "image": "images/citrusTree.png",
    "neighborComments": [
      { name: "Pamela", comment: "Delicious fruits every season!" },
      { name: "Quincy", comment: "Needs protection during frosty nights." }
    ]
  },
];

export default plantData;
