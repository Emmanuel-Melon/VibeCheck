"use client";
import { Icon as BaseIcon, IconProps } from "@iconify/react";

//  React.FunctionComponent<IconProps>
export function Icon(props): JSX.Element {
    return <BaseIcon {...props} height="20" width="20" />
};

