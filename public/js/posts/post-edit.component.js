(function (){
  'use strict'

  angular.module('app')
    .component('editPost', {
      controller: controller,
      templateUrl: '/js/posts/post-edit.template.html'
    })
    controller.$inject = ['$http','$stateParams']
    function controller($http, $stateParams) {

      var vm = this;
      // console.log('sanity check part 2!')
      vm.editPost = function() {
        console.log('wired up!')
        vm.postEditForm.$setPristine();
        vm.postEdit.time = moment().calendar();
      //hmm do I need either of these?
        // vm.postEdit.counter = 0;
        // vm.postEdit.comments = [];

        $http.patch('api/posts/'+ vm.postEdit.id, vm.postEdit)
        .then((data) => {
          location.href = '/';
        })
        .catch((err) => {
         console.log(err);
        });
      }





      vm.$onInit = function () {
      // console.log($stateParams.id);
      const postId = $stateParams.id;
      $http.get('api/posts/'+ postId)
      .then( function (post) {
        console.log(post.data);
        vm.postEdit = post.data;
        })
        .catch((err) => {
          console.log(err);
        });
      };


      // vm.house = houseService.findById(houseId)
      // console.log(vm.house);



    }








}());
