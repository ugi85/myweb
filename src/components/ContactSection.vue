<script setup>
import { ref, reactive } from 'vue'
import { 
  siteConfig, 
  generateWhatsAppLink, 
  generateDirectWhatsAppLink 
} from '@/data/siteData.js'
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  PhoneCall
} from 'lucide-vue-next'

const form = reactive({
  name: '',
  company: '',
  projectType: 'web-dashboard',
  budget: '15m-30m',
  notes: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = () => {
  if (!form.name.trim()) {
    alert('Mohon masukkan nama Anda terlebih dahulu.')
    return
  }

  isSubmitting.value = true
  
  // Generate WhatsApp formatted URL
  const waUrl = generateWhatsAppLink(form)
  
  // Open WhatsApp in new tab
  window.open(waUrl, '_blank')
  
  submitSuccess.value = true
  setTimeout(() => {
    isSubmitting.value = false
  }, 1000)
}

const directWaUrl = generateDirectWhatsAppLink('Konsultasi Kebutuhan Teknologi')
</script>

<template>
  <section id="kontak" class="py-20 md:py-28 relative">
    <!-- Ambient glow behind contact -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 uppercase tracking-wider">
          <MessageSquare class="w-3.5 h-3.5" />
          <span>Mulai Kolaborasi</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Diskusikan Rencana Proyek Anda Sekarang
        </h2>
        <p class="text-base text-slate-400 leading-relaxed">
          Punya ide aplikasi, sistem internal kantor yang butuh automasi, atau purwarupa IoT yang ingin diwujudkan? Hubungi langsung tanpa komitmen awal.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Left Side: Direct Contact Details & Value Props -->
        <div class="lg:col-span-5 space-y-6">
          <div class="p-6 sm:p-8 rounded-3xl bg-dark-surface/90 border border-white/10 space-y-6">
            <h3 class="text-xl font-bold text-white">
              Akses Langsung ke Tim Teknis
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Anda tidak perlu menunggu berhari-hari hanya untuk respon penawaran umum. Kami siap mendiskusikan arsitektur dan estimasi realistis dalam hitungan jam.
            </p>

            <div class="space-y-4 pt-2">
              <!-- WhatsApp Direct -->
              <a
                :href="directWaUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-brand-500/40 transition-colors group"
              >
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <PhoneCall class="w-5 h-5" />
                </div>
                <div class="flex-1">
                  <div class="text-[11px] font-mono text-slate-400">WhatsApp Chat</div>
                  <div class="text-sm font-bold text-white group-hover:text-emerald-300">
                    +{{ siteConfig.contact.whatsappNumber }}
                  </div>
                </div>
                <ArrowUpRight class="w-4 h-4 text-slate-500 group-hover:text-brand-400" />
              </a>

              <!-- Email -->
              <a
                :href="'mailto:' + siteConfig.contact.email"
                class="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-brand-500/40 transition-colors group"
              >
                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail class="w-5 h-5" />
                </div>
                <div class="flex-1">
                  <div class="text-[11px] font-mono text-slate-400">Email Resmi</div>
                  <div class="text-sm font-bold text-white group-hover:text-blue-300">
                    {{ siteConfig.contact.email }}
                  </div>
                </div>
                <ArrowUpRight class="w-4 h-4 text-slate-500 group-hover:text-brand-400" />
              </a>

              <!-- Location -->
              <div class="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <MapPin class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-[11px] font-mono text-slate-400">Basis Operasional</div>
                  <div class="text-xs font-semibold text-white">
                    {{ siteConfig.brand.location }}
                  </div>
                </div>
              </div>

              <!-- Working Hours -->
              <div class="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Clock class="w-5 h-5" />
                </div>
                <div>
                  <div class="text-[11px] font-mono text-slate-400">Jam Respon Cepat</div>
                  <div class="text-xs font-semibold text-white">
                    {{ siteConfig.contact.workingHours }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Interactive Project Inquiry Form -->
        <div class="lg:col-span-7">
          <div class="p-6 sm:p-10 rounded-3xl bg-dark-surface/90 border border-white/10 shadow-2xl relative">
            <div class="mb-6 space-y-1">
              <h3 class="text-xl font-bold text-white">
                Formulir Rencana Proyek
              </h3>
              <p class="text-xs text-slate-400">
                Isi data ringkas di bawah. Setelah menekan tombol kirim, sistem akan otomatis membuka obrolan WhatsApp dengan template yang sudah tersusun rapi.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Name & Company in 2 cols -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-300">
                    Nama Lengkap <span class="text-red-400">*</span>
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Misal: Budi Hermawan"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors"
                  />
                </div>

                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-300">
                    Nama Bisnis / Instansi
                  </label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Misal: PT Maju Mandiri / Personal"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors"
                  />
                </div>
              </div>

              <!-- Project Type Dropdown -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-300">
                  Jenis Kebutuhan Solusi
                </label>
                <select
                  v-model="form.projectType"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors"
                >
                  <option
                    v-for="pType in siteConfig.projectTypes"
                    :key="pType.id"
                    :value="pType.id"
                  >
                    {{ pType.label }}
                  </option>
                </select>
              </div>

              <!-- Budget Range Dropdown -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-300">
                  Estimasi Alokasi Anggaran
                </label>
                <select
                  v-model="form.budget"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors"
                >
                  <option
                    v-for="bRange in siteConfig.budgetRanges"
                    :key="bRange.id"
                    :value="bRange.id"
                  >
                    {{ bRange.label }}
                  </option>
                </select>
              </div>

              <!-- Project Notes Textarea -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-300">
                  Ringkasan Kebutuhan & Target Waktu
                </label>
                <textarea
                  v-model="form.notes"
                  rows="3"
                  placeholder="Ceritakan gambaran fitur yang diinginkan, sistem yang sudah ada, atau kendala yang dihadapi saat ini..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors resize-none"
                ></textarea>
              </div>

              <!-- Privacy Notice -->
              <div class="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck class="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tanpa registrasi akun. Formulir langsung terhubung ke WhatsApp privat Anda.</span>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-400 via-brand-500 to-emerald-400 hover:from-brand-300 hover:to-emerald-300 text-slate-950 font-bold text-sm shadow-xl shadow-brand-500/20 hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Send class="w-4 h-4 fill-current" />
                <span>Kirim & Mulai Diskusi via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
