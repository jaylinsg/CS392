// src/types.ts

export interface CharacterDetail {
  id: number;
  name: string;
  images: string[];
  personal: {
    clan: string
    affiliation: string[]
  }
  rank: {
    ninjaRank: Record<string, string>   
    ninjaRegistration: string
  }
}