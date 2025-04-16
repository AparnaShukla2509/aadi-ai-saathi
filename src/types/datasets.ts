
export interface AIDataset {
  feature: string;
  bestDataset: string;
  altDataset: string;
  linkBest: string;
  linkAlt: string;
}

export interface DatasetCategory {
  name: string;
  description: string;
  datasets: AIDataset[];
}
