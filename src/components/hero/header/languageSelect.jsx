import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function LanguageSelect() {
  return (
    <Select
      placeholder="EN"
      variant="plain"
      size="lg"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 90,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        fontFamily: "Raleway",
        height: 50,
      }}
    >
      <Option value="EN">EN</Option>
      <Option value="FR">FR</Option>
    </Select>
  );
}
