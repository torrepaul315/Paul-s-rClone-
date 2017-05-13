(function (){
  'use strict'

  angular.module('app')
    .component('editPost', {
      controller: controller,
      templateUrl: '/js/posts/post-edit.template.html'
    })
    controller.$inject = ['$http']
    function controller($http) {

// keep your variables up here!
      const vm = this;
      console.log('sanity check part 2!')
      // console.log(vm.$stateParams.id);


      // additional question....do I even need to pull over the data from the first page?!?!?! would seem logical ui but not in specs!
      /* this is where i get confused...what's the best practice? pulling the info over from the first page OR making a call by id to the back end?
      */

      vm.editPost = function (id) {
        console.log('wired up!', id)

        vm.editPostForm.$setPristine();
        vm.editPost.time = moment().calendar();
        vm.editPost.counter = 0;
        vm.editPost.comments = [];
// this is console logging what I want! now it's time to build the route!
        console.log(vm.editPost.title);
        // console.log(vm.posts);
      }


      vm.$onInit = function () {

      console.log($stateParams.id);

      vm.house = houseService.findById(houseId)
      console.log(vm.house);
      }

    }






}());
