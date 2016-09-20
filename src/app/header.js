/* header.js */
(function(){
  'use strict';
  angular
    .module('app')
    .component('fountainHeader', {
      templateUrl: 'app/header.html',
      controller: HeaderController
    });
    HeaderController.$inject = ['$translate', '$state'];
    function HeaderController($translate, $state) {
      var vm = this;
      vm.changeLanguage = changeLanguage;

      function changeLanguage(locale) {
      	console.log(locale);
  /* Define o novo idioma atual */
  $translate.use(locale);
  /* Recarrega o template (sem recarregar o browser) */
  $state.reload();
}
    }


})();
