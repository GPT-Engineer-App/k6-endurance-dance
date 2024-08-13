import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import CatFactCard from '../components/CatFactCard';
import CatImageGallery from '../components/CatImageGallery';

const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }
  return response.json();
};

const Index = () => {
  const { data: catFact, isLoading, isError } = useQuery({
    queryKey: ['catFact'],
    queryFn: fetchCatFact,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Fascinating World of Cats</h1>
      
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>About Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Cats are fascinating creatures that have been domesticated for thousands of years. 
              Known for their independence, agility, and playful nature, cats make wonderful companions 
              for millions of people around the world. They come in various breeds, each with unique 
              characteristics and personalities.
            </p>
          </CardContent>
        </Card>

        <CatFactCard fact={catFact?.fact} isLoading={isLoading} isError={isError} />
      </div>

      <CatImageGallery />
    </div>
  );
};

export default Index;