// src/data/products/scaffoldingMaterials.js
import scaffoldingImg from '../../assets/images/scaffolding.jpg';

export const scaffoldingMaterialsData = {
  slug: 'scaffolding-materials',
  name: 'Scaffolding Materials',
  image: scaffoldingImg,
  description: 'Complete range of scaffolding materials for construction and industrial applications.',
  subcategories: [
    {
      slug: 'scaffolding-pipes',
      name: 'Scaffolding Pipes',
      description: 'High-quality scaffolding pipes for construction scaffolding systems.',
      image: scaffoldingImg,
      products: [
        {
          slug: 'scaffolding-pipe-48mm',
          name: 'Scaffolding Pipe 48mm',
          image: scaffoldingImg,
          shortDesc: 'Standard 48mm scaffolding pipes for construction scaffolding.',
          description: 'Standard scaffolding pipes manufactured to precise specifications for safe and reliable construction scaffolding systems. These pipes meet all safety standards and regulations.',
          dimensions: [
            { size: '48.3mm OD', thickness: '3.2mm', length: '6m', price: 'Price on Request' },
            { size: '48.3mm OD', thickness: '3.2mm', length: '4m', price: 'Price on Request' },
            { size: '48.3mm OD', thickness: '3.2mm', length: '3m', price: 'Price on Request' },
            { size: '48.3mm OD', thickness: '3.2mm', length: '2m', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS (IS 1239)' },
            { property: 'Surface', value: 'Galvanized' },
            { property: 'Ends', value: 'Plain' },
            { property: 'Standard', value: 'IS 1239 Part 1' },
            { property: 'Load Capacity', value: 'As per IS standards' }
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
          slug: 'scaffolding-pipe-42mm',
          name: 'Scaffolding Pipe 42mm',
          image: scaffoldingImg,
          shortDesc: 'Lightweight 42mm scaffolding pipes for specific applications.',
          description: 'Lightweight scaffolding pipes suitable for specific scaffolding applications where reduced weight is important while maintaining structural integrity.',
          dimensions: [
            { size: '42.4mm OD', thickness: '2.6mm', length: '6m', price: 'Price on Request' },
            { size: '42.4mm OD', thickness: '2.6mm', length: '4m', price: 'Price on Request' },
            { size: '42.4mm OD', thickness: '2.6mm', length: '3m', price: 'Price on Request' },
            { size: '42.4mm OD', thickness: '2.6mm', length: '2m', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS (IS 1239)' },
            { property: 'Surface', value: 'Galvanized' },
            { property: 'Ends', value: 'Plain' },
            { property: 'Standard', value: 'IS 1239 Part 1' },
            { property: 'Load Capacity', value: 'As per IS standards' }
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
      slug: 'scaffolding-accessories',
      name: 'Scaffolding Accessories',
      description: 'Essential accessories for complete scaffolding systems.',
      image: scaffoldingImg,
      products: [
        {
          slug: 'scaffolding-clamps',
          name: 'Scaffolding Clamps',
          image: scaffoldingImg,
          shortDesc: 'Heavy-duty clamps for secure scaffolding connections.',
          description: 'High-quality scaffolding clamps manufactured for secure and reliable connections in scaffolding systems. Available in various types for different applications.',
          dimensions: [
            { type: 'Right Angle Clamp', size: '48.3mm', weight: '1.2kg', price: 'Price on Request' },
            { type: 'Swivel Clamp', size: '48.3mm', weight: '1.3kg', price: 'Price on Request' },
            { type: 'Putlog Clamp', size: '48.3mm', weight: '0.9kg', price: 'Price on Request' },
            { type: 'Sleeve Clamp', size: '48.3mm', weight: '0.8kg', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'Cast Iron/Forged Steel' },
            { property: 'Surface', value: 'Galvanized' },
            { property: 'Load Capacity', value: '25 kN minimum' },
            { property: 'Standard', value: 'EN 74/BS 1139' }
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
          slug: 'scaffolding-boards',
          name: 'Scaffolding Boards',
          image: scaffoldingImg,
          shortDesc: 'Durable scaffolding boards for working platforms.',
          description: 'High-quality scaffolding boards providing safe working platforms for construction workers. Manufactured to strict safety standards.',
          dimensions: [
            { length: '3.9m', width: '230mm', thickness: '38mm', price: 'Price on Request' },
            { length: '3.0m', width: '230mm', thickness: '38mm', price: 'Price on Request' },
            { length: '2.5m', width: '230mm', thickness: '38mm', price: 'Price on Request' },
            { length: '2.0m', width: '230mm', thickness: '38mm', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'Seasoned Timber/Steel' },
            { property: 'Grade', value: 'Construction Grade' },
            { property: 'Load Capacity', value: '270kg/m²' },
            { property: 'Standard', value: 'BS 2482' }
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
          slug: 'base-plates',
          name: 'Base Plates',
          image: scaffoldingImg,
          shortDesc: 'Stable base plates for scaffolding foundation.',
          description: 'Heavy-duty base plates providing stable foundation for scaffolding systems on various ground conditions.',
          dimensions: [
            { size: '150x150mm', thickness: '5mm', weight: '1.0kg', price: 'Price on Request' },
            { size: '200x200mm', thickness: '6mm', weight: '1.9kg', price: 'Price on Request' },
            { size: '250x250mm', thickness: '8mm', weight: '3.9kg', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS' },
            { property: 'Surface', value: 'Galvanized' },
            { property: 'Load Capacity', value: 'Up to 25kN' },
            { property: 'Standard', value: 'EN 74' }
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
