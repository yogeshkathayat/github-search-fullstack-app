import axios from 'axios';
import { searchType, githubAPI } from '../../config/constants';
import { Repository, User } from '../types';
import { GITHUB_AUTH_STRING } from '../../config/vars';
import { CacheService } from '../services/cache.service';

/**
 * GithubService class
 * contains methods related to
 * Github Service
 * @class
 */
export class GithubService {
  private _cacheService: CacheService;

  constructor() {
    this._cacheService = new CacheService();
  }

  /**
   * @description method to search github
   * @param {string} type type of search
   * @param {string} search search term
   */
  async search(type: string, search: string): Promise<Repository | User[]> {
    try {
      if (type === searchType.USER) {
        //get user data from github
        let responseData = await axios.get(
          githubAPI.searchUser + '?q=' + search,
          {
            headers: {
              Authorization: GITHUB_AUTH_STRING,
              'User-Agent': 'github-searcher',
            },
          },
        );
        //get user details
        let transformedUserData = [];
        const promises = responseData.data.items.map((user: Partial<User>) => {
          return this.getUserDetails(user);
        });

        transformedUserData = await Promise.all<User>(promises);

        //save it to redis
        if (transformedUserData && transformedUserData.length > 0) {
          this._cacheService.setData(type + '_' + search, transformedUserData);
        }
        return transformedUserData;
      } else if (type === searchType.REPOSITORY) {
        //get repository data from github
        let responseData = await axios.get(
          githubAPI.searchRepository + '?q=' + search,
          {
            headers: {
              Authorization: GITHUB_AUTH_STRING,
              'User-Agent': 'github-searcher',
            },
          },
        );
        let transformedRepositoryData = [];
        transformedRepositoryData = responseData.data.items.map(
          (repository: Partial<Repository>) => {
            return this.transformRepository(repository);
          },
        );
        //save it to redis
        if (transformedRepositoryData && transformedRepositoryData.length > 0) {
          this._cacheService.setData(
            type + '_' + search,
            transformedRepositoryData,
          );
        }
        return transformedRepositoryData;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description method to transform user details
   * @param {User} userObject user object
   */
  private transformUser(userObject: Partial<User>): User {
    return {
      id: userObject.id,
      login: userObject.login,
      url: userObject.url,
      type: userObject.type,
      name: userObject.name,
      html_url: userObject.html_url,
      avatar_url: userObject.avatar_url,
      company: userObject.company,
      blog: userObject.blog,
      location: userObject.location,
      email: userObject.email,
      public_repos: userObject.public_repos,
      public_gists: userObject.public_gists,
      followers: userObject.followers,
      following: userObject.following,
    };
  }

  /**
   * @description method to transform repository details
   * @param {Repository} repositoryObject repository object
   */
  private transformRepository(
    repositoryObject: Partial<Repository>,
  ): Repository {
    return {
      id: repositoryObject.id,
      name: repositoryObject.name,
      full_name: repositoryObject.full_name,
      private: repositoryObject.private,
      owner_login: repositoryObject.owner.login,
      owner_html_url: repositoryObject.owner.html_url,
      owner_avatar_url: repositoryObject.owner.avatar_url,
      html_url: repositoryObject.html_url,
      description: repositoryObject.description,
      size: repositoryObject.size,
      stargazers_count: repositoryObject.stargazers_count,
      watchers_count: repositoryObject.watchers_count,
      language: repositoryObject.language,
      forks_count: repositoryObject.forks_count,
      open_issues_count: repositoryObject.open_issues_count,
      forks: repositoryObject.forks,
      open_issues: repositoryObject.open_issues,
      watchers: repositoryObject.watchers,
    };
  }

  /**
   * @description method to get user details from github
   * @param {User} userObject user object
   */
  private async getUserDetails(userObject: Partial<User>): Promise<User> {
    try {
      let userData = await axios.get(userObject.url, {
        headers: { Authorization: GITHUB_AUTH_STRING },
      });
      return this.transformUser(userData.data);
    } catch (error) {
      throw error;
    }
  }
}
