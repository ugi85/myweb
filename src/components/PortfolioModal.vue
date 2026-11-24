<script setup>
import { onMounted, onUnmounted } from 'vue'
import { generateDirectWhatsAppLink } from '@/data/siteData.js'
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Users2, 
  UserCheck, 
  MessageSquare,
  Cpu
} from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

const getWaUrl = (title) => {
  return generateDirectWhatsAppLink(`Saya tertarik dengan studi kasus: ${title}. Ingin diskusi implementasi serupa.`)
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto w-full max-w-full"
    >
      <!-- Backdrop -->
      <div 
        @click="emit('close')"
        class="fixed inset-0 bg-dark-bg/80 backdrop-blur-md transition-opacity"
      ></div>

      <!-- Modal Dialog Window -->
      <div
        class="relative w-full max-w-3xl rounded-3xl bg-dark-surface border border-white/10 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
      >
        <!-- Modal Top Bar -->
        <div class="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-white/10">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-mono text-brand-400 font-semibold">
              {{ project.category.toUpperCase() }}
            </span>
            <span class="text-xs text-slate-400 font-mono">
              • {{ project.clientType }}
            </span>
          </div>

          <button
            @click="emit('close')"
            class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Modal Body (Scrollable) -->
        <div class="p-6 sm:p-8 overflow-y-auto space-y-6">
          <!-- Thumbnail banner -->
          <div class="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-800">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent"></div>
            
            <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-bg/90 backdrop-blur-md border border-white/10 text-xs font-mono text-brand-400">
                <Users2 v-if="project.scale.includes('Team')" class="w-3.5 h-3.5 text-accent-400" />
                <UserCheck v-else class="w-3.5 h-3.5 text-brand-400" />
                <span>{{ project.scale }}</span>
              </span>
              <span class="text-xs font-mono text-slate-300 px-2 py-1 rounded bg-dark-bg/80">
                Tahun: {{ project.date }}
              </span>
            </div>
          </div>

          <!-- Title -->
          <div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
              {{ project.title }}
            </h3>
            <p class="text-sm text-slate-300 mt-2 leading-relaxed">
              {{ project.summary }}
            </p>
          </div>

          <!-- Problem & Technical Solution Box -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Problem -->
            <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
              <div class="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                <AlertCircle class="w-4 h-4" />
                <span>Tantangan & Masalah Klien</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                {{ project.problem }}
              </p>
            </div>

            <!-- Solution -->
            <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <div class="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 class="w-4 h-4" />
                <span>Arsitektur & Solusi Rekayasa</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>

          <!-- Hasil / Dampak Nyata -->
          <div class="p-5 rounded-2xl bg-dark-bg/60 border border-white/5 space-y-3">
            <span class="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold block">
              Hasil Terukur & Dampak Operasional:
            </span>
            <div class="space-y-2">
              <div
                v-for="(res, idx) in project.results"
                :key="idx"
                class="flex items-start gap-2.5 text-xs text-slate-200"
              >
                <CheckCircle2 class="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{{ res }}</span>
              </div>
            </div>
          </div>

          <!-- Tech Stack Tags -->
          <div class="space-y-2">
            <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Tech Stack & Protokol:
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in project.stack"
                :key="t"
                class="px-3 py-1 rounded-lg bg-slate-800 border border-white/10 text-xs font-mono text-slate-200"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>

        <!-- Modal Bottom Actions -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-slate-900/90 border-t border-white/10">
          <span class="text-xs text-slate-400 text-center sm:text-left">
            Tertarik membangun arsitektur serupa untuk bisnis Anda?
          </span>

          <div class="flex items-center gap-2 w-full sm:w-auto">
            <a
              :href="getWaUrl(project.title)"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-brand-400 hover:bg-brand-300 rounded-xl shadow-lg transition-colors"
            >
              <MessageSquare class="w-4 h-4 fill-current" />
              <span>Diskusikan Proyek Serupa</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
