import { NextResponse } from 'next/server';
import data from '../../../data/property-listing-data.json';

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const superhostParam = searchParams.get('superhost');
    const locationsParam = searchParams.get('locations');
    const typeParam = searchParams.get('type');

    let filtered = [...data];

    // 1. Superhost filter
    if (superhostParam === 'true') {
        filtered = filtered.filter((p) => p.host?.isSuperhost === true);
    }

    // 2. Multiple countries filter
    if (locationsParam) {
        const selected = locationsParam.split(',').map((loc) => loc.trim());
        filtered = filtered.filter((p) =>
            selected.includes(p.location.country)
        );
    }

    // 3. Property type filter
    // Example types: "Apartment", "Private room", "Entire home"
    if (typeParam) {
        filtered = filtered.filter((p) => p.propertyType === typeParam);
    }

    return NextResponse.json(filtered);
}
