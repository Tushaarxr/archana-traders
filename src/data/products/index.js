// src/data/products/index.js
import { tmtBarsData } from './tmtBars';
import { structuralSteelData } from './structuralSteel';
import { msFlatPattiData } from './msFlatPatti';
import { msPipesData } from './msPipes';
import { msSteelBarData } from './msSteelBar';
import { msWireData } from './msWire';
import { msPlatesData } from './msPlates';
import { roofingSheetData } from './roofingSheet';
import { scaffoldingMaterialsData } from './scaffoldingMaterials';

// Export the complete steel catalog in the requested order
export const steelCatalog = [
  tmtBarsData,           // TMT BAR
  structuralSteelData,   // STRUCTURAL STEEL  
  msFlatPattiData,       // MS FLAT PATTI
  msPipesData,           // MS PIPE
  msSteelBarData,        // MS STEEL BAR
  msWireData,            // MS WIRE
  msPlatesData,          // MS PLATES
  roofingSheetData,      // ROOFING SHEET
  scaffoldingMaterialsData // SCAFFOLDING MATERIALS
];
