import ZipcodeCalculatorAPIMemory from "./ZipcodeCalculatorAPIMemory";

test("Deve calcular a distância entre dois ceps", function () {
    const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
    const distance = zipcodeCalculator.calculate("88030-000", "88130-100");
    expect(distance).toBe(1000);
});