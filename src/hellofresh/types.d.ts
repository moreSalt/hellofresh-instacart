// Return data recipe
export interface IngredientsArray {
    id: string // aouihfoisduboisbdgosbdg
    type: string // sirloin-steak
    amount: number | null
    unit: string //'ounce' | 'tablespoon' | 'unit' 
}

// Recipes object
export interface Root {
    recipes: { [key: string]: Recipe }
}

export interface Recipe {
    imagePath: string
    ingredients: Ingredient[]
    promotion: any
    utensils: Utensil[]
    yields: Yield[]
    active: boolean
    yieldType: string
    descriptionHTML: string
    steps: Step[]
    seoName: any
    wines: any[]
    cardLink: string
    descriptionMarkdown: string
    author: any
    name: string
    slug: string
    uniqueRecipeCode: any
    isPremium: boolean
    servingSize: number
    updatedAt: string
    canonicalLink: any
    cuisines: Cuisine[]
    totalTime: any
    allergens: Allergen[]
    clonedFrom: any
    highlighted: boolean
    isDinnerToLunch: boolean
    isExcludedFromIndex: boolean
    canonical: any
    headline: string
    websiteUrl: string
    label: any
    marketplaceItems: any[]
    videoLink: any
    imageLink: string
    isAddon: boolean
    country: string
    favoritesCount: number
    nutrition: Nutrition[]
    tags: Tag[]
    ratingsCount: number
    averageRating: number
    prepTime: string
    link: string
    id: string
    createdAt: string
    uuid: any
    difficulty: number
    description: string
    category: any
    comment: any
    seoDescription: any
  }
  
  export interface Ingredient {
    imagePath: string
    usage: number
    family: Family
    internalName?: string
    name: string
    slug: string
    allergens: string[]
    shipped: boolean
    imageLink: string
    country: string
    type: string
    id: string
    uuid: string
    description: any
    hasDuplicatedName: any
  }
  
  export interface Family {
    priority: number
    name: string
    slug: string
    updatedAt: string
    iconLink: string
    type: string
    id: string
    createdAt: string
    uuid: string
    description: any
    iconPath: string
    usageByCountry: UsageByCountry
  }
  
  export interface UsageByCountry {
    DE: number
    NO: number
    BE: number
    CF: number
    CG: number
    FJ: number
    CH: number
    MR: number
    JP: number
    DK: number
    GN: number
    CK: number
    LU: number
    GQ: number
    IT: number
    FR: number
    NZ: number
    YE: number
    ER: number
    AO: number
    ES: number
    SE: number
    AT: number
    AU: number
    GB: number
    IE: number
    CA: number
    NL: number
    US: number
  }
  
  export interface Utensil {
    id: string
    type: string
    name: string
  }
  
  export interface Yield {
    yields: number
    ingredients: Ingredient2[]
  }
  
  export interface Ingredient2 {
    id: string
    amount?: number
    unit: string
  }
  
  export interface Step {
    ingredients: string[]
    instructions: string
    utensils: string[]
    timers: Timer[]
    instructionsHTML: string
    index: number
    instructionsMarkdown: string
    images: Image[]
    videos: any[]
  }
  
  export interface Timer {
    name: string
    duration: string
    temperature: any
    temperatureUnit: any
    ovenMode: any
  }
  
  export interface Image {
    link: string
    path: string
    caption: string
  }
  
  export interface Cuisine {
    id: string
    type: string
    iconLink: string
    iconPath: string
    usage: number
    name: string
    slug: string
  }
  
  export interface Allergen {
    triggersTracesOf: boolean
    usage: number
    tracesOf: boolean
    name: string
    slug: string
    iconLink: string
    type: string
    id: string
    description: any
    iconPath: string
  }
  
  export interface Nutrition {
    type: string
    name: string
    amount: number
    unit: string
  }
  
  export interface Tag {
    numberOfRecipes: number
    name: string
    slug: string
    colorHandle: any
    displayLabel: boolean
    iconLink: any
    preferences: string[]
    type: string
    numberOfRecipesByCountry: NumberOfRecipesByCountry
    id: string
    iconPath: any
  }
  
  export interface NumberOfRecipesByCountry {
    DE: number
    NO: number
    BE: number
    CF: number
    CG: number
    FJ: number
    CH: number
    MR: number
    JP: number
    DK: number
    GN: number
    CK: number
    LU: number
    GQ: number
    IT: number
    FR: number
    NZ: number
    YE: number
    ER: number
    AO: number
    ES: number
    SE: number
    AT: number
    AU: number
    GB: number
    IE: number
    CA: number
    NL: number
    US: number
  }