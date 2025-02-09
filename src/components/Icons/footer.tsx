import React from 'react'
import { Path, Svg } from 'react-native-svg'

import { Colors } from '@/theme'
import { IIconProps } from '@/types/components/icons.ts'

export const StatisticFooterIcon = ({
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
      {...props}
      fill={'none'}
      color={'transparent'}
    >
      <Path
        d="M2.75 20.167h16.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.75 10.083c0-.864 0-1.296.268-1.565.269-.268.701-.268 1.565-.268.865 0 1.297 0 1.565.268.269.269.269.701.269 1.565v5.5c0 .865 0 1.297-.269 1.565-.268.269-.7.269-1.565.269-.864 0-1.296 0-1.565-.269-.268-.268-.268-.7-.268-1.565zm6.417-3.666c0-.865 0-1.297.268-1.565.269-.269.7-.269 1.565-.269.864 0 1.296 0 1.565.269.268.268.268.7.268 1.565v9.166c0 .865 0 1.297-.268 1.565-.269.269-.7.269-1.565.269-.864 0-1.296 0-1.565-.269-.268-.268-.268-.7-.268-1.565zm6.416-2.75c0-.865 0-1.297.269-1.565.268-.269.7-.269 1.565-.269.864 0 1.296 0 1.565.269.268.268.268.7.268 1.565v11.916c0 .865 0 1.297-.268 1.565-.269.269-.701.269-1.565.269-.865 0-1.297 0-1.565-.269-.269-.268-.269-.7-.269-1.565z"
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export const StatisticActiveFooterIcon = ({
  color = Colors.primary.orange10,
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
        d="M2.75 20.167h16.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.75 10.083c0-.864 0-1.296.268-1.565.269-.268.701-.268 1.565-.268.865 0 1.297 0 1.565.268.269.269.269.701.269 1.565v5.5c0 .865 0 1.297-.269 1.565-.268.269-.7.269-1.565.269-.864 0-1.296 0-1.565-.269-.268-.268-.268-.7-.268-1.565zm6.417-3.666c0-.865 0-1.297.268-1.565.269-.269.7-.269 1.565-.269.864 0 1.296 0 1.565.269.268.268.268.7.268 1.565v9.166c0 .865 0 1.297-.268 1.565-.269.269-.7.269-1.565.269-.864 0-1.296 0-1.565-.269-.268-.268-.268-.7-.268-1.565zm6.416-2.75c0-.865 0-1.297.269-1.565.268-.269.7-.269 1.565-.269.864 0 1.296 0 1.565.269.268.268.268.7.268 1.565v11.916c0 .865 0 1.297-.268 1.565-.269.269-.701.269-1.565.269-.865 0-1.297 0-1.565-.269-.269-.268-.269-.7-.269-1.565z"
        stroke={color}
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export const ProfileFooterIcon = ({
  color = Colors.black['90'],
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 7a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 2.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M5.75 19A3.25 3.25 0 0 1 9 15.75h6A3.25 3.25 0 0 1 18.25 19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25M9 14.25A4.75 4.75 0 0 0 4.25 19 2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19 4.75 4.75 0 0 0 15 14.25z"
        fill={color}
      />
    </Svg>
  )
}

export const ProfileActiveFooterIcon = ({
  color = Colors.primary.orange10,
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
        d="M8.75 7a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 2.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M5.75 19A3.25 3.25 0 0 1 9 15.75h6A3.25 3.25 0 0 1 18.25 19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25M9 14.25A4.75 4.75 0 0 0 4.25 19 2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19 4.75 4.75 0 0 0 15 14.25z"
        fill={color}
      />
    </Svg>
  )
}

export const HomeFooterIcon = ({
  color = Colors.black['90'],
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
        d="M2.16711 11.878C1.81928 9.46075 1.64537 8.2521 2.14079 7.2187C2.63622 6.1853 3.69071 5.55715 5.79971 4.30083L7.06914 3.54463C8.98433 2.40377 9.94192 1.83334 11 1.83334C12.0582 1.83334 13.0158 2.40377 14.9309 3.54463L16.2004 4.30083C18.3094 5.55715 19.3639 6.1853 19.8593 7.2187C20.3547 8.2521 20.1808 9.46075 19.833 11.8781L19.5774 13.654C19.1306 16.7591 18.9072 18.3117 17.8301 19.2392C16.753 20.1667 15.1733 20.1667 12.0139 20.1667H9.98614C6.8268 20.1667 5.24712 20.1667 4.16998 19.2392C3.09284 18.3117 2.86944 16.7591 2.42264 13.654L2.16711 11.878Z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Path
        d="M11 13.75L11 16.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export const HomeActiveFooterIcon = ({
  color = Colors.primary.orange10,
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
        d="M2.16711 11.878C1.81928 9.46075 1.64537 8.2521 2.14079 7.2187C2.63622 6.1853 3.69071 5.55715 5.79971 4.30083L7.06914 3.54463C8.98433 2.40377 9.94192 1.83334 11 1.83334C12.0582 1.83334 13.0158 2.40377 14.9309 3.54463L16.2004 4.30083C18.3094 5.55715 19.3639 6.1853 19.8593 7.2187C20.3547 8.2521 20.1808 9.46075 19.833 11.8781L19.5774 13.654C19.1306 16.7591 18.9072 18.3117 17.8301 19.2392C16.753 20.1667 15.1733 20.1667 12.0139 20.1667H9.98614C6.8268 20.1667 5.24712 20.1667 4.16998 19.2392C3.09284 18.3117 2.86944 16.7591 2.42264 13.654L2.16711 11.878Z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Path
        d="M11 13.75L11 16.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}
