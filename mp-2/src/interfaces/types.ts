export interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    synopsis: string;
    score: number;
}