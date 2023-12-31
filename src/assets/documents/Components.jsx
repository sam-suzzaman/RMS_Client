// REQUIRED IMPORT
import { Text, View } from "@react-pdf/renderer";

// CREATING COMPONENTS
export const SECTION = ({ style, children }) => {
    return <View style={{ ...style }}>{children}</View>;
};

export const DIV = ({ children, style, isFixed }) => {
    return (
        <View style={{ ...style }} fixed={isFixed || false}>
            {children}
        </View>
    );
};

export const SPAN = ({ style, children }) => {
    return <Text style={{ ...style }}>{children}</Text>;
};

export const H1 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                fontSize: "24pt",
                fontWeight: "bold",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
export const H2 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
export const H3 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
export const H4 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
export const H5 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};

export const H6 = ({ style, children }) => {
    return (
        <Text
            style={{
                ...style,
                display: "block",
            }}
        >
            {children}
        </Text>
    );
};
