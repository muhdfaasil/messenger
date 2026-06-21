const TEMPLATES = [
  {
    id: '1',
    name: 'Thank you for reaching out',
    body: `🙏 Thank you for reaching out to *Metro Mind Hospital*!

We specialise in mental health care, offering consultations, therapy, and psychiatric support — all in a safe and compassionate environment. 💚

📞 To book an appointment or learn more, call us at *7306808867*

We're here for you. Take care! 🌿
🌐 https://metromindhospitals.com/`,
    order: 0
  },
  {
    id: '2',
    name: 'Our Specialist Team',
    body: `👨‍⚕️ *Our Specialist Team – Consultation Timings*

🔹 *Dr. Thalhath* — MBBS, MD (Psychiatry)
🕒 Monday – Saturday | 10:00 AM – 6:00 PM

🔹 *Dr. Ashitha* — MBBS, MD (Psychiatry)
🕒 Wednesday – Saturday | 11:30 AM – 6:00 PM

🔹 *Dr. Adila* — MBBS, MD (Psychiatry)
🕒 Monday – Saturday | 12:00 PM – 5:00 PM

🌐 https://metromindhospitals.com/`,
    order: 1
  },
  {
    id: '3',
    name: 'Consultation Details',
    body: `💊 *Consultation Details*

🧠 *Psychiatrist*
• First Consultation — ₹2,000
• Follow-up — ₹1,000

🫂 *Psychologist*
• Consultation — ₹1,500

🕒 *Timings:* Monday to Saturday, 10:00 AM – 5:00 PM

🌐 https://metromindhospitals.com/`,
    order: 2
  },
  {
    id: '4',
    name: 'Services',
    body: `🏥 *Our Services*

💉 Ketamine Therapy
🧠 rTMS Therapy
📊 Q EEG Brain Mapping
🧬 Genetic Test
🔬 Urine Drug Test
🩺 Psychiatric Consultation
🤝 Counselling

🌐 https://metromindhospitals.com/`,
    order: 3
  },
  {
    id: '5',
    name: 'Charges',
    body: `💰 *Treatment Charges*

💉 *Ketamine Therapy* — ₹5,350
   (Medication: ₹5,100 + Nursing charge: ₹250)

🧠 *rTMS Therapy* — ₹2,500

For a detailed breakdown or any queries, feel free to contact us. 😊
🌐 https://metromindhospitals.com/`,
    order: 4
  },
  {
    id: '6',
    name: 'Registration',
    body: `📋 *Patient Registration*

To complete your registration, kindly share the following details:

👤 Name:
🎂 Date of Birth:
📞 Contact No:
📧 Email ID:
🏠 Full Address:

We'll get back to you shortly! 😊`,
    order: 5
  },
  {
    id: '7',
    name: 'Location',
    body: `📍 *Our Location*

Metro Mind Hospital is located at *South Kalamassery, Ernakulam*.

🗺️ Google Maps: https://maps.app.goo.gl/xieG3A1ddVXQpJJR7

We look forward to welcoming you! 🙏`,
    order: 6
  }
];

const MESSAGE_SEPARATOR = '\n\n';

// Providers available for appointment cancellations.
// Doctors get the appointment/medication message; psychologists get the session message.
const PROVIDERS = [
  { name: 'Dr. Thalhath',  type: 'doctor' },
  { name: 'Dr. Ashitha',   type: 'doctor' },
  { name: 'Dr. Adila',     type: 'doctor' },
  { name: "Arshina Ma'am", type: 'psychologist' },
  { name: "Pameela Ma'am", type: 'psychologist' },
  { name: "Swathi Ma'am",  type: 'psychologist' }
];

function cancellationMessage(providerName) {
  const provider = PROVIDERS.find(p => p.name === providerName);
  const type = provider ? provider.type : 'doctor';

  if (type === 'psychologist') {
    return `Hello, this is Metromind Hospital.

We would like to inform you that your scheduled session with *${providerName}* has been cancelled as she is on leave.

Kindly let us know a convenient date and time so that we can reschedule your follow-up session.

We apologize for the inconvenience and appreciate your understanding.

Thank you.
Metromind Hospital`;
  }

  return `Hello, this is Metromind Hospital.

We would like to inform you that *${providerName}* will be on emergency leave, and therefore your scheduled appointment has been cancelled.

Kindly let us know a convenient date and time so that we can reschedule your appointment.

Also, please let us know whether you have sufficient medication and until which date your current medicines will last. If required, we can arrange a prescription refill, send the medicines via courier, or you may collect them directly from the hospital to ensure continuity of treatment until your next appointment.

We apologize for the inconvenience and appreciate your understanding.

Thank you.
Metromind Hospital`;
}

function buildWAUrl(phone, messageText) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
}

function combineMessages(selectedIds) {
  return TEMPLATES
    .filter(t => selectedIds.includes(t.id))
    .sort((a, b) => a.order - b.order)
    .map(t => t.body)
    .join(MESSAGE_SEPARATOR);
}
