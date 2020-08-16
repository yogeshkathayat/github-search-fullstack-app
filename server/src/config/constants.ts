export const responseMessage: { readonly [message: string]: string } = {
  SUCCESS: 'Sucess',
  FAILED: 'Failed',
  BAD_REQUEST: 'Bad request',
  NOT_FOUND: 'Page Not Found',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  ALREADY_EXISTS: 'Already exists',
  NO_RECORD_FOUND: 'No Record found',
};

export const version: { readonly [version: string]: string } = {
  v1: 'v1.0.0',
  v2: 'v2.0.0',
};

export const searchType = {
  REPOSITORY: 'repository',
  USER: 'user',
};

export const githubAPI = {
  searchUser: 'https://api.github.com/search/users',
  searchRepository: 'https://api.github.com/search/repositories',
};
