# Friend Finder

**Overview**

Food Friend Finder was created for the Friend Finder (Node and Express Servers) homework assignment for Berkeley Coding Bootcamp. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

**Deployment Requirements**

`npm i` will install the following:

-npm install express
-npm install body-parser
-npm install path

**App Demo GIFs**

<img src="https://github.com/julienshim/FriendFinder/blob/master/app/public/images/foodfriendfinder.gif?raw=true" width="600px"/>

**Requirements**

- The survey contains 10 uqestions. Each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

- `server.js` should require the basic npm packages `express`, `body-parser`, and `path`

- The `htmlRoutes.js` include two routes:
    * A GET Route to `/survey` which should display the survey page.
    * A default, catch-all route that leads to `home.html` which displays the home page.

- Your `apiRoutes.js` file should contain two routes:
    * A GET route with url `/api/friends`. This will be used to display JSON of all possible friends.
    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatbility logic.

- The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects shoudl roughly follow the format below:

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

- The app determines the user's most compatible friend using the following as a guide:
    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.

- Once the current user's most compatible friend is found, display the result as a modal pop-up.

   * The modal should display both the name and picture of the closest match.
