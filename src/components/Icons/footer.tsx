import React from 'react'
import { Path, Svg } from 'react-native-svg'

import { Colors } from '@/theme'
import { IIconProps } from '@/types/components/icons.ts'

export const ScheduleFooterIcon = ({
  color = Colors.black['50'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M8 2V5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.09H20.5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6947 13.7H15.7037"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6947 16.7H15.7037"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.7H12.0045"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 16.7H12.0045"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 13.7H8.30329"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 16.7H8.30329"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ScheduleActiveFooterIcon = ({
  color = Colors.primary.green,
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 9.83984C20.55 9.83984 21 10.2898 21 10.8398V16.9998C21 19.9998 19.5 21.9998 16 21.9998H8C4.5 21.9998 3 19.9998 3 16.9998V10.8398C3 10.2898 3.45 9.83984 4 9.83984H20ZM8.5 14.9999C8.24 14.9999 7.98 14.8899 7.79 14.7099C7.61 14.5199 7.5 14.2599 7.5 13.9999C7.5 13.7399 7.61 13.4799 7.79 13.2899C8.07 13.0099 8.51 12.9199 8.88 13.0799C9.01 13.1299 9.12 13.1999 9.21 13.2899C9.39 13.4799 9.5 13.7399 9.5 13.9999C9.5 14.2599 9.39 14.5199 9.21 14.7099C9.02 14.8899 8.76 14.9999 8.5 14.9999ZM11.29 14.7099C11.48 14.8899 11.74 14.9999 12 14.9999C12.0622 14.9999 12.1165 14.992 12.1769 14.9832L12.2 14.9799C12.26 14.9699 12.32 14.9499 12.38 14.9199C12.44 14.8999 12.5 14.8699 12.56 14.8299L12.71 14.7099C12.89 14.5199 13 14.2599 13 13.9999C13 13.7399 12.89 13.4799 12.71 13.2899C12.43 13.0099 11.99 12.9199 11.62 13.0799C11.49 13.1299 11.38 13.1999 11.29 13.2899C11.11 13.4799 11 13.7399 11 13.9999C11 14.2599 11.11 14.5199 11.29 14.7099ZM15.5 14.9999C15.24 14.9999 14.98 14.8899 14.79 14.7099C14.61 14.5199 14.5 14.2599 14.5 13.9999C14.5 13.7399 14.61 13.4799 14.79 13.2899C14.89 13.1999 14.99 13.1299 15.12 13.0799C15.3 12.9999 15.5 12.9799 15.7 13.0199C15.76 13.0299 15.82 13.0499 15.88 13.0799C15.94 13.0999 16 13.1299 16.06 13.1699L16.21 13.2899C16.39 13.4799 16.5 13.7399 16.5 13.9999C16.5 14.2599 16.39 14.5199 16.21 14.7099L16.06 14.8299C16 14.8699 15.94 14.8999 15.88 14.9199C15.82 14.9499 15.76 14.9699 15.7 14.9799C15.63 14.9899 15.56 14.9999 15.5 14.9999ZM8.12 18.4199C8.24 18.4699 8.37 18.4999 8.5 18.4999C8.56217 18.4999 8.61645 18.492 8.67686 18.4832H8.67687L8.7 18.4799C8.76 18.4699 8.82 18.4499 8.88 18.4199C8.94 18.3999 9 18.3699 9.06 18.3299C9.09333 18.3099 9.12666 18.281 9.15999 18.2521L9.16 18.2521L9.16 18.2521C9.17667 18.2377 9.19333 18.2232 9.21 18.2099C9.39 18.0199 9.5 17.7599 9.5 17.4999C9.5 17.2399 9.39 16.9799 9.21 16.7899L9.06 16.6699C9 16.6299 8.94 16.5999 8.88 16.5799C8.82 16.5499 8.76 16.5299 8.7 16.5199C8.5 16.4799 8.3 16.4999 8.12 16.5799C7.99 16.6299 7.89 16.6999 7.79 16.7899C7.61 16.9799 7.5 17.2399 7.5 17.4999C7.5 17.7599 7.61 18.0199 7.79 18.2099C7.89 18.2999 7.99 18.3699 8.12 18.4199ZM12 18.4999C11.74 18.4999 11.48 18.3899 11.29 18.2099C11.11 18.0199 11 17.7599 11 17.4999C11 17.2399 11.11 16.9799 11.29 16.7899C11.66 16.4199 12.34 16.4199 12.71 16.7899C12.89 16.9799 13 17.2399 13 17.4999C13 17.7599 12.89 18.0199 12.71 18.2099C12.52 18.3899 12.26 18.4999 12 18.4999ZM14.79 18.2099C14.98 18.3899 15.24 18.4999 15.5 18.4999C15.76 18.4999 16.02 18.3899 16.21 18.2099C16.39 18.0199 16.5 17.7599 16.5 17.4999C16.5 17.2399 16.39 16.9799 16.21 16.7899C15.84 16.4199 15.16 16.4199 14.79 16.7899C14.61 16.9799 14.5 17.2399 14.5 17.4999C14.5 17.7599 14.61 18.0199 14.79 18.2099Z"
        fill={color}
      />
    </Svg>
  )
}

export const SettingsFooterIcon = ({
  color = Colors.black['50'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SettingsActiveFooterIcon = ({
  color = Colors.primary.green,
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M15.8002 2.20999C15.3902 1.79999 14.6802 2.07999 14.6802 2.64999V6.13999C14.6802 7.59999 15.9202 8.80999 17.4302 8.80999C18.3802 8.81999 19.7002 8.81999 20.8302 8.81999C21.4002 8.81999 21.7002 8.14999 21.3002 7.74999C19.8602 6.29999 17.2802 3.68999 15.8002 2.20999Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0526 10.19H17.3147C15.0695 10.19 13.2411 8.26 13.2411 5.89V3C13.2411 2.45 12.8147 2 12.2937 2H8.27684C5.35895 2 3 4 3 7.57V16.43C3 20 5.35895 22 8.27684 22H15.7232C18.6411 22 21 20 21 16.43V11.19C21 10.64 20.5737 10.19 20.0526 10.19ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H12C12.4142 12.25 12.75 12.5858 12.75 13C12.75 13.4142 12.4142 13.75 12 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
        fill={color}
      />
    </Svg>
  )
}

export const ProfileFooterIcon = ({
  color = Colors.black['50'],
  width = 24,
  height = 24,
  fill = 'none',
  ...props
}: IIconProps) => {
  return (
    <Svg
      key={fill?.toString()}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      color={'transparent'}
      {...props}
    >
      <Path
        d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ProfileActiveFooterIcon = ({
  color = Colors.primary.green,
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill={color}
      />
      <Path
        d="M17.0809 14.15C14.2909 12.29 9.74094 12.29 6.93094 14.15C5.66094 15 4.96094 16.15 4.96094 17.38C4.96094 18.61 5.66094 19.75 6.92094 20.59C8.32094 21.53 10.1609 22 12.0009 22C13.8409 22 15.6809 21.53 17.0809 20.59C18.3409 19.74 19.0409 18.6 19.0409 17.36C19.0309 16.13 18.3409 14.99 17.0809 14.15Z"
        fill={color}
      />
    </Svg>
  )
}

export const HomeFooterIcon = ({
  color = Colors.black['50'],
  width = 24,
  height = 24,
  fill = 'none',
  ...props
}: IIconProps) => {
  return (
    <Svg
      key={fill?.toString()}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M12 18V15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0703 2.81997L3.14027 8.36997C2.36027 8.98997 1.86027 10.3 2.03027 11.28L3.36027 19.24C3.60027 20.66 4.96027 21.81 6.40027 21.81H17.6003C19.0303 21.81 20.4003 20.65 20.6403 19.24L21.9703 11.28C22.1303 10.3 21.6303 8.98997 20.8603 8.36997L13.9303 2.82997C12.8603 1.96997 11.1303 1.96997 10.0703 2.81997Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const HomeActiveFooterIcon = ({
  color = Colors.primary.green,
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.28 2.77002L20.83 8.01002C21.75 8.76002 22.32 10.26 22.14 11.43L20.88 18.97C20.59 20.64 18.99 22 17.3 22H6.69996C4.98996 22 3.41996 20.67 3.12996 18.98L1.86996 11.44C1.66996 10.26 2.23996 8.76002 3.17996 8.01002L9.72996 2.76002C11 1.74002 13 1.75002 14.28 2.77002ZM11.25 18C11.25 18.41 11.59 18.75 12 18.75C12.41 18.75 12.75 18.41 12.75 18V15C12.75 14.59 12.41 14.25 12 14.25C11.59 14.25 11.25 14.59 11.25 15V18Z"
        fill={color}
      />
    </Svg>
  )
}

export const ChatFooterIcon = ({
  color = Colors.black['50'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M8.5 10.5H15.5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
