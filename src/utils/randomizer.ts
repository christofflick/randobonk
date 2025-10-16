import { characters } from '../data/characters'
import { items } from '../data/items'
import { tomes } from '../data/tomes'
import { weapons } from '../data/weapons'
import type { Build, FilterState } from '../types'

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function filterBySelection<T extends { id: string }>(
  array: T[],
  selectedIds: Set<string>
): T[] {
  if (selectedIds.size === 0) return array
  return array.filter(item => selectedIds.has(item.id))
}

export function generateBuild(filters: FilterState): Build {
  const availableCharacters = filterBySelection(characters, filters.characters)
  const availableWeapons = filterBySelection(weapons, filters.weapons)
  const availableTomes = filterBySelection(tomes, filters.tomes)
  const availableItems = filterBySelection(items, filters.items)

  if (
    availableCharacters.length === 0 ||
    availableWeapons.length === 0 ||
    availableTomes.length === 0 ||
    availableItems.length === 0
  ) {
    throw new Error('Not enough items selected to generate a build')
  }

  const character = getRandomElement(availableCharacters)
  const characterWeapon = weapons.find(w => w.id === character.weapon)
  const finalWeapons = availableWeapons.filter(
    w => w.id !== characterWeapon!.id
  )

  // Ensure at least one default weapon is included
  const selectedWeapons = getRandomElements(
    finalWeapons,
    Math.min(3, availableWeapons.length)
  )
  selectedWeapons.unshift(characterWeapon!)

  const selectedTomes = getRandomElements(
    availableTomes,
    Math.min(4, availableTomes.length)
  )

  const itemsCount = Math.floor(Math.random() * 6) + 5
  const selectedItems = getRandomElements(
    availableItems,
    Math.min(itemsCount, availableItems.length)
  )

  return {
    character,
    weapons: selectedWeapons,
    tomes: selectedTomes,
    items: selectedItems
  }
}

export function createInitialFilters(): FilterState {
  return {
    characters: new Set(characters.map(c => c.id)),
    weapons: new Set(weapons.map(w => w.id)),
    tomes: new Set(tomes.map(t => t.id)),
    items: new Set(items.map(i => i.id))
  }
}

export function hasIsDefault(item: unknown): item is { isDefault: boolean } {
  return typeof item === 'object' && item !== null && 'isDefault' in item
}
