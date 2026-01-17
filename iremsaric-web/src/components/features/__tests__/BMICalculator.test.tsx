import { render, screen, fireEvent } from "@testing-library/react";
import BMICalculator from "../BMICalculator";

describe("BMICalculator", () => {
    it("renders correctly", () => {
        render(<BMICalculator />);
        expect(screen.getByText(/Vücut Kitle İndeksinizi Hesaplayın/i)).toBeInTheDocument();
    });

    it("calculates BMI correctly", () => {
        render(<BMICalculator />);
        const heightInput = screen.getByLabelText(/Boy/i);
        const weightInput = screen.getByLabelText(/Kilo/i);

        fireEvent.change(heightInput, { target: { value: "180" } });
        fireEvent.change(weightInput, { target: { value: "80" } });

        // 80 / (1.8 * 1.8) = 24.69 -> 24.7
        expect(screen.getByText("24.7")).toBeInTheDocument();
        expect(screen.getByText(/Durum: Normal/i)).toBeInTheDocument();
    });

    it("calculates Obese status correctly", () => {
        render(<BMICalculator />);
        const heightInput = screen.getByLabelText(/Boy/i);
        const weightInput = screen.getByLabelText(/Kilo/i);

        fireEvent.change(heightInput, { target: { value: "170" } });
        fireEvent.change(weightInput, { target: { value: "90" } });

        // 90 / (1.7 * 1.7) = 31.14 -> 31.1
        expect(screen.getByText("31.1")).toBeInTheDocument();
        expect(screen.getByText(/Durum: Obez/i)).toBeInTheDocument();
    });
});
