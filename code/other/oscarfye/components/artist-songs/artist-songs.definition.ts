export type TArtistSongsProps = {
  className?: string;
};

export type TTimeItem = {
  explicit: boolean;
  index: number;
  photo: any;
  url: string;
  name: string;
  popularity: string;

  msSeconds: number;
  seconds: number;
  total: number;
  time: number;
};
