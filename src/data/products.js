// src/data/products.js

import tmtBarsImg from '../assets/images/tmt-bars.jpg';
import steelPipesImg from '../assets/images/ms-pipes.jpg';
import steelSheetsImg from '../assets/images/ms-plate.jpg';
import anglesImg from '../assets/images/ms-angles.jpg';
import channelsImg from '../assets/images/ms-channel.jpg';
import beamsImg from '../assets/images/ms-beams.jpg';
import msPlateImg from '../assets/images/ms-plate.jpg';
import msBarImg from '../assets/images/ms-bars.jpg';
import msWireImg from '../assets/images/ms-wires.jpeg';
import roofingSheetImg from '../assets/images/roofing-sheet.jpg';
import scaffoldingImg from '../assets/images/scaffolding.jpg';
import flatPattiImg from '../assets/images/ms-flat-patti.jpg';

export const steelCatalog = [
  {
    slug: 'tmt-bars',
    name: 'TMT Bars',
    image: tmtBarsImg,
    description: 'High-strength Thermo-Mechanically Treated steel bars for reinforced concrete structures with superior bendability and weldability.',
    subcategories: [
      {
        slug: 'raipur-tmt-bar',
        name: 'Raipur TMT Bar',
        description: 'Quality TMT bars manufactured in Raipur steel plants, known for consistency and reliability.',
        image: tmtBarsImg,
        products: [
          {
            slug: 'premium-tmt-bar-fe500',
            name: 'Premium TMT Bar Fe500',
            image: tmtBarsImg,
            shortDesc: 'High-quality Fe500 TMT bars with consistent strength and durability.',
            description: 'Premium TMT Bars are manufactured using advanced technology ensuring uniform strength distribution. These bars offer excellent earthquake resistance with optimal strength and ductility, making them ideal for residential and commercial construction projects.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 545 MPa' },
              { property: 'Elongation', value: '≥ 14.5%' },
              { property: 'Bend Test', value: 'No cracking' }
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
            slug: 'standard-tmt-bar-fe500',
            name: 'Standard TMT Bar Fe500',
            image: tmtBarsImg,
            shortDesc: 'Reliable Fe500 TMT bars for construction applications.',
            description: 'Standard TMT bars are engineered for exceptional performance in construction applications. These bars provide excellent strength, ductility, and corrosion resistance.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 545 MPa' },
              { property: 'Elongation', value: '≥ 14.5%' },
              { property: 'Bend Test', value: 'No cracking' }
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
            slug: 'commercial-tmt-bar',
            name: 'Commercial TMT Bar',
            image: tmtBarsImg,
            shortDesc: 'Cost-effective TMT bars for general construction needs.',
            description: 'Commercial TMT bars are manufactured with precision and quality control to ensure optimal performance in all construction projects. These bars offer excellent strength and durability.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 545 MPa' },
              { property: 'Elongation', value: '≥ 14.5%' },
              { property: 'Bend Test', value: 'No cracking' }
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
            slug: 'construction-grade-tmt',
            name: 'Construction Grade TMT',
            image: tmtBarsImg,
            shortDesc: 'Heavy-duty TMT bars for major construction projects.',
            description: 'Construction Grade TMT bars provide excellent strength and durability for various construction applications. Manufactured with advanced technology for consistent quality.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 545 MPa' },
              { property: 'Elongation', value: '≥ 14.5%' },
              { property: 'Bend Test', value: 'No cracking' }
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
        slug: 'raigarh-tmt-bar',
        name: 'Raigarh TMT Bar',
        description: 'Superior quality TMT bars from Raigarh steel plants for construction excellence.',
        image: tmtBarsImg,
        products: [
          {
            slug: 'premium-tmt-raigarh',
            name: 'Premium TMT Raigarh',
            image: tmtBarsImg,
            shortDesc: 'High-performance TMT bars for structural applications.',
            description: 'Premium TMT bars from Raigarh are engineered for superior performance in construction projects, offering excellent strength and durability.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 545 MPa' },
              { property: 'Elongation', value: '≥ 14.5%' },
              { property: 'Bend Test', value: 'No cracking' }
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
            slug: 'thermex-tmt-fe500',
            name: 'Thermex TMT Fe500',
            image: tmtBarsImg,
            shortDesc: 'Premium Thermex Fe500 TMT bars for superior construction.',
            description: 'Thermex Fe500 TMT bars are manufactured with advanced technology to provide excellent strength and durability for all construction needs.',
            dimensions: [
              { size: '8mm', weight: '0.395 kg/m', price: 'Price on Request' },
              { size: '10mm', weight: '0.617 kg/m', price: 'Price on Request' },
              { size: '12mm', weight: '0.888 kg/m', price: 'Price on Request' },
              { size: '16mm', weight: '1.580 kg/m', price: 'Price on Request' },
              { size: '20mm', weight: '2.469 kg/m', price: 'Price on Request' },
              { size: '25mm', weight: '3.858 kg/m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Grade', value: 'Fe 500' },
              { property: 'Yield Strength', value: '≥ 500 MPa' },
              { property: 'Ultimate Tensile Strength', value: '≥ 545 MPa' },
              { property: 'Elongation', value: '≥ 14.5%' },
              { property: 'Bend Test', value: 'No cracking' }
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
            slug: 'raigarh-fe550d-tmt',
            name: 'Raigarh Fe550D TMT',
            image: tmtBarsImg,
            shortDesc: 'High-grade Fe550D TMT bars for heavy construction.',
            description: 'Raigarh Fe550D TMT bars offer superior strength and ductility for demanding construction projects. Ideal for high-rise buildings and major infrastructure.',
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
  },
  {
    slug: 'mild-steel-plates',
    name: 'Mild Steel Plates',
    image: steelSheetsImg,
    description: 'High-quality mild steel plates and sheets for structural, industrial and fabrication applications.',
    subcategories: [
      {
        slug: 'branded-steel-plates',
        name: 'Branded Steel Plates',
        description: 'Premium quality steel plates from leading manufacturers.',
        image: steelSheetsImg,
        products: [
          {
            slug: 'premium-steel-plate',
            name: 'Premium Steel Plate',
            image: steelSheetsImg,
            shortDesc: 'Durable premium steel plates for various industrial applications.',
            description: 'Premium Steel Plates are manufactured with high quality standards, ensuring adherence to strict industrial specifications. These plates are widely used in construction, manufacturing, and other industries.',
            dimensions: [
              { size: '5mm', dimension: '1250x2500mm', weight: '49.1 kg/sheet', price: 'Price on Request' },
              { size: '6mm', dimension: '1250x2500mm', weight: '58.9 kg/sheet', price: 'Price on Request' },
              { size: '8mm', dimension: '1250x2500mm', weight: '78.5 kg/sheet', price: 'Price on Request' },
              { size: '10mm', dimension: '1250x2500mm', weight: '98.1 kg/sheet', price: 'Price on Request' },
              { size: '12mm', dimension: '1250x2500mm', weight: '117.8 kg/sheet', price: 'Price on Request' },
              { size: '16mm', dimension: '1250x2500mm', weight: '157.1 kg/sheet', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
          },
          {
            slug: 'industrial-grade-plate',
            name: 'Industrial Grade Plate',
            image: steelSheetsImg,
            shortDesc: 'Premium industrial grade steel plates for construction use.',
            description: 'Industrial Grade steel plates are manufactured with precision and quality control, ensuring consistent performance across all applications.',
            dimensions: [
              { size: '5mm', dimension: '1250x2500mm', weight: '49.1 kg/sheet', price: 'Price on Request' },
              { size: '6mm', dimension: '1250x2500mm', weight: '58.9 kg/sheet', price: 'Price on Request' },
              { size: '8mm', dimension: '1250x2500mm', weight: '78.5 kg/sheet', price: 'Price on Request' },
              { size: '10mm', dimension: '1250x2500mm', weight: '98.1 kg/sheet', price: 'Price on Request' },
              { size: '12mm', dimension: '1250x2500mm', weight: '117.8 kg/sheet', price: 'Price on Request' },
              { size: '16mm', dimension: '1250x2500mm', weight: '157.1 kg/sheet', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
          },
          {
            slug: 'commercial-grade-plate',
            name: 'Commercial Grade Plate',
            image: steelSheetsImg,
            shortDesc: 'High-quality commercial grade steel plates for demanding applications.',
            description: 'Commercial Grade steel plates are engineered for superior performance in construction and industrial applications.',
            dimensions: [
              { size: '5mm', dimension: '1250x2500mm', weight: '49.1 kg/sheet', price: 'Price on Request' },
              { size: '6mm', dimension: '1250x2500mm', weight: '58.9 kg/sheet', price: 'Price on Request' },
              { size: '8mm', dimension: '1250x2500mm', weight: '78.5 kg/sheet', price: 'Price on Request' },
              { size: '10mm', dimension: '1250x2500mm', weight: '98.1 kg/sheet', price: 'Price on Request' },
              { size: '12mm', dimension: '1250x2500mm', weight: '117.8 kg/sheet', price: 'Price on Request' },
              { size: '16mm', dimension: '1250x2500mm', weight: '157.1 kg/sheet', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
        description: 'Specialized steel plates for specific applications including chequered plates and industrial liners.',
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
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
          },
          {
            slug: 'industrial-plate',
            name: 'Industrial Plate',
            image: steelSheetsImg,
            shortDesc: 'Heavy-duty industrial plates for manufacturing and construction.',
            description: 'Industrial plates are designed for heavy-duty applications in manufacturing and construction industries.',
            dimensions: [
              { size: '8mm', dimension: '1250x2500mm', weight: '78.5 kg/sheet', price: 'Price on Request' },
              { size: '10mm', dimension: '1250x2500mm', weight: '98.1 kg/sheet', price: 'Price on Request' },
              { size: '12mm', dimension: '1250x2500mm', weight: '117.8 kg/sheet', price: 'Price on Request' },
              { size: '16mm', dimension: '1250x2500mm', weight: '157.1 kg/sheet', price: 'Price on Request' },
              { size: '20mm', dimension: '1250x2500mm', weight: '196.3 kg/sheet', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
        slug: 'general-plates-sheets',
        name: 'General Plates & Sheets',
        description: 'Standard mild steel plates and sheets for general construction and fabrication.',
        image: steelSheetsImg,
        products: [
          {
            slug: 'mild-steel-plate',
            name: 'Mild Steel Plate',
            image: steelSheetsImg,
            shortDesc: 'Standard mild steel plates for general construction applications.',
            description: 'General purpose mild steel plates suitable for various construction and fabrication needs.',
            dimensions: [
              { size: '5mm', dimension: '1250x2500mm', weight: '49.1 kg/sheet', price: 'Price on Request' },
              { size: '6mm', dimension: '1250x2500mm', weight: '58.9 kg/sheet', price: 'Price on Request' },
              { size: '8mm', dimension: '1250x2500mm', weight: '78.5 kg/sheet', price: 'Price on Request' },
              { size: '10mm', dimension: '1250x2500mm', weight: '98.1 kg/sheet', price: 'Price on Request' },
              { size: '12mm', dimension: '1250x2500mm', weight: '117.8 kg/sheet', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
          },
          {
            slug: 'mild-steel-sheet',
            name: 'Mild Steel Sheet',
            image: steelSheetsImg,
            shortDesc: 'Thin mild steel sheets for light fabrication work.',
            description: 'Thin gauge mild steel sheets perfect for light fabrication, ducting, and general metalwork.',
            dimensions: [
              { size: '1mm', dimension: '1250x2500mm', weight: '9.8 kg/sheet', price: 'Price on Request' },
              { size: '1.5mm', dimension: '1250x2500mm', weight: '14.7 kg/sheet', price: 'Price on Request' },
              { size: '2mm', dimension: '1250x2500mm', weight: '19.6 kg/sheet', price: 'Price on Request' },
              { size: '3mm', dimension: '1250x2500mm', weight: '29.4 kg/sheet', price: 'Price on Request' },
              { size: '4mm', dimension: '1250x2500mm', weight: '39.3 kg/sheet', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 513)' },
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
            slug: 'ms-pipe-raipur',
            name: 'MS Pipe Raipur',
            image: steelPipesImg,
            shortDesc: 'High-quality MS pipes from Raipur steel mills.',
            description: 'MS Pipes from Raipur are manufactured with precision and quality control to ensure excellent performance in construction applications.',
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
              'Prices are subject to change based on market conditions without prior notice.',
              'GST and other applicable taxes are extra.',
              'Loading charges will be borne by the buyer.',
              'Advance payment is required before dispatch of goods.',
              'All sales are subject to our standard terms and conditions.'
            ]
          },
          {
            slug: 'ms-pipe-raigarh',
            name: 'MS Pipe Raigarh',
            image: steelPipesImg,
            shortDesc: 'Reliable MS pipes from Raigarh steel mills.',
            description: 'MS Pipes from Raigarh offer excellent quality and performance for various construction and industrial applications.',
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
        slug: 'primary-branded-ms-pipe',
        name: 'Primary Branded MS Pipe',
        description: 'Premium branded MS pipes from leading manufacturers.',
        image: steelPipesImg,
        products: [
          {
            slug: 'premium-ms-pipes',
            name: 'Premium MS Pipes',
            image: steelPipesImg,
            shortDesc: 'Premium quality MS Pipes with ISI marking.',
            description: 'Premium MS Pipes are manufactured using high-grade raw materials and advanced technology. These pipes feature excellent weldability, corrosion resistance, and uniform wall thickness. Ideal for water, gas, and oil transportation, as well as structural applications.',
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
        slug: 'seamless-pipes',
        name: 'Seamless Pipes',
        description: 'High-pressure resistant seamless pipes for industrial applications.',
        image: steelPipesImg,
        products: [
          {
            slug: 'premium-seamless-pipes',
            name: 'Premium Seamless Pipes',
            image: steelPipesImg,
            shortDesc: 'High-quality seamless pipes for critical industrial applications.',
            description: 'Premium Seamless Pipes are manufactured through advanced processes ensuring uniform wall thickness and superior strength. These pipes are ideal for high-pressure applications in oil & gas, petrochemical, and power generation industries.',
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
            slug: 'premium-steel-angles',
            name: 'Premium Steel Angles',
            image: anglesImg,
            shortDesc: 'Durable premium steel angles for structural applications.',
            description: 'Premium Steel Angles are manufactured with high quality standards, ensuring adherence to strict industrial specifications. These L-shaped structural members are widely used in construction, manufacturing, and other industries for support structures, frames, and braces.',
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
              'Prices are subject to change based on market conditions without prior notice.',
              'GST and other applicable taxes are extra.',
              'Loading charges will be borne by the buyer.',
              'Advance payment is required before dispatch of goods.',
              'All sales are subject to our standard terms and conditions.'
            ]
          },
          {
            slug: 'ms-angle-raipur',
            name: 'MS Angle Raipur',
            image: anglesImg,
            shortDesc: 'Reliable MS angles from Raipur steel mills.',
            description: 'MS Angles from Raipur offer excellent quality and performance for various structural and construction applications.',
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
              'Prices are subject to change based on market conditions without prior notice.',
              'GST and other applicable taxes are extra.',
              'Loading charges will be borne by the buyer.',
              'Advance payment is required before dispatch of goods.',
              'All sales are subject to our standard terms and conditions.'
            ]
          },
          {
            slug: 'ms-angle-raigarh',
            name: 'MS Angle Raigarh',
            image: anglesImg,
            shortDesc: 'High-quality MS angles from Raigarh steel mills.',
            description: 'MS Angles from Raigarh are manufactured with advanced technology to ensure superior performance in structural applications.',
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
        slug: 'channels',
        name: 'Steel Channels',
        description: 'C-shaped structural steel for beams, frames, and supports.',
        image: channelsImg,
        products: [
          {
            slug: 'premium-steel-channel',
            name: 'Premium Steel Channel',
            image: channelsImg,
            shortDesc: 'Premium steel channels for construction and industrial use.',
            description: 'Premium Steel Channels are high-quality C-shaped structural steel members used extensively in construction, manufacturing, and infrastructure projects. These channels offer excellent load-bearing capacity.',
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
              'Prices are subject to change based on market conditions without prior notice.',
              'GST and other applicable taxes are extra.',
              'Loading charges will be borne by the buyer.',
              'Advance payment is required before dispatch of goods.',
              'All sales are subject to our standard terms and conditions.'
            ]
          },
          {
            slug: 'ms-channel-raipur',
            name: 'MS Channel Raipur',
            image: channelsImg,
            shortDesc: 'Quality MS channels from Raipur steel mills.',
            description: 'MS Channels from Raipur are manufactured with precision to provide excellent load-bearing capacity for construction and industrial applications.',
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
              'Prices are subject to change based on market conditions without prior notice.',
              'GST and other applicable taxes are extra.',
              'Loading charges will be borne by the buyer.',
              'Advance payment is required before dispatch of goods.',
              'All sales are subject to our standard terms and conditions.'
            ]
          },
          {
            slug: 'ms-channel-raigarh',
            name: 'MS Channel Raigarh',
            image: channelsImg,
            shortDesc: 'High-quality MS channels from Raigarh steel mills.',
            description: 'MS Channels from Raigarh are manufactured with advanced technology to provide excellent load-bearing capacity for construction applications.',
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
        slug: 'beams',
        name: 'Steel Beams',
        description: 'I-shaped and H-shaped beams for heavy-duty structural applications.',
        image: beamsImg,
        products: [
          {
            slug: 'premium-steel-beam',
            name: 'Premium Steel Beam',
            image: beamsImg,
            shortDesc: 'High-strength premium beams for commercial and industrial construction.',
            description: 'Premium Steel Beams are I-shaped and H-shaped structural steel members designed for heavy-duty applications. These beams offer superior load-bearing capacity and are used in commercial buildings, industrial structures, bridges, and other infrastructure projects.',
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
              'Prices are subject to change based on market conditions without prior notice.',
              'GST and other applicable taxes are extra.',
              'Loading charges will be borne by the buyer.',
              'Advance payment is required before dispatch of goods.',
              'All sales are subject to our standard terms and conditions.'
            ]
          },
          {
            slug: 'ms-beam-raipur',
            name: 'MS Beam Raipur',
            image: beamsImg,
            shortDesc: 'Quality MS beams from Raipur steel mills.',
            description: 'MS Beams from Raipur are manufactured with precision to provide excellent structural support for construction and industrial applications.',
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
              'Prices are subject to change based on market conditions without prior notice.',
              'GST and other applicable taxes are extra.',
              'Loading charges will be borne by the buyer.',
              'Advance payment is required before dispatch of goods.',
              'All sales are subject to our standard terms and conditions.'
            ]
          },
          {
            slug: 'ms-beam-raigarh',
            name: 'MS Beam Raigarh',
            image: beamsImg,
            shortDesc: 'High-quality MS beams from Raigarh steel mills.',
            description: 'MS Beams from Raigarh are manufactured with advanced technology to provide excellent structural support for heavy-duty construction applications.',
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
  },
  {
    slug: 'mild-steel-bar',
    name: 'Mild Steel Bar',
    image: msBarImg,
    description: 'High-quality mild steel bars for construction and fabrication applications.',
    subcategories: [
      {
        slug: 'ms-bars',
        name: 'MS Bars',
        description: 'Standard mild steel bars for various construction and industrial applications.',
        image: msBarImg,
        products: [
          {
            slug: 'ms-square-bar',
            name: 'MS Square Bar',
            image: msBarImg,
            shortDesc: 'Square mild steel bars for structural and fabrication work.',
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
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
            image: msBarImg,
            shortDesc: 'Round mild steel bars for machining and fabrication.',
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
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
  },
  {
    slug: 'ms-wire',
    name: 'MS Wire',
    image: msWireImg,
    description: 'High-quality mild steel wires for binding, construction, and industrial applications.',
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
              { property: 'Material', value: 'Mild Steel' },
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
          },
          {
            slug: 'wire-rod',
            name: 'Wire Rod',
            image: msWireImg,
            shortDesc: 'High-quality wire rod for further processing and manufacturing.',
            description: 'Wire Rod is manufactured for further processing into various wire products. It offers excellent ductility and surface quality for downstream applications.',
            dimensions: [
              { size: '5.5mm', weight: 'Price on Request', length: 'Coil', price: 'Price on Request' },
              { size: '6.5mm', weight: 'Price on Request', length: 'Coil', price: 'Price on Request' },
              { size: '8mm', weight: 'Price on Request', length: 'Coil', price: 'Price on Request' },
              { size: '10mm', weight: 'Price on Request', length: 'Coil', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel' },
              { property: 'Surface', value: 'Black' },
              { property: 'Tensile Strength', value: '370-520 N/mm²' },
              { property: 'Elongation', value: 'Min. 20%' }
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
            slug: 'hb-wire',
            name: 'H B Wire',
            image: msWireImg,
            shortDesc: 'High tensile H B wire for specialized applications.',
            description: 'H B Wire is manufactured with high tensile strength for specialized construction and industrial applications requiring superior strength.',
            dimensions: [
              { size: '4mm', tensile: 'High', weight: '25kg/coil', price: 'Price on Request' },
              { size: '5mm', tensile: 'High', weight: '25kg/coil', price: 'Price on Request' },
              { size: '6mm', tensile: 'High', weight: '50kg/coil', price: 'Price on Request' },
              { size: '8mm', tensile: 'High', weight: '50kg/coil', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'High Carbon Steel' },
              { property: 'Surface', value: 'Black' },
              { property: 'Tensile Strength', value: '1570-1770 N/mm²' },
              { property: 'Elongation', value: 'Min. 4%' }
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
  },
  {
    slug: 'roofing-sheet',
    name: 'Roofing Sheet',
    image: roofingSheetImg,
    description: 'High-quality roofing sheets for residential, commercial, and industrial applications.',
    subcategories: [
      {
        slug: 'branded-roofing-sheets',
        name: 'Branded Roofing Sheets',
        description: 'Premium roofing sheets from leading manufacturers.',
        image: roofingSheetImg,
        products: [
          {
            slug: 'premium-roofing-sheet',
            name: 'Premium Roofing Sheet',
            image: roofingSheetImg,
            shortDesc: 'Premium roofing sheets for durable construction.',
            description: 'Premium Roofing Sheets are manufactured with high-quality galvanized steel, providing excellent corrosion resistance and long-lasting performance for all types of roofing applications.',
            dimensions: [
              { thickness: '0.35mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.4mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.45mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.5mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Galvanized Steel' },
              { property: 'Coating', value: 'Z275 Zinc Coating' },
              { property: 'Profile', value: 'Corrugated/Trapezoidal' },
              { property: 'Color', value: 'Natural/Pre-painted' }
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
            slug: 'industrial-roofing-sheet',
            name: 'Industrial Roofing Sheet',
            image: roofingSheetImg,
            shortDesc: 'High-quality industrial roofing sheets for reliable performance.',
            description: 'Industrial Roofing Sheets offer excellent durability and weather resistance, making them ideal for residential and commercial roofing applications.',
            dimensions: [
              { thickness: '0.35mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.4mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.45mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.5mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Galvanized Steel' },
              { property: 'Coating', value: 'Z275 Zinc Coating' },
              { property: 'Profile', value: 'Corrugated/Trapezoidal' },
              { property: 'Color', value: 'Natural/Pre-painted' }
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
            slug: 'commercial-roofing-sheet',
            name: 'Commercial Roofing Sheet',
            image: roofingSheetImg,
            shortDesc: 'Quality commercial roofing sheets for construction projects.',
            description: 'Commercial Roofing Sheets are manufactured with precision to provide excellent weather protection and long-lasting performance.',
            dimensions: [
              { thickness: '0.35mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.4mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.45mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.5mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Galvanized Steel' },
              { property: 'Coating', value: 'Z275 Zinc Coating' },
              { property: 'Profile', value: 'Corrugated/Trapezoidal' },
              { property: 'Color', value: 'Natural/Pre-painted' }
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
        slug: 'specialty-roofing-sheets',
        name: 'Specialty Roofing Sheets',
        description: 'Specialized roofing sheets for specific applications.',
        image: roofingSheetImg,
        products: [
          {
            slug: 'galvalume-roofing-sheet',
            name: 'GALVALUME Roofing Sheet',
            image: roofingSheetImg,
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
            image: roofingSheetImg,
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
          },
          {
            slug: 'corrugated-roofing-sheet',
            name: 'Corrugated Roofing Sheet',
            image: roofingSheetImg,
            shortDesc: 'Traditional corrugated roofing sheets for industrial applications.',
            description: 'Corrugated Roofing Sheets provide excellent strength and drainage properties, ideal for industrial and agricultural buildings.',
            dimensions: [
              { thickness: '0.4mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.45mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
              { thickness: '0.5mm', width: '1000mm', length: '2-12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Galvanized Steel' },
              { property: 'Profile', value: 'Corrugated' },
              { property: 'Pitch', value: '76mm/32mm' },
              { property: 'Surface', value: 'Zinc Coated' }
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
  },
  {
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
              { property: 'Material', value: 'Mild Steel (IS 1239)' },
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
              { property: 'Material', value: 'Mild Steel (IS 1239)' },
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
              { property: 'Material', value: 'Mild Steel' },
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
  },
  {
    slug: 'ms-flat-patti',
    name: 'MS Flat Patti',
    image: flatPattiImg,
    description: 'High-quality mild steel flat bars for construction and fabrication applications.',
    subcategories: [
      {
        slug: 'standard-flat-bars',
        name: 'Standard Flat Bars',
        description: 'Standard mild steel flat bars for general construction and fabrication.',
        image: flatPattiImg,
        products: [
          {
            slug: 'ms-flat-20x3',
            name: 'MS Flat 20x3mm',
            image: flatPattiImg,
            shortDesc: 'Standard 20x3mm mild steel flat bar for light fabrication.',
            description: 'MS Flat 20x3mm is ideal for light fabrication work, frames, and general construction applications. Manufactured with excellent dimensional accuracy.',
            dimensions: [
              { size: '20x3mm', weight: '0.471 kg/m', length: '6m', price: 'Price on Request' },
              { size: '20x3mm', weight: '0.471 kg/m', length: '12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
            slug: 'ms-flat-25x3',
            name: 'MS Flat 25x3mm',
            image: flatPattiImg,
            shortDesc: 'Standard 25x3mm mild steel flat bar for medium fabrication.',
            description: 'MS Flat 25x3mm provides good strength for medium fabrication work and structural applications. Excellent weldability and machinability.',
            dimensions: [
              { size: '25x3mm', weight: '0.589 kg/m', length: '6m', price: 'Price on Request' },
              { size: '25x3mm', weight: '0.589 kg/m', length: '12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
            slug: 'ms-flat-40x5',
            name: 'MS Flat 40x5mm',
            image: flatPattiImg,
            shortDesc: 'Heavy-duty 40x5mm mild steel flat bar for structural work.',
            description: 'MS Flat 40x5mm is designed for heavy-duty applications requiring higher strength and load-bearing capacity. Ideal for structural fabrication.',
            dimensions: [
              { size: '40x5mm', weight: '1.570 kg/m', length: '6m', price: 'Price on Request' },
              { size: '40x5mm', weight: '1.570 kg/m', length: '12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
            slug: 'ms-flat-50x6',
            name: 'MS Flat 50x6mm',
            image: flatPattiImg,
            shortDesc: 'Heavy-duty 50x6mm mild steel flat bar for industrial applications.',
            description: 'MS Flat 50x6mm offers excellent strength for industrial and heavy construction applications. Perfect for frames, supports, and structural elements.',
            dimensions: [
              { size: '50x6mm', weight: '2.355 kg/m', length: '6m', price: 'Price on Request' },
              { size: '50x6mm', weight: '2.355 kg/m', length: '12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
            slug: 'ms-flat-75x6',
            name: 'MS Flat 75x6mm',
            image: flatPattiImg,
            shortDesc: 'Extra heavy-duty 75x6mm mild steel flat bar for demanding applications.',
            description: 'MS Flat 75x6mm provides maximum strength for the most demanding structural and industrial applications. Excellent for heavy-duty fabrication work.',
            dimensions: [
              { size: '75x6mm', weight: '3.533 kg/m', length: '6m', price: 'Price on Request' },
              { size: '75x6mm', weight: '3.533 kg/m', length: '12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
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
      },
      {
        slug: 'custom-flat-bars',
        name: 'Custom Flat Bars',
        description: 'Custom-sized mild steel flat bars for specific applications.',
        image: flatPattiImg,
        products: [
          {
            slug: 'ms-flat-custom',
            name: 'MS Flat Custom Size',
            image: flatPattiImg,
            shortDesc: 'Custom-sized mild steel flat bars as per customer requirements.',
            description: 'Custom MS Flat bars manufactured to specific dimensions as per customer requirements. Available in various widths and thicknesses for specialized applications.',
            dimensions: [
              { size: 'Custom Width', thickness: 'Custom Thickness', length: 'As Required', price: 'Price on Request' },
              { size: 'Up to 200mm Width', thickness: 'Up to 25mm Thick', length: '6m/12m', price: 'Price on Request' },
            ],
            specifications: [
              { property: 'Material', value: 'Mild Steel (IS 2062)' },
              { property: 'Surface', value: 'Black/Bright' },
              { property: 'Tensile Strength', value: '410-540 N/mm²' },
              { property: 'Yield Strength', value: 'Min. 250 N/mm²' },
              { property: 'Tolerance', value: 'As per IS 1730' }
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
  }
];
