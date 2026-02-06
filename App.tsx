
import React, { useState, useMemo } from 'react';
import { CAR_BRANDS } from './constants';
import { CarBrand } from './types';
import BrandCard from './components/BrandCard';
import BrandModal from './components/BrandModal';
import GeminiExpert from './components/GeminiExpert';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<CarBrand | null>(null);

  const categories = ['Luxury', 'Sports', 'Mass Market', 'Electric'];

  const filteredBrands = useMemo(() => {
    return CAR_BRANDS.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            brand.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? brand.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white rotate-12">
              <i className="fa-solid fa-gauge-high text-xl"></i>
            </div>
            <div>
              <h1 className="font-oswald text-2xl font-bold tracking-tight text-slate-900 leading-none">AUTOSPHERE</h1>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Global Directory</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-500">
            <a href="#" className="text-blue-600">Catálogo</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Tendencias</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Historia</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative group hidden sm:block">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
              <input 
                type="text" 
                placeholder="Buscar marca o país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-100 rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 transition-colors">
              CONTRIBUIR
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-oswald font-bold text-slate-900 mb-6 tracking-tight">
            DESCUBRE EL MUNDO <span className="text-blue-600">SOBRE RUEDAS</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Explora las marcas más influyentes que han definido la movilidad, el lujo y la velocidad a través de las décadas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${!selectedCategory ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              TODOS
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBrands.map(brand => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                onClick={setSelectedBrand}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <i className="fa-solid fa-car-on text-6xl text-slate-200 mb-4 block"></i>
            <h3 className="text-xl font-bold text-slate-400">No encontramos marcas que coincidan</h3>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <h4 className="font-oswald text-xl font-bold tracking-tight">AUTOSPHERE</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              La enciclopedia automotriz moderna. Un proyecto informativo diseñado para entusiastas del motor de todo el mundo.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Enlaces</h5>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Síguenos</h5>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} AutoSphere Project. Todos los derechos reservados.
        </div>
      </footer>

      {/* Modal & AI UI */}
      {selectedBrand && (
        <BrandModal brand={selectedBrand} onClose={() => setSelectedBrand(null)} />
      )}
      
      <GeminiExpert />
    </div>
  );
};

export default App;
