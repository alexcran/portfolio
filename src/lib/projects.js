// Each .md file is transformed at build time by the Vite markdown plugin
// into a JS module exporting { frontmatter, content }.
const modules = import.meta.glob('/content/projects/*/index.md', { eager: true });

export const projects = Object.entries(modules)
  .map(([path, mod]) => {
    const { frontmatter, content } = mod.default;
    const id = path.split('/')[3]; // /content/projects/[id]/index.md
    return { ...frontmatter, id, body: content };
  })
  .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99));

export function getProject(id) {
  return projects.find((p) => p.id === id) ?? null;
}

export function getAdjacentProjects(id) {
  const idx = projects.findIndex((p) => p.id === id);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
