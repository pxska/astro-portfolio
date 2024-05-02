function parseDate(dateStr) {
  if (/^\d{4}$/.test(dateStr)) {
    dateStr = `January ${dateStr}`;
  }

  return new Date(dateStr).getTime();
}

export function sortPosts(posts) {
  return posts.sort(
    (a, b) =>
      parseDate(b.frontmatter.date) -
      parseDate(a.frontmatter.date),
  );
}
