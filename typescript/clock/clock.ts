export default class Clock {
    static MINUTES = 60;
    static HOURS = 24;

    constructor(private hours: number, private minutes: number = 0) {
        this.hours = hours;
        this.minutes = minutes;
        this.setClock()
    }

    setClock = (): void => {
        let _hours = this.hours;
        let _minutes = this.minutes;
        const minutesSplit = this.splitInput(_minutes, Clock.MINUTES);
        const hrOffsetFromMinutes = minutesSplit[0];
        const clockMinutes = minutesSplit[1];

        _hours += hrOffsetFromMinutes;
        if (clockMinutes < 0) {
            _minutes = Clock.MINUTES - -clockMinutes;
            _hours -= 1;
        } else {
            _minutes = clockMinutes;
        }

        const hoursSplit = this.splitInput(_hours, Clock.HOURS);
        const clockHours = hoursSplit[1];

        if (clockHours < 0) {
            _hours = clockHours % Clock.HOURS + Clock.HOURS;
        } else {
            _hours = clockHours;
        }
        this.hours = _hours % Clock.HOURS;
        this.minutes = _minutes;
    }

    splitInput = (input: number, divider: number): [number, number] => {
        const remainder = input % divider;
        const quotient = (input - remainder) / divider;
        return [quotient, remainder];
    }

    minus = (_minutes: number): Clock => {
        this.minutes -= _minutes;
        this.setClock();
        return this;
    };

    plus = (_minutes: number): Clock => {
        this.minutes += _minutes;
        this.setClock();
        return this;
    }

    static format = (input: number): string => {
        if (input < 10) return `0${input}`;
        return `${input}`;
    }

    toString = (): string => {
        return Clock.format(this.hours) + ':' + Clock.format(this.minutes);
    }

    equals = (clockInstance: Clock): boolean => {
        return this.toString() === clockInstance.toString();
    }

}
