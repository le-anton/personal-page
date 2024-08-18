import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import s from "./ActionButton.styles";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { IconPrefix } from "@fortawesome/fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface ActionButtonProps {
    faIconPrefix: IconPrefix;
    faIconName: IconName;
    url: string;
    label: string;
    size: SizeProp;
}

const ActionButton = (props: ActionButtonProps) => {
    const { theme } = useContext(ThemeContext);

    return (
        <s.ButtonContainer
            theme={theme}
            onClick={() => {
                window.open(props.url, "_blank");
            }}
        >
            <FontAwesomeIcon
                icon={[props.faIconPrefix, props.faIconName]}
                size={props.size}
            />
            <p>{props.label}</p>
        </s.ButtonContainer>
    );
};

export default ActionButton;
