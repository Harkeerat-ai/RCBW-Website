/* ── GROQ Queries for Sanity CMS ── */

export const allEventsQuery = `*[_type == "event"] | order(date desc) {
  _id,
  _type,
  title,
  slug,
  date,
  coverImage,
  avenue->{_id, name, slug, color, icon},
  description,
  gallery,
  reportPDF
}`;

export const eventBySlugQuery = `*[_type == "event" && slug.current == $slug][0] {
  _id,
  _type,
  title,
  slug,
  date,
  coverImage,
  avenue->{_id, name, slug, color, icon},
  description,
  gallery,
  reportPDF
}`;

export const allNewslettersQuery = `*[_type == "newsletter"] | order(issueNumber desc) {
  _id,
  _type,
  issueNumber,
  title,
  date,
  coverImage,
  pdfFile,
  summary
}`;

export const latestNewsletterQuery = `*[_type == "newsletter"] | order(issueNumber desc) [0] {
  _id,
  _type,
  issueNumber,
  title,
  date,
  coverImage,
  pdfFile,
  summary
}`;

export const allBoardMembersQuery = `*[_type == "boardMember"] | order(role asc) {
  _id,
  _type,
  name,
  role,
  avenue->{_id, name, slug, color, icon},
  photo,
  linkedIn
}`;

export const allAvenuesQuery = `*[_type == "avenue"] | order(name asc) {
  _id,
  _type,
  name,
  slug,
  color,
  description,
  icon
}`;

export const eventSlugsQuery = `*[_type == "event"] { "slug": slug.current }`;
