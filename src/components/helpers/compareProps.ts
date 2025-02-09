import deepEqual from 'deep-equal'

export function areAllPropsEqual(prevProps: any, nextProps: any) {
  return deepEqual(prevProps, nextProps)
}
