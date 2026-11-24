<script setup>
import { siteConfig, generateDirectWhatsAppLink } from '@/data/siteData.js'
import { 
  LayoutDashboard, 
  Smartphone, 
  Cpu, 
  Radio, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-vue-next'

const iconMap = {
  LayoutDashboard,
  Smartphone,
  Cpu,
  Radio,
}

const getServiceWhatsAppUrl = (serviceTitle) => {
  return generateDirectWhatsAppLink(`Diskusi Kebutuhan: ${serviceTitle}`)
}
</script>

<template>
  <section id="layanan" class="py-20 md:py-28 relative">
    <!-- Ambient glow behind section -->
    <div class="absolute top-1/2 left-0 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    <div class="absolute bottom-10 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Spesialisasi & Kapabilitas Solusi</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Solusi Teknologi yang Dibangun untuk Nilai Bisnis Nyata
        </h2>
        <p class="text-base text-slate-400 leading-relaxed">
          Dari antarmuka web berkecepatan tinggi, aplikasi mobile lapangan yang tahan offline, integrasi API sistem, hingga telemetri sensor IoT terpadu.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="service in siteConfig.services"
          :key="service.id"
          class="relative rounded-2xl bg-gradient-to-b from-dark-surface to-dark-card border border-white/10 hover:border-brand-500/40 p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1"
        >
          <!-- Popular / Badge indicator if present -->
          <div 
            v-if="service.popularBadge" 
            class="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-[11px] font-bold text-dark-bg uppercase tracking-wider shadow-md"
          >
            {{ service.popularBadge }}
          </div>

          <div>
            <!-- Icon & Title -->
            <div class="flex items-start gap-4 mb-5">
              <div class="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-dark-bg transition-all duration-300">
                <component :is="iconMap[service.icon]" class="w-6 h-6" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-xs text-slate-400 mt-1">
                  {{ service.shortDesc }}
                </p>
              </div>
            </div>

            <!-- Deliverables List -->
            <div class="space-y-2.5 py-4 border-t border-b border-white/5 my-4">
              <span class="text-[11px] uppercase tracking-wider font-mono text-slate-500 font-semibold block mb-2">
                Deliverables & Cakupan:
              </span>
              <div
                v-for="(item, idx) in service.deliverables"
                :key="idx"
                class="flex items-start gap-2.5 text-xs text-slate-300"
              >
                <CheckCircle2 class="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Tags & CTA footer -->
          <div class="pt-2 space-y-4">
            <!-- Tech tags -->
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in service.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-[11px] font-mono text-slate-300"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Card Action -->
            <a
              :href="getServiceWhatsAppUrl(service.title)"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-brand-500 hover:text-dark-bg text-slate-200 text-xs font-semibold border border-white/10 hover:border-transparent transition-all duration-200 group/btn"
            >
              <span>Konsultasikan Kebutuhan Ini</span>
              <ArrowRight class="w-4 h-4 text-brand-400 group-hover/btn:text-dark-bg group-hover/btn:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
