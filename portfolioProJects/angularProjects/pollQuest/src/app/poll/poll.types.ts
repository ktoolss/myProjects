import { generateUniqueId } from '../utils/helpers';  // Adjust the path as necessary

export enum PollType {
  General = 'General',
  Industry = 'Industry',
  National = 'National',
  State = 'State',
  Local = 'Local',
  Politics = 'Politics',
  Music = 'Music',
  Television = 'Television',
  Marketing = 'Marketing',
  // ... add more types as needed
}

// let nextPollId = 1; // Initial value for the next poll ID

// function generateUniqueId(existingIds: number[]): number {
//   while (existingIds.includes(nextPollId)) {
//     nextPollId++;
//   }
//   return nextPollId++;
// }
  
  // poll.types.ts
export interface Poll {
  id: number;
  type: PollType;
  question: string;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
  votes: number;
}

const existingPollIds: number[] = [];
const existingOptionIds: number[] = [];



// Create mock poll data
export const mockPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.General,
    question: 'What is your favorite color?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Red', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Blue', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Green', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.General,
    question: 'Which programming language do you prefer?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'JavaScript', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Python', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Java', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.General,
    question: 'What is your favorite pet?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Dog', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Cat', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Fish', votes: 0 }
    ]
  },
  // Add more mock poll data here...
];

export const mockIndustryPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Industry,
    question: 'What is your favorite retail store?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Amazon', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Walmart', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Target', votes: 0 },
    ],
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Industry,
    question: 'Which online fashion retailer do you prefer?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Zara', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'H&M', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'ASOS', votes: 0 },
    ],
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Industry,
    question: 'Where do you prefer to buy electronics?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Best Buy', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Amazon', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Apple Store', votes: 0 },
    ],
  },
];

