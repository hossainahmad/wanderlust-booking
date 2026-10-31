/**
 * Placeholder data layer for travel packages.
 *
 * Uses an in-memory module store — data does NOT persist across server
 * restarts or instances. Swap for a real database when one is chosen;
 * the function signatures are kept async so the call sites won't change.
 */

export type DestinationCategory =
  | "Beach"
  | "Mountain"
  | "City"
  | "Cruise"
  | "Adventure"
  | "Cultural";

export type Destination = {
  id: number;
  name: string;
  country: string;
  category: DestinationCategory;
  price: number;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

const destinations: Destination[] = [];
let nextId = 1;

export async function getDestinations(): Promise<Destination[]> {
  return destinations;
}

export async function addDestination(
  data: Omit<Destination, "id">
): Promise<Destination> {
  const destination = { ...data, id: nextId++ };
  destinations.push(destination);
  return destination;
}
