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

  // Roll to Defend wiki routes
  Guides = '/guides',
  Codes = '/codes',
  Units = '/units',
  TierList = '/tier-list',
  Zones = '/zones',
  Luck = '/luck',
  Planner = '/planner',
  Download = '/download',
  Discord = '/discord',
  Updates = '/updates',
  BeginnerGuide = '/guides/beginner-guide',
  HowToPlayGuide = '/guides/how-to-play',
  CodesGuide = '/guides/codes-status-guide',
  BestUnitsGuide = '/guides/best-units-watch-guide',
  ZonesGuide = '/guides/zones-and-upgrades-guide',
  LuckGuide = '/guides/luck-and-group-bonus-guide',
  OfflineIncomeGuide = '/guides/offline-income-guide',
  DiscordTrelloGuide = '/guides/discord-trello-safety-guide',
  FakeScriptsGuide = '/guides/fake-scripts-warning',
  LatestUpdateGuide = '/guides/latest-update-checklist',

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
