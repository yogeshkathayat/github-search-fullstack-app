export type Repository = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner_login: string;
  owner_html_url: string;
  owner_avatar_url: string;
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
  owner?: {
    login: string;
    html_url: string;
    avatar_url: string;
  };
};
