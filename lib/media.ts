export type MediaSource = {
  src: string;
  poster?: string;
  label: string;
};

export const HERO_MEDIA: { v1: MediaSource; v2: MediaSource } = {
  v1: {
    src: "https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4",
    label: "PLACEHOLDER — molten close-up. Swap to AMC pour footage when shot.",
  },
  v2: {
    src: "https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1",
    label: "PLACEHOLDER — wide industrial. Swap to AMC machine-floor footage when shot.",
  },
};
