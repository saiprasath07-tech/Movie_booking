function bookTicket() {

    const name = document.getElementById("name").value.trim();
    const movie = document.getElementById("movie").value;
    const tickets = Number(document.getElementById("tickets").value);

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (tickets < 1 || tickets > 10) {
        alert("Please select 1 to 10 tickets");
        return;
    }

    const price = 200;
    const total = price * tickets;

    const bookingId =
        "MOV" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("result").innerHTML = `
        <h3>✅ Booking Confirmed</h3>
        <p><b>Booking ID:</b> ${bookingId}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Movie:</b> ${movie}</p>
        <p><b>Tickets:</b> ${tickets}</p>
        <p><b>Price per Ticket:</b> ₹${price}</p>
        <p><b>Total Amount:</b> ₹${total}</p>
        <p><b>Status:</b> Confirmed</p>
    `;
}
