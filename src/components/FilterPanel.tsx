import { useState } from 'react';
import { characters } from '../data/characters';
import { tomes } from '../data/tomes';
import { weapons } from '../data/weapons';
import type { FilterState } from '../types';
import { hasIsDefault } from '../utils/randomizer';

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

type FilterCategory = 'characters' | 'weapons' | 'tomes';

const categories = [
  { key: 'characters' as const, label: 'Characters', data: characters },
  { key: 'weapons' as const, label: 'Weapons', data: weapons },
  { key: 'tomes' as const, label: 'Tomes', data: tomes },
];

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const [expanded, setExpanded] = useState<FilterCategory | null>(null);

  const toggleCategory = (category: FilterCategory) => {
    setExpanded(expanded === category ? null : category);
  };

  const toggleItem = (category: FilterCategory, id: string, item: unknown) => {
    const newSet = new Set(filters[category]);

    // If trying to uncheck, check if item has isDefault: true
    if (newSet.has(id)) {
      if (hasIsDefault(item) && item.isDefault) {
        // Cannot uncheck default items
        return;
      }
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    onFiltersChange({ ...filters, [category]: newSet });
  };

  const selectAll = (category: FilterCategory) => {
    const data = {
      characters,
      weapons,
      tomes,
    };
    onFiltersChange({
      ...filters,
      [category]: new Set(
        data[category]
          .filter((item) => !(hasIsDefault(item) && item.isDefault))
          .map((item) => item.id)
      ),
    });
  };

  const deselectAll = (category: FilterCategory) => {
    onFiltersChange({ ...filters, [category]: new Set() });
  };

  return (
    <div className="space-y-2">
      <h2 className="mb-4 font-pixel text-lg text-megabonk-purple">Filters</h2>
      {categories.map(({ key, label, data }) => (
        <div
          key={key}
          className="overflow-hidden rounded-lg border-2 border-megabonk-purple/50 bg-megabonk-dark/80"
        >
          <button
            type="button"
            onClick={() => toggleCategory(key)}
            className="flex w-full items-center justify-between border-b border-megabonk-purple/30 p-3 font-pixel text-xs text-megabonk-cyan transition-colors hover:bg-megabonk-purple/20"
          >
            <span>
              {label} ({filters[key].size}/{data.length})
            </span>
            <span className="text-megabonk-purple">{expanded === key ? '▼' : '▶'}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expanded === key ? 'max-h-96 p-3 opacity-1' : 'max-h-0 p-0 opacity-0'
            }`}
          >
            <div className="mb-3 flex gap-2">
              <button
                type="button"
                onClick={() => selectAll(key)}
                className="rounded border border-megabonk-green bg-megabonk-green/20 px-2 py-1 text-xs text-megabonk-green transition-colors hover:bg-megabonk-green/30"
              >
                Select All
              </button>
              <button
                type="button"
                onClick={() => deselectAll(key)}
                className="rounded border border-megabonk-pink bg-megabonk-pink/20 px-2 py-1 text-xs text-megabonk-pink transition-colors hover:bg-megabonk-pink/30"
              >
                Deselect All
              </button>
            </div>

            <div className="max-h-64 space-y-1 overflow-y-auto">
              {data.map((item) => {
                const isLocked = hasIsDefault(item) && item.isDefault;
                return (
                  <label
                    key={item.id}
                    className={`flex cursor-pointer items-center rounded p-2 text-xs text-white transition-colors hover:bg-megabonk-purple/20 ${
                      isLocked ? 'opacity-60' : ''
                    }`}
                    title={isLocked ? 'Default item - cannot be unchecked' : ''}
                  >
                    <input
                      type="checkbox"
                      checked={filters[key].has(item.id)}
                      onChange={() => toggleItem(key, item.id, item)}
                      className="mr-2 accent-megabonk-purple"
                      disabled={isLocked && filters[key].has(item.id)}
                    />
                    <span>{item.name}</span>
                    {isLocked && <span className="ml-auto text-megabonk-cyan">🔒</span>}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
