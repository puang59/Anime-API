interface Anime {
  id: string | null;
  name: string | null;
  img: string | null;
}

interface RecentRelease extends Anime {
  episodeId: string;
  episodeNo: number;
  subOrDub: string;
  episodeUrl: string;
}

interface NewSeason extends Anime {
  releasedYear: string;
  animeUrl: string;
}

export { RecentRelease, NewSeason };
