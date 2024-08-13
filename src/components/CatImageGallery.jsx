import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const catImages = [
  'https://placekitten.com/300/200',
  'https://placekitten.com/301/200',
  'https://placekitten.com/302/200',
  'https://placekitten.com/303/200',
];

const CatImageGallery = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-center mb-6 text-purple-800">Cat Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {catImages.map((src, index) => (
          <Card key={index} className="overflow-hidden shadow-lg transition-transform hover:scale-105">
            <CardContent className="p-0">
              <img src={src} alt={`Cat ${index + 1}`} className="w-full h-48 object-cover" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CatImageGallery;