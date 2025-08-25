/*
 * Lógica de la aplicación ChronosFit para gestionar reservas de clases.
 *
 * Este script genera dinámicamente los horarios disponibles con su ocupación,
 * gestiona la selección de turnos por parte del usuario y muestra un modal
 * para confirmar la reserva. Al confirmar, actualiza la ocupación de los
 * horarios elegidos y limpia los campos.
 */

// Datos iniciales de horarios
const timeSlotsData = [
  { id: 1, label: "8hs", capacity: 10, occupied: 2 },
  { id: 2, label: "9hs", capacity: 10, occupied: 5 },
  { id: 3, label: "18hs", capacity: 10, occupied: 2 },
  { id: 4, label: "19hs", capacity: 10, occupied: 2 },
  { id: 5, label: "20hs", capacity: 10, occupied: 3 },
  { id: 6, label: "21hs", capacity: 10, occupied: 1 }
];

// Referencias a elementos del DOM
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const reserveBtn = document.getElementById("reserveBtn");
const timeSlotsList = document.getElementById("timeSlots");
const modal = document.getElementById("modal");
const modalSummary = document.getElementById("modalSummary");
const confirmBtn = document.getElementById("confirmBtn");
const closeBtn = document.getElementById("closeBtn");

// Conjunto para almacenar los IDs de turnos seleccionados
const selectedSlots = new Set();

// Genera la lista de horarios en la interfaz
function renderTimeSlots() {
  timeSlotsList.innerHTML = "";
  timeSlotsData.forEach((slot) => {
    const li = document.createElement("li");
    li.className = "time-slot";

    // Contenedor de cabecera con hora y capacidad
    const header = document.createElement("div");
    header.className = "slot-header";
    const timeSpan = document.createElement("span");
    timeSpan.className = "slot-time";
    timeSpan.textContent = slot.label;
    const capacitySpan = document.createElement("span");
    capacitySpan.className = "slot-capacity";
    capacitySpan.textContent = `${slot.occupied}/${slot.capacity}`;
    header.appendChild(timeSpan);
    header.appendChild(capacitySpan);

    // Barra de progreso
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = `${(slot.occupied / slot.capacity) * 100}%`;
    progressContainer.appendChild(progressBar);

    // CheckBox para seleccionar turno
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "slot-checkbox";
    checkbox.disabled = slot.occupied >= slot.capacity;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedSlots.add(slot.id);
      } else {
        selectedSlots.delete(slot.id);
      }
      updateReserveButton();
    });

    // Añadir elementos al li
    li.appendChild(header);
    li.appendChild(progressContainer);
    li.appendChild(checkbox);

    timeSlotsList.appendChild(li);
  });
}

// Habilita o deshabilita el botón de reserva según si hay datos válidos
function updateReserveButton() {
  const nameValid = nameInput.value.trim().length > 0;
  const phoneValid = phoneInput.value.trim().length > 0;
  const hasSelection = selectedSlots.size > 0;
  reserveBtn.disabled = !(nameValid && phoneValid && hasSelection);
}

// Muestra el modal con el resumen de la reserva
function showModal() {
  // Crear el resumen de horarios
  const selectedLabels = timeSlotsData
    .filter((slot) => selectedSlots.has(slot.id))
    .map((slot) => slot.label);
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  // Insertar resumen en el modal
  modalSummary.innerHTML =
    `<strong>Nombre:</strong> ${name}<br/>` +
    `<strong>Celular:</strong> ${phone}<br/>` +
    `<strong>Horarios:</strong> ${selectedLabels.join(", ")}`;
  modal.classList.remove("hidden");
}

// Oculta el modal
function hideModal() {
  modal.classList.add("hidden");
}

// Confirma la reserva actualizando las ocupaciones y limpiando campos
function confirmReservation() {
  // Actualizar ocupaciones
  timeSlotsData.forEach((slot) => {
    if (selectedSlots.has(slot.id)) {
      slot.occupied++;
    }
  });
  // Limpiar selección
  selectedSlots.clear();
  // Renderizar nuevamente los horarios
  renderTimeSlots();
  // Resetear el formulario
  nameInput.value = "";
  phoneInput.value = "";
  updateReserveButton();
  hideModal();
  // Avisar al usuario
  alert(
    "¡Reserva confirmada! Recibirás un mensaje de confirmación al número proporcionado."
  );
}

// Configurar eventos iniciales
function init() {
  renderTimeSlots();
  nameInput.addEventListener("input", updateReserveButton);
  phoneInput.addEventListener("input", updateReserveButton);
  reserveBtn.addEventListener("click", showModal);
  confirmBtn.addEventListener("click", confirmReservation);
  closeBtn.addEventListener("click", () => {
    hideModal();
  });
}

// Ejecutar init al cargar la página
window.addEventListener("DOMContentLoaded", init);
