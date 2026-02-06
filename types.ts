
export interface CarBrand {
  id: string;
  name: string;
  country: string;
  founded: number;
  logo: string;
  banner: string;
  description: string;
  notableModels: string[];
  category: 'Luxury' | 'Sports' | 'Mass Market' | 'Electric';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
