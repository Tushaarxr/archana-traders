// src/data/products/roofingSheet.js
import roofingSheetImg from '../../assets/images/roofing-sheet.jpg';
import galroofingSheetImg from '../../assets/images/Galvanized-Roofing-sheet.jpg';
import colorroofingSheetImg from '../../assets/images/color-coated-roofing-sheets.jpg';

export const roofingSheetData = {
  slug: 'roofing-sheet',
  name: 'Roofing Sheet',
  image: roofingSheetImg,
  description: 'High-quality roofing sheets for residential, commercial, and industrial applications.',
  subcategories: [
    {
      slug: 'specialty-roofing-sheets',
      name: 'Specialty Roofing Sheets',
      description: 'Specialized roofing sheets for specific applications.',
      image: roofingSheetImg,
      products: [
        {
          slug: 'galvalume-roofing-sheet',
          name: 'GALVALUME Roofing Sheet',
          image: galroofingSheetImg,
          shortDesc: 'Premium GALVALUME roofing sheets with superior corrosion resistance.',
          description: 'GALVALUME Roofing Sheets are coated with aluminum-zinc alloy, providing superior corrosion resistance and heat reflectivity.',
          dimensions: [
            { thickness: '0.4mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            { thickness: '0.45mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            { thickness: '0.5mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'Steel with Al-Zn Coating' },
            { property: 'Coating', value: 'AZ150 Aluminum-Zinc' },
            { property: 'Profile', value: 'Corrugated/Trapezoidal' },
            { property: 'Reflectivity', value: 'High' }
          ],
          terms: [
            'Prices are subject to change based on market conditions without prior notice.',
            'GST and other applicable taxes are extra.',
            'Loading charges will be borne by the buyer.',
            'Advance payment is required before dispatch of goods.',
            'All sales are subject to our standard terms and conditions.'
          ]
        },
        {
          slug: 'color-coated-roofing-sheet',
          name: 'Color Coated Roofing Sheet',
          image: colorroofingSheetImg,
          shortDesc: 'Attractive color coated roofing sheets for aesthetic applications.',
          description: 'Color Coated Roofing Sheets combine durability with aesthetic appeal, available in various colors and finishes.',
          dimensions: [
            { thickness: '0.4mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            { thickness: '0.45mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            { thickness: '0.5mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'Pre-painted Galvanized Steel' },
            { property: 'Coating', value: 'PVDF/SMP/PE' },
            { property: 'Colors', value: 'Multiple Options' },
            { property: 'Profile', value: 'Corrugated/Trapezoidal' }
          ],
          terms: [
            'Prices are subject to change based on market conditions without prior notice.',
            'GST and other applicable taxes are extra.',
            'Loading charges will be borne by the buyer.',
            'Advance payment is required before dispatch of goods.',
            'All sales are subject to our standard terms and conditions.'
          ]
        }
      ]
    }
  ]
};
