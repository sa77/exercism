class SpaceAge {
    static EARTH_YEAR:number = 365.25 * 24 * 60 * 60;

    constructor(public seconds: number) {
        this.seconds = seconds;
    }

    private static normalizedYear = (years: number) => {
        return Number((years / SpaceAge.EARTH_YEAR).toFixed(2));
    }

    onEarth = ():number => SpaceAge.normalizedYear(this.seconds / 1);

    onMercury = ():number => SpaceAge.normalizedYear(this.seconds / 0.2408467);

    onVenus = ():number => SpaceAge.normalizedYear(this.seconds / 0.61519726);

    onMars = ():number => SpaceAge.normalizedYear(this.seconds / 1.8808158);

    onJupiter = ():number => SpaceAge.normalizedYear(this.seconds / 11.862615);

    onSaturn = ():number => SpaceAge.normalizedYear(this.seconds / 29.447498);

    onUranus = ():number => SpaceAge.normalizedYear(this.seconds / 84.016846);

    onNeptune = ():number => SpaceAge.normalizedYear(this.seconds / 164.79132);
}

export default SpaceAge;
