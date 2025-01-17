import * as React from "react";
import { MenuGroupProps } from ".";
import { PseudoBoxProps } from "../PseudoBox";

type stringOrNumber = string | number | Array<number | string>;

interface IMenuOptionGroup {
  children?: React.ReactNode;
  type?: "radio" | "checkbox";
  name?: string;
  title?: string;
  value?: stringOrNumber;
  defaultValue?: stringOrNumber;
  onChange?: (value: stringOrNumber) => void;
}

type MenuOptionGroupProps = MenuGroupProps & IMenuOptionGroup;
export const MenuOptionGroup: React.FC<MenuOptionGroupProps>;

interface IMenuItemOption {
  children: React.ReactNode;
  isDisabled?: boolean;
  isChecked?: boolean;
  type?: "radio" | "checkbox";
  onClick?: React.KeyboardEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onMouseMove?: React.MouseEventHandler<HTMLButtonElement>;
}

type MenuItemOptionProps = PseudoBoxProps & IMenuItemOption;

export const MenuItemOption: React.FC<MenuItemOptionProps>;
