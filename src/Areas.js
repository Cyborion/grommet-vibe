const defaultAreas = {
    xsmall: [
      { name: "header", start: [0, 0], end: [3, 0] },
      { name: "section-1", start: [0, 1], end: [3, 1] },
      { name: "section-2", start: [0, 2], end: [3, 2] },
      { name: "section-3", start: [0, 3], end: [3, 3] }
    ],
    small: [
      { name: "header", start: [0, 0], end: [3, 0] },
      { name: "section-1", start: [0, 1], end: [1, 1] },
      { name: "section-1", start: [2, 1], end: [3, 1] },
      { name: "section-3", start: [0, 2], end: [3, 2] }
    ],
    medium: [
      { name: "header", start: [0, 0], end: [3, 0] },
      { name: "section-1", start: [0, 1], end: [0, 1] },
      { name: "section-2", start: [1, 1], end: [2, 1] },
      { name: "section-3", start: [3, 1], end: [3, 1] }
    ],
    large: [
      { name: "header", start: [0, 0], end: [3, 0] },
      { name: "section-1", start: [0, 1], end: [0, 1] },
      { name: "section-2", start: [1, 1], end: [2, 1] },
      { name: "section-3", start: [3, 1], end: [3, 1] }
    ]
  };

  const centerBoxAreas = {
    xsmall : [
        { name: "object1", start: [0,0], end: [0,0] },
        { name: "object2", start: [1,0], end: [1,0] },
        { name: "object3", start: [2,0], end: [2,0] },
        { name: "description1", start: [0,1], end: [0,1] },
        { name: "description2", start: [1,1], end: [1,1] },
        { name: "description3", start: [2,1], end: [2,1] },
      ],
    small : [
        { name: "object1", start: [0,0], end: [0,0] },
        { name: "object2", start: [1,0], end: [1,0] },
        { name: "object3", start: [2,0], end: [2,0] },
        { name: "description1", start: [0,1], end: [0,1] },
        { name: "description2", start: [1,1], end: [1,1] },
        { name: "description3", start: [2,1], end: [2,1] },
      ],
      medium : [
        { name: "object1", start: [0,0], end: [0,0] },
        { name: "object2", start: [1,0], end: [1,0] },
        { name: "object3", start: [2,0], end: [2,0] },
        { name: "description1", start: [0,1], end: [0,1] },
        { name: "description2", start: [1,1], end: [1,1] },
        { name: "description3", start: [2,1], end: [2,1] },
      ],
      large : [
        { name: "object1", start: [0,0], end: [0,0] },
        { name: "object2", start: [1,0], end: [1,0] },
        { name: "object3", start: [2,0], end: [2,0] },
        { name: "description1", start: [0,1], end: [0,1] },
        { name: "description2", start: [1,1], end: [1,1] },
        { name: "description3", start: [2,1], end: [2,1] },
      ]
  }

export {centerBoxAreas, defaultAreas}