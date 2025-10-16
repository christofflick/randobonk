interface RandomizeButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function RandomizeButton({ onClick, disabled = false }: RandomizeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group relative w-full overflow-hidden rounded-lg border-4 border-megabonk-yellow bg-gradient-to-br from-megabonk-purple to-megabonk-pink p-4 font-pixel text-xl text-white shadow-lg shadow-megabonk-purple/50 transition-all hover:scale-105 hover:shadow-megabonk-yellow/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
    >
      <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">GENERATE BONK</span>
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
