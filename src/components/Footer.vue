<script setup>
import { siteConfig } from '@/data/siteData.js'
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare,
  Heart
} from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark-bg border-t border-white/10 pt-16 pb-12 relative overflow-hidden w-full max-w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
        <!-- Brand Info -->
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 via-slate-900 to-accent-500/15 p-1 border border-brand-500/30 shadow-lg shadow-brand-500/10 flex items-center justify-center">
              <img
                :src="siteConfig.brand.logoIcon"
                :alt="siteConfig.brand.name"
                class="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(16,185,129,0.3)]"
              />
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold tracking-tight text-white">
                {{ siteConfig.brand.name }}
              </span>
              <span class="text-[10px] uppercase font-mono tracking-wider text-brand-400 -mt-0.5">
                Jasa Software & Teknologi
              </span>
            </div>
          </div>

          <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
            Personal-led tech consultancy yang ramah, lincah, dan fleksibel. Menggabungkan kecepatan eksekusi mandiri Principal Engineer dengan kapasitas On-Demand Squad untuk menyelesaikan proyek software, automasi, dan IoT tingkat industri.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <a
              :href="siteConfig.contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              :href="siteConfig.contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              :href="'mailto:' + siteConfig.contact.email"
              class="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Quick Navigation -->
        <div class="lg:col-span-3 space-y-3">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
            Navigasi Cepat
          </div>
          <ul class="space-y-2 text-xs text-slate-400">
            <li v-for="item in siteConfig.navigation" :key="item.href">
              <a :href="item.href" class="hover:text-brand-400 transition-colors">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services Recap -->
        <div class="lg:col-span-4 space-y-3">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
            Layanan Unggulan
          </div>
          <ul class="space-y-2 text-xs text-slate-400">
            <li v-for="s in siteConfig.services" :key="s.id">
              <a href="#layanan" class="hover:text-brand-400 transition-colors">
                {{ s.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          &copy; {{ currentYear }} <strong class="text-slate-200">{{ siteConfig.brand.name }}</strong>. Hak cipta dilindungi.
        </div>
        <div class="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span>Diracik dengan Kopi, Logika & Kode Bersih</span>
        </div>
      </div>
    </div>
  </footer>
</template>
