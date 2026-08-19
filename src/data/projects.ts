export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  coverImage: string;
  gallery: string[];
};

// Fill in with your case studies. `coverImage` and `gallery` paths
// should point to files placed under /public/images/projects/<slug>/.
export const projects: Project[] = [];
