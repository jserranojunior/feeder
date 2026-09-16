<template>
  <section id="documentos" class="mt-6">
    <div class="py-4 mt-12 text-center">
      <span class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800">
        <span v-if="UseLang.store.lang == 'pt'">Documentos</span>
        <span v-else>Documents</span>
      </span>
    </div>

    <div class="max-w-7xl mx-auto py-8 px-4">
      <div class="flex flex-wrap lap:flex-nowrap gap-6 items-stretch">
        
        <div class="w-full lap:w-1/3 flex flex-col justify-start">
          <div 
            v-for="documento in documentos" 
            :key="documento.pdf"
            @click="changePDF(documento.pdf)"
            :class="[
              'flex items-center p-3 mb-1 rounded-lg border transition-all cursor-pointer text-sm',
              state.documentoSelecionado === documento.pdf 
                ? 'bg-green-600 border-green-600 text-white shadow-md' 
                : 'bg-white border-transparent hover:bg-gray-100 text-gray-700'
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="font-medium truncate">{{ documento.name }}</span>
          </div>
        </div>

        <div 
          v-if="!isMobileDevice()"
          class="w-full lap:w-2/3 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden shadow-inner relative flex flex-col"
        >
          <div class="flex-grow min-h-[400px]">
            <embed 
              :src="state.documentoSelecionado" 
              type="application/pdf" 
              style="width: 100%; height: 100%" 
              class="w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import UseLang from "../composables/lang";

const state = reactive({
  documentoSelecionado: "",
});

function changePDF(pdf: string) {
  if (isMobileDevice()) {
    window.open(pdf, "_blank", "noopener,noreferrer");
  } else {
    state.documentoSelecionado = pdf;
  }
}

function isMobileDevice(): boolean {
  // Regex para detectar dispositivos móveis
  const mobileRegex =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(navigator.userAgent);
}

/* TRANSPARENCIA.pdf */

const documentos = [
  {
    name: "LO - Licença de Operação",
    pdf: "/static/pdf/LO.pdf",
  },
  {
    name: "CLI - Licenciamento Integrado",
    pdf: "/static/pdf/CLI.pdf",
  },
  {
    name: "AVCB – Vistoria Corpos de Bombeiros",
    pdf: "/static/pdf/AVCB.pdf",
  },
  {
    name: "Declaração de Igualdade Salarial",
    pdf: "/static/pdf/TRANSPARENCIA.pdf",
  },
  {
    name: "Política LGPD e DPO",
    pdf: "/static/pdf/LGPD.pdf",
  },
  {
    name: "Política da Qualidade, SSMA, Antissuborno e Anticorrupção",
    pdf: "/static/pdf/politicas.pdf",
  },
  {
    name: "Politica de Segurança da Informação",
    pdf: "/static/pdf/PoliticaSegurancaInformacao.pdf",
  },

  {
    name: "Certificado IATF",
    pdf: "/static/pdf/IATF.pdf",
  },
  {
    name: "Certificado 14001",
    pdf: "/static/pdf/iqa.pdf",
  },
  {
    name: "Certificado TISAX",
    pdf: "/static/pdf/TISAX.pdf",
  },

  {
    name: "Certificado DUNS",
    pdf: "/static/pdf/DUNS.pdf",
  },

  
  {
    name: "Selo Verde de Energia",
    pdf: "/static/pdf/SELOVERDE.pdf",
  },
  {
    name: "Certificado de Energia Limpa - IREC",
    pdf: "/static/pdf/IREC.pdf",
  },
  {
    name: "Certificado Supplier Assurance - Sustentabilidade",
    pdf: "/static/pdf/SAQ.pdf",
  },
  {
    name: "Selo ECOVADIS - Sustentabilidade",
    pdf: "/static/pdf/ECOVADIS.pdf",
  },
  {
    name: "Certificado de Registro do Exercito",
    pdf: "/static/pdf/CertificadoExcercito.pdf",
  },
  {
    name: "CLF - Polícia Federal",
    pdf: "/static/pdf/PoliciaFederal.pdf",
  },
  {
    name: "CADRI - Ambiental",
    pdf: "/static/pdf/CADRI.pdf",
  },
];
</script>
