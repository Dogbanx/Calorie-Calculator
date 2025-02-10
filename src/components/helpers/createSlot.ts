import React from 'react'

type Children = JSX.Element | JSX.Element[] | string | any

export interface ISlotProps {
  children: Children
  show?: boolean
}

export interface IRendererProps {
  children?: Children | ((c: Children) => Children)
  wrap?: (c: Children) => Children

  _children: Children
}

export function createSlot() {
  const Slot = ({ children, show }: ISlotProps) => (show ? children : null)

  const Renderer = ({ children, wrap, _children }: IRendererProps) => {
    const slotted = React.Children.toArray(_children).find(
      c => React.isValidElement(c) && c.type === Slot,
    )

    if (!slotted || !React.isValidElement(slotted)) {
      return (
        (typeof children === 'function' ? children(null) : children) || null
      )
    }

    const clonedSlottedJSX = React.cloneElement(slotted, {
      show: true,
    } as ISlotProps)

    if (wrap && typeof wrap === 'function') {
      return typeof children === 'function'
        ? children(wrap(clonedSlottedJSX))
        : wrap(clonedSlottedJSX)
    } else {
      return typeof children === 'function'
        ? children(clonedSlottedJSX)
        : clonedSlottedJSX
    }
  }

  Slot.Renderer = Renderer

  return Slot
}

export function hasChild(
  children: Children,
  target: React.JSXElementConstructor<any> | 'string',
): boolean {
  if (target === 'string') {
    return typeof children === 'string'
  }

  return !!React.Children.toArray(children).find(
    c => React.isValidElement(c) && c.type === target,
  )
}

export function selectChild(
  children: Children,
  target: React.JSXElementConstructor<any> | 'string',
) {
  if (target === 'string') {
    return children
  }

  return React.Children.toArray(children).find(
    c => React.isValidElement(c) && c.type === target,
  )
}
