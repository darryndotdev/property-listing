import { Suspense } from 'react';
import Hero from '@/components/Hero/Hero';
import PropertyList from '@/components/PropertyList/PropertyList';

export default function Home() {
    return (
        <>
            <Hero />
            <Suspense fallback={null}>
                <PropertyList />
            </Suspense>
        </>
    );
}
