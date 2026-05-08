import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';

export const preventBackButtonGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // Inject the router so we can inspect the current navigation trigger.
  // `Router.getCurrentNavigation()?.trigger` is the most reliable way to
  // detect a browser back/forward (popstate) navigation during a guard.
  const router = inject(Router);
  const navigation = router.getCurrentNavigation?.();

  const isBackNavigation =
    navigation?.trigger === 'popstate' || (nextState as any)?.navigationTrigger === 'popstate';

  if (isBackNavigation) {
    // Block only browser BACK/forward (popstate).
    // When the browser fires a popstate the history entry has already moved.
    // Cancelling the Angular navigation alone doesn't restore the browser
    // history position, so subsequent BACK clicks will keep moving back.
    // Push the current URL back onto the history stack to keep the user
    // on the same page and then cancel the navigation.
    try {
      history.pushState(null, '', window.location.href);
    } catch (e) {
      // ignore if pushState is not available for some environment
    }

    return false;
  }

    return true;      // ✅ Allow all other navigation

};
