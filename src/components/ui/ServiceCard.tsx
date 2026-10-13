import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/content/services";
import { Globe, MapPin, Smartphone, ShieldCheck, Palette, ShoppingBag, ChevronRight, Check } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-[var(--foreground)]" />,
  MapPin: <MapPin className="w-5 h-5 text-[var(--foreground)]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[var(--foreground)]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[var(--foreground)]" />,
  Palette: <Palette className="w-5 h-5 text-[var(--foreground)]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[var(--foreground)]" />,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const icon = iconMap[service.iconName] || <Globe className="w-5 h-5 text-[var(--foreground)]" />;

  return (
    <div className="flex flex-col justify-between rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-0.5">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[var(--surface-sunken)] border border-[var(--line)] flex items-center justify-center">
            {icon}
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--surface-sunken)] border border-[var(--line)] text-[var(--foreground)]">
            From {service.startingPrice}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight mb-2.5">
          {service.title}
        </h3>
        <p className="text-sm text-[var(--muted-text)] leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>

        {/* Deliverables snippet */}
        <div className="space-y-2 mb-8 pt-6 border-t border-[var(--line)]">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--foreground)]">
              <Check className="w-3.5 h-3.5 text-[#34c759] shrink-0 mt-0.5" />
              <span className="font-normal">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5 border-t border-[var(--line)] flex items-center justify-between">
        <span className="text-xs text-[var(--muted-text)] font-normal">
          {service.deliveryTime}
        </span>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline"
        >
          <span>Learn more</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
