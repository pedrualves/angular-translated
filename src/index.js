angular
  .module('app', ['ui.router', 'pascalprecht.translate']);

/* Configuração do angular-translate */
angular
  .module('app')
  .config(translateConfig);
  
  translateConfig.$inject = ['$translateProvider'];
  function translateConfig($translateProvider) {
    // Carregamos as traduções de cada idioma
    // English (US)
    $translateProvider.translations('en_US', {
      'allo_allo': 'Hello, hello!',
      'always_a_pleasure': 'Its always a pleasure to watch Pulp Fiction.'
    });
    // Português (BR)
    $translateProvider.translations('pt_BR', {
      'allo_allo': 'Olá, olá!',
      'always_a_pleasure': 'É sempre um prazer assistir a Pulp Fiction.'
    });
    // Español (ES)
    $translateProvider.translations('es_ES', {
      'allo_allo': 'Hola, hola!',
      'always_a_pleasure': 'Mi gusta churritos. :-)'
    });
    
    // Definimos o idioma padrão
    $translateProvider.preferredLanguage('pt_BR');
    // Se você preferir que o idioma padrão seja detectado pelo idioma do browser
    // use as linhas abaixo:
    //
    $translateProvider
     .uniformLanguageTag()
     .determinePreferredLanguage();
  }
