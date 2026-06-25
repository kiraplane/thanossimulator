import { websiteConfig } from './config/website';

/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // legal pages
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  // Chrono CCG wiki routes
  Guides = '/guides',
  Rules = '/rules',
  Syndicates = '/syndicates',
  Decks = '/decks',
  Cards = '/cards',
  Tools = '/tools',
  CardFinder = '/tools/card-finder',
  DeckChecker = '/tools/deck-checker',
  CurveAnalyzer = '/tools/curve-analyzer',
  Codes = '/codes',
  TierList = '/tier-list',
  Download = '/download',
  Discord = '/discord',
  Updates = '/updates',
  BeginnerGuide = '/guides/beginner-guide',
  CodesGuide = '/guides/codes-redeem-guide',
  DeckbuildingGuide = '/guides/diver-deckbuilding-guide',
  PriorityGuide = '/guides/timeline-priority-guide',
  StarterDecksGuide = '/guides/starter-decks-guide',
  SyndicatesGuide = '/guides/syndicates-guide',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Root;
