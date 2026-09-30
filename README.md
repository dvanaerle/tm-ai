# Tuinmaximaal AI workspace

Project deliverables, research, and reusable AI skills for Tuinmaximaal.

## Projects

| Project | Purpose | Recorded status |
| --- | --- | --- |
| [Bamboe vlonder](projects/bamboe-vlonder/README.md) | Localized pages, SEO work, and FAQ audit | SEO report ready for human review; publication unverified |
| [Melding blok](projects/melding-blok/README.md) | Localized notification blocks | Exports available; publication unverified |
| [Herroeping](projects/herroeping/README.md) | Combined withdrawal content export | Export available; publication unverified |
| [Actievoorwaarden 10% korting](projects/actievoorwaarden-10-korting/README.md) | Campaign terms and SEO copy | Copy available; publication unverified |
| [Navigation](projects/navigation/README.md) | Navigation image alt texts | Recommendations available; implementation unverified |

## Shared material

- [Design system](skills/tuinmaximaal-design/SKILL.md): the `tuinmaximaal-design` skill. Its [DESIGN.md](skills/tuinmaximaal-design/DESIGN.md) is generated from the Valantic theme; see [Design system sync](#design-system-sync).
- [Brand references](shared/brand/README.md): pointer to the design system and tone-of-voice skills.
- [Skills](skills/): reusable workflows and their supporting references.
- [Evaluations](evals/tuinmaximaal-design.md): fixed test prompts and results for the design skill.
- [Archive](archive/README.md): completed or retired projects.
- `tmp/`: disposable local working files, ignored by Git.
- `.claude/`: tool configuration.

## Folder conventions

Keep a project's exports, translations, research, and audits together under `projects/<project-name>/`. Use lowercase folder names with hyphens. Preserve export filenames when import workflows may depend on them.

Start each project with a short README recording its purpose, status, deliverables, relevant URLs, and next action. Use draft, in review, or complete when verified; otherwise state what is known. Create subfolders such as `pages/`, `blocks/`, `seo/`, or `assets/` only when useful.

Keep reusable guidance in `skills/` and shared brand material in `shared/brand/`. Move completed or retired projects as a whole into `archive/` and update the index and relative links. Store lasting deliverables outside `tmp/`.

## Reorganization

The former top-level `pages/`, `blocks/`, `seo/`, and loose deliverables now live with their projects. The former `resources/tm-impeccable/` and `shared/brand/` design documents are merged into the `tuinmaximaal-design` skill; the former root `DESIGN.md` is archived in `archive/legacy-design/`. Existing export filenames and contents were preserved. Configure any external bookmarks or tools that used the old paths to use these locations.

## Design system sync

The `tuinmaximaal-design` skill's DESIGN.md front matter and generated prose regions, its prototype Tailwind config (`assets/tailwind.config.js`) and the component CSS in its prototype skeleton (`assets/prototype-skeleton.html`) are generated from the Valantic `base` theme. The sync only reads the theme repo; it never writes to it or commits there.

```sh
npm install
npm run design:sync                          # theme at ../../gitlab/devdva02/app/design/frontend/Valantic/base
npm run design:sync -- <path/to/Valantic/base>  # or set TM_THEME_PATH
npm run design:install                       # link the skill into ~/.claude/skills
```

The sync lints DESIGN.md with the pinned `@google/design.md` linter, checks the values quoted in its prose against the theme, and compiles the skeleton CSS with the theme's Tailwind install (run `npm install` in the theme's `web/tailwind` folder first). It exits non-zero on lint errors, prose drift or CSS that doesn't compile. Its remaining warnings are the theme's known contrast exceptions, documented under Colors → Contrast in DESIGN.md.

In a Build, the skill writes only the variant parts and runs `scripts/assemble.mjs` to fill the skeleton with the config and the logo. `npm test` checks the script against the current assets, so run it after a sync.
