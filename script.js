document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");
  
    if (formulario) {
      formulario.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const tipoCabelo = document.getElementById("tipoCabelo")?.value;
  
        if (!tipoCabelo) {
          resultado.innerHTML = "<p>Erro: não foi possível encontrar o tipo de cabelo.</p>";
          return;
        }
  
        let cronograma = "";
  
        switch (tipoCabelo) {
          case "Oleoso":
            cronograma = `
              <ul>
                <li><strong>Segunda:</strong> Lavar e hidratar</li>
                <li><strong>Quarta:</strong> Lavar</li>
                <li><strong>Sexta:</strong> Lavar e nutrir</li>
              </ul>`;
            break;
          case "Normal":
            cronograma = `
              <ul>
                <li><strong>Terça:</strong> Lavar e hidratar</li>
                <li><strong>Quinta:</strong> Lavar</li>
                <li><strong>Sábado:</strong> Lavar e reconstruir</li>
              </ul>`;
            break;
          case "Seco":
            cronograma = `
              <ul>
                <li><strong>Segunda:</strong> Hidratar</li>
                <li><strong>Quarta:</strong> Lavar e nutrir</li>
                <li><strong>Sexta:</strong> Lavar e reconstruir</li>
              </ul>`;
            break;
          default:
            cronograma = "<p>Selecione um tipo de cabelo válido.</p>";
        }
  
        resultado.innerHTML = `<h3>Cronograma Sugerido:</h3>${cronograma}`;
      });
    } else {
      console.error("Erro: O formulário não foi encontrado na página.");
    }
  });
