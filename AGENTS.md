<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio content lives in src/lib/profile.ts; pages and the AI assistant read from it so content stays in one place.
- AI chat calls go through a server function (src/lib/ask.functions.ts) so the AI key never reaches the browser.
- Theme selection is a browser-only preference persisted after hydration; global CSS theme tokens style all pages consistently.
- Profile photo is a bundled image import (src/assets/pavan_profile.jpg) referenced by the shared profile so all portrait placements use the same asset and it works on any host, including non-Lovable deploys.
- Home and project listings reuse ProjectCard and Reveal; shared presentation and intersection-based motion keep both views consistent and honor reduced-motion preferences.
