// Prevenir o menu de contexto do botão direito do mouse
function preventContextMenu(e) {
  e.preventDefault();
  return false;
}


// Alterar o tamanho de um iframe
function changeSize(width, height) {
  const iframe = window.parent.document.getElementById("Iframe1");
  if (iframe) {
    iframe.style.width = width;
    iframe.style.height = height;
  }
}

function verifyUrl(){
  const urlAtual = window.location.href;
  const urlDesejada = "https://feeder.com.br";
  if(urlAtual.trim() === urlDesejada){
    document.addEventListener('contextmenu', preventContextMenu);
  }
}

// Submeter o formulário e abrir uma nova janela
function toSubmit() {
  const form2 = document.getElementById("form2");
  if (form2) {
    form2.action = "https://profiles.dunsregistered.com/TPBR-BAS-004_POR.aspx";
    window.open(
      "",
      "formresult",
      "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=1020,height=700,left=0,top=0,titlebar=yes"
    );
    form2.submit();
  }
}

verifyUrl()
