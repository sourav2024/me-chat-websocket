import React from "react";
import { StyleSheet, TextStyle, Text } from "react-native";
import { colors } from "@/constants/theme";
import { TypoProps } from "@/types";
import { verticalScale } from "@/utils/styling";
const Typo = ({
    size = 16,
    color = colors.white,
    fontWeight = "400",
    children,
    style,
    textProps = {}
}: TypoProps) =>{

    const textStyle: TextStyle = {
       fontSize: verticalScale(size),
       color,
       fontWeight
    }
    return(
<Text style={[textStyle, style]} {...textProps}>
    {children}
</Text>
    )
};

export default Typo;

const styles = StyleSheet.create({

})