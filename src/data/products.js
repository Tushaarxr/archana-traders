// src/data/products.js
import tmtBarsImg from '../assets/images/tmt-bars.jpg';
import steelPipesImg from '../assets/images/ms-pipes.jpg';
import steelSheetsImg from '../assets/images/steel-sheets.jpg';
import anglesImg from '../assets/images/ms-angles.jpg';
import channelsImg from '../assets/images/ms-channel.jpg';
import beamsImg from '../assets/images/ms-beams.jpg';

export const steelCatalog = [
  {
    slug: 'tmt-bars',
    name: 'TMT Bars',
    image: tmtBarsImg,
    description: 'High-strength Thermo-Mechanically Treated steel bars for reinforced concrete structures with superior bendability and weldability.',
    subcategories: [
      {
        slug: 'primary-branded-tmt-bar',
        name: 'Primary Branded TMT Bar',
        description: 'Premium grade Fe 500D TMT bars offering superior ductility and earthquake resistance.',
        image: tmtBarsImg,
        products: [
          {
            slug: 'jsw-neosteel',
            name: 'JSW Neosteel TMT',
            image: tmtBarsImg,
            shortDesc: 'Premium quality JSW Neosteel TMT bars with superior strength and bendability.',
            description: 'JSW Neosteel TMT Bars are manufactured using the latest German technology. They provide superior earthquake resistance with their unique dual-strength core and outer surface. These bars exhibit higher strength, better ductility, and excellent bendability, making them ideal for all construction needs.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500D' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 565 MPa' },
              { property: 'Elongation', value: '≥ 16%' },
              { property: 'Bend Test', value: 'No cracking' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 2-3 business days for standard sizes.',
              'Custom sizes available on request with additional lead time.'
            ],
            benefits: [
              'Superior earthquake resistance',
              'Higher ductility and bendability',
              'Uniform strength throughout the bar',
              'Better bonding with concrete',
              'Rust-resistant properties'
            ]
          },
          {
            slug: 'tata-tiscon',
            name: 'TATA Tiscon TMT',
            image: tmtBarsImg,
            shortDesc: 'Industry-leading TATA Tiscon TMT with superior corrosion resistance.',
            description: 'TATA Tiscon TMT bars are manufactured using state-of-the-art technology ensuring uniform strength distribution. These bars offer excellent earthquake resistance with their perfect combination of strength and ductility. TATA Tiscon also features enhanced corrosion resistance, making it ideal for coastal areas and aggressive environments.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500D' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 565 MPa' },
              { property: 'Elongation', value: '≥ 16%' },
              { property: 'Bend Test', value: 'No cracking' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 2-3 business days for standard sizes.',
              'Custom sizes available on request with additional lead time.'
            ],
            benefits: [
              'Enhanced corrosion resistance',
              'Uniform strength distribution',
              'Higher fatigue resistance',
              'Excellent weldability',
              'Superior bonding with concrete'
            ]
          }
        ]
      },
      {
        slug: 'fe-550d-tmt',
        name: 'Fe 550D TMT',
        description: 'Higher strength Fe 550D TMT bars for heavy-duty construction projects.',
        image: tmtBarsImg,
        products: [
          {
            slug: 'sail-tmt',
            name: 'SAIL TMT',
            image: tmtBarsImg,
            shortDesc: 'Reliable SAIL TMT bars manufactured by Steel Authority of India Limited.',
            description: 'SAIL TMT Bars are manufactured by the Steel Authority of India Limited, ensuring stringent quality control and adherence to national standards. These bars feature a uniform purity level and chemical composition, offering consistency across batches. SAIL TMT bars are known for their durability and reliable performance in all types of construction projects.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
              { size: '32mm', weight: '6.313 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 550D' },
              { property: 'Yield Strength', value: '≥ 550 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 650 MPa' },
              { property: 'Elongation', value: '≥ 14.5%' },
              { property: 'Bend Test', value: 'No cracking' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 2-3 business days for standard sizes.',
              'Custom sizes available on request with additional lead time.'
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'steel-pipes',
    name: 'Steel Pipes',
    image: steelPipesImg,
    description: 'Durable steel pipes for plumbing, structural, and mechanical applications, available in both seamless and welded variants.',
    subcategories: [
      {
        slug: 'ms-pipes',
        name: 'MS Pipes',
        description: 'Mild Steel pipes for general construction, water transport, and structural applications.',
        image: steelPipesImg,
        products: [
          {
            slug: 'tata-ms-pipes',
            name: 'Tata MS Pipes',
            image: steelPipesImg,
            shortDesc: 'Premium quality Tata MS Pipes with ISI marking.',
            description: 'Tata MS Pipes are manufactured using high-grade raw materials and advanced technology. These pipes feature excellent weldability, corrosion resistance, and uniform wall thickness. Ideal for water, gas, and oil transportation, as well as structural applications, these pipes meet all Indian and international quality standards.',
            dimensions: [
              { size: '1/2 inch', thickness: '2.0mm', length: '6m', price: 'Price on Request' },
              { size: '3/4 inch', thickness: '2.0mm', length: '6m', price: 'Price on Request' },
              { size: '1 inch', thickness: '2.9mm', length: '6m', price: 'Price on Request' },
              { size: '1.5 inch', thickness: '3.2mm', length: '6m', price: 'Price on Request' },
              { size: '2 inch', thickness: '3.6mm', length: '6m', price: 'Price on Request' },
              { size: '3 inch', thickness: '4.0mm', length: '6m', price: 'Price on Request' },
              { size: '4 inch', thickness: '4.5mm', length: '6m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 1239)' },
              { property: 'Ends', value: 'Plain/Beveled/Threaded' },
              { property: 'Surface', value: 'Black/Galvanized' },
              { property: 'Tensile Strength', value: '320-510 N/mm²' },
              { property: 'Yield Strength', value: 'Min. 215 N/mm²' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 3-5 business days.',
              'Minimum order quantity may apply for non-standard sizes.'
            ]
          }
        ]
      },
      {
        slug: 'seamless-pipes',
        name: 'Seamless Pipes',
        description: 'High-pressure resistant seamless pipes for industrial applications.',
        image: steelPipesImg,
        products: [
          {
            slug: 'ismt-seamless-pipes',
            name: 'ISMT Seamless Pipes',
            image: steelPipesImg,
            shortDesc: 'High-quality ISMT Seamless Pipes for critical industrial applications.',
            description: 'ISMT Seamless Pipes are manufactured through advanced processes ensuring uniform wall thickness and superior strength. These pipes are ideal for high-pressure applications in oil & gas, petrochemical, and power generation industries. The absence of welds eliminates potential weak points, making them perfect for critical applications requiring reliability and safety.',
            dimensions: [
              { size: '1/2 inch', thickness: '2.0mm', length: '6m', price: 'Price on Request' },
              { size: '3/4 inch', thickness: '2.0mm', length: '6m', price: 'Price on Request' },
              { size: '1 inch', thickness: '2.9mm', length: '6m', price: 'Price on Request' },
              { size: '1.5 inch', thickness: '3.2mm', length: '6m', price: 'Price on Request' },
              { size: '2 inch', thickness: '3.6mm', length: '6m', price: 'Price on Request' },
              { size: '3 inch', thickness: '4.0mm', length: '6m', price: 'Price on Request' },
              { size: '4 inch', thickness: '4.5mm', length: '6m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Carbon Steel (ASTM A106/A53)' },
              { property: 'Ends', value: 'Plain/Beveled' },
              { property: 'Surface', value: 'Black/Oiled' },
              { property: 'Tensile Strength', value: '415-550 N/mm²' },
              { property: 'Yield Strength', value: 'Min. 240 N/mm²' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 5-7 business days for standard sizes.',
              'Custom specifications available on request with additional lead time.'
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'structural-steel',
    name: 'Structural Steel',
    image: beamsImg,
    description: 'High-quality structural steel products including angles, channels, and beams for construction and fabrication.',
    subcategories: [
      {
        slug: 'angles',
        name: 'Steel Angles',
        description: 'L-shaped structural steel for construction, manufacturing, and support applications.',
        image: anglesImg,
        products: [
          {
            slug: 'sail-angles',
            name: 'SAIL Angles',
            image: anglesImg,
            shortDesc: 'Durable SAIL steel angles for structural applications.',
            description: 'SAIL Angles are manufactured by Steel Authority of India Limited, ensuring high quality and adherence to strict industrial standards. These L-shaped structural members are widely used in construction, manufacturing, and other industries for support structures, frames, and braces. SAIL Angles provide excellent strength-to-weight ratio and are easy to fabricate and weld.',
            dimensions: [
              { size: '25x25x3mm', weight: '1.1 kg/m', length: '6m', price: 'Price on Request' },
              { size: '25x25x5mm', weight: '1.8 kg/m', length: '6m', price: 'Price on Request' },
              { size: '40x40x5mm', weight: '3.0 kg/m', length: '6m', price: 'Price on Request' },
              { size: '50x50x6mm', weight: '4.5 kg/m', length: '6m', price: 'Price on Request' },
              { size: '65x65x6mm', weight: '5.9 kg/m', length: '6m', price: 'Price on Request' },
              { size: '75x75x6mm', weight: '6.9 kg/m', length: '6m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062/IS 808)' },
              { property: 'Type', value: 'Equal/Unequal' },
              { property: 'Surface', value: 'Black/Galvanized' },
              { property: 'Tensile Strength', value: '410-540 N/mm²' },
              { property: 'Yield Strength', value: 'Min. 250 N/mm²' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 2-4 business days for standard sizes.',
              'Custom sizes available on request with additional lead time.'
            ]
          }
        ]
      },
      {
        slug: 'channels',
        name: 'Steel Channels',
        description: 'C-shaped structural steel for beams, frames, and supports.',
        image: channelsImg,
        products: [
          {
            slug: 'jindal-channels',
            name: 'Jindal Channels',
            image: channelsImg,
            shortDesc: 'Premium Jindal steel channels for construction and industrial use.',
            description: 'Jindal Channels are high-quality C-shaped structural steel members used extensively in construction, manufacturing, and infrastructure projects. These channels offer excellent load-bearing capacity and are ideal for beams, frames, and support structures. Manufactured by Jindal Steel, these channels adhere to strict quality standards and offer consistent performance across applications.',
            dimensions: [
              { size: 'ISMC 75', weight: '7.14 kg/m', height: '75mm', width: '40mm', price: 'Price on Request' },
              { size: 'ISMC 100', weight: '9.56 kg/m', height: '100mm', width: '50mm', price: 'Price on Request' },
              { size: 'ISMC 125', weight: '13.1 kg/m', height: '125mm', width: '65mm', price: 'Price on Request' },
              { size: 'ISMC 150', weight: '17.0 kg/m', height: '150mm', width: '75mm', price: 'Price on Request' },
              { size: 'ISMC 200', weight: '24.1 kg/m', height: '200mm', width: '75mm', price: 'Price on Request' },
              { size: 'ISMC 250', weight: '32.3 kg/m', height: '250mm', width: '82mm', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062/IS 808)' },
              { property: 'Type', value: 'ISMC/ISLC' },
              { property: 'Surface', value: 'Black' },
              { property: 'Tensile Strength', value: '410-540 N/mm²' },
              { property: 'Yield Strength', value: 'Min. 250 N/mm²' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 3-5 business days for standard sizes.',
              'Custom lengths available on request with additional lead time.'
            ]
          }
        ]
      },
      {
        slug: 'beams',
        name: 'Steel Beams',
        description: 'I-shaped and H-shaped beams for heavy-duty structural applications.',
        image: beamsImg,
        products: [
          {
            slug: 'tata-structura',
            name: 'Tata Structura Beams',
            image: beamsImg,
            shortDesc: 'High-strength Tata Structura Beams for commercial and industrial construction.',
            description: 'Tata Structura Beams are premium I-shaped and H-shaped structural steel members designed for heavy-duty applications. These beams offer superior load-bearing capacity and are used in commercial buildings, industrial structures, bridges, and other infrastructure projects. Manufactured by Tata Steel, these beams come with consistent quality, dimensional accuracy, and excellent weldability.',
            dimensions: [
              { size: 'ISMB 100', weight: '11.5 kg/m', height: '100mm', width: '75mm', price: 'Price on Request' },
              { size: 'ISMB 150', weight: '16.8 kg/m', height: '150mm', width: '80mm', price: 'Price on Request' },
              { size: 'ISMB 200', weight: '25.4 kg/m', height: '200mm', width: '100mm', price: 'Price on Request' },
              { size: 'ISMB 250', weight: '37.3 kg/m', height: '250mm', width: '125mm', price: 'Price on Request' },
              { size: 'ISMB 300', weight: '44.2 kg/m', height: '300mm', width: '140mm', price: 'Price on Request' },
              { size: 'ISMB 400', weight: '61.6 kg/m', height: '400mm', width: '140mm', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062/IS 808)' },
              { property: 'Type', value: 'ISMB/ISHB/UB/UC' },
              { property: 'Surface', value: 'Black' },
              { property: 'Tensile Strength', value: '410-540 N/mm²' },
              { property: 'Yield Strength', value: 'Min. 250 N/mm²' }
            ],
            terms: [
              'Prices subject to change as per market conditions and without prior notice.',
              'GST & Freight charges extra as applicable.',
              'Material Test Certificate (MTC) provided on request.',
              'Delivery within 5-7 business days for standard sizes.',
              'Cutting and fabrication services available on request.'
            ]
          }
        ]
      }
    ]
  }
];
