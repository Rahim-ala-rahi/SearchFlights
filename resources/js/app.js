import './bootstrap';
import swal from 'sweetalert';
window.deleteConfirm = function (e) {
    e.preventDefault();
    var form = e.target.form;
    swal({
        title: "Are you sure you want to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            form.submit();
        }
      });
}