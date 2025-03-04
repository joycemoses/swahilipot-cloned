import React from 'react';
import SpacesCard from './SpacesCard';

export default function CommunitySpace() {
  const communitySpaces = [
    {
      title: "Main Community Hall",
      description: "Our largest space for community gatherings, workshops, and events. This versatile space can be configured for various activities.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Flexible seating arrangements",
        "Projector and screen",
        "Sound system",
        "Air conditioning",
        "Wi-Fi access"
      ],
      capacity: "Up to 100 people",
      link: "/spaces/community-space"
    },
    {
      title: "Collaboration Zone",
      description: "A dedicated space for teamwork and collaborative projects. Perfect for group discussions and brainstorming sessions.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Modular furniture",
        "Whiteboards",
        "Large displays for presentations",
        "High-speed internet",
        "Coffee and refreshment area"
      ],
      capacity: "Up to 30 people",
      link: "/spaces/collaboration-zone"
    },
    {
      title: "Quiet Study Area",
      description: "A peaceful environment for focused individual work and study. Designed to maximize productivity and concentration.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Individual workstations",
        "Ergonomic seating",
        "Natural lighting",
        "Power outlets at every seat",
        "Reference materials"
      ],
      capacity: "Up to 20 people",
      link: "/spaces/quiet-study-area"
    }
  ];

  return (
    <section className="py-16 bg-light dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Spaces</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our community spaces designed to foster collaboration, learning, and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communitySpaces.map((space, index) => (
            <SpacesCard 
              key={index}
              title={space.title}
              description={space.description}
              image={space.image}
              features={space.features}
              capacity={space.capacity}
              link={space.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}