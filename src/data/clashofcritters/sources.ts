import type { DataSource } from './types';

export const CHECKED_AT = '2026-06-03';

export const sources: Record<string, DataSource> = {
  googlePlay: {
    type: 'official',
    label: 'Google Play official listing',
    url: 'https://play.google.com/store/apps/details?id=com.mrtgd2us.google&hl=en_US',
    checkedAt: CHECKED_AT,
    confidence: 'high',
  },
  appStore: {
    type: 'official',
    label: 'App Store listing',
    url: 'https://apps.apple.com/ca/app/duck-survival/id6761410877',
    checkedAt: CHECKED_AT,
    confidence: 'high',
  },
  pocketTactics: {
    type: 'guide_site',
    label: 'Pocket Tactics Duck Survival codes',
    url: 'https://www.pockettactics.com/duck-survival-codes',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'External codes page used as a cross-checking source.',
  },
  allThingsHow: {
    type: 'guide_site',
    label: 'All Things How Duck Survival codes',
    url: 'https://allthings.how/duck-survival-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'External codes page used as a cross-checking source.',
  },
  mrGuider: {
    type: 'guide_site',
    label: 'MrGuider Duck Survival codes',
    url: 'https://www.mrguider.org/codes/duck-survival-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'External codes and beginner notes used for cross-checking.',
  },
  communityCodes: {
    type: 'community',
    label: 'Community code reports',
    url: 'https://www.reddit.com/r/redeemcodesmobile/comments/1tqbkeg/duck_survival_codes_updated_regularly/',
    checkedAt: CHECKED_AT,
    confidence: 'low',
    note: 'Community code posts are useful leads, not official confirmation.',
  },
};

export const officialAppFacts = {
  name: 'Duck Survival',
  developer: 'Joy Nice Games',
  publisher: 'Joy Nice Games',
  googlePlayAppId: 'com.mrtgd2us.google',
  updatedOn: '2026-05-24',
  downloads: '500K+',
  genres: ['Strategy', 'Tower defense', 'Roguelike shooter'],
  source: sources.googlePlay,
};
