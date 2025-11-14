import { NextResponse } from 'next/server';
import propertiesData from '../../../data/property-listing-data.json';

/**
 * /api/properties
 * Supports:
 *   ?superhost=true
 *   ?locations=Norway,Sweden
 *   ?type=Apartment
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url);

    // Parse filters from query params
    const superhostParam = searchParams.get('superhost'); // "true" or "false"
    const locationsParam = searchParams.get('locations'); // "UK,France,Spain"
    const typeParam = searchParams.get('type'); // optional, if dataset has a type

    let filtered = [...propertiesData];

    // Filter: superhost only
    if (superhostParam === 'true') {
        filtered = filtered.filter((p) => p.superhost === true);
    }

    // Filter: multiple locations
    if (locationsParam) {
        const selectedLocations = locationsParam
            .split(',')
            .map((loc) => loc.trim());
        filtered = filtered.filter((p) =>
            selectedLocations.includes(p.location)
        );
    }

    // Filter: property type (only works if type exists in your JSON)
    if (typeParam) {
        filtered = filtered.filter((p) => p.type === typeParam);
    }

    return NextResponse.json(filtered);
}
