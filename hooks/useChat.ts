import { ChatMessage, ChatResponse } from '@/types/chat';
import { useInfiniteQuery } from '@tanstack/react-query';

// Generate fake chat data
const generateFakeMessages = (
  count: number,
  beforeDate?: Date,
): ChatMessage[] => {
  const messages: ChatMessage[] = [];
  const baseDate = beforeDate || new Date();

  // Realistic conversation starters and responses
  const conversationFlow = [
    {
      user: 'Hey Sarah, can you help me prepare for the quarterly board meeting next week?',
      assistant:
        "Of course! I'd be happy to help you prepare for the board meeting. I can assist with creating the presentation, gathering key metrics, and preparing talking points. What specific areas would you like to focus on?",
    },
    {
      user: 'I need help analyzing our Q3 performance data and creating insights for the presentation',
      assistant:
        "Perfect! I'll analyze the Q3 data and create a comprehensive presentation. I can pull together revenue trends, customer acquisition metrics, and operational highlights. Would you like me to include year-over-year comparisons and industry benchmarks?",
    },
    {
      user: 'Yes, that would be great. Also, can you draft some talking points about our AI initiatives?',
      assistant:
        "Absolutely! I'll draft talking points covering your AI roadmap, current implementations, and future opportunities. I can also prepare responses to potential questions about ROI and competitive advantages. Should I include the recent customer success stories?",
    },
    {
      user: 'Perfect! Can you also help me with the financial projections section?',
      assistant:
        "Of course! I'll work on the financial projections section, including revenue forecasts, expense analysis, and cash flow projections. I can also prepare backup slides with detailed assumptions and sensitivity analysis. When do you need this by?",
    },
    {
      user: "Thanks Sarah! You're making this so much easier. Can you send me a draft by Friday?",
      assistant:
        "You're welcome! I'll have a complete draft ready by Friday. I'll include all the sections we discussed and send it over with time for you to review and make any adjustments. Is there anything else you'd like me to focus on?",
    },
    {
      user: 'Actually, can you also help me prepare for potential questions from the board members?',
      assistant:
        "Great idea! I'll prepare a Q&A section with anticipated questions and suggested responses. I'll cover topics like market expansion plans, technology investments, and competitive positioning. Should I include recent industry trends that might come up?",
    },
    {
      user: "Yes, that would be very helpful. You're really saving me a lot of time here!",
      assistant:
        "I'm glad I can help! That's exactly what I'm here for - to make your work more efficient and effective. I'll make sure everything is polished and ready for your review. The board meeting prep will be comprehensive and professional.",
    },
    {
      user: 'Can you also create some visual charts and graphs for the presentation?',
      assistant:
        "Absolutely! I'll create compelling visualizations including trend charts, comparison graphs, and infographics that will make the data easy to understand. I'll use consistent branding and ensure they're presentation-ready. What's your preference for chart styles?",
    },
    {
      user: 'Something clean and professional, maybe with our brand colors',
      assistant:
        "Perfect! I'll use your brand palette and create clean, professional charts that align with your company's visual identity. I'll make sure they're easy to read from across the room and work well in both digital and print formats.",
    },
    {
      user: "Excellent! You're really helping me look good for this presentation",
      assistant:
        "That's my goal! I want you to feel confident and prepared. I'll make sure the presentation tells a compelling story about your company's performance and future potential. The board will be impressed with the thorough preparation and professional presentation.",
    },
  ];

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(baseDate.getTime() - i * 60000); // 1 minute apart
    const isUser = i % 2 === 0; // Alternate between user and assistant
    const conversationIndex = Math.floor(i / 2) % conversationFlow.length;

    let messageText: string;

    if (isUser) {
      messageText =
        conversationFlow[conversationIndex]?.user || `User message ${i + 1}`;
    } else {
      messageText =
        conversationFlow[conversationIndex]?.assistant ||
        `Assistant response ${i + 1}`;
    }

    messages.push({
      id: `msg-${Date.now()}-${i}`,
      text: messageText,
      sender: isUser ? 'user' : 'assistant',
      timestamp,
      options: isUser
        ? undefined
        : [
            'I can help with that',
            'Let me analyze this',
            "Here's what I found",
            'Would you like me to...',
            "I'll get started on this",
          ],
    });
  }

  return messages;
};

// Simulate API call with fake data
const fetchChatMessages = async (
  pageParam?: string,
  limit: number = 15,
): Promise<ChatResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const cursor = pageParam ? new Date(pageParam) : new Date();
  const messages = generateFakeMessages(limit, cursor);

  // Check if we have more messages (simulate having 100 total messages)
  const totalMessages = 100;
  const currentCount = pageParam
    ? Math.floor((new Date().getTime() - cursor.getTime()) / 60000) + limit
    : limit;

  const hasMore = currentCount < totalMessages;
  const nextCursor = hasMore
    ? messages[messages.length - 1].timestamp.toISOString()
    : undefined;

  return {
    messages,
    hasMore,
    nextCursor,
  };
};

export const useChat = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['chat-messages'],
    queryFn: ({ pageParam }: { pageParam?: string }) =>
      fetchChatMessages(pageParam, 15),
    getNextPageParam: (lastPage: ChatResponse) => lastPage.nextCursor,
    initialPageParam: undefined,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Combine all pages into a single messages array
  const messages =
    data?.pages.flatMap((page: ChatResponse) => page.messages) || [];

  // Load older messages
  const loadOlderMessages = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return {
    messages,
    hasMore: hasNextPage ?? false,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    loadOlderMessages,
  };
};
