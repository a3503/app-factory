import { useConsentContext } from './ConsentManager';

/**
 * Hook to access consent status
 */
export function useConsent() {
  return useConsentContext();
}
