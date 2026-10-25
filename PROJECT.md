# APP FACTORY

Studio de création d'apps mobiles simples et utiles pour Google Play et App Store.

## Mission

Créer un portefeuille d'applications mobiles : productivité, bien-être, utilitaires du quotidien.

**Modèle économique :**
- Téléchargement gratuit
- Publicité AdMob dans la version gratuite
- Achat unique « Supprimer les pubs » (2,99 $)
- Optionnel : Pro à 4,99 $ (inclut no-ads)

## Règles d'or

1. **Pas de clones** — Chaque app a une fonction cœur distincte, nom, icône, identité propre. Vérifier PORTFOLIO.md avant toute nouvelle app.
2. **Qualité avant quantité** — Une app à la fois, pas de nouvelle avant que la précédente passe la review.
3. **Offline-first, sans backend** — Zéro compte utilisateur, zéro serveur, données locales uniquement.
4. **Collecte minimale** — Chaque SDK documenté dans DATA_INVENTORY.md.
5. **Pas d'irréversible sans accord** — eas submit, comptes, achats, push public, sudo → demander confirmation.
6. **IDs de test AdMob en dev** — Vrais IDs uniquement en production via variables EAS.
7. **Aucun secret dans git** — .gitignore couvre keystores, .env, JSON de service account.
8. **Relire les règles stores** — Avant chaque audit, vérifier les pages officielles.
9. **Sources citées** — Toute affirmation de marché cite sa source avec lien et date.
10. **Accessibilité** — Dynamic Type, contraste AA, labels VoiceOver/TalkBack, mode sombre. Zéro dark pattern.

## Stack

- **Framework** : Expo SDK (dernière stable) + React Native + TypeScript strict + Expo Router
- **Build** : Development builds (expo-dev-client), pas Expo Go
- **Monorepo** : pnpm workspaces — packages/core + apps/<slug>
- **Pubs** : react-native-google-mobile-ads + UMP (RGPD) + ATT iOS
- **Achats** : RevenueCat (react-native-purchases)
- **Stockage** : expo-sqlite ou MMKV
- **i18n** : expo-localization + i18next (EN + FR, prêt pour ES, PT-BR, DE)
- **Qualité** : ESLint, Prettier, tsc, Jest, Maestro E2E
- **Release** : EAS Build / Submit / Update

## Exigences stores (2026)

- **Google Play** : targetSdkVersion 36 (Android 16), edge-to-edge, retour arrière prédictif
- **Apple** : Build Xcode 26 / SDK iOS 26 (via image EAS)

## Workflow

| Phase | Étape | Gate |
|-------|-------|------|
| 1 | Recherche : trend-researcher → opportunity-analyst | STOP : choix d'une piste |
| 2 | Conception : PM → (UX + Monétisation + Compliance) → Architecte | STOP : validation PRD |
| 3 | Dev : scaffold → itérations (core → onboarding → monétisation → polish) | Tests verts |
| 4 | Audit : QA + Code Review + Compliance (parallèle) | 0 Bloquant, GO stores |
| 5 | Store : ASO + Release Manager → builds + fiches | STOP : GO soumission |
| 6 | Post-pub : avis, ASO, rapport mensuel | Décision : améliorer/maintenir/abandonner |

## Definition of Done

- [ ] Fonction cœur complète, 0 bug Bloquant/Majeur
- [ ] Tests verts, couverture ≥ 70% logique métier
- [ ] Démarrage < 2s, fonctionne hors ligne
- [ ] UMP + ATT OK, IDs test en dev, achat no-ads coupe 100% des pubs
- [ ] Accessibilité vérifiée (police XXL, lecteur d'écran, contraste)
- [ ] COMPLIANCE_AUDIT.md : GO sur les deux stores
- [ ] Fiches EN + FR, privacy policy en ligne, app-ads.txt
- [ ] PORTFOLIO.md et RELEASE.md à jour

## Structure

```
app-factory/
├── CLAUDE.md           # Ce fichier (copié depuis PROJECT.md)
├── .claude/agents/     # 12 sous-agents
├── .claude/commands/   # Slash commands
├── docs/               # PORTFOLIO, DECISIONS, HUMAN_TODO, research/, compliance/, playbooks/
├── packages/core/      # @factory/core : ads, consent, iap, paywall, theme, i18n, settings
├── apps/<slug>/        # Une app par dossier
└── legal/              # Privacy policies, app-ads.txt, support page (GitHub Pages)
```

## Commandes

- `/research [thème]` — Phase 1, termine par shortlist
- `/new-app <slug> "<piste>"` — Phase 2
- `/build <slug>` — Phase 3
- `/audit <slug>` — Phase 4
- `/store-package <slug>` — Phase 5
- `/release <slug> <android|ios|all>` — Soumission après GO
- `/status` — Résumé PORTFOLIO + blocants
- `/policy-check` — Mise à jour checklists

---

**Note**: Ce fichier doit être copié en `CLAUDE.md` pour être chargé automatiquement par Claude Code.
