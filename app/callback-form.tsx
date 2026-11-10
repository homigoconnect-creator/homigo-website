"use client";

import type { FormEvent } from "react";

export default function CallbackForm({ services }: { services: string[] }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Homigo, I would like a pre-launch callback.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Area: ${data.get("area")}`,
      `Service: ${data.get("service")}`,
      `Preferred callback time: ${data.get("time")}`,
    ].join("\n");
    window.open(`https://wa.me/919567304092?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="callback-form" onSubmit={submit}>
      <label>Full name<input name="name" autoComplete="name" required /></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="+91" /></label>
      <label>Area in Kozhikode<input name="area" required /></label>
      <label>Service<select name="service" required defaultValue=""><option value="" disabled>Select</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
      <label>Preferred callback time<select name="time" required defaultValue=""><option value="" disabled>Select</option><option>9 am–12 pm</option><option>12 pm–4 pm</option><option>4 pm–7 pm</option></select></label>
      <label className="consent"><input name="consent" type="checkbox" required /> I agree to send these details to Homigo through WhatsApp for a callback.</label>
      <button type="submit">Continue on WhatsApp</button>
      <small>No booking or payment is created by this form.</small>
    </form>
  );
}
