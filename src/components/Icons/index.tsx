import React from 'react'

import { areAllPropsEqual } from '@/components/helpers'
import { IIconProps } from '@/types/components/icons.ts'

import {
  AddIcon,
  AgencyFilledIcon,
  AgencyIcon,
  AgencyNoIcon,
  AgencyYesIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AttachSquareIcon,
  CalendarAddIcon,
  CalendarEditIcon,
  CalendarFilledIcon,
  CalendarIcon,
  CalendarRemoveIcon,
  CalendarSearchIcon,
  CalendarTickIcon,
  CallIcon,
  CategoryIcon,
  CheckFilledIcon,
  CheckIcon,
  ClipboardIcon,
  ClockFilledIcon,
  ClockIcon,
  CloseCircleIcon,
  CloseFilledIcon,
  CloseIcon,
  DangerIcon,
  DocumentFilledIcon,
  DocumentTextIcon,
  DoubleCheckIcon,
  DownloadIcon,
  EditIcon,
  ElementFilledIcon,
  EyeIcon,
  EyeSlashIcon,
  FlagFilledIcon,
  HomeFilledIcon,
  HomeWifiIcon,
  InfoCircleIcon,
  InfoFilledIcon,
  Lock2Icon,
  LockIcon,
  LogOutIcon,
  MessageFilledIcon,
  MessageIcon,
  MinusIcon,
  MoonIcon,
  NotificationFilledIcon,
  NotificationIcon,
  NotificationOffIcon,
  PersonalCardIcon,
  ProfileDeleteIcon,
  ProfileFilledIcon,
  ProfileIcon,
  ProfileTickIcon,
  ProfileTwoUserFilledIcon,
  QuestionIcon,
  ReceiptDiscountIcon,
  SafeHomeIcon,
  SearchIcon,
  SecurityUserIcon,
  SendIcon,
  Settings2Icon,
  SickOffNoIcon,
  SickOffYesIcon,
  SmsIcon,
  SunFogIcon,
  SunIcon,
  TickCircleIcon,
  TimerIcon,
  UnlockIcon,
  UploadFilledIcon,
  UserAddIcon,
  UserEditIcon,
  UserLateIcon,
  UserMinusIcon,
  UserRemoveIcon,
  UserTickIcon,
  WalletFilledIcon,
  WarmingFilledIcon,
} from './all'
import {
  HomeActiveFooterIcon,
  HomeFooterIcon,
  ProfileActiveFooterIcon,
  ProfileFooterIcon,
  StatisticActiveFooterIcon,
  StatisticFooterIcon,
} from './footer.tsx'

export enum IconNames {
  'arrow-down',
  'arrow-right',
  'arrow-up',
  'arrow-left',
  'notification',
  'question',
  'eye',
  'eye-slash',
  'close-circle',
  'danger',
  'timer',
  'setting2',
  'log-out',
  'notification-off',
  'tick-circle',
  'call',
  'sms',
  'receipt-discount',
  'user-add',
  'user-remove',
  'user-tick',
  'user-minus',
  'user-edit',
  'moon',
  'sun',
  'clipboard',
  'lock',
  'unlock',
  'personal-card',
  'sun-fog',
  'profile',
  'attach-square',
  'home-wifi',
  'safe-home',
  'close',
  'check',
  'info-circle',
  'download',
  'double-check',
  'document-text',
  'agency',
  'lock2',
  'minus',
  'add',
  'calendar-search',
  'calendar-edit',
  'calendar',
  'calendar-tick',
  'calendar-remove',
  'calendar-add',
  'category',
  'send',
  'search',
  'message',
  'sick-off-yes',
  'sick-off-no',
  'agency-filled',
  'info-filled',
  'warning-filled',
  'check-filled',
  'clock-filled',
  'message-filled',
  'upload-filled',
  'notification-filled',
  'profile-filled',
  'wallet-filled',
  'home-filled',
  'calendar-filled',
  'profile-two-user',
  'document-filled',
  'element-filled',
  'close-filled',
  'profile-tick',
  'profile-delete',
  'flag-filled',
  'agency-no',
  'agency-yes',
  'edit-2',
  'footer-home',
  'footer-home-active',
  'footer-statistic',
  'footer-statistic-active',
  'footer-profile',
  'footer-profile-active',
  'security-user',
  'clock',
  'user-late',
}

export type IconNamesUnion = keyof typeof IconNames

export interface IconProps extends Omit<IIconProps, 'name'> {
  name: IconNamesUnion
}

export const Icon = React.memo(({ name, ...rest }: IconProps) => {
  switch (name) {
    case 'arrow-down':
      return <ArrowDownIcon {...rest} />
    case 'arrow-up':
      return <ArrowUpIcon {...rest} />
    case 'arrow-right':
      return <ArrowRightIcon {...rest} />
    case 'arrow-left':
      return <ArrowLeftIcon {...rest} />
    case 'notification':
      return <NotificationIcon {...rest} />
    case 'notification-off':
      return <NotificationOffIcon {...rest} />
    case 'question':
      return <QuestionIcon {...rest} />
    case 'eye':
      return <EyeIcon {...rest} />
    case 'eye-slash':
      return <EyeSlashIcon {...rest} />
    case 'close-circle':
      return <CloseCircleIcon {...rest} />
    case 'danger':
      return <DangerIcon {...rest} />
    case 'timer':
      return <TimerIcon {...rest} />
    case 'setting2':
      return <Settings2Icon {...rest} />
    case 'log-out':
      return <LogOutIcon {...rest} />
    case 'tick-circle':
      return <TickCircleIcon {...rest} />
    case 'call':
      return <CallIcon {...rest} />
    case 'sms':
      return <SmsIcon {...rest} />
    case 'receipt-discount':
      return <ReceiptDiscountIcon {...rest} />
    case 'user-add':
      return <UserAddIcon {...rest} />
    case 'user-remove':
      return <UserRemoveIcon {...rest} />
    case 'user-tick':
      return <UserTickIcon {...rest} />
    case 'user-minus':
      return <UserMinusIcon {...rest} />
    case 'user-edit':
      return <UserEditIcon {...rest} />
    case 'moon':
      return <MoonIcon {...rest} />
    case 'sun':
      return <SunIcon {...rest} />
    case 'clipboard':
      return <ClipboardIcon {...rest} />
    case 'lock':
      return <LockIcon {...rest} />
    case 'unlock':
      return <UnlockIcon {...rest} />
    case 'personal-card':
      return <PersonalCardIcon {...rest} />
    case 'sun-fog':
      return <SunFogIcon {...rest} />
    case 'profile':
      return <ProfileIcon {...rest} />
    case 'attach-square':
      return <AttachSquareIcon {...rest} />
    case 'home-wifi':
      return <HomeWifiIcon {...rest} />
    case 'safe-home':
      return <SafeHomeIcon {...rest} />
    case 'check':
      return <CheckIcon {...rest} />
    case 'close':
      return <CloseIcon {...rest} />
    case 'info-circle':
      return <InfoCircleIcon {...rest} />
    case 'download':
      return <DownloadIcon {...rest} />
    case 'double-check':
      return <DoubleCheckIcon {...rest} />
    case 'document-text':
      return <DocumentTextIcon {...rest} />
    case 'agency':
      return <AgencyIcon {...rest} />
    case 'lock2':
      return <Lock2Icon {...rest} />
    case 'add':
      return <AddIcon {...rest} />
    case 'minus':
      return <MinusIcon {...rest} />
    case 'calendar-search':
      return <CalendarSearchIcon {...rest} />
    case 'calendar-edit':
      return <CalendarEditIcon {...rest} />
    case 'calendar':
      return <CalendarIcon {...rest} />
    case 'calendar-tick':
      return <CalendarTickIcon {...rest} />
    case 'calendar-remove':
      return <CalendarRemoveIcon {...rest} />
    case 'calendar-add':
      return <CalendarAddIcon {...rest} />
    case 'category':
      return <CategoryIcon {...rest} />
    case 'send':
      return <SendIcon {...rest} />
    case 'search':
      return <SearchIcon {...rest} />
    case 'message':
      return <MessageIcon {...rest} />
    case 'sick-off-yes':
      return <SickOffYesIcon {...rest} />
    case 'sick-off-no':
      return <SickOffNoIcon {...rest} />
    case 'agency-filled':
      return <AgencyFilledIcon {...rest} />
    case 'info-filled':
      return <InfoFilledIcon {...rest} />
    case 'warning-filled':
      return <WarmingFilledIcon {...rest} />
    case 'check-filled':
      return <CheckFilledIcon {...rest} />
    case 'close-filled':
      return <CloseFilledIcon {...rest} />
    case 'message-filled':
      return <MessageFilledIcon {...rest} />
    case 'upload-filled':
      return <UploadFilledIcon {...rest} />
    case 'notification-filled':
      return <NotificationFilledIcon {...rest} />
    case 'profile-filled':
      return <ProfileFilledIcon {...rest} />
    case 'wallet-filled':
      return <WalletFilledIcon {...rest} />
    case 'home-filled':
      return <HomeFilledIcon {...rest} />
    case 'calendar-filled':
      return <CalendarFilledIcon {...rest} />
    case 'profile-two-user':
      return <ProfileTwoUserFilledIcon {...rest} />
    case 'document-filled':
      return <DocumentFilledIcon {...rest} />
    case 'element-filled':
      return <ElementFilledIcon {...rest} />
    case 'clock-filled':
      return <ClockFilledIcon {...rest} />
    case 'profile-tick':
      return <ProfileTickIcon {...rest} />
    case 'profile-delete':
      return <ProfileDeleteIcon {...rest} />
    case 'flag-filled':
      return <FlagFilledIcon {...rest} />
    case 'agency-no':
      return <AgencyNoIcon {...rest} />
    case 'agency-yes':
      return <AgencyYesIcon {...rest} />
    case 'edit-2':
      return <EditIcon {...rest} />
    case 'footer-home':
      return <HomeFooterIcon {...rest} />
    case 'footer-home-active':
      return <HomeActiveFooterIcon {...rest} />
    case 'footer-statistic':
      return <StatisticFooterIcon {...rest} />
    case 'footer-statistic-active':
      return <StatisticActiveFooterIcon {...rest} />
    case 'footer-profile':
      return <ProfileFooterIcon {...rest} />
    case 'footer-profile-active':
      return <ProfileActiveFooterIcon {...rest} />
    case 'security-user':
      return <SecurityUserIcon {...rest} />
    case 'clock':
      return <ClockIcon {...rest} />
    case 'user-late':
      return <UserLateIcon {...rest} />

    default:
      return null
  }
}, areAllPropsEqual)
