<template>
  <section id="documentos">
    <div class="py-4 mt-12 text-center">
      <span
        class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        ><span v-if="UseLang.store.lang == 'pt'">Documentos</span
        ><span v-else>Documents</span></span
      >
    </div>

    <div class="flex flex-wrap mt-4">
      <div
        :class="[
          'w-full px-4',
          isMobileDevice() ? ' md:w-1/2 mx-auto' : ' md:w-1/2',
        ]"
      >
        <div
          role="alert"
          class="alert mt-2 cursor-pointer p-3 hover:bg-gray-200"
          v-for="documento in documentos"
          @click="changePDF(documento.pdf)"
        >
          <svg
            class="text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M17.924 7.154h-.514l.027-1.89a.46.46 0 0 0-.12-.298L12.901.134A.4.4 0 0 0 12.618 0h-9.24a.8.8 0 0 0-.787.784v6.37h-.515c-.285 0-.56.118-.76.328A1.14 1.14 0 0 0 1 8.275v5.83c0 .618.482 1.12 1.076 1.12h.515v3.99A.8.8 0 0 0 3.38 20h13.278c.415 0 .78-.352.78-.784v-3.99h.487c.594 0 1.076-.503 1.076-1.122v-5.83c0-.296-.113-.582-.315-.792a1.05 1.05 0 0 0-.76-.328M3.95 1.378h6.956v4.577a.4.4 0 0 0 .11.277a.37.37 0 0 0 .267.115h4.759v.807H3.95zm0 17.244v-3.397h12.092v3.397zM12.291 1.52l.385.434l2.58 2.853l.143.173h-2.637q-.3 0-.378-.1q-.08-.098-.093-.313zM3 14.232v-6h1.918q1.09 0 1.42.09q.51.135.853.588q.343.451.343 1.168q0 .552-.198.93q-.198.375-.503.59a1.7 1.7 0 0 1-.62.285q-.428.086-1.239.086h-.779v2.263zm1.195-4.985v1.703h.654q.707 0 .945-.094a.79.79 0 0 0 .508-.762a.78.78 0 0 0-.19-.54a.82.82 0 0 0-.48-.266q-.213-.04-.86-.04zm4.04-1.015h2.184q.739 0 1.127.115q.52.155.892.552q.371.398.565.972q.195.576.194 1.418q0 .741-.182 1.277q-.223.655-.634 1.06q-.31.308-.84.48q-.395.126-1.057.126H8.235zM9.43 9.247v3.974h.892q.501 0 .723-.057q.291-.074.482-.25q.193-.176.313-.579q.121-.403.121-1.099t-.12-1.068a1.4 1.4 0 0 0-.34-.581a1.13 1.13 0 0 0-.553-.283q-.25-.057-.98-.057zm4.513 4.985v-6H18v1.015h-2.862v1.42h2.47v1.015h-2.47v2.55z"
            />
          </svg>
          <span>{{ documento.name }}</span>
        </div>
      </div>
      <div
        class="w-full mt-2 md:mt-0 h-96 md:h-auto md:w-1/2 p-2 bg-gray-200 rounded-lg"
        id="pdf"
        v-if="!isMobileDevice()"
      >
        <div style="width: 100%; height: 100%">
          <embed
            :src="state.documentoSelecionado"
            type="application/pdf"
            style="width: 100%; height: 100%"
          />
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
    name: "LF – Licença de Funcionamento",
    pdf: "/static/pdf/LF.pdf",
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
    name: "Certificado IATF",
    pdf: "/static/pdf/IATF.pdf",
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
