<script setup>
import { siteConfig, generateDirectWhatsAppLink } from '@/data/siteData.js'
import { smoothScrollTo } from '@/utils/smoothScroll.js'
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Users2, 
  Code2, 
  Cpu, 
  Activity,
  CheckCircle2
} from 'lucide-vue-next'

const waHeroUrl = generateDirectWhatsAppLink('Halo, saya ingin diskusi awal mengenai kebutuhan software / IoT')

const scrollToPortfolio = (e) => {
  e.preventDefault()
  smoothScrollTo('#portofolio', { duration: 900, offset: 82 })
}
</script>

<template>
  <section class="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden w-full max-w-full">
    <!-- Background Tech Glow Elements (strictly contained) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[350px] bg-gradient-to-tr from-brand-500/20 via-accent-500/15 to-transparent rounded-full blur-[100px]"></div>
      <div class="absolute -top-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-brand-600/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-10 -right-10 w-56 sm:w-96 h-56 sm:h-96 bg-accent-500/10 rounded-full blur-2xl"></div>
    </div>

    <!-- Subtle Grid Background -->
    <div 
      class="absolute inset-0 -z-20 opacity-20 pointer-events-none"
      style="background-image: radial-gradient(#334155 1px, transparent 1px); background-size: 24px 24px;"
    ></div>

    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <!-- Hero Text Content -->
        <div class="lg:col-span-7 space-y-5 text-center lg:text-left min-w-0">
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-800/80 border border-brand-500/30 text-[11px] sm:text-xs font-medium text-slate-200 backdrop-blur-sm shadow-inner max-w-full">
            <span class="flex h-2 w-2 relative shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span class="text-brand-300 font-semibold truncate">{{ siteConfig.hero.badge }}</span>
          </div>

          <!-- Main Headline -->
          <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight break-words">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-accent-300">
              {{ siteConfig.hero.headline.accent }}
            </span>
            <br class="hidden sm:inline" />
            <span class="text-slate-100">
              {{ siteConfig.hero.headline.normal }}
            </span>
          </h1>

          <!-- Subheadline -->
          <p class="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            {{ siteConfig.hero.subheadline }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
            <a
              :href="waHeroUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm md:text-base font-semibold text-slate-900 bg-gradient-to-r from-brand-400 via-brand-400 to-emerald-400 hover:from-brand-300 hover:to-emerald-300 rounded-xl shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageSquare class="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
              <span>Diskusi Proyek via WhatsApp</span>
            </a>

            <a
              href="#portofolio"
              @click="scrollToPortfolio"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm md:text-base font-medium text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-brand-500/40 rounded-xl backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              <span>Lihat Portofolio</span>
              <ArrowRight class="w-4 h-4 text-brand-400 shrink-0" />
            </a>
          </div>

          <!-- Highlight Value Badges -->
          <div class="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left w-full">
            <div 
              v-for="(item, idx) in siteConfig.hero.highlights" 
              :key="idx"
              class="p-3 rounded-xl bg-dark-surface/50 border border-white/5 backdrop-blur-sm"
            >
              <div class="flex items-center gap-2 text-brand-400 font-semibold text-xs mb-1">
                <CheckCircle2 class="w-3.5 h-3.5 shrink-0" />
                <span>{{ item.title }}</span>
              </div>
              <p class="text-[11px] text-slate-400 leading-snug">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Hero Technical Preview / Dashboard Mockup -->
        <div class="lg:col-span-5 w-full min-w-0">
          <div class="relative mx-auto max-w-full lg:max-w-none">
            <!-- Outer Glow -->
            <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500/20 to-accent-500/20 blur-lg opacity-75"></div>

            <!-- Terminal / Architecture Mockup Container -->
            <div class="relative rounded-2xl bg-dark-surface/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs w-full">
              <!-- Window Header -->
              <div class="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-slate-900/80 border-b border-white/10">
                <div class="flex items-center gap-1.5 sm:gap-2">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span class="ml-1 sm:ml-2 text-slate-400 text-[10px] sm:text-[11px] font-mono truncate max-w-[120px] sm:max-w-none">warung-bang-ugi-v2.sh</span>
                </div>
                <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-brand-400 font-sans shrink-0">
                  <span class="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                  <span>SYSTEM READY</span>
                </div>
              </div>

              <!-- Terminal Body -->
              <div class="p-3.5 sm:p-5 space-y-3.5 text-slate-300 w-full overflow-hidden">
                <div class="space-y-1 text-[11px] sm:text-xs break-all">
                  <div class="text-slate-500">$ warung-bang-ugi inspect --stack</div>
                  <div class="text-emerald-400">✓ Lead: Bang Ugi (Active Session)</div>
                  <div class="text-accent-400">✓ Squad: 4 Associates Standby</div>
                </div>

                <!-- Live Metrics Simulation Box -->
                <div class="p-3 rounded-xl bg-dark-bg/90 border border-white/5 space-y-2.5 font-sans w-full">
                  <div class="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-300 border-b border-white/5 pb-2">
                    <span class="flex items-center gap-1.5 text-brand-400 truncate">
                      <Cpu class="w-3.5 h-3.5 shrink-0" />
                      Live Telemetry & Status
                    </span>
                    <span class="text-[10px] text-slate-400 font-mono shrink-0">24ms</span>
                  </div>

                  <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2 rounded-lg bg-slate-800/60 border border-white/5 min-w-0">
                      <div class="text-[9px] text-slate-400 uppercase truncate">IoT Node Cluster</div>
                      <div class="text-emerald-400 font-semibold font-mono flex items-center gap-1 mt-0.5 text-[11px] truncate">
                        <Activity class="w-3 h-3 shrink-0" />
                        Online
                      </div>
                    </div>
                    <div class="p-2 rounded-lg bg-slate-800/60 border border-white/5 min-w-0">
                      <div class="text-[9px] text-slate-400 uppercase truncate">API Rate</div>
                      <div class="text-accent-300 font-semibold font-mono mt-0.5 text-[11px] truncate">
                        99.98% / 200
                      </div>
                    </div>
                  </div>

                  <!-- Mini progress snippet -->
                  <div class="space-y-1">
                    <div class="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
                      <span>SPRINT PROGRESS</span>
                      <span class="text-brand-400">92%</span>
                    </div>
                    <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-brand-400 to-accent-400 rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>

                <!-- Code Architecture Snippet -->
                <div class="p-2.5 sm:p-3 rounded-lg bg-dark-bg/70 border border-white/5 text-[10px] sm:text-[11px] leading-relaxed font-mono overflow-x-auto break-words">
                  <span class="text-slate-500">// Direct partnership without bureaucracy</span><br />
                  <span class="text-purple-400">const</span> clientProject = <span class="text-purple-400">await</span> warung.<span class="text-blue-400">deploy</span>({<br />
                  &nbsp;&nbsp;directLead: <span class="text-emerald-300">'Bang Ugi'</span>,<br />
                  &nbsp;&nbsp;guarantee: <span class="text-amber-300">'100% Client Ownership'</span><br />
                  });
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Bar Section -->
      <div class="mt-12 sm:mt-16 pt-8 border-t border-white/10 w-full">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div 
            v-for="(stat, idx) in siteConfig.hero.stats" 
            :key="idx" 
            class="p-3 sm:p-4 rounded-xl bg-dark-surface/40 border border-white/5 hover:border-brand-500/30 transition-all duration-300"
          >
            <div class="text-xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400 font-mono">
              {{ stat.value }}
            </div>
            <div class="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-1 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
