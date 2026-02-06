
import { CarBrand } from './types';

export const CAR_BRANDS: CarBrand[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'Japón',
    founded: 1937,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_Logo.svg',
    banner: 'https://picsum.photos/id/1071/800/400',
    description: 'El mayor fabricante de automóviles del mundo por volumen, conocido por su fiabilidad y pionero en tecnología híbrida.',
    notableModels: ['Corolla', 'Camry', 'Prius', 'Supra'],
    category: 'Mass Market'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    country: 'Italia',
    founded: 1947,
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/36/Ferrari_Scuderia_logo.svg',
    banner: 'https://picsum.photos/id/1072/800/400',
    description: 'Símbolo supremo de velocidad, lujo y pasión italiana. Fundada por Enzo Ferrari, es una leyenda en la Fórmula 1.',
    notableModels: ['F40', 'Testarossa', 'LaFerrari', '488 GTB'],
    category: 'Sports'
  },
  {
    id: 'tesla',
    name: 'Tesla',
    country: 'EE.UU.',
    founded: 2003,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    banner: 'https://picsum.photos/id/1073/800/400',
    description: 'Líder mundial en vehículos eléctricos y energía renovable, revolucionando la industria con autonomía y tecnología.',
    notableModels: ['Model S', 'Model 3', 'Model X', 'CyberTruck'],
    category: 'Electric'
  },
  {
    id: 'porsche',
    name: 'Porsche',
    country: 'Alemania',
    founded: 1931,
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Porsche_logo.svg',
    banner: 'https://picsum.photos/id/1074/800/400',
    description: 'Especialista en automóviles deportivos de alto rendimiento, famosos por su ingeniería de precisión y el icónico 911.',
    notableModels: ['911', 'Cayenne', 'Taycan', 'Panamera'],
    category: 'Luxury'
  },
  {
    id: 'bmw',
    name: 'BMW',
    country: 'Alemania',
    founded: 1916,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
    banner: 'https://picsum.photos/id/1075/800/400',
    description: 'Bayerische Motoren Werke, reconocida por sus autos de lujo y motocicletas con un enfoque en el placer de conducir.',
    notableModels: ['M3', '3 Series', 'i8', 'X5'],
    category: 'Luxury'
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    country: 'Italia',
    founded: 1963,
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg',
    banner: 'https://picsum.photos/id/1076/800/400',
    description: 'Fabricante de superdeportivos exóticos conocidos por sus diseños angulares y potentes motores V12.',
    notableModels: ['Aventador', 'Huracán', 'Countach', 'Urus'],
    category: 'Sports'
  },
  {
    id: 'ford',
    name: 'Ford',
    country: 'EE.UU.',
    founded: 1903,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg',
    banner: 'https://picsum.photos/id/1077/800/400',
    description: 'La compañía que puso al mundo sobre ruedas con el Modelo T, pionera en la línea de montaje moderna.',
    notableModels: ['Mustang', 'F-150', 'GT40', 'Focus'],
    category: 'Mass Market'
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    country: 'Alemania',
    founded: 1926,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_Logo_2010.svg',
    banner: 'https://picsum.photos/id/1078/800/400',
    description: 'Sinónimo de prestigio y confort. Inventores del primer automóvil moderno con Karl Benz.',
    notableModels: ['S-Class', 'G-Wagon', 'AMG GT', 'C-Class'],
    category: 'Luxury'
  }
];
