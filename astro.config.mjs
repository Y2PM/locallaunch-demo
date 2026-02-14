// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY || 'y2pm/locallaunch-demo';
const [owner = 'y2pm', repoName = 'locallaunch-demo'] = repository.split('/');

export default defineConfig({
  output: 'static',
  site: `https://${owner}.github.io`,
  base: `/${repoName}`,
});
