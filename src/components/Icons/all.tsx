import React from 'react'
import { Circle, Path, Svg } from 'react-native-svg'

import { Colors } from '@/theme'
import { IIconProps } from '@/types/components/icons.ts'

export const ArrowDownIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      color={'transparent'}
      {...props}
    >
      <Path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ArrowUpIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ArrowRightIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07996"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ArrowLeftIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07996"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const NotificationIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.02 2.91C8.70997 2.91 6.01997 5.6 6.01997 8.91V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  )
}

export const QuestionIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9998 11.36V11.15C11.9998 10.47 12.4198 10.11 12.8398 9.82001C13.2498 9.54001 13.6598 9.18002 13.6598 8.52002C13.6598 7.60002 12.9198 6.85999 11.9998 6.85999C11.0798 6.85999 10.3398 7.60002 10.3398 8.52002"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.75H12.0045"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const EyeIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const EyeSlashIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.47 14.53L2 22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9998 2L14.5298 9.47"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CloseCircleIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.5 22c5.5 0 10-4.5 10-10S18 2 12.5 2s-10 4.5-10 10 4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.67 9.17"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const DangerIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V14C12.75 14.41 12.41 14.75 12 14.75Z"
        fill={color}
      />
      <Path
        d="M12 18C11.94 18 11.87 17.99 11.8 17.98C11.74 17.97 11.68 17.95 11.62 17.92C11.56 17.9 11.5 17.87 11.44 17.83C11.39 17.79 11.34 17.75 11.29 17.71C11.11 17.52 11 17.26 11 17C11 16.74 11.11 16.48 11.29 16.29C11.34 16.25 11.39 16.21 11.44 16.17C11.5 16.13 11.56 16.1 11.62 16.08C11.68 16.05 11.74 16.03 11.8 16.02C11.93 15.99 12.07 15.99 12.19 16.02C12.26 16.03 12.32 16.05 12.38 16.08C12.44 16.1 12.5 16.13 12.56 16.17C12.61 16.21 12.66 16.25 12.71 16.29C12.89 16.48 13 16.74 13 17C13 17.26 12.89 17.52 12.71 17.71C12.66 17.75 12.61 17.79 12.56 17.83C12.5 17.87 12.44 17.9 12.38 17.92C12.32 17.95 12.26 17.97 12.19 17.98C12.13 17.99 12.06 18 12 18Z"
        fill={color}
      />
      <Path
        d="M18.06 22.16H5.93998C3.98998 22.16 2.49998 21.45 1.73998 20.17C0.989976 18.89 1.08998 17.24 2.03998 15.53L8.09998 4.63C9.09998 2.83 10.48 1.84 12 1.84C13.52 1.84 14.9 2.83 15.9 4.63L21.96 15.54C22.91 17.25 23.02 18.89 22.26 20.18C21.5 21.45 20.01 22.16 18.06 22.16ZM12 3.34C11.06 3.34 10.14 4.06 9.40998 5.36L3.35998 16.27C2.67998 17.49 2.56998 18.61 3.03998 19.42C3.50998 20.23 4.54998 20.67 5.94998 20.67H18.07C19.47 20.67 20.5 20.23 20.98 19.42C21.46 18.61 21.34 17.5 20.66 16.27L14.59 5.36C13.86 4.06 12.94 3.34 12 3.34Z"
        fill={color}
      />
    </Svg>
  )
}

export const TimerIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        id="vector"
        d="M21 13.25C21 18.218 16.968 22.25 12 22.25C7.032 22.25 3 18.218 3 13.25C3 8.282 7.032 4.25 12 4.25C16.968 4.25 21 8.282 21 13.25Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        id="Vector"
        d="M12 8.25V13.25"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        id="line"
        d="M9 1.75L15 1.75"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const Settings2Icon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        id="vector"
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        id="vector_2"
        d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const LogOutIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12H3.62"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const NotificationOffIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M22.5 2L2.5 22"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.012 6.5c-.932-2.109-3.047-3.59-5.491-3.59-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.8 15.77c-.636 1.057-.31 2.218.7 2.765m3.284.91A20.9 20.9 0 0 0 19.15 18.7c1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V9.5M5.5 18.535q.176.096.38.165z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M15.5195 19.0601C15.5195 20.7101 14.1695 22.0601 12.5195 22.0601C11.6995 22.0601 10.9395 21.7201 10.3995 21.1801C9.85953 20.6401 9.51953 19.8801 9.51953 19.0601"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}
export const TickCircleIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill={color}
      />
      <Path
        d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
        fill={color}
      />
    </Svg>
  )
}

export const CallIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.2451 7.46611 11.3894 12.6113C16.5348 17.7554 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SmsIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ReceiptDiscountIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 13L15 7"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9945 13H15.0035"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99451 7.5H9.00349"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UserAddIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.49 17.98H16.51"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 16.52V19.51"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UserRemoveIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0299 16.9399L16.9199 19.0499"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9399 16.96L19.0599 19.0699"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UserTickIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.41003 22C3.41003 18.13 7.26003 15 12 15C12.96 15 13.89 15.13 14.76 15.37"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4399 18L17.4299 18.99L19.5599 17.02"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UserMinusIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.49 17.98H16.51"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UserEditIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7001 16.25C19.0001 17.33 19.84 18.17 20.92 18.47"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const MoonIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SunIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m19.14 19.14-.13-.13m0-14.02.13-.13zM4.86 19.14l.13-.13zM12 2.08V2zM12 22v-.08zM2.08 12H2zM22 12h-.08zM4.99 4.99l-.13-.13z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ClipboardIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M18.63 7.1499C18.67 7.7599 18.62 8.4499 18.5 9.2199L17.77 13.9099C17.15 17.8199 15.34 19.1399 11.43 18.5299L6.73999 17.7899C5.38999 17.5799 4.34999 17.2199 3.58999 16.6799C2.13999 15.6699 1.71999 14.0099 2.11999 11.4499L2.85999 6.7599C3.47999 2.8499 5.28999 1.5299 9.19999 2.1399L13.89 2.8799C17.03 3.3699 18.5 4.6499 18.63 7.1499Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5 13.4699L19 17.9799C17.75 21.7399 15.75 22.7399 11.99 21.4899L7.48003 19.9899C5.21003 19.2399 3.95003 18.1999 3.59003 16.6799C4.35003 17.2199 5.39003 17.5799 6.74003 17.7899L11.43 18.5299C15.34 19.1399 17.15 17.8199 17.77 13.9099L18.5 9.2199C18.62 8.4499 18.67 7.7599 18.63 7.1499C21.02 8.4199 21.54 10.3399 20.5 13.4699Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.24 8.98C9.20098 8.98 9.98 8.20098 9.98 7.24C9.98 6.27902 9.20098 5.5 8.24 5.5C7.27902 5.5 6.5 6.27902 6.5 7.24C6.5 8.20098 7.27902 8.98 8.24 8.98Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const LockIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M2 16c0 -2.8284 0 -4.2426 0.87868 -5.1213C3.75736 10 5.17157 10 8 10h8c2.8284 0 4.2426 0 5.1213 0.8787C22 11.7574 22 13.1716 22 16s0 4.2426 -0.8787 5.1213C20.2426 22 18.8284 22 16 22H8c-2.82843 0 -4.24264 0 -5.12132 -0.8787C2 20.2426 2 18.8284 2 16Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        d="M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0"
        strokeWidth="1.5"
      />
      <Path
        d="M6 10V8c0 -3.31371 2.68629 -6 6 -6 3.3137 0 6 2.68629 6 6v2"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
}

export const UnlockIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M2 16c0 -2.8284 0 -4.2426 0.87868 -5.1213C3.75736 10 5.17157 10 8 10h8c2.8284 0 4.2426 0 5.1213 0.8787C22 11.7574 22 13.1716 22 16s0 4.2426 -0.8787 5.1213C20.2426 22 18.8284 22 16 22H8c-2.82843 0 -4.24264 0 -5.12132 -0.8787C2 20.2426 2 18.8284 2 16Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        d="M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0"
        strokeWidth="1.5"
      />
      <Path
        d="M6 10V8c0 -3.31371 2.68629 -6 6 -6 2.7958 0 5.1449 1.91216 5.811 4.5"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </Svg>
  )
}

export const PersonalCardIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 8H19"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12H19"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 16H19"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49994 11.2899C9.49958 11.2899 10.3099 10.4796 10.3099 9.47992C10.3099 8.48029 9.49958 7.66992 8.49994 7.66992C7.50031 7.66992 6.68994 8.48029 6.68994 9.47992C6.68994 10.4796 7.50031 11.2899 8.49994 11.2899Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SunFogIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 19h14"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        d="M12 6c-3.31371 0 -6 2.68629 -6 6 0 1.5217 0.56645 2.911 1.5 3.9687h9C17.4335 14.911 18 13.5217 18 12c0 -3.31371 -2.6863 -6 -6 -6Z"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        d="M12 2v1"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        d="M22 12h-1"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        d="M3 12H2"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        d="m19.071 4.9292 -0.3928 0.39284"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m5.32155 5.32155 -0.39284 -0.39284"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 22h8"
        strokeWidth="1.5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 16h20"
        strokeWidth="1.5"
      />
    </Svg>
  )
}

export const ProfileIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const AttachSquareIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.1999 11.8L10.7899 13.21C10.0099 13.99 10.0099 15.26 10.7899 16.04C11.5699 16.82 12.8399 16.82 13.6199 16.04L15.8399 13.82C17.3999 12.26 17.3999 9.72999 15.8399 8.15999C14.2799 6.59999 11.7499 6.59999 10.1799 8.15999L7.75988 10.58C6.41988 11.92 6.41988 14.09 7.75988 15.43"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-8, -8) scale(1.8)"
      />
    </Svg>
  )
}

export const HomeWifiIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M10.07 2.81997L3.14004 8.37002C2.36004 8.99002 1.86002 10.3 2.03002 11.28L3.36001 19.24C3.60001 20.66 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88 14.38C11.15 13.17 12.85 13.17 14.12 14.38"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.24 12.2601C15.7 11.7301 15.1 11.3201 14.48 11.0201C12.89 10.2601 11.11 10.2601 9.51001 11.0201C8.89001 11.3201 8.3 11.7301 7.75 12.2601"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 17H12.0045"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SafeHomeIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M23 15.37V17.5601C23 20.0001 21.22 22.3 18.8 22.97C18.63 23.01 18.45 23.01 18.29 22.97C17.11 22.65 16.07 21.93 15.34 21C14.55 20.02 14.09 18.8101 14.09 17.5601V15.37C14.09 14.95 14.4 14.49 14.78 14.33L17.56 13.1899C18.19 12.9399 18.89 12.9399 19.52 13.1899L20.52 13.6L22.31 14.33C22.69 14.49 23 14.95 23 15.37Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9501 11.0101L20.52 13.6L19.52 13.19C18.89 12.94 18.19 12.94 17.56 13.19L14.78 14.33C14.4 14.49 14.09 14.95 14.09 15.37V17.5601C14.09 18.8101 14.55 20.02 15.34 21H6.18003C4.81003 21 3.52005 19.9101 3.29005 18.5601L2.03004 11.0101C1.87004 10.0801 2.34002 8.83004 3.08002 8.24004L9.66004 2.98003C10.67 2.17003 12.31 2.17004 13.32 2.99004L19.9 8.24004C20.63 8.83004 21.1101 10.0801 20.9501 11.0101Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CloseIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="m3.219 2.154 6.778 6.773 6.706-6.705c.457-.407.93-.164 1.119.04a.777.777 0 0 1-.044 1.035l-6.707 6.704 6.707 6.702c.298.25.298.74.059 1.014-.24.273-.68.431-1.095.107l-6.745-6.749-6.753 6.752c-.296.265-.784.211-1.025-.052-.242-.264-.334-.72-.025-1.042l6.729-6.732-6.701-6.704c-.245-.27-.33-.764 0-1.075s.822-.268.997-.068"
      />
    </Svg>
  )
}

export const CheckIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M20 6 9 17l-5-5"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const InfoCircleIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.994 8h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.994 12v5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const DownloadIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M19.31 12.051c.381 0 .69.314.69.7v4.918c-.006.67-.127 1.2-.399 1.594-.328.476-.908.692-1.747.737l-15.903-.002c-.646-.046-1.168-.302-1.507-.777-.302-.423-.446-.95-.444-1.558V12.75c0-.386.309-.7.69-.7s.688.314.688.7v4.913c0 .333.065.572.182.736.081.114.224.184.44.201l15.817.001c.42-.023.627-.1.655-.14.084-.123.146-.393.15-.8V12.75c0-.386.308-.7.689-.7M9.99 0c.38 0 .69.313.69.7l-.001 10.869 3.062-3.079a.68.68 0 0 1 .975.004.707.707 0 0 1-.004.99l-4.356 4.38a.68.68 0 0 1-.973-.003l-4.296-4.38a.707.707 0 0 1 .002-.99.68.68 0 0 1 .975.002L9.3 11.794V.699C9.3.313 9.61 0 9.99 0"
      />
    </Svg>
  )
}

export const DoubleCheckIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        transform="scale(0.77)"
        d="M23.281 7.281 11.5 19.063 8.719 16.28 7.28 17.72l2.782 2.781L8 22.563 1.719 16.28.28 17.72l7 7 .719.687.719-.687 2.781-2.782 2.781 2.782.719.687.719-.687 15.906-16-1.437-1.438L15 22.563 12.938 20.5l11.78-11.781Z"
      />
    </Svg>
  )
}

export const DocumentTextIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 13H13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 17H11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const AgencyIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Circle cx={12} cy={12} r={9.25} stroke={color} strokeWidth={1.5} />
      <Path
        d="M7.819 17q-.347 0-.563-.153a.62.62 0 0 1-.246-.402q-.043-.263.101-.582l3.813-8.114q.189-.402.448-.569.274-.18.621-.18.333 0 .592.18.274.166.462.569l3.828 8.114q.16.319.116.582a.63.63 0 0 1-.246.416q-.203.14-.534.139-.405 0-.636-.18-.216-.195-.39-.583l-.939-2.094.78.485H8.931l.78-.485-.924 2.094q-.189.403-.39.583-.203.18-.578.18m4.145-7.961-2.022 4.618-.375-.443h4.824l-.361.443-2.037-4.618z"
        fill={color}
      />
    </Svg>
  )
}

export const Lock2Icon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8 10V8c0-2.761 1.239-5 4-5s4 2.239 4 5v2M3.5 17.8v-4.6c0-1.12 0-1.68.218-2.107a2 2 0 0 1 .874-.875c.428-.217.988-.217 2.108-.217h10.6c1.12 0 1.68 0 2.108.217a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v4.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.98 21 18.42 21 17.3 21H6.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3.5 19.481 3.5 18.921 3.5 17.8m8.5-2.05v-.5m4 .5v-.5m-8 .5v-.5"
        strokeWidth={1.5}
        stroke={color}
      />
    </Svg>
  )
}

export const AddIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"
        fill={color}
      />
    </Svg>
  )
}

export const MinusIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
        fill={color}
      />
    </Svg>
  )
}

export const CalendarSearchIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8 2v3m8-3v3"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4m3.8.6-1-1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.09h17M13.37 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CalendarEditIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8 2v3m8-3v3M3.5 9.09h17m-1.29 6.68-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7 16.28c.3 1.08 1.14 1.92 2.22 2.22M12 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V12"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CalendarIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8 2v3m8-3v3M3.5 9.09h17m.5-.59V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.695 13.7h.009m-.009 3h.009m-3.708-3h.008m-.008 3h.008m-3.71-3h.01m-.01 3h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CalendarTickIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8 2v3m8-3v3M3.5 9.09h17M22 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 23c-1.01 0-1.93-.37-2.63-1-.31-.26-.58-.58-.79-.94A3.9 3.9 0 0 1 14 19c0-2.21 1.79-4 4-4 1.2 0 2.27.53 3 1.36A4 4 0 0 1 22 19"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m16.44 19 .99.99 2.13-1.97"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CalendarRemoveIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8 2v3m8-3v3M3.5 9.09h17M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8m1.07-2.89L16.95 18m2.1.02-2.12 2.12"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CalendarAddIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M8 2v3m8-3v3M3.5 9.09h17M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8m1.49-3.95h-2.98M18 17.59v2.99"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CategoryIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M5 10h2q3 0 3-3V5q0-3-3-3H5Q2 2 2 5v2q0 3 3 3m12 0h2q3 0 3-3V5q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3m0 12h2q3 0 3-3v-2q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3M5 22h2q3 0 3-3v-2q0-3-3-3H5q-3 0-3 3v2q0 3 3 3"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SendIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92m2.71 7.33 3.58-3.59"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SearchIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="m21 21-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export const MessageIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M3.464 16.828C2 15.657 2 14.771 2 11s0-5.657 1.464-6.828C4.93 3 7.286 3 12 3s7.071 0 8.535 1.172S22 7.229 22 11s0 4.657-1.465 5.828C19.072 18 16.714 18 12 18c-2.51 0-3.8 1.738-6 3v-3.212c-1.094-.163-1.899-.45-2.536-.96M9.5 10.5h5"
        strokeWidth={1.5}
        stroke={color}
      />
    </Svg>
  )
}

export const SickOffNoIcon = ({
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 13c0 5.523-4.477 10-10 10h-.032H12c2.62 0 5-1.01 6.78-2.65-.24-.91-.88-1.74-1.84-2.38-2.71-1.82-7.15-1.82-9.88 0-.95.64-1.6 1.47-1.84 2.38a9.98 9.98 0 0 0 6.522 2.647C6.338 22.86 2 18.437 2 13 2 7.477 6.477 3 12 3s10 4.477 10 10M8.25 11.68c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75a3.743 3.743 0 0 1-3.62 3.74h-.18c-2.11-.06-3.7-1.71-3.7-3.74"
        fill={Colors.system.green}
      />
      <Path
        d="M24 5.5a4.4 4.4 0 0 1-.652 2.318c-.237.405-.54.765-.89 1.057A4.4 4.4 0 0 1 19.5 10a4.47 4.47 0 0 1-3.847-2.182A4.4 4.4 0 0 1 15 5.5c0-1.418.652-2.689 1.688-3.51A4.499 4.499 0 0 1 24 5.5"
        fill={Colors.system.green}
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m18 5.98.99.99L21.12 5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SickOffYesIcon = ({
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 13c0 5.523-4.477 10-10 10h-.032H12c2.62 0 5-1.01 6.78-2.65-.24-.91-.88-1.74-1.84-2.38-2.71-1.82-7.15-1.82-9.88 0-.95.64-1.6 1.47-1.84 2.38a9.98 9.98 0 0 0 6.522 2.647C6.338 22.86 2 18.437 2 13 2 7.477 6.477 3 12 3s10 4.477 10 10M8.25 11.68c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75a3.743 3.743 0 0 1-3.62 3.74h-.18c-2.11-.06-3.7-1.71-3.7-3.74"
        fill={Colors.system.red}
      />
      <Path
        d="M24 5.5a4.4 4.4 0 0 1-.652 2.318c-.237.405-.54.765-.89 1.057A4.4 4.4 0 0 1 19.5 10a4.47 4.47 0 0 1-3.847-2.182A4.4 4.4 0 0 1 15 5.5c0-1.418.652-2.689 1.688-3.51A4.499 4.499 0 0 1 24 5.5"
        fill={Colors.system.red}
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 5.5h3"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export const AgencyFilledIcon = ({
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" {...props}>
      <Path
        fill="#e8961c"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10S2 17.523 2 12 6.477 2 12 2m0.936 5.649c-0.324 -0.865 -1.548 -0.865 -1.872 0l-3 8a1 1 0 0 0 0.585 1.287l0.111 0.035a1 1 0 0 0 1.176 -0.62L10.443 15h3.114l0.507 1.351a1 1 0 1 0 1.872 -0.702zM12 10.848 12.807 13h-1.614z"
        strokeWidth={1}
      />
    </Svg>
  )
}

export const InfoFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M11.797 17.708h1.562v-6.25h-1.562zm.702-8.177q.366 0 .613-.24a.8.8 0 0 0 .247-.593.87.87 0 0 0-.246-.63.82.82 0 0 0-.612-.256.82.82 0 0 0-.613.255.87.87 0 0 0-.247.63q0 .355.246.595.248.24.612.24m.008 13.386q-2.154 0-4.05-.82a10.6 10.6 0 0 1-3.314-2.24 10.6 10.6 0 0 1-2.24-3.316q-.82-1.897-.82-4.054c0-2.157.274-2.79.82-4.054a10.4 10.4 0 0 1 2.24-3.303A10.7 10.7 0 0 1 8.46 2.904q1.897-.82 4.054-.82c2.157 0 2.79.273 4.054.82A10.5 10.5 0 0 1 19.87 5.13a10.5 10.5 0 0 1 2.226 3.307q.82 1.902.82 4.056t-.82 4.05a10.6 10.6 0 0 1-2.226 3.31 10.5 10.5 0 0 1-3.308 2.239q-1.9.825-4.055.825"
      />
    </Svg>
  )
}

export const WarmingFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M19.59 15.86 12.007 1.924C11.515 1.011 10.779.5 9.989.5s-1.515.521-2.016 1.434L.409 15.861c-.49.901-.544 1.825-.138 2.53.405.707 1.216 1.109 2.219 1.109h15.02c1.003 0 1.814-.402 2.22-1.108.405-.706.351-1.619-.14-2.531M10 4.857c.395 0 .715.326.715.728v6.583c0 .402-.32.728-.715.728a.72.72 0 0 1-.715-.728V5.584c0-.391.32-.728.715-.728m0 11.624c-.619 0-1.11-.51-1.11-1.14s.502-1.141 1.11-1.141c.619 0 1.11.51 1.11 1.14S10.607 16.48 10 16.48"
      />
    </Svg>
  )
}

export const CheckFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-.232-5.36 5-6-1.536-1.28-4.3 5.159-2.225-2.226-1.414 1.414 3 3 .774.774z"
        fill={color}
      />
    </Svg>
  )
}

export const CloseFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M11.5.23C5.286.23.23 5.286.23 11.5S5.286 22.77 11.5 22.77s11.27-5.056 11.27-11.27S17.714.23 11.5.23m4.08 14.125a.867.867 0 1 1-1.225 1.226L11.5 12.726l-2.855 2.855a.867.867 0 0 1-1.226-1.226l2.855-2.855-2.855-2.855A.867.867 0 0 1 8.645 7.42l2.855 2.854 2.855-2.854a.867.867 0 0 1 1.225 1.225L12.726 11.5z"
      />
    </Svg>
  )
}

export const MessageFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM8 10v2h8v-2z"
        fill={color}
      />
    </Svg>
  )
}

export const UploadFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1m-8.97 3.34c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.72-.72V17c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.19l-.72.72c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2-2c.07-.06.14-.11.22-.15.02-.01.05-.02.07-.03.06-.02.12-.03.19-.04h.08c.08 0 .16.02.24.05h.02c.08.03.16.09.22.15.01.01.02.01.02.02l2 2c.29.29.29.77 0 1.06"
        fill={color}
      />
      <Path
        d="M17.43 8.81c.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67"
        fill={color}
      />
    </Svg>
  )
}

export const NotificationFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="m19.34 14.49-1-1.66c-.21-.37-.4-1.07-.4-1.48V8.82a5.91 5.91 0 0 0-3.37-5.33A2.93 2.93 0 0 0 11.99 2c-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98s4.08-.32 6.02-.97c.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09m-4.51 5.52A3.01 3.01 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06z"
        fill={color}
      />
    </Svg>
  )
}

export const ProfileFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1 -9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 0.75 0.75 0 0 1 -0.437 0.695A18.683 18.683 0 0 1 12 22.5c-2.786 0 -5.433 -0.608 -7.812 -1.7a0.75 0.75 0 0 1 -0.437 -0.695Z"
        strokeWidth={1}
      />
    </Svg>
  )
}

export const WalletFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M13.206 1.128c1.264-.31 2.632.151 3.328 1.341q.27.458.582 1.072c-1.456-.096-3.615-.187-6.575-.187-1.669 0-3.083.03-4.26.072a48.5 48.5 0 0 1 6.925-2.298M3.86 22.084c1.426.099 3.616.197 6.68.197 3.065 0 5.255-.098 6.681-.197 1.571-.108 2.81-1.302 2.94-2.885q.036-.454.071-1.012a54 54 0 0 1-3.553-.016c-1.744-.07-3.152-1.405-3.231-3.194q-.031-.655-.032-1.56c-.001-.905.013-1.123.032-1.56.08-1.79 1.487-3.125 3.23-3.195.54-.022 1.206-.037 2.009-.037q.878 0 1.545.021a50 50 0 0 0-.071-1.011c-.13-1.584-1.369-2.777-2.94-2.886-1.426-.099-3.616-.197-6.68-.197-3.065 0-5.255.098-6.681.197-1.57.109-2.81 1.302-2.94 2.886-.102 1.283-.2 3.182-.2 5.782s.098 4.499.203 5.782c.129 1.583 1.368 2.777 2.939 2.885m11.024-7.17c.045 1.02.832 1.78 1.852 1.821.52.02 1.167.036 1.95.036.784 0 1.43-.015 1.95-.036 1.021-.04 1.808-.801 1.853-1.822q.029-.621.03-1.496c.002-.875-.012-1.081-.03-1.497-.045-1.02-.832-1.78-1.852-1.822-.52-.02-1.167-.036-1.95-.036-.784 0-1.43.016-1.95.036-1.021.041-1.808.802-1.853 1.822q-.028.623-.03 1.497c-.003.874.012 1.08.03 1.496m3.323-2.695a.72.72 0 0 1 .72.719v.958a.719.719 0 0 1-1.438 0v-.959c0-.396.321-.718.718-.718"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export const HomeFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="m2.64 10.59 9-7.48a.48.48 0 0 1 .62 0l9 7.48a1.45 1.45 0 0 0 2.06-.22 1.52 1.52 0 0 0-.21-2.11l-9-7.49a3.41 3.41 0 0 0-4.32 0l-9 7.49a1.52 1.52 0 0 0-.21 2.11 1.45 1.45 0 0 0 2.06.22"
      />
      <Path
        fill={color}
        d="M22.28 22v-7a2.22 2.22 0 0 0-.73-1.59l-8.3-7a1.94 1.94 0 0 0-2.5 0l-8.3 7A2.22 2.22 0 0 0 1.72 15v7a2 2 0 0 0 2 2h5.34a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V23a1 1 0 0 0 1 1h5.38a2 2 0 0 0 1.84-2"
      />
    </Svg>
  )
}

export const CalendarFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092-.695.694-.977 1.639-1.093 3.078h19.842c-.115-1.44-.398-2.384-1.093-3.078-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        fill={color}
      />
    </Svg>
  )
}

export const ProfileTwoUserFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0m9.75 2.25a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0M1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.07 13.07 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63zm15.75.003-.001.144a2.25 2.25 0 0 1-.233.96 10.1 10.1 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.6 8.6 0 0 1 1.71 5.157v.003Z"
      />
    </Svg>
  )
}

export const DocumentFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848.114.847.375 1.694 1.067 2.386.69.69 1.538.952 2.385 1.066.782.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-8.75-7.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
        fill={color}
      />
      <Path
        d="m19.352 7.617-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.465 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"
        fill={color}
      />
    </Svg>
  )
}

export const ElementFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M21.5 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04C13.64 2 13 2.6 13 4.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1M11 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.73c-1.59 0-2.23-.6-2.23-2.1v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1m10.5 6.8v-2.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04C10.36 9 11 8.4 11 6.9"
        fill={color}
      />
    </Svg>
  )
}

export const ClockFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m3.5 12c-.3.5-.9.6-1.4.4l-2.6-1.5c-.3-.2-.5-.5-.5-.9V7c0-.6.4-1 1-1s1 .4 1 1v4.4l2.1 1.2c.5.3.6.9.4 1.4"
      />
    </Svg>
  )
}

export const ProfileTickIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.74 4.74 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2m5.08 12.16c-2.79-1.86-7.34-1.86-10.15 0-1.27.84-1.97 1.99-1.97 3.22s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22s3.68-.47 5.08-1.41c1.26-.85 1.96-1.99 1.96-3.23-.01-1.22-.7-2.37-1.96-3.2m-2.75 2.4-2.52 2.52a.62.62 0 0 1-.44.18c-.16 0-.32-.07-.44-.18l-1.26-1.26a.63.63 0 0 1 0-.88c.24-.24.64-.24.88 0l.82.82 2.08-2.08c.24-.24.64-.24.88 0 .25.24.25.64 0 .88"
        fill={color}
      />
    </Svg>
  )
}

export const ProfileDeleteIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.74 4.74 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2m5.08 12.149c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41s3.68-.47 5.08-1.41c1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21m-3.14 4.11c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.88-.88-.88.88c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l.88-.88-.88-.88a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.88.88.88-.88c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.88.88z"
        fill={color}
      />
    </Svg>
  )
}

export const FlagFilledIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M4.3125 21.5625H2.875V1.4375h17.25l-4.16875 6.46875 4.16875 6.46875H4.3125Z"
        fill={color}
        strokeWidth={1}
      />
      <Path d="M0 0h23v23H0Z" fill="none" strokeWidth={1} />
    </Svg>
  )
}

export const AgencyNoIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M.828 7.296v14.112h9.026a7.2 7.2 0 0 1-.603-1.705 8.6 8.6 0 0 1-.191-1.823q0-3.44 2.396-5.836t5.836-2.396q.588 0 1.176.088t1.176.265V7.296L10.236.24zM13.132 22.04q1.72 1.72 4.16 1.72t4.16-1.72 1.72-4.16-1.72-4.16-4.16-1.72-4.16 1.72-1.72 4.16 1.72 4.16m6.218-1.25-2.058-2.087-2.087 2.088-.824-.824 2.088-2.087-2.088-2.087.824-.824 2.087 2.088 2.087-2.088.824.824-2.088 2.087 2.088 2.087z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export const AgencyYesIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M.828 7.296v14.112h9.026a7.2 7.2 0 0 1-.603-1.705 8.6 8.6 0 0 1-.191-1.823q0-3.44 2.396-5.836t5.836-2.396q.588 0 1.176.088t1.176.265V7.296L10.236.24zM13.132 22.04q1.72 1.72 4.16 1.72t4.16-1.72 1.72-4.16-1.72-4.16-4.16-1.72-4.16 1.72-1.72 4.16 1.72 4.16m7.394-5.571-4.087 4.057-2.381-2.381 1.235-1.265 1.146 1.147 2.852-2.793z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export const EditIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M13.2603 3.59997L5.05034 12.29C4.74034 12.62 4.44034 13.27 4.38034 13.72L4.01034 16.96C3.88034 18.13 4.72034 18.93 5.88034 18.73L9.10034 18.18C9.55034 18.1 10.1803 17.77 10.4903 17.43L18.7003 8.73997C20.1203 7.23997 20.7603 5.52997 18.5503 3.43997C16.3503 1.36997 14.6803 2.09997 13.2603 3.59997Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8896 5.05005C12.3196 7.81005 14.5596 9.92005 17.3396 10.2"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 22H21"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SecurityUserIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M10.49 2.23006L5.50003 4.10005C4.35003 4.53005 3.41003 5.89004 3.41003 7.12004V14.55C3.41003 15.73 4.19005 17.28 5.14005 17.99L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12004C20.61 5.89004 19.67 4.53005 18.52 4.10005L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 10.92C11.9601 10.92 11.9101 10.92 11.8701 10.92C10.9301 10.89 10.1801 10.11 10.1801 9.16003C10.1801 8.19003 10.9701 7.40002 11.9401 7.40002C12.9101 7.40002 13.7001 8.19003 13.7001 9.16003C13.6901 10.12 12.9401 10.89 12.0001 10.92Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.01 13.72C9.05004 14.36 9.05004 15.41 10.01 16.05C11.1 16.78 12.89 16.78 13.98 16.05C14.94 15.41 14.94 14.36 13.98 13.72C12.9 12.99 11.11 12.99 10.01 13.72Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ClockIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M22.5 12c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10 10 4.48 10 10"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m16.21 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UserLateIcon = ({
  color = Colors.black['90'],
  width = 24,
  height = 24,
  ...props
}: IIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.91016 22C3.91016 18.13 7.76018 15 12.5002 15"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.5 18.5C23.5 20.984 21.484 23 19 23C16.516 23 14.5 20.984 14.5 18.5C14.5 16.016 16.516 14 19 14C21.484 14 23.5 16.016 23.5 18.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 20L19.2402 19.2764C19.1078 19.1512 19 18.8501 19 18.6037V17"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
