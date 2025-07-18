// src/data/products/structuralSteel.js
import beamsImg from '../../assets/images/ms-beams.jpg';
import anglesImg from '../../assets/images/ms-angles.jpg';
import channelsImg from '../../assets/images/ms-channel.jpg';

export const structuralSteelData = {
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
            { property: 'Material', value: 'MS (IS 2062/IS 808)' },
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
            { property: 'Material', value: 'MS (IS 2062/IS 808)' },
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
            { property: 'Material', value: 'MS (IS 2062/IS 808)' },
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
            { property: 'Material', value: 'MS (IS 2062/IS 808)' },
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
            { property: 'Material', value: 'MS (IS 2062/IS 808)' },
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
            { property: 'Material', value: 'MS (IS 2062/IS 808)' },
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
};
