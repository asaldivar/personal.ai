import { ChatMessage, ChatRequest, ChatResponse } from '@/types/chat';

// Create a fixed set of dummy messages
const DUMMY_MESSAGES: ChatMessage[] = [
  {
    id: 'assistant-1',
    text: "I'd like to learn more about your business. From this list, which topics would you like me to handle?",
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 14), // 14 minutes ago
    options: [
      'Basic business information',
      'Service offerings and repair types',
      'Price quotes and estimates',
      'Business credentials',
      'Vehicle drop-off procedures',
    ],
  },
  {
    id: 'user-1',
    text: 'Basic business info, services, credentials, and vehicle drop-off.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 13), // 13 minutes ago
    selectedOptions: [
      'Basic business information',
      'Service offerings and repair types',
      'Business credentials',
      'Vehicle drop-off procedures',
    ],
  },
  {
    id: 'assistant-2',
    text: 'Great choice! Now, let me ask about your specific services. What types of repairs do you specialize in?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 12), // 12 minutes ago
    options: [
      'Engine repairs',
      'Transmission work',
      'Electrical systems',
      'Brake services',
      'Oil changes',
    ],
  },
  {
    id: 'user-2',
    text: 'Engine repairs, transmission work, and electrical systems.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 11), // 11 minutes ago
    selectedOptions: [
      'Engine repairs',
      'Transmission work',
      'Electrical systems',
    ],
  },
  {
    id: 'assistant-3',
    text: 'Perfect! For pricing, do you prefer hourly rates or flat fees for common services?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    options: [
      'Hourly rates',
      'Flat fees',
      'Parts + labor',
      'Package deals',
      'Custom quotes',
    ],
  },
  {
    id: 'user-3',
    text: 'I prefer flat fees for common services and hourly for complex repairs.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 9), // 9 minutes ago
    selectedOptions: ['Flat fees', 'Hourly rates'],
  },
  {
    id: 'assistant-4',
    text: 'Excellent! Now about your business hours. What days and times are you available for customers?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 8), // 8 minutes ago
    options: [
      'Weekdays only',
      'Weekends included',
      'Evening hours',
      '24/7 emergency',
      'By appointment',
    ],
  },
  {
    id: 'user-4',
    text: 'Weekdays 8-6, weekends 9-4, and emergency service available.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 7), // 7 minutes ago
    selectedOptions: ['Weekdays', 'Weekends', 'Emergency service'],
  },
  {
    id: 'assistant-5',
    text: 'Wonderful! For vehicle drop-offs, do you have a designated area or should customers call ahead?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 6), // 6 minutes ago
    options: [
      'Designated drop-off area',
      'Call ahead required',
      'Drive-through service',
      'Mobile service',
      'Towing available',
    ],
  },
  {
    id: 'user-5',
    text: 'We have a designated drop-off area with 24/7 access.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    selectedOptions: ['Designated drop-off area', '24/7 access'],
  },
  {
    id: 'assistant-6',
    text: 'Great! Let me know about your team. How many technicians do you have on staff?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 4), // 4 minutes ago
    options: [
      '1-2 technicians',
      '3-5 technicians',
      '6-10 technicians',
      '10+ technicians',
      'Varies by season',
    ],
  },
  {
    id: 'user-6',
    text: 'We have 5 full-time technicians and 2 part-time during busy seasons.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 3), // 3 minutes ago
    selectedOptions: ['5 full-time technicians', '2 part-time technicians'],
  },
  {
    id: 'assistant-7',
    text: 'Perfect! For customer communication, do you prefer phone calls, text messages, or both?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 2), // 2 minutes ago
    options: [
      'Phone calls only',
      'Text messages only',
      'Both phone and text',
      'Email preferred',
      'In-person only',
    ],
  },
  {
    id: 'user-7',
    text: 'Both phone and text work well for us.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 1), // 1 minute ago
    selectedOptions: ['Phone calls', 'Text messages'],
  },
  {
    id: 'assistant-8',
    text: "Excellent! What's your policy on warranty for repairs and parts?",
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.5), // 30 seconds ago
    options: [
      '30-day warranty',
      '90-day warranty',
      '1-year warranty',
      'Lifetime warranty',
      'No warranty',
    ],
  },
  {
    id: 'user-8',
    text: 'We offer 90-day warranty on all repairs and 1-year on parts.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.25), // 15 seconds ago
    selectedOptions: ['90-day warranty', '1-year parts warranty'],
  },
  {
    id: 'assistant-9',
    text: 'Great! Do you offer any loyalty programs or discounts for returning customers?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.1), // 6 seconds ago
    options: [
      'Loyalty program',
      'Returning customer discount',
      'Referral bonuses',
      'Seasonal promotions',
      'No special programs',
    ],
  },
  {
    id: 'user-9',
    text: 'We have a loyalty program with points and referral bonuses.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.05), // 3 seconds ago
    selectedOptions: ['Loyalty program', 'Referral bonuses'],
  },
  {
    id: 'assistant-10',
    text: 'Perfect! How do you handle emergency repairs outside of business hours?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.02), // 1.2 seconds ago
    options: [
      'Emergency hotline',
      'On-call service',
      'Next business day',
      'Weekend emergency',
      'No emergency service',
    ],
  },
  {
    id: 'user-10',
    text: 'We offer 24/7 emergency service with on-call technicians.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.01), // 0.6 seconds ago
    selectedOptions: ['24/7 emergency service', 'On-call technicians'],
  },
  {
    id: 'assistant-11',
    text: "That sounds like a comprehensive service! Is there anything else you'd like me to know about your business?",
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.005), // 0.3 seconds ago
    options: [
      'Insurance partnerships',
      'Payment methods',
      'Appointment scheduling',
      'Vehicle types',
      'Service history',
    ],
  },
  {
    id: 'user-11',
    text: 'We work with most major insurance companies and offer flexible payment plans.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.002), // 0.12 seconds ago
    selectedOptions: ['Insurance partnerships', 'Flexible payment plans'],
  },
  {
    id: 'assistant-12',
    text: 'Excellent! Your business seems very well-organized. Do you have any specific questions about improving your operations?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.001), // 0.06 seconds ago
    options: [
      'Customer retention',
      'Staff training',
      'Inventory management',
      'Marketing strategies',
      'Technology upgrades',
    ],
  },
  {
    id: 'user-12',
    text: "I'd like to improve our customer retention and maybe explore some marketing strategies.",
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.0005), // 0.03 seconds ago
    selectedOptions: ['Customer retention', 'Marketing strategies'],
  },
  {
    id: 'assistant-13',
    text: "Great focus areas! For customer retention, what's your current approach to keeping customers coming back?",
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.0002), // 0.012 seconds ago
    options: [
      'Quality service',
      'Fair pricing',
      'Personal relationships',
      'Follow-up calls',
      'Satisfaction surveys',
    ],
  },
  {
    id: 'user-13',
    text: 'We focus on quality service and building personal relationships with our customers.',
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.0001), // 0.006 seconds ago
    selectedOptions: ['Quality service', 'Personal relationships'],
  },
  {
    id: 'assistant-14',
    text: "That's a solid foundation! For marketing, are you currently using any digital platforms or traditional methods?",
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.00005), // 0.003 seconds ago
    options: [
      'Social media',
      'Google ads',
      'Local newspapers',
      'Word of mouth',
      'Vehicle dealerships',
    ],
  },
  {
    id: 'user-14',
    text: "Mostly word of mouth and some local newspaper ads, but I'm interested in digital marketing.",
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.00002), // 0.0012 seconds ago
    selectedOptions: ['Word of mouth', 'Local newspapers', 'Digital marketing'],
  },
  {
    id: 'assistant-15',
    text: 'Perfect! Digital marketing could really expand your reach. Would you like me to help you create a basic digital marketing strategy?',
    sender: 'assistant',
    timestamp: new Date(Date.now() - 1000 * 60 * 0.00001), // 0.0006 seconds ago
    options: [
      'Yes, please!',
      'Maybe later',
      'Focus on retention first',
      'Show me examples',
      "What's involved?",
    ],
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const chatService = {
  async getMessages(request: ChatRequest): Promise<ChatResponse> {
    // Simulate network delay
    await delay(300);

    const { cursor, limit = 5 } = request;
    const startIndex = cursor ? parseInt(cursor) : 0;

    // Return paginated data from the fixed dummy messages
    const endIndex = Math.min(startIndex + limit, DUMMY_MESSAGES.length);
    const messages = DUMMY_MESSAGES.slice(startIndex, endIndex);

    // Check if there are more messages to load
    const hasMore = endIndex < DUMMY_MESSAGES.length;
    const nextCursor = hasMore ? endIndex.toString() : undefined;

    return {
      messages,
      hasMore,
      nextCursor,
    };
  },

  async sendMessage(message: string): Promise<ChatMessage> {
    // Simulate network delay
    await delay(300);

    // Simulate assistant response
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      text: generateAssistantResponse(message),
      sender: 'assistant',
      timestamp: new Date(),
      options: generateResponseOptions(),
    };

    return assistantMessage;
  },
};

// Helper function to generate contextual assistant responses
const generateAssistantResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return 'Hello! How can I help you with your automotive business today?';
  }

  if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return "I'd be happy to help with pricing information. What specific service are you asking about?";
  }

  if (lowerMessage.includes('hours') || lowerMessage.includes('schedule')) {
    return 'Great question about business hours! What days and times work best for your customers?';
  }

  if (lowerMessage.includes('warranty')) {
    return 'Warranty is important for customer confidence. What warranty terms do you currently offer?';
  }

  if (lowerMessage.includes('team') || lowerMessage.includes('technician')) {
    return 'Your team is crucial for quality service. How many technicians do you have and what are their specialties?';
  }

  // Default response
  return "That's a great point! Let me ask you a few more questions to better understand your business needs. What other aspects would you like to discuss?";
};

// Helper function to generate response options
const generateResponseOptions = (): string[] => {
  const optionSets = [
    [
      'Continue with current topic',
      'Move to next section',
      'Ask a different question',
    ],
    [
      'Business hours',
      'Pricing structure',
      'Team information',
      'Service offerings',
    ],
    [
      'Customer communication',
      'Emergency procedures',
      'Warranty policies',
      'Loyalty programs',
    ],
    [
      'Vehicle drop-off',
      'Appointment scheduling',
      'Payment methods',
      'Insurance partnerships',
    ],
  ];

  return optionSets[Math.floor(Math.random() * optionSets.length)];
};
