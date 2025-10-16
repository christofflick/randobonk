export function Header() {
  return (
    <header className="border-b-4 border-megabonk-purple bg-gradient-to-r from-megabonk-darker via-megabonk-dark to-megabonk-darker p-6 shadow-lg shadow-megabonk-purple/50">
      <div className="mx-auto max-w-7xl">
        <h1 className="animate-pulse text-center font-pixel text-2xl text-megabonk-purple drop-shadow-[0_0_10px_rgba(147,51,234,0.8)] md:text-4xl">
          RANDOBONKER
        </h1>
        <p className="mt-2 text-center font-pixel text-xs text-megabonk-cyan md:text-sm">
          MEGABONK Build Generator
        </p>
      </div>
    </header>
  );
}
