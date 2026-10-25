# HUMAN_TODO — Actions manuelles requises

Tâches que seul l'humain peut effectuer (comptes, paiements, tests sur device physique).

## Comptes à créer

### Google Play Console
- [ ] **Créer un compte développeur** — https://play.google.com/console/signup
  - Frais : 25 $ (unique)
  - Type : Personnel ou Organisation
    - **Personnel** : Nom légal visible comme vendeur, test fermé 14 jours requis (12+ testeurs)
    - **Organisation** : Nécessite numéro D-U-N-S, pas de test fermé obligatoire
  - Vérification d'identité requise
  - Délai : 2-7 jours après paiement

### Apple Developer Program
- [ ] **S'inscrire au programme** — https://developer.apple.com/programs/enroll/
  - Frais : 99 $/an
  - Type : Individuel ou Organisation
    - **Individuel** : Nom légal apparaît comme vendeur sur l'App Store
    - **Organisation** : Nécessite numéro D-U-N-S
  - Délai : 1-2 jours (individuel), 2+ semaines (organisation)

### Expo / EAS
- [ ] **Créer un compte Expo** — https://expo.dev/signup
  - Gratuit pour commencer (Free tier : 30 builds iOS/mois, 15 updates/mois)
  - Plan Production : 99 $/mois si besoin de plus

### AdMob
- [ ] **Créer un compte AdMob** — https://admob.google.com/
  - Gratuit
  - Lier à un compte Google existant
  - Configurer les infos de paiement pour recevoir les revenus
  - Créer les apps et récupérer les IDs (app ID, banner ID, interstitial ID)
  - Configurer les messages UMP (RGPD) dans la console

### RevenueCat
- [ ] **Créer un compte RevenueCat** — https://www.revenuecat.com/
  - Gratuit jusqu'à 2 500 $/mois de MTR (Monthly Tracked Revenue)
  - Au-delà : 1% du MTR (plafonné)
  - Configurer les connexions aux stores (credentials Google/Apple)

## Infrastructure

### Domaine / Hébergement legal/
- [ ] **Option A** : GitHub Pages (gratuit) — activer Pages sur le repo, pointer legal/ vers une branche gh-pages
- [ ] **Option B** : Domaine personnalisé — acheter un domaine (~12 $/an), configurer DNS
- Nécessaire pour :
  - Politique de confidentialité (URL requise par les deux stores)
  - Page support (email ou formulaire)
  - app-ads.txt (requis par AdMob)

### Profils de paiement
- [ ] **Google Play** : Configurer le profil marchand pour recevoir les revenus IAP
- [ ] **Apple** : Configurer les infos bancaires dans App Store Connect
- [ ] **AdMob** : Configurer le mode de paiement (virement, seuil 100 $)

## Matériel de test

### Appareils
- [ ] **Téléphone Android** — Pour tests finaux et captures d'écran
  - Minimum : Android 12+, idéalement 14+
  - Accès développeur activé, débogage USB
- [ ] **iPhone** — Pour tests via TestFlight
  - Minimum : iOS 16+, idéalement 17+
  - Inscrit dans le compte Apple Developer

### Testeurs (pour test fermé Google Play)
- [ ] **Recruter 15-20 testeurs** — Comptes Google, acceptent l'invitation
  - Minimum 12 doivent rester actifs 14 jours consécutifs
  - Sources : amis, famille, communautés Reddit/Discord, services de beta testing
  - Ne pas utiliser de faux comptes (risque de suspension)

## Par app (à répéter)

- [ ] Créer l'app dans Google Play Console (brouillon)
- [ ] Créer l'app dans App Store Connect (brouillon)
- [ ] Créer les produits IAP dans les deux consoles
- [ ] Créer l'app et les ad units dans AdMob
- [ ] Configurer l'app dans RevenueCat
- [ ] Publier la politique de confidentialité spécifique
- [ ] Soumettre pour review (après GO de l'agent)
- [ ] Test manuel sur device physique avant soumission

## Coûts récapitulatif

| Élément | Coût | Fréquence |
|---------|------|-----------|
| Google Play Console | 25 $ | Unique |
| Apple Developer Program | 99 $ | Annuel |
| Domaine (optionnel) | ~12 $ | Annuel |
| Expo (si dépassement Free tier) | 99 $ | Mensuel |
| RevenueCat (si > 2500 $ MTR) | 1% MTR | Mensuel |

**Investissement initial minimum : 124 $**
