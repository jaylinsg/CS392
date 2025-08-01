// src/types.ts

export interface CharacterDetail {
  id: number;
  name: string;
  images: string[];

  debut: {
    anime: string;
    manga: string;
    novel: string;
    movie: string;
    game: string;
    ova: string;
    appearsIn: string;
  };

  personal: {
    clan: string;
    affiliation: string[];
  };

  rank: {
    ninjaRank: Record<string, string>;
    ninjaRegistration: string;
  };
}

export interface HPDetail {
  id: string;
  name: string;
  image: string;
  actor: string;
  house: string;
  gender: string;
  yearOfBirth: number;
  hairColour: string;
}
