import jsonp from 'jsonp';

export default class Behance {
  constructor(params) { // { apiKey, baseEndpoint }
    this.apiKey = params.apiKey;
    this.baseEndpoint = (params.baseEndpoint) ? params.baseEndpoint : 'https://www.behance.net/v2';
  }

  projects(params) {
    return this.request('/projects', params);
  }

  project(id) {
    return this.request(`/projects/${id}`);
  }

  projectComments(id) {
    return this.request(`/projects/${id}/comments`);
  }

  users(params) {
    return this.request('/users', params);
  }

  user(id) {
    return this.request(`/users/${id}`);
  }

  userProjects(id, params) {
    return this.request(`/users/${id}/projects`, params);
  }

  userWips(id, params) {
    return this.request(`/users/${id}/wips`, params);
  }

  userApprecitations(id, params) {
    return this.request(`/users/${id}/appreciations`, params);
  }

  userCollections(id, params) {
    return this.request(`/users/${id}/collections`, params);
  }

  userStats(id) {
    return this.request(`/users/${id}/stats`);
  }

  userFollowers(id, params) {
    return this.request(`/users/${id}/followers`, params);
  }

  userFollowing(id, params) {
    return this.request(`/users/${id}/following`, params);
  }

  userWorkExperience(id) {
    return this.request(`/users/${id}/work_experience`);
  }

  team(id) {
    return this.request(`/teams/${id}`);
  }

  teamProjects(id, params) {
    return this.request(`/teams/${id}/projects`, params);
  }

  collections(params) {
    return this.request('/collections', params);
  }

  collection(id) {
    return this.request(`/collections/${id}`);
  }

  collectionProjects(id, params) {
    return this.request(`/collections/${id}/projects`, params);
  }

  request(uri, params = {}) {
    return new Promise((resolve, reject) => {
      const parameters = params;
      parameters.client_id = this.apiKey;
      const url = `${this.baseEndpoint}${uri}?${parameterize(params).join('&')}`;
      jsonp(url, null, (error, data) => {
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          console.log(data);
          resolve(data);
        }
      });
    });
  }
}

function parameterize(data) {
  if (data === undefined) return [];
  return Object.keys(data).map(k => `${k}=${data[k]}`);
}
