import type { Character, Item, Tome, Weapon } from '../types'

interface BuildCardProps {
  title: 'CHARACTER' | 'WEAPONS' | 'TOMES' | 'ITEMS'
  items: (Character | Weapon | Tome | Item)[]
  type: 'character' | 'weapon' | 'tome' | 'item'
}

// function getTierColor(tier?: Tier): string {
//   switch (tier) {
//     case 'S':
//       return 'text-megabonk-yellow drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]';
//     case 'A':
//       return 'text-megabonk-green drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]';
//     case 'B':
//       return 'text-megabonk-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]';
//     case 'C':
//       return 'text-megabonk-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]';
//     case 'D':
//       return 'text-gray-400 drop-shadow-[0_0_8px_rgba(156,163,175,0.8)]';
//     default:
//       return 'text-white';
//   }
// }

function getRarityColor(item: Item): string {
  switch (item.rarity) {
    case 'legendary':
      return 'border-megabonk-yellow bg-megabonk-yellow/10'
    case 'epic':
      return 'border-megabonk-pink bg-megabonk-pink/10'
    case 'rare':
      return 'border-megabonk-cyan bg-megabonk-cyan/10'
    case 'uncommon':
      return 'border-megabonk-green bg-megabonk-green/10'
    default:
      return 'border-gray-500 bg-gray-500/10'
  }
}

export function BuildCard({ title, items, type }: BuildCardProps) {
  const isCharacter = type === 'character'

  return (
    <div className="rounded-lg border-2 border-megabonk-purple bg-megabonk-dark/80 p-4 shadow-lg shadow-megabonk-purple/30 backdrop-blur-sm">
      <h3 className="mb-3 border-b border-megabonk-cyan pb-2 font-pixel text-sm text-megabonk-cyan">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map(item => {
          // const isTiered = 'tier' in item
          // const tierColor = isTiered ? getTierColor(item.tier) : ''
          const itemRarityColor =
            type === 'item' ? getRarityColor(item as Item) : ''

          return (
            <div
              key={item.id}
              className={`rounded border-l-4 p-2 ${
                type === 'item'
                  ? itemRarityColor
                  : 'border-megabonk-purple/50 bg-megabonk-darker/50'
              }`}
            >
              <div className="flex gap-2">
                {item.image && (
                  <div className="bg-gradient-to-br from-megabonk-purple to-megabonk-pink rounded border border-megabonk-purple/30 p-0.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`${
                        isCharacter ? 'h-[220px]' : 'h-8 w-8'
                      } object-contain`}
                    />
                  </div>
                )}
                <div
                  className={`flex flex-1 ${
                    isCharacter
                      ? 'items-start flex-col'
                      : 'items-center justify-between'
                  }`}
                >
                  <span
                    className={`text-white font-pixel ${
                      isCharacter ? 'text-lg font-bold' : 'text-xs'
                    }`}
                  >
                    {item.name}
                  </span>
                  {'description' in item && item.description && (
                    <p className="mt-1 text-justify font-pixel text-[10px] text-megabonk-cyan/70">
                      {item.description}
                    </p>
                  )}
                  {/* {isTiered && (
                    <span
                      className={`ml-2 font-pixel text-xs font-bold ${tierColor}`}
                    >
                      {item.tier}
                    </span>
                  )} */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
