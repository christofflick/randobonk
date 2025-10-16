import { useState } from 'react';
import { BuildDisplay } from './components/BuildDisplay';
import { FilterPanel } from './components/FilterPanel';
import { Header } from './components/Header';
import { RandomizeButton } from './components/RandomizeButton';
import type { Build, FilterState } from './types';
import { createInitialFilters, generateBuild } from './utils/randomizer';

function App() {
  const [build, setBuild] = useState<Build | null>(null);
  const [filters, setFilters] = useState<FilterState>(createInitialFilters());
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = () => {
    try {
      setError(null);
      const newBuild = generateBuild(filters);
      const lastCharacterId = build?.character.id;
      // If the new build has the same character as the last one, try again
      if (newBuild.character.id === lastCharacterId) {
        const anotherBuild = generateBuild(filters);
        setBuild(anotherBuild);
        return;
      }
      setBuild(newBuild);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate build');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-megabonk-darker via-megabonk-dark to-megabonk-darker">
      <Header />

      <main className="mx-auto max-w-7xl p-4 py-8">
        <div className="mb-6">
          <RandomizeButton
            onClick={handleGenerate}
            disabled={!!Object.values(filters.characters).length}
          />
          {error && (
            <p className="mt-2 text-center font-pixel text-xs text-megabonk-pink">{error}</p>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="order-2 lg:order-1">
            <FilterPanel filters={filters} onFiltersChange={setFilters} />
          </aside>

          <section className="order-1 lg:order-2">
            <BuildDisplay build={build} />
          </section>
        </div>
      </main>

      <footer className="border-t-2 border-megabonk-purple/30 p-4 text-center">
        <p className="font-pixel text-xs text-megabonk-cyan/50">
          Unofficial fan-made tool for MEGABONK created by{' '}
          <a
            href="https://twitter.com/onlyChrisis"
            className="text-megabonk-cyan hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            @chrisis
          </a>
          <br />
          <br />
          MEGABONK created by{' '}
          <a
            href="https://twitter.com/megabonkgame"
            className="text-megabonk-cyan hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            @megabonkgame
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
