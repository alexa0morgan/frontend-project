import { createArticle } from './createArticle.js';
import { setCorrectViewType } from './viewType.js';

function displayBlogPosts(data) {
  const blogData = data.slice(0, 6);
  for (const post of blogData) {
    createArticle(post.title.rendered, post.jetpack_featured_media_url, post.excerpt.rendered, post.date_gmt + 'Z');
  }
  setCorrectViewType();
}

fetch('https://techcrunch.com/wp-json/wp/v2/posts')
  .then((v) => v.json())
  .then(displayBlogPosts);
