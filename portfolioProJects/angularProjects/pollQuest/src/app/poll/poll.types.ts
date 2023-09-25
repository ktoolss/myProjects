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

// Mock data for National polls
export const mockNationalPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.National,
    question: 'Who should be the next national leader?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Candidate A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Candidate B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Candidate C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.National,
    question: 'What national issue concerns you the most?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Economy', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Environment', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'National Security', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.National,
    question: 'Which is the best national sports team?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Team A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Team B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Team C', votes: 0 }
    ]
  }
];

// Mock data for State polls
export const mockStatePolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.State,
    question: 'What should be the state\'s top priority?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Education', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Infrastructure', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Healthcare', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.State,
    question: 'Which state park is your favorite?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Park A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Park B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Park C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.State,
    question: 'Who is the most influential person from our state?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Person A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Person B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Person C', votes: 0 }
    ]
  }
];

// And so on for the rest...

// Mock data for Local polls
export const mockLocalPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Local,
    question: 'Which local festival is your favorite?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Festival A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Festival B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Festival C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Local,
    question: 'Which local school needs more funding?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'School A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'School B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'School C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Local,
    question: 'Which local transportation mode do you use the most?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Buses', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Trains', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Bicycles', votes: 0 }
    ]
  }
];

// Mock data for Politics polls
export const mockPoliticsPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Politics,
    question: 'Which political party do you support?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Party A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Party B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Party C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Politics,
    question: 'Who was the best political leader of the last decade?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Leader A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Leader B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Leader C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Politics,
    question: 'Which policy change would benefit the country most?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Policy A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Policy B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Policy C', votes: 0 }
    ]
  }
];



// Mock data for Music polls
export const mockMusicPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Music,
    question: 'Who is your favorite artist of the decade?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Artist A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Artist B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Artist C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Music,
    question: 'Which genre of music do you prefer?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Rock', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Hip-hop', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Classical', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Music,
    question: 'Which music festival would you like to attend?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Festival X', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Festival Y', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Festival Z', votes: 0 }
    ]
  }
];

// Mock data for Television polls
export const mockTelevisionPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Television,
    question: 'Which TV series are you currently watching?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Series A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Series B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Series C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Television,
    question: 'Who is your favorite TV character?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Character A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Character B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Character C', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Television,
    question: 'Which is the best TV show finale?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Show A', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Show B', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Show C', votes: 0 }
    ]
  }
];

// Mock data for Marketing polls
export const mockMarketingPolls: Poll[] = [
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Marketing,
    question: 'Which marketing platform yields the best ROI for you?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Facebook Ads', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Google AdWords', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Instagram Ads', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Marketing,
    question: 'What type of content works best for your marketing?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Blogs', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Videos', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Infographics', votes: 0 }
    ]
  },
  {
    id: generateUniqueId(existingPollIds),
    type: PollType.Marketing,
    question: 'Which email marketing platform do you prefer?',
    options: [
      { id: generateUniqueId(existingOptionIds), text: 'Mailchimp', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'SendGrid', votes: 0 },
      { id: generateUniqueId(existingOptionIds), text: 'Constant Contact', votes: 0 }
    ]
  }
];
