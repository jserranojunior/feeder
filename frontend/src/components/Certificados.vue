<template>
  <section id="certificados" class="mt-6">
    <div class="py-4 px-8 mt-4 text-center mb-6">
      <span class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800">
        <span v-if="UseLang.store.lang == 'pt'">Certificados</span>
        <span v-else>Certificates</span>
      </span>
    </div>

    <div class="max-w-7xl mx-auto my-10 overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white group transition-all hover:shadow-2xl">
      <div class="flex flex-col lap:flex-row items-stretch">
        <div class="lap:w-1/3 bg-gray-50 flex items-center justify-center p-10 border-r border-gray-100">
          <img v-if="UseLang.store.lang == 'pt'" src="/static/img/home/4.png" alt="Destaque" 
            class="w-full h-auto object-contain max-w-[300px] transition-transform duration-500 group-hover:scale-105" />
          <img v-else src="/static/img/home/en/4.png" alt="Highlight" 
            class="w-full h-auto object-contain max-w-[300px] transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="lap:w-1/3 p-10 flex flex-col justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
          <div class="flex items-center gap-2 mb-4">
            <span class="flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-green-200">Global Standards</span>
          </div>
          <h2 class="text-3xl font-black leading-tight mb-4">Certificação IATF 16949 <br /> <span class="text-green-400 text-2xl font-bold">TÜV SÜD</span></h2>
          <p class="text-green-50 text-base leading-relaxed mb-6">
            <span v-if="UseLang.store.lang == 'pt'">A IATF 16949 estabelece os critérios rigorosos para o sistema de gestão da qualidade, garantindo a excelência em toda a cadeia automotiva.</span>
            <span v-else>IATF 16949 sets the rigorous criteria for the quality management system, ensuring excellence throughout the automotive chain.</span>
          </p>
          <a href="/static/img/certificados/certificadotuv.jpeg" target="_blank" class="inline-flex items-center gap-3 text-sm font-bold bg-white text-green-900 hover:bg-green-100 w-fit px-6 py-3 rounded-full transition-all shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            {{ UseLang.store.lang == 'pt' ? 'ABRIR CERTIFICADO' : 'OPEN CERTIFICATE' }}
          </a>
        </div>
        <div class="lap:w-1/3 bg-white flex items-center justify-center p-8 relative">
          <a href="/static/img/certificados/certificadotuv.jpeg" target="_blank" class="block group/cert relative">
            <div class="absolute -inset-4 bg-green-600/5 rounded-full blur-2xl opacity-0 group-hover/cert:opacity-100 transition-opacity"></div>
            <img src="/static/img/certificados/certificadotuv.jpeg" alt="IATF 16949" class="relative z-10 shadow-2xl rounded-md border border-gray-100 h-72 lap:h-80 w-auto transition-all duration-500 group-hover/cert:scale-110 group-hover/cert:rotate-1" />
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto my-10 overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white group transition-all hover:shadow-2xl">
      <div class="flex flex-col lap:flex-row items-stretch">
        <div class="lap:w-1/3 bg-gray-50 flex items-center justify-center p-10 border-r border-gray-100">
          <img src="/static/img/home/certificadoselo14001.jpeg" alt="Selo ISO 14001" class="w-full h-auto object-contain max-w-[300px] transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="lap:w-1/3 p-10 flex flex-col justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
          <div class="flex items-center gap-2 mb-4">
            <span class="flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-green-200">Environmental</span>
          </div>
          <h2 class="text-3xl font-black leading-tight mb-4">Certificação <br /> <span class="text-green-400 text-2xl font-bold">ISO 14001:2015</span></h2>
          <p class="text-green-50 text-base leading-relaxed mb-6">
            <span v-if="UseLang.store.lang == 'pt'">É um padrão internacional que estabelece requisitos para um Sistema de Gestão Ambiental (SGA), focando na sustentabilidade.</span>
            <span v-else>An international standard that establishes requirements for an Environmental Management System (EMS), focusing on sustainability.</span>
          </p>
          <a href="/static/img/certificados/iqa.jpeg" target="_blank" class="inline-flex items-center gap-3 text-sm font-bold bg-white text-green-900 hover:bg-green-100 w-fit px-6 py-3 rounded-full transition-all shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            {{ UseLang.store.lang == 'pt' ? 'ABRIR CERTIFICADO' : 'OPEN CERTIFICATE' }}
          </a>
        </div>
        <div class="lap:w-1/3 bg-white flex items-center justify-center p-8 relative">
          <a href="/static/img/certificados/iqa.jpeg" target="_blank" class="block group/cert relative">
            <div class="absolute -inset-4 bg-green-600/5 rounded-full blur-2xl opacity-0 group-hover/cert:opacity-100 transition-opacity"></div>
            <img src="/static/img/certificados/iqa.jpeg" alt="Certificado IQA" class="relative z-10 shadow-2xl rounded-md border border-gray-100 h-72 lap:h-80 w-auto transition-all duration-500 group-hover/cert:scale-110 group-hover/cert:rotate-1" />
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto my-10 overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white group transition-all hover:shadow-2xl">
      <div class="flex flex-col lap:flex-row items-stretch">
        <div class="lap:w-1/3 bg-gray-50 flex items-center justify-center p-10 border-r border-gray-100">
          <img src="/static/img/tisax.jpeg" alt="TISAX" class="w-full h-auto object-contain max-w-[300px] transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="lap:w-1/3 p-10 flex flex-col justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
          <div class="flex items-center gap-2 mb-4">
            <span class="flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-green-200">Information Security</span>
          </div>
          <h2 class="text-3xl font-black leading-tight mb-4">Certificação <br /> <span class="text-green-400 text-2xl font-bold">TISAX</span></h2>
          <p class="text-green-50 text-base leading-relaxed mb-6">
            <span v-if="UseLang.store.lang == 'pt'">Padrão de segurança da informação automotiva que garante a proteção rigorosa de dados confidenciais e gestão de riscos.</span>
            <span v-else>Automotive information security standard that ensures rigorous protection of sensitive data and risk management.</span>
          </p>
          <a href="/static/img/certificados/tisax.png" target="_blank" class="inline-flex items-center gap-3 text-sm font-bold bg-white text-green-900 hover:bg-green-100 w-fit px-6 py-3 rounded-full transition-all shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            {{ UseLang.store.lang == 'pt' ? 'ABRIR CERTIFICADO' : 'OPEN CERTIFICATE' }}
          </a>
        </div>
        <div class="lap:w-1/3 bg-white flex items-center justify-center p-8 relative">
          <a href="/static/img/certificados/tisax.png" target="_blank" class="block group/cert relative">
            <div class="absolute -inset-4 bg-green-600/5 rounded-full blur-2xl opacity-0 group-hover/cert:opacity-100 transition-opacity"></div>
            <img src="/static/img/certificados/tisax.png" alt="Certificado TISAX" class="relative z-10 shadow-2xl rounded-md border border-gray-100 h-72 lap:h-80 w-auto transition-all duration-500 group-hover/cert:scale-110 group-hover/cert:rotate-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import UseLang from "../composables/lang";
</script>

<style scoped></style>
