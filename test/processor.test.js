const processor = require('../src/processor');
const fixtures = [
    {
      name: 'Country 1',
      people: [
        {
          name: 'Person 1',
          animals: [
            { name: 'Dog' },
            { name: 'Cat' },
            { name: 'Elephant' }
          ]
        },
        {
          name: 'Person 2',
          animals: [
            { name: 'Lion' },
            { name: 'Tiger' },
            { name: 'Elephant' }
          ]
        }
      ]
    }, 
    {
        name: 'Country 2',
        people: [
          {
            name: 'Person 3',
            animals: [
              { name: 'Dog' },
              { name: 'Cat' }
            ]
          }
        ]
      }
  ];

describe('filterElements', () => {

  test('should filter elements containing the pattern', () => {
    const filtered = processor(fixtures, {filterOn : 'Dog'});
    const expected = [
        {
          name: 'Country 1',
          people: [
            {
              name: 'Person 1',
              animals: [
                { name: 'Dog' }
              ]
            }
          ]
        }, 
        {
            name: 'Country 2',
            people: [
              {
                name: 'Person 3',
                animals: [
                  { name: 'Dog' },
                ]
              }
            ]
          }
      ];
    expect(filtered).toEqual(expected);
  });

  test('should return an empty array if no elements match the pattern', () => {
    const filtered = processor(fixtures, {filterOn : 'xyz'});
    expect(filtered).toEqual([]);
  });
});

describe('countChildren', () => {

  test('should count the number of children for each element even filter is on', () => {
    const counted = processor(fixtures, {count : true, filterOn: 'Dog'});
    const expected = [
        {
          name: 'Country 1 [1]',
          people: [
            {
              name: 'Person 1 [1]',
              animals: [
                { name: 'Dog' }
              ]
            }
          ]
        }, 
        {
            name: 'Country 2 [1]',
            people: [
              {
                name: 'Person 3 [1]',
                animals: [
                  { name: 'Dog' },
                ]
              }
            ]
          }
      ];
    expect(counted).toEqual(expected);
  });
  
  test('should count the number of children for each element without filter', () => {
    const counted = processor(fixtures, {count : true, filterOn: ''});
    const expected = [
        {
          name: 'Country 1 [6]',
          people: [
            {
              name: 'Person 1 [3]',
              animals: [
                { name: 'Dog' },
                { name: 'Cat' },
                { name: 'Elephant' }
              ]
            },
            {
              name: 'Person 2 [3]',
              animals: [
                { name: 'Lion' },
                { name: 'Tiger' },
                { name: 'Elephant' }
              ]
            }
          ]
        }, 
        {
            name: 'Country 2 [2]',
            people: [
              {
                name: 'Person 3 [2]',
                animals: [
                  { name: 'Dog' },
                  { name: 'Cat' }
                ]
              }
            ]
          }
      ];
    expect(counted).toEqual(expected);
  });
});