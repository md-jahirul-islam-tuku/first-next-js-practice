import Image from "next/image";
import React from "react";

export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const doctors = [
    {
      id: 1,
      name: "Dr. Ayesha Rahman",
      specialty: "Cardiologist",
      experience: "10 years",
      image: "https://i.ibb.co/jG4bWST/opi.jpg",
    },
    {
      id: 2,
      name: "Dr. Mahmud Hasan",
      specialty: "Orthopedic Surgeon",
      experience: "8 years",
      image: "https://i.ibb.co/jG4bWST/opi.jpg",
    },
    {
      id: 3,
      name: "Dr. Nusrat Jahan",
      specialty: "Dermatologist",
      experience: "6 years",
      image: "https://i.ibb.co/jG4bWST/opi.jpg",
    },
  ];
  const doc = doctors.find((d) => d.id == id);
  return (
    <div>
      <Image
        src={doc.image}
        alt={doc.name} // ✅ accessibility: meaningful alt text
        width={200}
        height={200}
        className=" mx-auto"
      />
      <h1>{doc.name}</h1>
      <h2>{doc.specialty}</h2>
      <h3>{doc.experience}</h3>
    </div>
  );
}
