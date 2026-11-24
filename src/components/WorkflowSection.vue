<script setup>
import { ref } from 'vue'
import { siteConfig } from '@/data/siteData.js'
import { 
  GitPullRequest, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  FileCheck2,
  Terminal,
  Rocket
} from 'lucide-vue-next'

const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<template>
  <section id="alur-kerja" class="py-16 sm:py-20 md:py-28 relative bg-dark-surface/30 border-t border-white/5 overflow-hidden w-full max-w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 uppercase tracking-wider">
          <GitPullRequest class="w-3.5 h-3.5" />
          <span>{{ siteConfig.workflow.sectionBadge }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ siteConfig.workflow.headline }}
        </h2>
        <p class="text-base text-slate-400 leading-relaxed">
          {{ siteConfig.workflow.subheadline }}
        </p>
      </div>

      <!-- 4-Steps Process Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div
          v-for="(st, idx) in siteConfig.workflow.steps"
          :key="idx"
          class="relative p-6 rounded-2xl bg-dark-surface/80 border border-white/10 hover:border-brand-500/30 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <!-- Step Number Badge -->
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-accent-400">
                {{ st.step }}
              </span>
              <span class="w-2 h-2 rounded-full bg-brand-400 opacity-60"></span>
            </div>

            <!-- Title & Description -->
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
              {{ st.title }}
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-6">
              {{ st.desc }}
            </p>
          </div>

          <!-- Deliverables Tag -->
          <div class="pt-3 border-t border-white/5">
            <span class="text-[10px] font-mono uppercase text-slate-400 block mb-1">Deliverable:</span>
            <div class="flex items-start gap-1.5 text-xs text-brand-300 font-medium">
              <FileCheck2 class="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
              <span>{{ st.deliverable }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion Container -->
      <div class="max-w-3xl mx-auto mt-12 space-y-6">
        <div class="text-center space-y-2 mb-8">
          <div class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-400 font-semibold">
            <HelpCircle class="w-4 h-4" />
            <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
          </div>
          <h3 class="text-2xl font-bold text-white">
            Kejelasan Transaksi & Komitmen Kerjasama
          </h3>
        </div>

        <div class="space-y-3">
          <div
            v-for="(faqItem, index) in siteConfig.faq"
            :key="index"
            class="rounded-xl bg-dark-surface/60 border border-white/10 overflow-hidden transition-colors"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
            >
              <span class="text-sm sm:text-base font-semibold text-slate-200">
                {{ faqItem.q }}
              </span>
              <ChevronDown
                :class="[
                  'w-5 h-5 text-brand-400 shrink-0 transition-transform duration-300',
                  activeFaq === index ? 'rotate-180' : ''
                ]"
              />
            </button>

            <div
              v-show="activeFaq === index"
              class="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3"
            >
              {{ faqItem.a }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
