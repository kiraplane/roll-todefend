import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Critter } from '@/data/clashofcritters/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, Shield, Sparkles, Swords } from 'lucide-react';
import Image from 'next/image';

function RoleMark({ critter }: { critter: Critter }) {
  const RoleIcon =
    critter.role === 'DPS'
      ? Swords
      : critter.role === 'Tank' || critter.role === 'Guardian'
        ? Shield
        : Sparkles;

  return (
    <div className="relative flex size-24 shrink-0 items-center justify-center rounded-lg bg-[#FFF4DC]">
      {critter.image ? (
        <Image
          src={critter.image}
          alt={critter.name}
          fill
          sizes="96px"
          className="p-2 object-contain"
        />
      ) : (
        <RoleIcon className="size-10 text-[#E76825]" aria-hidden />
      )}
    </div>
  );
}

export function CritterCard({ critter }: { critter: Critter }) {
  return (
    <article className="grid h-full gap-4 rounded-lg border border-[#E7C980] bg-[#FFFAF0] p-4 shadow-sm">
      <div className="flex items-start gap-4">
        <RoleMark critter={critter} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-bold text-[#2A2118]">
              {critter.name}
            </h3>
            <Badge className="bg-[#7C5CFF] text-white">
              Tier {critter.tier}
            </Badge>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline">{critter.element}</Badge>
            <Badge variant="outline">{critter.rarity}</Badge>
            <Badge variant="outline">{critter.role}</Badge>
          </div>
        </div>
      </div>

      <p className="text-sm leading-6 text-[#4E4A38]">{critter.summary}</p>

      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="rounded-md bg-[#FFF4DC] p-2">
          <Swords className="mb-1 size-4 text-[#E76825]" />
          <span className="text-[#7B643A]">ATK</span>
          <strong className="ml-2 text-[#2A2118]">
            {critter.stats.attack}
          </strong>
        </div>
        <div className="rounded-md bg-[#FFF4DC] p-2">
          <Sparkles className="mb-1 size-4 text-[#6FC24A]" />
          <span className="text-[#7B643A]">HP</span>
          <strong className="ml-2 text-[#2A2118]">{critter.stats.hp}</strong>
        </div>
        <div className="rounded-md bg-[#FFF4DC] p-2">
          <Shield className="mb-1 size-4 text-[#2F3E34]" />
          <span className="text-[#7B643A]">DEF</span>
          <strong className="ml-2 text-[#2A2118]">
            {critter.stats.defense}
          </strong>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3">
        <Badge variant="outline">{critter.role} role</Badge>
        <Button asChild variant="outline" size="sm">
          <LocaleLink href={`/heroes/${critter.slug}`}>
            Details
            <ArrowRight className="size-4" />
          </LocaleLink>
        </Button>
      </div>
    </article>
  );
}
