import { sources } from './sources';
import type { TierEntry } from './types';

export const tierEntries: TierEntry[] = [
  {
    critterSlug: 'shooter-carry',
    tier: 'S',
    mode: 'overall',
    reason:
      'A focused damage carry is the cleanest first upgrade target once your base can survive long enough.',
    confidence: 'medium',
    sources: [sources.googlePlay],
  },
  {
    critterSlug: 'control-support',
    tier: 'S',
    mode: 'stage_push',
    reason:
      'Freeze, slow, or stun control is valuable when waves arrive too quickly and your towers need more time.',
    confidence: 'medium',
    sources: [sources.googlePlay],
  },
  {
    critterSlug: 'emp-tower-support',
    tier: 'A',
    mode: 'early',
    reason:
      'EMP-style utility supports the build-by-day, defend-by-night loop and makes tower setups more stable.',
    confidence: 'medium',
    sources: [sources.googlePlay],
  },
  {
    critterSlug: 'dragon-burst',
    tier: 'A',
    mode: 'boss',
    reason:
      'Burst damage becomes attractive after control is solved and you need stronger boss or elite pressure.',
    confidence: 'medium',
    sources: [sources.googlePlay],
  },
  {
    critterSlug: 'fortress-defender',
    tier: 'A',
    mode: 'f2p',
    reason:
      'A defensive slot is often the best value for players losing before dawn instead of losing to timers.',
    confidence: 'medium',
    sources: [sources.googlePlay],
  },
  {
    critterSlug: 'tempo-flex',
    tier: 'B',
    mode: 'overall',
    reason:
      'Tempo utility is useful, but it is usually a side slot after tank, control, and main damage are stable.',
    confidence: 'needs_verification',
    sources: [sources.googlePlay],
  },
];
