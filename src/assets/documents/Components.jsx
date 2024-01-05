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
    return (
        <Text style={{ ...style, fontSize: 9, fontWeight: 500 }}>
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

export const H6 = ({ style, children }) => {
    return (
        <Text
            style={{
                ...style,
                fontSize: 10,
                fontWeight: 400,
                display: "block",
                textAlign: "center",
                marginBottom: 2,
            }}
        >
            {children}
        </Text>
    );
};
