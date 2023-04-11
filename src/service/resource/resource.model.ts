import type { Location } from '../map/map.model'

export enum HelpResourceStatus {
  PENDING,
  FULFILL,
  CANCELED,
  ONGOING,
}

export type CreateHelpResourceParams = Omit<
  HelpResourceModel,
  'id' |
  'status'
>

export interface HelpResourceModel extends Location {
  id: number
  userId: number
  name: string
  describe: string
  subArea: string
  startDate: string
  endDate: string
  status: HelpResourceStatus
}