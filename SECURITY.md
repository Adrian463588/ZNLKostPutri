# Security & DevSecOps Policy

## 1. Secret & Configuration Management (12-Factor App)
- **Zero hardcoded tokens or secrets** in `src/`, `scripts/`, tests, or CI workflows.
- Search Console site verification values (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`) are supplied strictly via build/deployment environment variables (see `.env.example`).
- `.env*` files (except `.env.example`) and `*.pem` / `*.key` files are excluded via `.gitignore` and verified on every CI run by `npm run security:check` (`scripts/security-audit.mjs`).

## 2. Deployment Environment Setup (EdgeOne Pages & GitHub Actions)
1. **Recommended (Zero Token in Build Env)**: Verify domain ownership in Google Search Console using **DNS TXT record** (`Penyedia nama domain`), or keep HTML verification injected solely through EdgeOne Pages Environment Variables:
   - Key: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: Google Search Console verification token (configure directly in EdgeOne Pages Project Settings -> Environment Variables).
2. Optional CI Parity: Mirror the public verification value in GitHub **Settings -> Secrets and variables -> Actions -> Variables** (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`) so `npm run seo:audit` verifies `<meta name="google-site-verification">` during CI builds.

## 3. Remediating GitGuardian Incident #41117845
- Commit `5fa9aa8` previously committed a Search Console verification string directly into `src/config/site.ts` and `scripts/seo-audit.mjs`, triggering GitGuardian's Generic High Entropy Secret detector.
- That literal has been completely removed from active branches in favor of environment injection.
- To close the historical incident in GitGuardian Dashboard:
  1. Rotate the token in Google Search Console (generate a new HTML meta token or switch to DNS TXT verification) and store any active HTML token exclusively in EdgeOne Pages Environment Variables.
  2. Delete the historical branch `feat/gsc-verification` if no longer needed (`git push origin --delete feat/gsc-verification`).
  3. Mark Incident `#41117845` as **Resolved (Token rotated / moved to environment configuration)**.

## 4. Automated Guardrails
- Least-privilege GitHub Actions workflow (`permissions: contents: read`).
- `npm run security:check`: Scans tracked files, `.gitignore`, high-entropy token assignments, known secret prefixes, `next.config.ts` HTTP security headers, and `rel="noopener"` enforcement.
- HTTP security headers in `next.config.ts`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`, and `poweredByHeader: false`.
