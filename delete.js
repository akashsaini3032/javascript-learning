function okk(){
    let isSure = confirm("Are you sure you want to delete this item");

    if (isSure) {
        alert("Item Deleted");
    } else {
        alert("Cancelled");
    }
}