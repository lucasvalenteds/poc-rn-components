import React from "react";
import {TextStyle, Text} from "react-native";

interface BaseTextProps {
    style: TextStyle;
}

const BaseText: React.FC<BaseTextProps> = (props): React.ReactElement => (
    <>
        <Text {...props}>{props.children}</Text>
    </>
);

export const Title: React.FC = (props): React.ReactElement => (
    <>
    <BaseText
        {...props}
        style={{
            fontSize: 36,
            color: "#0366d6",
        }}
    />
    </>
);

export const Subtitle: React.FC = (props): React.ReactElement => (
    <>
    <BaseText
        {...props}
        style={{
            fontSize: 20,
            color: "#6a737d",
        }}
    />
    </>
);

export const Paragraph: React.FC = (props): React.ReactElement => (
    <>
    <BaseText
        {...props}
        style={{
            fontSize: 14,
            lineHeight: 25,
            textAlign: "justify",
            color: "#222222",
        }}
    />
    </>
);
