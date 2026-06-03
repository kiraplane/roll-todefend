'use client';

import { Input } from '@/components/ui/input';
import type { Critter } from '@/data/clashofcritters/types';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CritterCard } from './critter-card';

export function CrittersBrowser({ critters }: { critters: Critter[] }) {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('all');

  const roles = [
    'all',
    ...Array.from(new Set(critters.map((item) => item.role))),
  ];
  const filtered = useMemo(() => {
    return critters.filter((critter) => {
      const matchesQuery = `${critter.name} ${critter.element} ${critter.role}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesRole = role === 'all' || critter.role === role;
      return matchesQuery && matchesRole;
    });
  }, [critters, query, role]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 rounded-lg border border-[#F2D5A8] bg-white p-3 md:grid-cols-[1fr_auto]">
        <div className="relative block">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-[#8E7355]" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by role, element, or upgrade job"
            aria-label="Search Duck Survival role profiles"
            className="h-11 border-[#E7C980] pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {roles.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setRole(item)}
              className={`h-11 rounded-md border px-3 text-sm font-medium transition ${
                role === item
                  ? 'border-[#E76825] bg-[#E76825] text-white'
                  : 'border-[#E7C980] bg-[#FFF4DC] text-[#4E4A38] hover:border-[#E76825]'
              }`}
            >
              {item === 'all' ? 'All roles' : item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((critter) => (
          <CritterCard key={critter.id} critter={critter} />
        ))}
      </div>
    </div>
  );
}
