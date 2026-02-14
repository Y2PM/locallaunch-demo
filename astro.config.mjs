// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY || 'owner/locallaunch-demo';
const [owner = 'owner', repoName = 'locallaunch-demo'] = repository.split('/');

export default defineConfig({
  output: 'static',
  site: `https://${owner}.github.io`,
  base: `/${repoName}`,
});
