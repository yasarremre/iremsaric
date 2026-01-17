import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../ContactForm";
import axios from "axios";

// Mock Axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ContactForm", () => {
    beforeEach(() => {
        mockedAxios.post.mockClear();
    });

    it("renders correctly", () => {
        render(<ContactForm />);
        expect(screen.getByLabelText(/Ad Soyad/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/E-posta/i)).toBeInTheDocument();
    });

    it("submits the form successfully", async () => {
        render(<ContactForm />);
        const user = userEvent.setup();

        // Fill form
        await user.type(screen.getByLabelText(/Ad Soyad/i), "Test User");
        await user.type(screen.getByLabelText(/Telefon/i), "05551234567");
        await user.type(screen.getByLabelText(/E-posta/i), "test@example.com");
        await user.selectOptions(screen.getByLabelText(/Hizmet Türü/i), "Kilo Yönetimi");
        await user.type(screen.getByLabelText(/Mesajınız/i), "Test message content longer than 10 chars");
        // Privacy usually checked by default in my component? No, defaultValues: { privacy: true } set in component.

        mockedAxios.post.mockResolvedValueOnce({ data: { message: "Inquiry received" } });

        // Submit
        const submitBtn = screen.getByRole("button", { name: /Gönder/i });
        await user.click(submitBtn);

        await waitFor(() => {
            expect(mockedAxios.post).toHaveBeenCalledWith(
                "http://localhost:8080/api/inquiry",
                expect.objectContaining({
                    full_name: "Test User",
                    email: "test@example.com",
                })
            );
        });
    });

    it("displays validation error for invalid email", async () => {
        render(<ContactForm />);
        const user = userEvent.setup();

        await user.type(screen.getByLabelText(/E-posta/i), "invalid-email");
        const submitBtn = screen.getByRole("button", { name: /Gönder/i });
        await user.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText(/Geçerli bir e-posta adresi giriniz/i)).toBeInTheDocument();
        });
    });
});
