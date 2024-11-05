// script.js
document.getElementById('maintenance-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Coletar dados do formulário
  const type = document.getElementById('type').value;
  const description = document.getElementById('description').value;
  const sector = document.getElementById('sector').value;
  const image = document.getElementById('image').files[0];

  if (!description || !sector) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  // Aqui você pode fazer uma requisição para salvar os dados (exemplo de envio para servidor)
  console.log({
    type,
    description,
    sector,
    image: image ? image.name : 'Nenhuma imagem selecionada',
  });

  alert('Manutenção registrada com sucesso!');
});

// Visualizar a imagem selecionada
document.getElementById('image').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('image-preview');
  
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Prévia da Imagem" style="max-width: 100%; margin-top: 10px;">`;
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = '';
  }
});
