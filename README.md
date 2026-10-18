# Waghoba Foundation — WHF Store

A responsive product catalogue using teal #2e5959 and highlight yellow #efba43, with product search, category filtering, cart quantities and a combined WhatsApp enquiry.

## Files
- index.html: website
- config.js: WhatsApp number and optional Google Sheets CSV URL
- products.csv: starter product data from the provided poster

## Before launch
1. Confirm all prices, pack sizes, ingredients, availability and product descriptions.
2. Add publicly accessible image URLs in the `image` column.
3. Test the WhatsApp order button on a phone. The number is prefilled from the poster: +91 98922 12133.
4. This website does not process payments; it sends an enquiry/order draft to WhatsApp. Review applicable food, alcohol, delivery and product requirements before accepting orders.

## Google Sheets updates
Import products.csv into Google Sheets. Keep headers: id, name, category, price, unit, description, image, featured. Add one product per row. In Google Sheets, use File → Share → Publish to web, choose the product tab and CSV format, publish, and paste the public CSV URL into `csvUrl` in config.js. Redeploy after changing config.js. Publishing makes the sheet data public; don't include private information.

## Free hosting
Netlify: upload the folder containing index.html and config.js using https://app.netlify.com/drop.
GitHub Pages: upload the files to a repository and enable Pages in Settings.

## Fonts
Open Sans is loaded from Google Fonts. Gagalin is specified as a local font; to guarantee it on all devices, add a properly licensed Gagalin webfont file and configure @font-face.
