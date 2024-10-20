document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("deleted");

    if (status === "success") {
        Swal.fire({
            title: "Success!",
            text: "User has been successfully deleted!",
            icon: "success",
            confirmButtonText: "OK",
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("created");

    if (status === "success") {
        Swal.fire({
            title: "Success!",
            text: "Task has been successfully created!",
            icon: "success",
            confirmButtonText: "OK",
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("updated");

    if (status === "success") {
        Swal.fire({
            title: "Success!",
            text: "Task has been successfully updated!",
            icon: "success",
            confirmButtonText: "OK",
        });
    }
});