# Documentation for Behance's Api
 *This document contains information on the usage of this library to interact with Behance's Api. See [Behance's Developers site](https://www.behance.net/dev/api/endpoints/) for full specs on their raw endpoints.*

## Setup

```javascript
import Behance from 'behance';
const params = { apiKey: 'sodosopah' }
const behance = new Behance(params)
```

**params:**

| Key | Type | Description | Required |
| --- | --- | --- | --- |
| apiKey | `string` | Your developers api key. You can get one here - [Behance Api Key](https://www.behance.net/dev/register) | Yes
| baseEndpoint | `string` | Base endpoint to use (defaults to  https://www.behance.net/v2) | No

---


## Basic Usage

```javascript
// Get information about projects
behance.projects(params).then(data) {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
```

## Endpoints Supported

### Search Projects Endpoint
> Searches for projects on behance

| Function | Description | Parameters |
| --- | --- | --- |
| projects( `params` ) | Gets behance projects based on params | **`params`**
---

### Project Endpoints
> Searches for project specific data

| Function | Description | Parameters |
| --- | --- | --- |
| project( `id` ) | Gets a project by id | **`id`**
| projectComments( `id` ) | Gets a projects comments | **`id`**

---

### Search Users Endpoints
> Searches for users on behance

| Function | Description | Parameters |
| --- | --- | --- |
| users( `params` ) | Gets behance users based on params | **`params`**
---


### User Endpoints
> Searches for a specific users data

| Function | Description | Parameters |
| --- | --- | --- |
| user( `id` ) | Gets a user by id | **`id`**
| userProjects( `id`, params ) | Gets a users projects | **`id`**, params
| userWips( `id`, params ) | Gets users wip projects | **`id`**, params
| userApprecitations( `id`, params ) | Gets user's appriciations | **`id`**, params
| userCollections( `id`, params ) | Gets user's collections | **`id`**, params
| userStats( `id` ) | Gets users stats | **`id`**
| userFollowers( `id`, params ) | Gets list of users followers | **`id`**, params
| userFollowing( `id`, params ) | Gets list of people user is following | **`id`**, params
| userWorkExperience( `id` ) | Gets a users work experience| **`id`**
---


### Team Endpoints
> All of the team related functions require a team `id` or username


| Function | Description | Parameters |
| --- | --- | --- |
| team( `id` ) | Gets a team by id | **`id`**
| teamProjects( `id`, params ) | Gets a teams list of projects | **`id`**, params

---


### Collections Endpoint
> Search behance for various collections

| Function | Description | Parameters |
| --- | --- | --- |
| collections( params ) | Gets a team by id | params

---


### Collection Endpoints
> Gets information related to a given collection id

| Function | Description | Parameters |
| --- | --- | --- |
| collection( `id` ) | Gets a collection by id | **`id`**
| collectionProjects( `id`, params ) | Gets the projects in a collection | **`id`**, params

---

