export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  options?: string[];
  selectedOptions?: string[];
}

export interface ChatResponse {
  messages: ChatMessage[];
  hasMore: boolean;
  nextCursor?: string;
}

export interface ChatRequest {
  cursor?: string;
  limit: number;
}

// TanStack Query types
export interface QueryFunctionContext {
  pageParam?: string;
}

export interface ChatQueryFunctionContext extends QueryFunctionContext {
  pageParam?: string;
}
