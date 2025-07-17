// src/types.ts

//  GET / characters
export interface CharacterSummary {
  _id?: string;
  id?: number;
  name: string;
}

// GET / characters / :id
export interface CharacterDetail extends CharacterSummary {
  clan?: string;
  clan_id?: number;
}