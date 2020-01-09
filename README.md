## __Welcome to BW Refugee Stories__

#### This is the backend for the project. Here you will find the documents and any other files you need to work with this server. If you run into any errors -- let me know, and I will help you work through them :)

[@spenclark](https://github.com/spenclark)

#### Lets have an awesome Week!

<br/>

---

## Table of Conents
- [Product](#product)
- [Technologies](#technologies)
- [API](#API)
- [License](#license)

<br/>

---

<br/>

## Product

We are making a web app that lets users interact with stories from refugees all around the world :earth_africa:

---

<br/>

## Technologies
This REST API was built using the following tools/libraries:
- Nodejs
- Express
- Knex
- JSON Web Tokens
- PostgreSQL

---

<br/>

## API Documentation

<br/>
<br/>

The base URI for this project will be `https://refugee-stories-build-week.herokuapp.com`, all requests must use this URL. For example, `https://refugee-stories-build-week.herokuapp.com/api/login`

<br/>

__Auth:__

<br/>

- `POST` to `/api/auth/register` with the following JSON structure attached to the request body:

```js
{
    "username": "refugeeAdmin" // required
    "password": "aPassword" // required
}

```

- `POST` to `/api/auth/login` with the following JSON structure attached to the request body:

```js
{
    "username": "refugeeAdmin" // required
    "password": "aPassword" // required
    // if successful - this will return a token that you will need to save to local storage. This will be required to access many of the end points below.
}

```



__Stories__

<br/>

- `GET` to `/api/stories/approved` will return a list of stories that the admins have approved

- `POST` to `/api/stories/process` endpoint for users to send a story to the admins for approval. Use this format:

```js
{
    "name":"refugeeName"  // 32 character max
    "location":"Albania"  // 32 character max
    "date":"1/2/2020" // 18 character max
    "textbody":"alotoftextthatdoesntmatter" // 3400 character max 
}
```

:small_red_triangle: All of these endpoints below require the token from /api/login :small_red_triangle:

- `GET` to `/api/stories/process` returns a list of stories that need to be reviewed by admins

- `GET` to `/api/stories/process/:id`
returns a single item with a corresponding id.

- `DELETE` to `/api/stories/process/:id`
deletes a single item with the corresponding id.

- `PUT` to `/api/stories/process/:id`
updates a single item with the corresponding id. You only need to switch a boolean to true. When the boolean is true, that object will be related to the `/api/stories/approved` route. 


```js
{
    "approved": True
}

```




<br/>


----

<br/>

## License

MIT © 2020 Refugee Stories