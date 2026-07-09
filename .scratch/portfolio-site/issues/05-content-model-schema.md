# Define the content model and collections schema

Type: task
Status: resolved
Blocked by: 01

## Question

Design the Astro content collections that encode the Series/Render domain model.

- Series frontmatter: title, tag (Landscapes/Abstract/Stills), cover image, order,
  optional short description.
- Render representation: title + optional short caption + image reference; how
  renders belong to a series (folder-per-series vs list in frontmatter).
- Folder/image layout so adding new work = drop images + edit one markdown file.
- Zod schema for validation.

Deliverable: the schema plus a documented "how to add a series/render" convention.
