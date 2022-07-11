// 3.	Comments
// Write a function that stores information about users and their comments on a website.
// You have to store the users, the comments as an object with title and content, and the article that the comment is about.
// The user can only comment, when he is on the list of users and the article is in the list of articles.
// The input comes as an array of strings. The strings will be in the format:
// "user {username}" – add the user to the list of users
// "article {article name}" – add the article to the article list
// "{username} posts on {article name}: {comment title}, {comment content}" – save the info
// At the end sort the articles by a count of comments and print the users with their comments ordered by usernames in ascending.
// Output
// Print the result in the following format:
// "Comments on {article1 name}
// --- From user {username1}: {comment title} - {comment content}
// --- From user {username2}: …
// Comments on {article2 name}
// …"

function comments(arr) {
  let articles = [];
  let users = [];
  let comments = [];
  for (const line of arr) {
    if (line.includes("article")) {
      let tempArticleName = line.split(" ").pop();
      let article = {
        articleName: tempArticleName,
        commentsCount: 0,
      };

      articles.push(article);
    } else if (line.includes("user")) {
      let user = line.split(" ").pop();
      users.push(user);
    } else {
      let [userData, commentInfo] = line.split(": ");
      let userWhoCommented = userData.split(" ").shift();
      let articleCommented = userData.split(" ").pop();

      let [titleOfArticle, comment] = commentInfo.split(", ");

      if (
        articles.some((article) => article.articleName === articleCommented) &&
        users.includes(userWhoCommented)
      ) {
        let commentObj = {
          articleCommented,
          comment,
          titleOfArticle,
          userWhoCommented,
        };
        comments.push(commentObj);
        let index = articles.findIndex(
          (article) => article.articleName === articleCommented
        );
        articles[index].commentsCount++;
      }
    }
  }
  articles.sort((a, b) => b.commentsCount - a.commentsCount);
  comments.sort((a, b) => a.userWhoCommented.localeCompare(b.userWhoCommented));
  for (const key in articles) {
    console.log(`Comments on ${articles[key].articleName}`);
    for (const comment of comments) {
      if (articles[key].articleName === comment.articleCommented) {
        console.log(
          `--- From user ${comment.userWhoCommented}: ${comment.titleOfArticle} - ${comment.comment}`
        );
      }
    }
  }
}

comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
