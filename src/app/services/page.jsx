import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicesPage() {
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

  return (
    <div className="h-screen place-content-center">
      <h1>ServicesPage: {doctors.length}</h1>
      <div className="flex justify-center gap-5">
        {doctors.map((d) => {
          return (
            <div key={d.id} className="mb-4">
              <Link href={`/services/${d.id}`}>
                <Image
                  src={d.image}
                  alt={d.name} // ✅ accessibility: meaningful alt text
                  width={200}
                  height={200}
                  className=" mx-auto"
                />
              </Link>
              <p>{d.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
