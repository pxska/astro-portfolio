export const sortAndHidePosts = (posts) => {
  return posts
    .filter((post) => !post.url.split("/").at(-1).startsWith("_"))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
};
