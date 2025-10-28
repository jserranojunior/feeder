<template>
    <div class="my-8">
      Canvas abaixo
      <canvas ref="pdfCanvas" />
      Canvas acima
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
  import 'pdfjs-dist/build/pdf.worker.entry';
  
  // Referência ao elemento canvas
  const pdfCanvas = ref<HTMLCanvasElement | null>(null);
  
  // URL do PDF a ser carregado
  const pdfUrl = '/path/to/your/pdf.pdf';
  
  onMounted(async () => {
    if (!pdfCanvas.value) return;
  
    const canvas = pdfCanvas.value;
    const context = canvas.getContext('2d');
  
    if (!context) return;
  
    // Configurar a URL do worker
    GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.mjs';
  
    // Carregar o PDF
    const loadingTask = getDocument(pdfUrl);
    const pdfDocument = await loadingTask.promise;
  
    // Obter a primeira página
    const page = await pdfDocument.getPage(1);
  
    // Definir o tamanho do canvas
    const viewport = page.getViewport({ scale: 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
  
    // Renderizar a página no canvas
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    await page.render(renderContext).promise;
  });
  </script>
  
  <style scoped>
  canvas {
    border: 1px solid black;
  }
  </style>
  