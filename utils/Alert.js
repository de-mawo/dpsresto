import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export const  DeleteAlert = (item) => {
    MySwal.fire({
        title: `Delete this ${item}...?`,
        text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1d1d1d",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete !",
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                `The ${item} has been deleted`,
                'success'
              )
            }
          })
}