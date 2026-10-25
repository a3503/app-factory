# DECISIONS — Décisions par défaut

Décisions prises en l'absence d'instructions spécifiques. Modifiables sur demande.

## Identité éditeur

| Élément | Valeur | Justification |
|---------|--------|---------------|
| Préfixe bundle ID | `com.a3503` | Basé sur le username GitHub |
| Nom d'éditeur | À définir | Attente de la création des comptes stores |
| Domaine legal/ | `a3503.github.io/app-factory` | GitHub Pages gratuit, déjà en place |

## Monétisation

| Élément | Valeur | Justification |
|---------|--------|---------------|
| Prix Remove Ads | 2,99 $ | Standard du marché, psychologiquement < 3 $ |
| Prix Pro | 4,99 $ | Inclut no-ads, valeur perçue supérieure |
| Interstitiel max | 1 / 4 min | Équilibre revenus / UX |
| Première pub | Après 3e action | Laisser l'utilisateur découvrir l'app |
| Rewarded | Toujours optionnel | Respecte le choix utilisateur |

## Technique

| Élément | Valeur | Justification |
|---------|--------|---------------|
| État global | Zustand | Léger, TypeScript natif, pas de boilerplate |
| Stockage | MMKV | Plus rapide qu'AsyncStorage, sync |
| Navigation | Expo Router | File-based, conventions modernes |
| Thème | Nativewind / Tailwind | Cohérent avec le web, productivité |
| Tests unitaires | Jest + RTL | Standard React Native |
| Tests E2E | Maestro | Fonctionne sur Linux/Android |

## Localisation

| Élément | Valeur | Justification |
|---------|--------|---------------|
| Langues de départ | EN (défaut), FR | Marchés connus, coût minimal |
| Langues futures | ES, PT-BR, DE | Grands marchés, à ajouter post-launch |

## Process

| Élément | Valeur | Justification |
|---------|--------|---------------|
| Branches | main (prod), develop, feature/* | Gitflow simplifié |
| Commits | Conventional commits | Changelog auto, clarté |
| Versioning | SemVer + buildNumber auto EAS | Standard, pas de gestion manuelle |

---

*Dernière mise à jour : 2026-10-25*
