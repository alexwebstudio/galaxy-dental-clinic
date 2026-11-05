# Galaxy Dental Clinic

Independent Next.js site for Galaxy Dental Clinic in Astana. The page routes, section order, layout, transitions, animation hooks, and interaction components are copied from the dental prototype. Brand content and colors are customized for Galaxy.

## Run locally

    npm ci
    npm run dev

## Confirmed content

- Four doctors and their specialties come from the supplied brief and clinic review materials.
- The doctor portraits are cropped from the named clinic images. The four work examples are matched by the doctor names on their supplied case images.
- The 2GIS score and review count are shown as 5.0 and 313, as stated in the supplied review export.
- Review snippets link to no destination until the owner provides URLs to the specific reviews.
- Appointment forms open a WhatsApp draft for +7 778 408 2667. The visitor must send the draft in WhatsApp.
- Existing non-doctor photos are preserved from the source prototype.

## Clinic information still needed

- Confirmed street address, opening hours, prices, legal entity and medical license details.
- URLs for individual 2GIS reviews and Instagram posts/reels.
- Final production domain and the approved privacy-policy text.

The project uses an example metadata base until a production domain is selected. Replace it in src/content/site.ts before publishing.

## Independent deployment

Create a new private GitHub repository and a separate Vercel project for this folder. Do not connect the source prototype repository or Vercel project. Project name: galaxy-dental-clinic.
