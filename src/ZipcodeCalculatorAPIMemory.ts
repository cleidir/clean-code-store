import ZipcodeCalculatorAPI from "./ZipcodeCalculatorAPI";

export default class ZipcodeCalculatorAPIMemory implements ZipcodeCalculatorAPI {
    calculate(zipcodeA: string, zipcodeB: string): number {
        return 1000;
    }
}