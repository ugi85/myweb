<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { generateDirectWhatsAppLink } from '@/data/siteData.js'
import { smoothScrollTo } from '@/utils/smoothScroll.js'

// Components
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import TeamModelSection from '@/components/TeamModelSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import PortfolioModal from '@/components/PortfolioModal.vue'
import WorkflowSection from '@/components/WorkflowSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'

// Icons
import { MessageSquare, ArrowUp } from 'lucide-vue-next'

// Portfolio Modal State
const selectedProject = ref(null)
const isModalOpen = ref(false)

const handleOpenModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const handleCloseModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// Back to top & floating visibility
const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  smoothScrollTo(0, { duration: 750 })
}

// Global click delegator so all anchor links navigate with smooth glide and reveal effect
const handleGlobalAnchorClick = (e) => {
  const link = e.target.closest('a[href^="#"]')
  if (link && !link.hasAttribute('data-no-smooth')) {
    const href = link.getAttribute('href')
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      smoothScrollTo(href, { duration: 900, offset: 82 })
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleGlobalAnchorClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleGlobalAnchorClick)
})

const floatingWaUrl = generateDirectWhatsAppLink('Halo Bang Ugi, saya ingin diskusi kebutuhan software / IoT di Warung Bang Ugi')
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white relative w-full max-w-full overflow-x-hidden">
    <!-- Sticky Responsive Navbar -->
    <Navbar />

    <!-- Main Content Container -->
    <main class="flex-grow w-full max-w-full overflow-x-hidden">
      <!-- 1. Hero Section -->
      <HeroSection />

      <!-- 2. Services Section -->
      <ServicesSection />

      <!-- 3. Team Capacity & Collaborative Model -->
      <TeamModelSection />

      <!-- 4. Filterable Portfolio & Case Studies -->
      <PortfolioSection @open-modal="handleOpenModal" />

      <!-- 5. Structured 4-Step Workflow & FAQ -->
      <WorkflowSection />

      <!-- 6. Direct Contact & Interactive WA Inquiry Form -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Modal Detail Portofolio -->
    <PortfolioModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="handleCloseModal"
    />

    <!-- Floating Action Buttons -->
    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <!-- Back to top button -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-3"
      >
        <button
          v-if="showBackToTop"
          @click="scrollToTop"
          class="pointer-events-auto w-11 h-11 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
          aria-label="Kembali ke atas"
        >
          <ArrowUp class="w-5 h-5" />
        </button>
      </Transition>

      <!-- Floating WhatsApp Quick Action Button -->
      <!-- <a
        :href="floatingWaUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="pointer-events-auto group relative inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-brand-400 to-emerald-500 text-dark-bg font-bold text-xs shadow-2xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all duration-300"
        aria-label="Chat WhatsApp Langsung"
      >
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-bg opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-dark-bg"></span>
        </span>
        <MessageSquare class="w-4 h-4 fill-current" />
        <span class="hidden sm:inline">Tanya Teknis Sekarang</span>
      </a> -->
    </div>
  </div>
</template>
