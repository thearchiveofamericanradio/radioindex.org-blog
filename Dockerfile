# blog.radioindex.org as one container: the built site, served on :8891 by Caddy with the rules the Worker had.
#   docker build -t radioindex-blog:$(git rev-parse --short=12 HEAD) .
#   docker run -d --name radioindex-blog --restart always -p 127.0.0.1:8891:8891 radioindex-blog:<tag>
FROM node:22-slim AS build
WORKDIR /w
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts --no-audit --no-fund
COPY . .
# posts, papers (+ PDFs), then the pages the Worker rendered on request (/papers, /paper/<slug>); /<slug> short copies are redirects, not files
RUN npm run -s papers && npm run -s papers:pdf \
 && npx tsx scripts/build-posts.ts \
 && npx tsx scripts/prerender-extra.ts \
 && find dist -maxdepth 1 -name '20*' -exec rm -rf {} + \
 && test "$(find dist/posts -name index.html | wc -l)" -ge 1000

FROM caddy:2-alpine
COPY --from=build /w/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 8891
HEALTHCHECK --interval=30s --timeout=5s CMD wget -qO- http://127.0.0.1:8891/health | grep -q ok || exit 1
