# Behance Api

This is a promise based library for both browser and node (not work, wip) environments for pulling down data from Behance.

## Installation

```
npm install -S behance
```

... or yarn if you want

## Setup

```javascript
import Behance from 'behance';
const params = { apiKey: 'sodosopah' }
const behance = new Behance(params)
```

**params:**

| Key | Type | Description | Required |
| --- | --- | --- | --- |
| apiKey | `string` | Your developers api key. You can get one here - [Behance Api Key](https://www.behance.net/dev/api) | Yes
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

For a list of all endpoints supported see the rest of the [endpoint docs](https://github.com/Craigtut/behance/docs#api)