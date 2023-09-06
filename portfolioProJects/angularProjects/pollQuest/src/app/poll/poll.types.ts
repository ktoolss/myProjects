// src/app/poll.types.ts
export interface PollOption {
    id: number;
    text: string;
    votes: number;
  }
  

let nextPollId = 1; // Initial value for the next poll ID

function generateUniqueId(existingIds: number[]): number {
  while (existingIds.includes(nextPollId)) {
    nextPollId++;
  }
  return nextPollId++;
}
  
  // poll.types.ts
export interface Poll {
  id: number;
  question: string;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
  votes: number;
}

// Create mock poll data
export const mockPolls: Poll[] = [
  {
    id: generateUniqueId([]),
    question: 'What is your favorite color?',
    options: [
      { id: generateUniqueId([]), text: 'Red', votes: 0 },
      { id: generateUniqueId([]), text: 'Blue', votes: 0 },
      { id: generateUniqueId([]), text: 'Green', votes: 0 }
    ]
  },
  {
    id: generateUniqueId([]),
    question: 'Which programming language do you prefer?',
    options: [
      { id: generateUniqueId([]), text: 'JavaScript', votes: 0 },
      { id: generateUniqueId([]), text: 'Python', votes: 0 },
      { id: generateUniqueId([]), text: 'Java', votes: 0 }
    ]
  },
  {
    id: generateUniqueId([]),
    question: 'What is your favorite pet?',
    options: [
      { id: generateUniqueId([]), text: 'Dog', votes: 0 },
      { id: generateUniqueId([]), text: 'Cat', votes: 0 },
      { id: generateUniqueId([]), text: 'Fish', votes: 0 }
    ]
  },
  // Add more mock poll data here...
];

export const mockIndustryPolls: Poll[] = [
  {
    id: generateUniqueId([]),
    question: 'What is your favorite retail store?',
    options: [
      { id: generateUniqueId([]), text: 'Amazon', votes: 0 },
      { id: generateUniqueId([]), text: 'Walmart', votes: 0 },
      { id: generateUniqueId([]), text: 'Target', votes: 0 },
    ],
  },
  {
    id: generateUniqueId([]),
    question: 'Which online fashion retailer do you prefer?',
    options: [
      { id: generateUniqueId([]), text: 'Zara', votes: 0 },
      { id: generateUniqueId([]), text: 'H&M', votes: 0 },
      { id: generateUniqueId([]), text: 'ASOS', votes: 0 },
    ],
  },
  {
    id: generateUniqueId([]),
    question: 'Where do you prefer to buy electronics?',
    options: [
      { id: generateUniqueId([]), text: 'Best Buy', votes: 0 },
      { id: generateUniqueId([]), text: 'Amazon', votes: 0 },
      { id: generateUniqueId([]), text: 'Apple Store', votes: 0 },
    ],
  },
];

