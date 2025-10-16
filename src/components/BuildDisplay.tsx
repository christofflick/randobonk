import type { Build } from '../types';
import { BuildCard } from './BuildCard';

interface BuildDisplayProps {
  build: Build | null;
}

export function BuildDisplay({ build }: BuildDisplayProps) {
  if (!build) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-megabonk-purple/50 bg-megabonk-dark/30 p-8">
        <p className="font-pixel text-sm text-megabonk-cyan/50">
          Click GENERATE BONK to create a build
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <BuildCard title="CHARACTER" items={[build.character]} type="character" />
      <div className="grid gap-4 md:grid-cols-2">
        <BuildCard title="WEAPONS" items={build.weapons} type="weapon" />
        <BuildCard title="TOMES" items={build.tomes} type="tome" />
      </div>
    </div>
  );
}
