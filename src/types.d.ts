export type Article = {
  id: string;
  title: string;
  description: string;
  social_image: string;
  url: string;
  tags: string;
  user: {
    name: string;
    profile_image: string;
  };
  readable_publish_date: string;
};
