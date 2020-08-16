export type Repository = {
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    html_url: string;
  };
  html_url: string;
  description: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
};
