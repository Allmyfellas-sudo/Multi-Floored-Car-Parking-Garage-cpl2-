function showFloorSelection() {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("floorSelection").classList.remove("hidden");
}

function showSlots(floor) {
  document.getElementById("floorSelection").classList.add("hidden");
  document.getElementById("slotSelection").classList.remove("hidden");

  const slotContainer = document.getElementById("slotContainer");
  slotContainer.innerHTML = "";

  const slots = floor === "ground" ? ["G1", "G2", "G3"] : ["A1", "A2", "A3"];
  document.getElementById("floorTitle").textContent = `${floor === "ground" ? "Ground" : "First"} Floor - Choose a Slot`;

  slots.forEach(slot => {
    const div = document.createElement("div");
    div.className = "slot";
    div.textContent = slot;
    div.onclick = () => selectSlot(div, slot);
    slotContainer.appendChild(div);
  });
}

function selectSlot(element, slotName) {
  document.querySelectorAll(".slot").forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
  document.getElementById("selectionInfo").classList.remove("hidden");
  document.getElementById("selectedSlotText").textContent = slotName;

  // Save the selected slot to localStorage
  localStorage.setItem("selectedSlot", slotName);
}

function goToCheckout() {
  const selected = document.querySelector(".slot.selected");
  if (!selected) {
    alert("Please select a slot first!");
    return;
  }

  const slot = selected.textContent;
  localStorage.setItem("selectedSlot", slot);
  window.location.href = `/checkout?slot=${slot}`;
}

