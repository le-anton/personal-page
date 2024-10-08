import React, { useContext } from "react";
import s from "./LinksWidget.styles";
import { ThemeContext } from "../context/ThemeContext";
import fontawesome, {
    IconDefinition,
    IconPrefix,
} from "@fortawesome/fontawesome";
import {
    faGithub,
    faLinkedin,
    IconName,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/fontawesome-free-solid";
import ActionButton from "../ActionButton/ActionButton";

const LinksWidget = () => {
    const { theme } = useContext(ThemeContext);

    fontawesome.library.add(
        faLinkedin as IconDefinition,
        faFile,
        faGithub as IconDefinition
    );

    return (
        <s.WidgetWrapper theme={theme}>
            <ActionButton
                faIconPrefix={faLinkedin.prefix as IconPrefix}
                faIconName={faLinkedin.iconName}
                url="https://www.linkedin.com/in/anton-le-209530194/"
                label="LinkedIn"
                size="lg"
            />
            <ActionButton
                faIconPrefix={faGithub.prefix as IconPrefix}
                faIconName={faGithub.iconName as IconName}
                url="https://github.com/le-anton"
                label="Github"
                size="lg"
            />
            <ActionButton
                faIconPrefix={faFile.prefix as IconPrefix}
                faIconName={faFile.iconName as IconName}
                url="https://flowcv.com/resume/u58epf4kb2"
                label="CV"
                size="lg"
            />
        </s.WidgetWrapper>
    );
};

export default LinksWidget;
