export interface CountryName {
  common: string
  official: string
}

export interface CountryFlags {
  svg: string
  png: string
}

export interface Country {
  name: CountryName
  flags: CountryFlags
  population: number
  region: string
  capital: string
  cca2: string
}

export interface CountryCardProps {
  country: Country
}

export interface SearchComponentProps {
  onSearchTermChange: (searchTerm: string) => void
}

export interface FilterComponentProps {
  selectedRegion: string
  onRegionChange: (region: string) => void
}
