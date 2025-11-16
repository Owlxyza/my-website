let selectedAction = "";

function openModal(action) {
  selectedAction = action;

  document.getElementById("modalTitle").innerText =
    action === "buy" ? "Confirm Purchase" : "Add to Cart";

  document.getElementById("modalMessage").innerText =
    action === "buy"
      ? "Are you sure you want to buy this item?"
      : "Do you want to add this item to your cart?";

  let modal = new bootstrap.Modal(document.getElementById("actionModal"));
  modal.show();

  document.getElementById("confirmBtn").onclick = function () {
    // Hide confirmation modal
    bootstrap.Modal.getInstance(document.getElementById("actionModal")).hide();

    // Show success modal
    let message =
      selectedAction === "buy"
        ? "Buy successfully!"
        : "Added to cart successfully!";

    document.getElementById("successMessage").innerText = message;

    let successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();

    // Optional: You can auto-submit the form after success popup closes
    document.getElementById("successModal").addEventListener("hidden.bs.modal", function () {
      const form = document.getElementById("productForm");

      let hidden = document.createElement("input");
      hidden.type = "hidden";
      hidden.name = "submit";
      hidden.value = selectedAction;

      form.appendChild(hidden);
      form.submit();
    });
  };
}