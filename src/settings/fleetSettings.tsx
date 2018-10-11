export class FleetSettings {
  public static fleet: ShipTypeSettings[] = [
    { name: 'aircraft', size: 5, count: 1 },
    { name: 'battleship', size: 4, count: 1 },
    { name: 'cruiser', size: 3, count: 1 },
    { name: 'submarine', size: 3, count: 1 },
    { name: 'carrier', size: 2, count: 1 }
  ];
}

export interface ShipTypeSettings {
  // Ship type name.
  name: string;
  // Ship size.
  size: number;
  // Count of ships with this settings on field.
  count: number;
}
