# 11: Content block and tertiary button

**What to build:** Two fixes from the user's review of i4 prototypes.

- **Content block.** Builds hand-rolled the text + image block and got it wrong: the image sat in the grid flow with `h-full`, so the photo's ratio set the height and the text floated, or the image sat in padding with its own rounding. Figma (`1358:30317`: `1358:30318` image right, `1358:30329` video left) and the theme's PageBuilder block (`content-types/page-builder-block-image-with-text.css`) both let the text set the height and the image cover its half. The skeleton now carries `.content-block`, `.content-block-text`, `.content-block-actions`, `.content-block-media` (`--media-right` modifier) and `.content-block-play`; DESIGN.md gives the markup, and build and audit require and check it.
- **Tertiary button.** The theme paints `.btn-tertiary` with a white fill and border, which shows as a white box on beige and sand. The house style drops both: the skeleton makes them transparent, the sync drops them from the front matter tokens, and the prose, build and audit say so.

**Blocked by:** None.

**Status:** done

- [x] The sync regenerates the skeleton and front matter with 0 lint errors, 0 drift and compiling prototype CSS.
- [x] A test page (`tmp/prototypes/cb-check/`) matches the Figma content blocks at `xl` and stacks image-over-text at 375px; the tertiary button has a transparent fill and border on sand.
