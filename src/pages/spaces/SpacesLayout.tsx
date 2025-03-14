import Link from 'next/link'
import React from 'react';
import SpacesLayout from '../../components/sphSpaces/SpacesLayout';


const SpacesPage = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Explore Our Spaces</h1>
        <p className="mt-4 text-lg">Discover the variety of spaces we offer for different activities and events.</p>
      </header>

      {/* Render SpacesLayout Component */}
      <SpacesLayout />
    </div>
  );
};

export default SpacesPage;

