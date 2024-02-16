import { ButtonIcon } from "../../src/components/Components";
import { render, fireEvent } from "@testing-library/react-native";

describe("ButtonIcon",() =>{
    it("calls onPress function when button is pressed", () =>{
        const mockOnPress = jest.fn();

        const {getByTestId} = render(<ButtonIcon pressHandler={mockOnPress} id='test'/>)
        const pressMeButton = getByTestId('test');
        fireEvent.press(pressMeButton)

        expect(mockOnPress).toHaveBeenCalled();
    })

});