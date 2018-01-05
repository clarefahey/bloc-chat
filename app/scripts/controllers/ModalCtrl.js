//Controller to link to the modal template
(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        var modal = this;

        modal.submit = function () {
          Room.add(modal.newRoom.name);
          $uibModalInstance.close();
        };

        modal.cancel = function () {
          $uibModalInstance.dismiss();
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
}) ();
