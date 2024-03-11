import React, {FC} from "react";

interface ButtonProps {
    children?: React.ReactNode,
    onClick?: () => void,
    classStyle?: string,
}

const CustomButton: FC<ButtonProps> = ({children, onClick, classStyle}) => {
    return (
        <button onClick={onClick} className={classStyle}>
            {children}
        </button>
    );
};
export default CustomButton;
