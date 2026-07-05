'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calculator, Clock, Map, Sparkles, Trophy } from 'lucide-react';
import { useMemo, useState } from 'react';

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Math.max(0, value));
}

export function RollPlanner() {
  const [cash, setCash] = useState('2500');
  const [rollCost, setRollCost] = useState('250');
  const [upgradeCost, setUpgradeCost] = useState('900');
  const [zoneCost, setZoneCost] = useState('5000');
  const [incomePerMinute, setIncomePerMinute] = useState('180');
  const [offlineHours, setOfflineHours] = useState('2');
  const [luckReady, setLuckReady] = useState(true);

  const result = useMemo(() => {
    const cashValue = toNumber(cash);
    const rollCostValue = toNumber(rollCost);
    const upgradeCostValue = toNumber(upgradeCost);
    const zoneCostValue = toNumber(zoneCost);
    const incomeValue = toNumber(incomePerMinute);
    const hoursValue = toNumber(offlineHours);
    const offlineIncome = incomeValue * 60 * hoursValue;
    const projectedCash = cashValue + offlineIncome;
    const rollCount =
      rollCostValue > 0 ? Math.floor(cashValue / rollCostValue) : 0;
    const projectedRollCount =
      rollCostValue > 0 ? Math.floor(projectedCash / rollCostValue) : 0;
    const canUpgrade = cashValue >= upgradeCostValue && upgradeCostValue > 0;
    const canZone = cashValue >= zoneCostValue && zoneCostValue > 0;
    const canZoneAfterOffline =
      projectedCash >= zoneCostValue && zoneCostValue > 0;

    let action = 'Save for offline income';
    let reason =
      'Your current cash does not comfortably cover a roll batch, a key upgrade, or the next zone.';
    let icon = Clock;

    if (
      canZone &&
      cashValue - zoneCostValue >= Math.min(rollCostValue, upgradeCostValue)
    ) {
      action = 'Buy the next zone';
      reason =
        'You can afford the zone and still keep money for a follow-up roll or upgrade.';
      icon = Map;
    } else if (canUpgrade) {
      action = 'Upgrade the current carry';
      reason =
        'A confirmed useful unit upgrade is usually safer than another roll when the zone is not comfortably affordable.';
      icon = Trophy;
    } else if (rollCount >= (luckReady ? 8 : 5)) {
      action = luckReady ? 'Run a luck roll batch' : 'Roll a small batch';
      reason = luckReady
        ? 'You have enough cash for several rolls while luck bonuses are ready.'
        : 'You can afford a few rolls, but stop if upgrades become the better spend.';
      icon = Sparkles;
    } else if (canZoneAfterOffline) {
      action = 'Wait for offline income, then buy zone';
      reason =
        'Your projected offline income reaches the zone cost without draining this session.';
      icon = Clock;
    }

    return {
      action,
      reason,
      icon,
      offlineIncome,
      projectedCash,
      rollCount,
      projectedRollCount,
    };
  }, [
    cash,
    rollCost,
    upgradeCost,
    zoneCost,
    incomePerMinute,
    offlineHours,
    luckReady,
  ]);

  const ResultIcon = result.icon;

  return (
    <section className="rounded-lg border border-[#3A4F2D] bg-[#182215] p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge className="bg-[#B7F44A] text-[#10140F]">Planner</Badge>
          <h2 className="mt-3 font-display text-3xl font-black">
            Roll session planner
          </h2>
          <p className="mt-2 max-w-2xl text-[#DCE9D2] text-sm leading-7">
            Compare your next Roll to Defend spend using the costs visible in
            your own server.
          </p>
        </div>
        <Calculator className="size-8 text-[#F5B642]" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Current cash', cash, setCash],
          ['Roll cost', rollCost, setRollCost],
          ['Key upgrade cost', upgradeCost, setUpgradeCost],
          ['Next zone cost', zoneCost, setZoneCost],
          ['Income per minute', incomePerMinute, setIncomePerMinute],
          ['Offline hours', offlineHours, setOfflineHours],
        ].map(([label, value, setter]) => (
          <label key={label as string} className="grid gap-2">
            <span className="font-medium text-[#FFF2C5] text-sm">
              {label as string}
            </span>
            <input
              type="number"
              min="0"
              value={value as string}
              onChange={(event) =>
                (setter as (next: string) => void)(event.target.value)
              }
              className="h-11 rounded-md border border-[#3A4F2D] bg-[#10140F] px-3 text-[#F9FFF1] outline-none transition placeholder:text-[#DCE9D2]/60 focus:border-[#B7F44A]"
            />
          </label>
        ))}
      </div>

      <label className="mt-5 flex w-fit cursor-pointer items-center gap-3 rounded-md border border-[#3A4F2D] bg-[#10140F] px-3 py-2 text-[#DCE9D2] text-sm">
        <input
          type="checkbox"
          checked={luckReady}
          onChange={(event) => setLuckReady(event.target.checked)}
          className="size-4 accent-[#B7F44A]"
        />
        Friend or group luck is ready
      </label>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-lg border border-[#3A4F2D] bg-[#10140F] p-5">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[#B7F44A] text-[#10140F]">
              <ResultIcon className="size-5" />
            </span>
            <div>
              <p className="text-[#DCE9D2] text-sm">Suggested next move</p>
              <h3 className="mt-1 font-display text-2xl font-bold text-[#FFF2C5]">
                {result.action}
              </h3>
              <p className="mt-3 text-[#DCE9D2] text-sm leading-7">
                {result.reason}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[#3A4F2D] bg-[#10140F] p-5">
          <h3 className="font-display text-xl font-bold text-[#FFF2C5]">
            Projection
          </h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-[#DCE9D2]">Offline income</dt>
              <dd className="font-semibold text-[#F9FFF1]">
                {formatNumber(result.offlineIncome)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#DCE9D2]">Cash after offline</dt>
              <dd className="font-semibold text-[#F9FFF1]">
                {formatNumber(result.projectedCash)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#DCE9D2]">Rolls now</dt>
              <dd className="font-semibold text-[#F9FFF1]">
                {formatNumber(result.rollCount)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#DCE9D2]">Rolls after offline</dt>
              <dd className="font-semibold text-[#F9FFF1]">
                {formatNumber(result.projectedRollCount)}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button
          type="button"
          className="bg-[#B7F44A] text-[#10140F] hover:bg-[#D7FF78]"
          onClick={() => {
            setCash('2500');
            setRollCost('250');
            setUpgradeCost('900');
            setZoneCost('5000');
            setIncomePerMinute('180');
            setOfflineHours('2');
            setLuckReady(true);
          }}
        >
          Reset sample
        </Button>
      </div>
    </section>
  );
}
