// src/data/products/msWire.js
import msWireImg from '../../assets/images/ms-wires.jpeg';

export const msWireData = {
  slug: 'ms-wire',
  name: 'MS Wire',
  image: msWireImg,
  description: 'High-quality MS wires for binding, construction, and industrial applications.',
  subcategories: [
    {
      slug: 'binding-wires',
      name: 'Binding Wires',
      description: 'MS binding wires for construction and packaging applications.',
      image: msWireImg,
      products: [
        {
          slug: 'ms-binding-wire',
          name: 'MS Binding Wire',
          image: msWireImg,
          shortDesc: 'Flexible MS binding wire for construction and packaging.',
          description: 'MS Binding Wire is manufactured with excellent flexibility and strength for binding applications in construction, packaging, and general industrial use.',
          dimensions: [
            { size: '16 Gauge', diameter: '1.6mm', weight: '50kg/coil', price: 'Price on Request' },
            { size: '18 Gauge', diameter: '1.2mm', weight: '50kg/coil', price: 'Price on Request' },
            { size: '20 Gauge', diameter: '0.9mm', weight: '25kg/coil', price: 'Price on Request' },
            { size: '22 Gauge', diameter: '0.7mm', weight: '25kg/coil', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS' },
            { property: 'Surface', value: 'Black/Galvanized' },
            { property: 'Tensile Strength', value: '350-500 N/mm²' },
            { property: 'Elongation', value: 'Min. 10%' }
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
