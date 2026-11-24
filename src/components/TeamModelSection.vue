<script setup>
import { siteConfig, generateDirectWhatsAppLink } from '@/data/siteData.js'
import { 
  ShieldCheck, 
  Users2, 
  Coins, 
  Zap, 
  CheckCircle2, 
  ExternalLink,
  Github, 
  Linkedin, 
  Mail,
  UserCheck,
  Sparkles,
  Layers
} from 'lucide-vue-next'

const iconMap = {
  ShieldCheck,
  Users2,
  Coins,
  Zap,
}

const principalWaUrl = generateDirectWhatsAppLink('Halo Fakhri, saya ingin konsultasi teknis langsung dengan Principal Engineer')
</script>

<template>
  <section id="tim" class="py-16 sm:py-20 md:py-28 relative bg-dark-surface/40 border-y border-white/5 overflow-hidden w-full max-w-full">
    <!-- Ambient glow behind section (strictly contained) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute top-1/3 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-brand-500/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-10 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-accent-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs font-semibold text-accent-400 uppercase tracking-wider">
          <Layers class="w-3.5 h-3.5" />
          <span>{{ siteConfig.teamModel.sectionBadge }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ siteConfig.teamModel.headline }}
        </h2>
        <p class="text-base text-slate-300 leading-relaxed">
          {{ siteConfig.teamModel.subheadline }}
        </p>
      </div>

      <!-- Core Advantages Grid (Why this model wins) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div
          v-for="(adv, idx) in siteConfig.teamModel.advantages"
          :key="idx"
          class="p-5 rounded-2xl bg-dark-surface/80 border border-white/10 hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
              <component :is="iconMap[adv.icon]" class="w-5 h-5" />
            </div>
            <h3 class="text-base font-bold text-white mb-2">
              {{ adv.title }}
            </h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              {{ adv.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Principal Spotlight Card -->
      <div class="mb-16">
        <div class="relative rounded-3xl bg-gradient-to-r from-dark-surface via-dark-card to-dark-surface border border-brand-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div class="absolute -top-12 -right-12 w-64 h-64 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Avatar & Role Summary -->
            <div class="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div class="relative">
                <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-brand-400/40 shadow-xl bg-gradient-to-br from-brand-950/50 via-slate-900 to-dark-card p-2 flex items-center justify-center">
                  <img
                    :src="siteConfig.teamModel.principal.avatar"
                    :alt="siteConfig.teamModel.principal.name"
                    class="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(16,185,129,0.25)]"
                    loading="lazy"
                  />
                </div>
                <span class="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-brand-500 text-dark-bg text-[10px] font-bold uppercase tracking-wider shadow">
                  {{ siteConfig.teamModel.principal.status }}
                </span>
              </div>

              <div>
                <h3 class="text-2xl font-extrabold text-white">
                  {{ siteConfig.teamModel.principal.name }}
                </h3>
                <p class="text-sm font-semibold text-brand-400">
                  {{ siteConfig.teamModel.principal.role }}
                </p>
                <p class="text-xs text-slate-400 mt-1 font-mono">
                  {{ siteConfig.teamModel.principal.experience }}
                </p>
              </div>

              <div class="flex items-center gap-3 pt-1">
                <a 
                  :href="siteConfig.contact.github" 
                  target="_blank" 
                  rel="noopener"
                  class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github class="w-4 h-4" />
                </a>
                <a 
                  :href="siteConfig.contact.linkedin" 
                  target="_blank" 
                  rel="noopener"
                  class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin class="w-4 h-4" />
                </a>
                <a 
                  :href="'mailto:' + siteConfig.contact.email" 
                  class="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="Email"
                >
                  <Mail class="w-4 h-4" />
                </a>
              </div>
            </div>

            <!-- Bio & Core Tech Specs -->
            <div class="lg:col-span-8 space-y-5">
              <div class="space-y-2">
                <span class="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold">
                  Profil & Komitmen Teknis
                </span>
                <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {{ siteConfig.teamModel.principal.bio }}
                </p>
              </div>

              <div class="space-y-3">
                <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Keahlian Arsitektur & Rekayasa Inti:
                </span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div
                    v-for="(spec, idx) in siteConfig.teamModel.principal.specialties"
                    :key="idx"
                    class="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-white/5"
                  >
                    <CheckCircle2 class="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>{{ spec }}</span>
                  </div>
                </div>
              </div>

              <div class="pt-2">
                <a
                  :href="principalWaUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-dark-bg font-semibold text-xs shadow-lg shadow-brand-500/20 transition-all duration-200"
                >
                  <UserCheck class="w-4 h-4" />
                  <span>Jadwalkan Diskusi Langsung dengan Bang Ugi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Collaborators Header -->
      <div class="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-accent-400 font-semibold block">
            Jaringan Kolaborator Terpercaya
          </span>
          <h3 class="text-2xl font-bold text-white mt-1">
            The On-Demand Squad
          </h3>
          <p class="text-xs text-slate-400 mt-1 max-w-xl">
            Engineer senior rekanan yang siap bergabung dalam sprint intensif saat proyek membutuhkan keahlian spesifik tambahan.
          </p>
        </div>
        <div class="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>4 Senior Associates Ready</span>
        </div>
      </div>

      <!-- Collaborators Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(member, idx) in siteConfig.teamModel.collaborators"
          :key="idx"
          class="rounded-2xl bg-dark-surface/70 border border-white/10 hover:border-accent-500/30 p-5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-md bg-accent-500/10 border border-accent-500/20 text-[10px] font-mono text-accent-300 font-semibold">
                {{ member.status }}
              </span>
              <span class="text-[11px] text-slate-400 font-mono">
                {{ member.experience }}
              </span>
            </div>

            <div>
              <h4 class="text-base font-bold text-white group-hover:text-accent-300 transition-colors">
                {{ member.name }}
              </h4>
              <p class="text-xs text-slate-300 font-medium mt-0.5">
                {{ member.role }}
              </p>
            </div>

            <p class="text-xs text-slate-400 leading-relaxed">
              {{ member.bio }}
            </p>
          </div>

          <!-- Skills tags -->
          <div class="pt-4 border-t border-white/5 mt-4">
            <div class="flex flex-wrap gap-1">
              <span
                v-for="skill in member.skills"
                :key="skill"
                class="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
