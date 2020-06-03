export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;
  }

  shouldShowWarning(): boolean {
    // returns true if the satellite type is 'Space Debris', and it returns false otherwise - NOTE: Is case sensitive
    // Use shouldShowWarning to add the warning CSS class to the <td> containing the satellite's type.
    return this.type.toLowerCase() === 'space debris'
  }

}
