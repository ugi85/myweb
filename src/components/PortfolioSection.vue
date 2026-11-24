<script setup>
import { ref, computed } from 'vue'
import { siteConfig } from '@/data/siteData.js'
import { 
  FolderGit2, 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  Sparkles,
  Users2,
  UserCheck
} from 'lucide-vue-next'

const emit = defineEmits(['open-modal'])

const selectedCategory = ref('all')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return siteConfig.portfolio.items
  }
  return siteConfig.portfolio.items.filter(
    (item) => item.category === selectedCategory.value
  )
})

const handleCardClick = (project) => {
  emit('open-modal', project)
}
</script>

<template>
  <section id="portofolio" class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 uppercase tracking-wider">
          <FolderGit2 class="w-3.5 h-3.5" />
          <span>Studi Kasus & Rekam Jejak</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Portofolio Solusi Nyata yang Beroperasi
        </h2>
        <p class="text-base text-slate-400 leading-relaxed">
          Setiap proyek dirancang untuk menyelesaikan problem spesifik klien, mulai dari skala instrumen sensor lapangan hingga sistem manajemen perusahaan terdistribusi.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          v-for="cat in siteConfig.portfolio.categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200',
            selectedCategory === cat.id
              ? 'bg-brand-500 text-dark-bg shadow-lg shadow-brand-500/25 scale-105'
              : 'bg-dark-surface border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Projects Grid with Smooth Morphing Transitions -->
      <TransitionGroup
        name="project-grid"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          @click="handleCardClick(project)"
          class="group rounded-2xl bg-dark-surface/90 border border-white/10 hover:border-brand-500/40 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-500/10"
        >
          <!-- Card Image Thumbnail with Overlay -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-900">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent"></div>

            <!-- Scale Badge -->
            <div class="absolute top-3 left-3">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-dark-bg/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 font-semibold shadow">
                <Users2 v-if="project.scale.includes('Team')" class="w-3 h-3 text-accent-400" />
                <UserCheck v-else class="w-3 h-3 text-brand-400" />
                <span>{{ project.scale }}</span>
              </span>
            </div>

            <!-- Year Badge -->
            <div class="absolute top-3 right-3">
              <span class="px-2 py-0.5 rounded bg-dark-bg/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                {{ project.date }}
              </span>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-brand-400 font-semibold mb-1">
                {{ project.clientType }}
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-2">
                {{ project.title }}
              </h3>
              <p class="text-xs text-slate-300 line-clamp-3 mt-2 leading-relaxed">
                {{ project.summary }}
              </p>
            </div>

            <!-- Tech stack snippet -->
            <div class="pt-3 border-t border-white/5 space-y-3">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="t in project.stack.slice(0, 4)"
                  :key="t"
                  class="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-300"
                >
                  {{ t }}
                </span>
                <span
                  v-if="project.stack.length > 4"
                  class="px-1.5 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-400"
                >
                  +{{ project.stack.length - 4 }}
                </span>
              </div>

              <!-- Action Link -->
              <div class="flex items-center justify-between text-xs font-semibold text-brand-400 group-hover:text-brand-300 pt-1">
                <span>Pelajari Studi Kasus</span>
                <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>
