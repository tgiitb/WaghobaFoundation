// Waghoba Foundation WHF Store settings
window.CATALOG_CONFIG = {
  whatsappNumber: "919892212133",

  // "products" tab (published as CSV)
  csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRluCf5z1NvH4scWy1iRkQjKYbsj_RmvtBv0h55E1lbkUQeceCOzwWMZsta4O407Fqixtnz_Qt61Ngp/pub?gid=335416592&single=true&output=csv",

  // "product pages" tab (published as CSV)
  detailsCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRluCf5z1NvH4scWy1iRkQjKYbsj_RmvtBv0h55E1lbkUQeceCOzwWMZsta4O407Fqixtnz_Qt61Ngp/pub?gid=1729075821&single=true&output=csv",

  // Folder in this repo that holds the product photos. In the sheet's "image" column,
  // write just the file names, separated by | for several photos, e.g.
  //   MAH-005-1.jpeg|MAH-005-2.jpeg
  // (Full https:// links also work and are used as they are.)
  // Any product with no image, or whose file can't be loaded, shows images/default.jpeg
  imageBase: "images/"

  // Optional: where the "Read more" text in product descriptions should link to.
  // Remove the // below and add a comma after the line above to switch it on.
  // , readMoreUrl: "https://waghoba.org/"
};
