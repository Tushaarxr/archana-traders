// src/data/products/msPlates.js
import steelSheetsImg from '../../assets/images/ms-plate.jpg';

export const msPlatesData = {
  slug: 'ms-plates',
  name: 'MS Plates',
  image: steelSheetsImg,
  description: 'High-quality MS plates and sheets for structural, industrial and fabrication applications.',
  subcategories: [
    {
      slug: 'steel-plates',
      name: 'Steel Plates',
      description: 'Quality steel plates from leading manufacturers.',
      image: steelSheetsImg,
      products: [
        {
          slug: 'steel-plate',
          name: 'Steel Plate',
          image: steelSheetsImg,
          shortDesc: 'Durable steel plates for various industrial applications.',
          description: 'Steel Plates are manufactured with high quality standards, ensuring adherence to strict industrial specifications. These plates are widely used in construction, manufacturing, and other industries.',
          dimensions: [
            { size: '5mm', dimension: '1250x2500mm', weight: '49.1 kg/sheet', price: 'Price on Request' },
            { size: '6mm', dimension: '1250x2500mm', weight: '58.9 kg/sheet', price: 'Price on Request' },
            { size: '8mm', dimension: '1250x2500mm', weight: '78.5 kg/sheet', price: 'Price on Request' },
            { size: '10mm', dimension: '1250x2500mm', weight: '98.1 kg/sheet', price: 'Price on Request' },
            { size: '12mm', dimension: '1250x2500mm', weight: '117.8 kg/sheet', price: 'Price on Request' },
            { size: '16mm', dimension: '1250x2500mm', weight: '157.1 kg/sheet', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS (IS 2062)' },
            { property: 'Surface', value: 'Black' },
            { property: 'Tensile Strength', value: '410-540 N/mm²' },
            { property: 'Yield Strength', value: 'Min. 250 N/mm²' }
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
    },
    {
      slug: 'specialty-plates',
      name: 'Specialty Steel Plates',
      description: 'Specialized steel plates for specific applications including chequered plates.',
      image: steelSheetsImg,
      products: [
        {
          slug: 'chequered-plate',
          name: 'Chequered Plate',
          image: steelSheetsImg,
          shortDesc: 'Anti-slip chequered plates for flooring and industrial applications.',
          description: 'Chequered plates provide excellent anti-slip properties and are widely used for flooring, staircase, and industrial platform applications.',
          dimensions: [
            { size: '5mm', dimension: '1250x2500mm', weight: '49.1 kg/sheet', price: 'Price on Request' },
            { size: '6mm', dimension: '1250x2500mm', weight: '58.9 kg/sheet', price: 'Price on Request' },
            { size: '8mm', dimension: '1250x2500mm', weight: '78.5 kg/sheet', price: 'Price on Request' },
            { size: '10mm', dimension: '1250x2500mm', weight: '98.1 kg/sheet', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS (IS 2062)' },
            { property: 'Pattern', value: 'Diamond/Tear Drop' },
            { property: 'Surface', value: 'Raised Pattern' },
            { property: 'Tensile Strength', value: '410-540 N/mm²' }
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
    },
    {
      slug: 'general-plates-sheets',
      name: 'General Plates & Sheets',
      description: 'Standard MS plates and sheets for general construction and fabrication.',
      image: steelSheetsImg,
      products: [
        {
          slug: 'ms-sheet',
          name: 'MS Sheet',
          image: steelSheetsImg,
          shortDesc: 'Thin MS sheets for light fabrication work.',
          description: 'Thin gauge MS sheets perfect for light fabrication, ducting, and general metalwork.',
          dimensions: [
            { size: '1mm', dimension: '1250x2500mm', weight: '9.8 kg/sheet', price: 'Price on Request' },
            { size: '1.5mm', dimension: '1250x2500mm', weight: '14.7 kg/sheet', price: 'Price on Request' },
            { size: '2mm', dimension: '1250x2500mm', weight: '19.6 kg/sheet', price: 'Price on Request' },
            { size: '3mm', dimension: '1250x2500mm', weight: '29.4 kg/sheet', price: 'Price on Request' },
            { size: '4mm', dimension: '1250x2500mm', weight: '39.3 kg/sheet', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS (IS 513)' },
            { property: 'Surface', value: 'Black/Galvanized' },
            { property: 'Tensile Strength', value: '380-520 N/mm²' },
            { property: 'Yield Strength', value: 'Min. 230 N/mm²' }
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
