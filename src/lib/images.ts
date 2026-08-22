export type PhotoCategory =
  | 'Fashion'
  | 'Landscape'
  | 'Street'
  | 'Architecture'
  | 'Wedding'
  | 'Portrait';

export interface Photo {
  id: number;
  category: PhotoCategory;
  title: string;
  location: string;
  year: string;
  orientation: 'portrait' | 'landscape';
  alt: string;
}

function pexelsUrl(id: number, w: number): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export function photoUrl(photo: Photo, size: 'thumb' | 'medium' | 'large' | 'full' = 'medium'): string {
  const widths = { thumb: 400, medium: 800, large: 1280, full: 1920 };
  return pexelsUrl(photo.id, widths[size]);
}

export const CATEGORIES: PhotoCategory[] = [
  'Fashion',
  'Landscape',
  'Street',
  'Architecture',
  'Wedding',
  'Portrait',
];

export const PHOTOS: Photo[] = [
  // Fashion
  { id: 1066171, category: 'Fashion', title: 'Veiled Light', location: 'Paris, FR', year: '2024', orientation: 'portrait', alt: 'Artistic portrait of a fashionable model in a moody studio setting' },
  { id: 19379051, category: 'Fashion', title: 'Shadow Lines', location: 'Milan, IT', year: '2024', orientation: 'portrait', alt: 'Moody portrait featuring a model with striking striped shadow effects' },
  { id: 38519802, category: 'Fashion', title: 'Braided Crown', location: 'Berlin, DE', year: '2023', orientation: 'portrait', alt: 'Two models with unique braided hairstyles and dramatic makeup' },
  { id: 15792394, category: 'Fashion', title: 'Velvet Hour', location: 'Marrakech, MA', year: '2023', orientation: 'portrait', alt: 'Stylish portrait of a man posing in velvet attire with orange sunglasses' },
  { id: 28863302, category: 'Fashion', title: 'After Dark', location: 'Tokyo, JP', year: '2024', orientation: 'portrait', alt: 'Moody portrait of a woman posing with dramatic lighting and shadow play' },
  { id: 158648, category: 'Fashion', title: 'The Overcoat', location: 'London, UK', year: '2022', orientation: 'portrait', alt: 'Portrait of a woman in a fashionable brown overcoat against a moody background' },
  { id: 19432553, category: 'Fashion', title: 'Monochrome Magazine', location: 'New York, US', year: '2023', orientation: 'portrait', alt: 'Stylish black and white portrait of a model posing with a magazine' },
  { id: 19351182, category: 'Fashion', title: 'Avant-Garde', location: 'Paris, FR', year: '2024', orientation: 'portrait', alt: 'Striking portrait of a woman in a unique avant-garde dress with dramatic lighting' },
  { id: 31167809, category: 'Fashion', title: 'Crimson Tulle', location: 'Milan, IT', year: '2024', orientation: 'portrait', alt: 'A bold fashion portrait featuring a woman draped in red tulle with dramatic makeup' },

  // Landscape
  { id: 939726, category: 'Landscape', title: 'Frozen Solitude', location: 'Lofoten, NO', year: '2023', orientation: 'landscape', alt: 'Snow-covered mountains at sunset with a rocky foreground' },
  { id: 9088934, category: 'Landscape', title: 'Twilight Peak', location: 'Dolomites, IT', year: '2023', orientation: 'landscape', alt: 'Dramatic view of a snow-capped mountain with rocky formations during twilight' },
  { id: 18182297, category: 'Landscape', title: 'Golden Ridge', location: 'Patagonia, AR', year: '2024', orientation: 'landscape', alt: 'Captivating sunset view of mountain peaks with clouds lit by warm golden light' },
  { id: 2932022, category: 'Landscape', title: 'First Light', location: 'Tuscany, IT', year: '2022', orientation: 'landscape', alt: 'Golden sunrise illuminating a peaceful, majestic mountain landscape in Italy' },
  { id: 14082620, category: 'Landscape', title: 'Dramatic Descent', location: 'Swiss Alps, CH', year: '2023', orientation: 'landscape', alt: 'Stunning mountain landscape with dramatic lighting during sunset' },
  { id: 12385846, category: 'Landscape', title: 'Storm Crown', location: 'Caucasus, GE', year: '2024', orientation: 'landscape', alt: 'Majestic snow-covered mountains under dramatic sunset clouds' },
  { id: 12638570, category: 'Landscape', title: 'Winter Silence', location: 'Dolomites, IT', year: '2023', orientation: 'landscape', alt: 'Stunning winter sunset over the Dolomites mountains, Italy' },
  { id: 5367394, category: 'Landscape', title: 'Ember Horizon', location: 'Nordland, NO', year: '2022', orientation: 'landscape', alt: 'Stunning orange sunset over snow-covered mountains in Nordland, Norway' },
  { id: 10597265, category: 'Landscape', title: 'Forest Edge', location: 'Carpathians, RO', year: '2023', orientation: 'landscape', alt: 'Stunning view of a mountain range with dramatic sunset colors over a serene forest landscape' },
  { id: 19248149, category: 'Landscape', title: 'Burning Sky', location: 'Erzurum, TR', year: '2024', orientation: 'landscape', alt: 'Breathtaking landscape of mountains at sunset with dramatic clouds' },

  // Street
  { id: 9423875, category: 'Street', title: 'Hamburg Passage', location: 'Hamburg, DE', year: '2023', orientation: 'portrait', alt: 'Monochrome view of Hamburg city street with modern architecture and pedestrians' },
  { id: 38572645, category: 'Street', title: 'The Column', location: 'Lisbon, PT', year: '2024', orientation: 'portrait', alt: 'A woman crouched by a column in black and white, checking her phone' },
  { id: 9548498, category: 'Street', title: 'Matsuyama Rain', location: 'Matsuyama, JP', year: '2023', orientation: 'portrait', alt: 'Black and white street scene capturing a lone pedestrian and a parked car' },
  { id: 15908177, category: 'Street', title: 'Crowd Flow', location: 'Istanbul, TR', year: '2024', orientation: 'portrait', alt: 'Crowded urban street in black and white with historic architecture' },
  { id: 24960299, category: 'Street', title: 'Midstream', location: 'St. Petersburg, RU', year: '2023', orientation: 'portrait', alt: 'Striking black and white portrait capturing a woman amidst pedestrians' },
  { id: 9251304, category: 'Street', title: 'Concrete Canyon', location: 'Hong Kong, CN', year: '2022', orientation: 'portrait', alt: 'Monochrome image of a busy city street with towering buildings' },
  { id: 3858803, category: 'Street', title: 'Sarajevo Pigeon', location: 'Sarajevo, BA', year: '2023', orientation: 'portrait', alt: 'Black and white street scene in Sarajevo featuring a woman walking and a pigeon' },
  { id: 38782784, category: 'Street', title: 'Crosswalk Shadows', location: 'New York, US', year: '2024', orientation: 'portrait', alt: 'Artistic black and white photo of a shadowed urban crosswalk in New York' },

  // Architecture
  { id: 30506523, category: 'Architecture', title: 'Glass Geometry', location: 'Rotterdam, NL', year: '2024', orientation: 'landscape', alt: 'Abstract view of modern architecture featuring reflective glass and geometric lines' },
  { id: 35235403, category: 'Architecture', title: 'Symmetric Façade', location: 'Tokyo, JP', year: '2023', orientation: 'landscape', alt: 'Symmetrical view of a modern building glass facade with minimalistic design' },
  { id: 28054651, category: 'Architecture', title: 'Window Study', location: 'Amsterdam, NL', year: '2023', orientation: 'landscape', alt: 'Close-up of contrasting windows with minimalist design and bright colors' },
  { id: 921290, category: 'Architecture', title: 'Neon Structure', location: 'Shanghai, CN', year: '2024', orientation: 'landscape', alt: 'A modern building facade illuminated by neon lights at night' },
  { id: 35251110, category: 'Architecture', title: 'Blue Sky Lines', location: 'Madrid, ES', year: '2023', orientation: 'landscape', alt: 'Minimalist architecture against clear blue sky in Madrid, Spain' },
  { id: 2191622, category: 'Architecture', title: 'Concrete Forms', location: 'Osaka, JP', year: '2022', orientation: 'landscape', alt: 'Abstract beauty of minimalist concrete structures in black and white' },
  { id: 31025689, category: 'Architecture', title: 'Elevated', location: 'Honolulu, US', year: '2023', orientation: 'landscape', alt: 'Elevated modern structure in Hawaii with a clear blue sky background' },
  { id: 4595129, category: 'Architecture', title: 'Industrial Lines', location: 'Buenos Aires, AR', year: '2022', orientation: 'landscape', alt: 'A striking black and white photo of a modern industrial building facade' },

  // Wedding
  { id: 27008972, category: 'Wedding', title: 'The Embrace', location: 'Tuscany, IT', year: '2024', orientation: 'portrait', alt: 'Elegant wedding couple embracing with joy, showcasing bridal veil' },
  { id: 26960744, category: 'Wedding', title: 'Veiled Promise', location: 'Santorini, GR', year: '2023', orientation: 'portrait', alt: 'Close-up portrait of a bride in veil embraced by the groom' },
  { id: 28824204, category: 'Wedding', title: 'Garden Vows', location: 'Provence, FR', year: '2024', orientation: 'portrait', alt: 'Stylish couple posing outdoors with lush greenery background' },
  { id: 30375728, category: 'Wedding', title: 'Classic Pose', location: 'Edinburgh, UK', year: '2023', orientation: 'portrait', alt: 'A stylish black and white portrait of a bride and groom in a classic wedding pose' },
  { id: 29237378, category: 'Wedding', title: 'Indoor Light', location: 'Paris, FR', year: '2023', orientation: 'portrait', alt: 'A romantic black and white portrait of a newlywed couple embracing indoors' },
  { id: 11813966, category: 'Wedding', title: 'Quiet Moment', location: 'Kyoto, JP', year: '2024', orientation: 'portrait', alt: 'Bride and groom sharing an intimate moment in a softly lit room' },
  { id: 37380420, category: 'Wedding', title: 'Ocean Oath', location: 'Amalfi, IT', year: '2024', orientation: 'portrait', alt: 'Charming outdoor wedding photo featuring a smiling bride and groom' },
  { id: 34362507, category: 'Wedding', title: 'Seaside Vows', location: 'Cyprus, CY', year: '2023', orientation: 'portrait', alt: 'Elegant bride and groom embracing by the ocean' },

  // Portrait
  { id: 33444227, category: 'Portrait', title: 'Contemplation', location: 'Studio, LA', year: '2024', orientation: 'portrait', alt: 'Artistic low light portrait of a woman with curly hair in a contemplative pose' },
  { id: 20175588, category: 'Portrait', title: 'Eyes Closed', location: 'Studio, NYC', year: '2023', orientation: 'portrait', alt: 'Moody studio portrait of a young woman with closed eyes and dark background' },
  { id: 20583484, category: 'Portrait', title: 'Low Light Study', location: 'Studio, LDN', year: '2023', orientation: 'portrait', alt: 'Dramatic low light portrait capturing a thoughtful woman with a moody expression' },
  { id: 34216173, category: 'Portrait', title: 'Inner World', location: 'Studio, PAR', year: '2024', orientation: 'portrait', alt: 'Artistic black and white portrait of a woman deep in thought' },
  { id: 5077664, category: 'Portrait', title: 'Studio Mono', location: 'Studio, BER', year: '2022', orientation: 'portrait', alt: 'Artistic moody portrait of a woman in black and white taken in a studio setting' },
  { id: 30552616, category: 'Portrait', title: 'Silhouette', location: 'Studio, NYC', year: '2024', orientation: 'portrait', alt: 'Intense silhouette portrait of a woman in dramatic lighting' },
  { id: 30713507, category: 'Portrait', title: 'Hand Study', location: 'Studio, LA', year: '2023', orientation: 'portrait', alt: 'Unique portrait featuring creative hand placements with deep mood lighting' },
];
