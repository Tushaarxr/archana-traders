// src/data/products/msSteelBar.js
import msBarImg from '../../assets/images/ms-square-bars.jpg';
import msroundBarImg from '../../assets/images/ms-round-bars.jpeg';

export const msSteelBarData = {
  slug: 'ms-steel-bar',
  name: 'MS Steel Bar',
  image: msBarImg,
  description: 'High-quality MS bars for construction and fabrication applications.',
  subcategories: [
    {
      slug: 'ms-bars',
      name: 'MS Bars',
      description: 'Standard MS bars for various construction and industrial applications.',
      image: msBarImg,
      products: [
        {
          slug: 'ms-square-bar',
          name: 'MS Square Bar',
          image: msBarImg, // Note: You mentioned to change this photo as it's of TMT - you'll need to update the image
          shortDesc: 'Square MS bars for structural and fabrication work.',
          description: 'MS Square Bars are precision-manufactured for excellent dimensional accuracy. These bars are widely used in construction, manufacturing, and fabrication for various structural applications.',
          dimensions: [
            { size: '10x10mm', weight: '0.785 kg/m', length: '6m', price: 'Price on Request' },
            { size: '12x12mm', weight: '1.131 kg/m', length: '6m', price: 'Price on Request' },
            { size: '16x16mm', weight: '2.011 kg/m', length: '6m', price: 'Price on Request' },
            { size: '20x20mm', weight: '3.142 kg/m', length: '6m', price: 'Price on Request' },
            { size: '25x25mm', weight: '4.910 kg/m', length: '6m', price: 'Price on Request' },
            { size: '32x32mm', weight: '8.042 kg/m', length: '6m', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS (IS 2062)' },
            { property: 'Shape', value: 'Square' },
            { property: 'Surface', value: 'Black/Bright' },
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
        },
        {
          slug: 'ms-round-bar',
          name: 'MS Round Bar',
          image: msroundBarImg, // Note: You mentioned to change this photo as it's of TMT - you'll need to update the image
          shortDesc: 'Round MS bars for machining and fabrication.',
          description: 'MS Round Bars are manufactured with excellent surface finish and dimensional accuracy. These bars are ideal for machining, turning, and various fabrication applications.',
          dimensions: [
            { size: '10mm dia', weight: '0.617 kg/m', length: '6m', price: 'Price on Request' },
            { size: '12mm dia', weight: '0.888 kg/m', length: '6m', price: 'Price on Request' },
            { size: '16mm dia', weight: '1.578 kg/m', length: '6m', price: 'Price on Request' },
            { size: '20mm dia', weight: '2.466 kg/m', length: '6m', price: 'Price on Request' },
            { size: '25mm dia', weight: '3.854 kg/m', length: '6m', price: 'Price on Request' },
            { size: '32mm dia', weight: '6.313 kg/m', length: '6m', price: 'Price on Request' },
          ],
          specifications: [
            { property: 'Material', value: 'MS (IS 2062)' },
            { property: 'Shape', value: 'Round' },
            { property: 'Surface', value: 'Black/Bright' },
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
    }
  ]
};
