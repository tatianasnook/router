const express = require('express');
const app = express();

const postsRoute = require('./routes/Posts');
const commentsRoute = require('./routes/Comments');
const likesRoute = require('./routes/Likes');
const storiesRoute = require('./routes/Stories');

app.use('/posts', postsRoute);
app.use('/comments', commentsRoute);
app.use('/likes', likesRoute);
app.use('/stories', storiesRoute);

app.listen(4000, () => {
  console.log('Listening on port 4000')
})
