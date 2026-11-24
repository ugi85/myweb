<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { siteConfig, generateDirectWhatsAppLink } from '@/data/siteData.js'
import { smoothScrollTo } from '@/utils/smoothScroll.js'
import { 
  Menu, 
  X, 
  MessageSquare, 
  Terminal, 
  ArrowRight,
  Sparkles
} from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('#layanan')

let observer = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Cinematic smooth scrolling with offset and target section reveal
const scrollToSection = (e, href) => {
  if (e) e.preventDefault()
  closeMobileMenu()

  if (!href || href === '#') {
    smoothScrollTo(0, { duration: 750 })
    activeSection.value = ''
    return
  }

  activeSection.value = href
  smoothScrollTo(href, {
    duration: 900,
    offset: 82,
  })
}

// Setup IntersectionObserver for active menu tracking
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  const sectionIds = siteConfig.navigation.map(item => item.href.replace('#', ''))
  
  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = `#${entry.target.id}`
      }
    })
  }, observerOptions)

  sectionIds.forEach(id => {
    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) {
    observer.disconnect()
  }
})

const waDirectUrl = generateDirectWhatsAppLink('Konsultasi Awal Proyek')
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-dark-bg/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a 
          href="#" 
          @click="scrollToSection($event, '#')"
          class="flex items-center gap-3 group focus:outline-none"
        >
          <div class="relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 via-slate-900 to-accent-500/15 p-1 border border-brand-500/30 shadow-lg shadow-brand-500/10 group-hover:scale-105 group-hover:border-brand-400/60 group-hover:shadow-brand-500/25 transition-all duration-300 flex items-center justify-center">
            <img
              :src="siteConfig.brand.logoIcon"
              :alt="siteConfig.brand.name"
              class="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(16,185,129,0.3)]"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="text-xl font-extrabold tracking-tight text-white group-hover:text-brand-300 transition-colors">
                {{ siteConfig.brand.name }}
              </span>
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
            </div>
            <span class="text-[10px] uppercase font-mono tracking-wider text-brand-400 -mt-0.5">
              Jasa Software & Teknologi
            </span>
          </div>
        </a>

        <!-- Desktop Navigation with Active Pill Indicator -->
        <nav class="hidden md:flex items-center gap-1 bg-dark-surface/85 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-lg shadow-black/20">
          <a
            v-for="item in siteConfig.navigation"
            :key="item.href"
            :href="item.href"
            @click="scrollToSection($event, item.href)"
            :class="[
              'relative text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 select-none cursor-pointer',
              activeSection === item.href
                ? 'text-dark-bg font-bold bg-gradient-to-r from-brand-400 to-emerald-400 shadow-md shadow-brand-500/25 scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            ]"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center gap-3">
          <a
            :href="waDirectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-300 hover:to-brand-400 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageSquare class="w-4 h-4 fill-current" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex md:hidden items-center gap-2">
          <a
            :href="waDirectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-lg text-xs font-semibold flex items-center gap-1"
          >
            <MessageSquare class="w-4 h-4" />
          </a>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            <component :is="mobileMenuOpen ? X : Menu" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Menu with Smooth Scroll Actions -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-dark-surface/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4"
      >
        <div class="flex items-center justify-between pb-3 border-b border-white/10">
          <div class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="text-xs font-mono text-emerald-400">{{ siteConfig.brand.availability }}</span>
          </div>
          <button @click="closeMobileMenu" class="text-slate-400 hover:text-white">
            <X class="w-5 h-5" />
          </button>
        </div>

        <nav class="flex flex-col space-y-1">
          <a
            v-for="item in siteConfig.navigation"
            :key="item.href"
            :href="item.href"
            @click="scrollToSection($event, item.href)"
            :class="[
              'flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
              activeSection === item.href
                ? 'text-brand-300 bg-brand-500/10 font-bold border border-brand-500/20'
                : 'text-slate-200 hover:text-brand-400 hover:bg-white/5'
            ]"
          >
            <span>{{ item.label }}</span>
            <ArrowRight class="w-4 h-4 opacity-50" />
          </a>
        </nav>

        <div class="pt-2">
          <a
            :href="waDirectUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMobileMenu"
            class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-900 bg-brand-400 hover:bg-brand-300 rounded-xl shadow-lg shadow-brand-500/20"
          >
            <MessageSquare class="w-4 h-4 fill-current" />
            <span>Diskusi Proyek via WhatsApp</span>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
