// Importando as bibliotecas necessárias do React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importando o ThemeProvider da biblioteca Styled Components
import { ThemeProvider } from 'styled-components';

// Importando estilos globais e o tema da aplicação
import GlobalStyles from './styles/global';
import theme from './styles/theme';

// Importando o componente Home do arquivo './pages/Home'
import { Home } from './pages/Home';

// Importando o componente Profile do arquivo './pages/Profile'
import { New } from './pages/New';

// Utilizando ReactDOM.createRoot para renderizar o aplicativo no elemento com id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Englobando a aplicação em React.StrictMode para detectar práticas inseguras
  <React.StrictMode>
    {/* Utilizando o ThemeProvider para aplicar o tema aos componentes estilizados */}
    <ThemeProvider theme={theme}>
      {/* Aplicando estilos globais */}
      <GlobalStyles />

      {/* Renderizando o componente Profile */}
      <New />

      {/* Renderizando o componente Home */}
      {/* Nota: O componente Home está importado, mas não está sendo usado aqui. */}
    </ThemeProvider>
  </React.StrictMode>
);
