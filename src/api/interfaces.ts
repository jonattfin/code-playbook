export interface IProject {
  title: string;
  webUrl: string;
  imageUrl: string;
  summaryText: string;

  frontend: IProjectSettings;
  backends: IProjectSettings[];
}

export interface IProjectSettings {
  webUrl: string;
  githubUrl: string;

  sonarUrl: string;
  sonarImageUrl: string;
  technologies: string[];
}
