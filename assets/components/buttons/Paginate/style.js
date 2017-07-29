import { styles, growFlex } from 'Styles/styles.js';
import { fadedBlack, solidBlack } from 'Styles/colors.js';

export const indexStyle = [growFlex(5), styles.flexCenterRow, {marginTop: 5} ];

// if skip is less than or equal to 0 disable previous we can't go back
export const disabled = (skip: number) => skip <= 0 ? fadedBlack : solidBlack;

export const previousStyle = [
  growFlex(1), 
  {backgroundColor: "#FFFFFF"}, 
  styles.flexCenterRow
];

export const nextStyle = [
  growFlex(1), 
  {backgroundColor: "#FFFFFF", 
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center"}
];
