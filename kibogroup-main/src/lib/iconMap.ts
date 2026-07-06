// src/lib/iconMap.ts

import {
  Music4,
 Headphones,
 Radio,
 Disc3,
 


// tech

  Laptop,
  Code2,
  Database,
  Rocket,

  // infra

  ClipboardCheck,
  DraftingCompass,
  Building2,
  Handshake,

  // Events
    CalendarCheck,
    Mic2,
    Users,
    PartyPopper,

    // Beauty
     Sparkles,
  Palette,
  PackageCheck,
  HeartHandshake,

  // Mart

    ShoppingCart,
  PackageSearch,
  Truck,
  Store,

  // Fashion

    Shirt,
  Scissors,
  Ruler,
  ShoppingBag,
} from "lucide-react";



export const iconMap = {
  music: Music4,
  headphones: Headphones,
  radio: Radio,
  disc: Disc3,

  laptop :Laptop,
  code :Code2,
  database:Database,
  rocket: Rocket,

  clipboardcheck :ClipboardCheck,
  draftingcompass :DraftingCompass,
  building :Building2,
  handshake : Handshake,

    calendarcheck :CalendarCheck,
    mic:Mic2,
    users : Users,
    partypopper :PartyPopper,

  sparkles :Sparkles,
  palette :Palette,
  packagecheck :PackageCheck,
  hearthandshake:HeartHandshake,

  shoppingcart :ShoppingCart,
  packagesearch :PackageSearch,
  truck :Truck,
  store : Store,

  shirt :Shirt,
  scissors :Scissors,
  ruler :Ruler,
  shoppingbag:ShoppingBag,

};

export type IconName = keyof typeof iconMap;